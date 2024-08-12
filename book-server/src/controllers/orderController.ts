import { Request, Response } from 'express';
import Order from '../models/orderModel'; // Importing the Order model
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15',
});

export const placeOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, items, totalAmount, shippingAddress, paymentMethod } = req.body;

        if (!userId || !items || !totalAmount || !shippingAddress || !paymentMethod) {
            console.log('Missing required fields', { userId, items, totalAmount, shippingAddress, paymentMethod });
            res.status(400).json({ success: false, message: 'Missing required fields' });
            return;
        }

        const newOrder = new Order({
            userId,
            items,
            totalAmount,
            shippingAddress,
            paymentMethod,
            paymentStatus: 'Pending',
        });

        await newOrder.save();

        const line_items = items.map((item: { bookId: string; name: string; price: number; quantity: number }) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100, // Stripe expects amount in the smallest currency unit
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            success_url: `http://localhost:3000/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `http://localhost:3000/verify?success=false&orderId=${newOrder._id}`,
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.log('Error in placeOrder:', error.message);
        res.status(500).json({ success: false, message: 'Error placing order' });
    }
};

export const listOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await Order.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log('Error in listOrders:', error.message);
        res.status(500).json({ success: false, message: 'Error listing orders' });
    }
};

export const userOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const orders = await Order.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log('Error in userOrders:', error.message);
        res.status(500).json({ success: false, message: 'Error fetching user orders' });
    }
};

export const updateStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        await Order.findByIdAndUpdate(req.body.orderId, {
            status: req.body.status,
        });
        res.json({ success: true, message: 'Status updated' });
    } catch (error) {
        console.log('Error in updateStatus:', error.message);
        res.status(500).json({ success: false, message: 'Error updating status' });
    }
};

export const verifyOrder = async (req: Request, res: Response): Promise<void> => {
    const { orderId, success } = req.body;
    try {
        if (success === 'true') {
            const updatedOrder = await Order.findByIdAndUpdate(orderId, { paymentStatus: 'Paid' }, { new: true });
            res.json({ success: true, order: updatedOrder });
        } else {
            await Order.findByIdAndDelete(orderId);
            res.json({ success: false, message: 'Payment not verified' });
        }
    } catch (error) {
        console.log('Error in verifyOrder:', error.message);
        res.status(500).json({ success: false, message: 'Error verifying payment' });
    }
};
