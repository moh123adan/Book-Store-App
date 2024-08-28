import { Request, Response } from 'express';
import Order from '../models/orderModel'; // Importing the Order model
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20',
});

export const placeOrder = async (req: Request, res: Response, next: unknown): Promise<void> => {
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
        const line_items = items.map((item: { name: string; price: number; quantity: number }) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name || 'Default Book Name', // Ensure this is correctly set
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity,
        }));



        console.log(JSON.stringify(line_items, null, 2));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items,
            success_url: `http://localhost:3000/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `http://localhost:3000/verify?success=false&orderId=${newOrder._id}`,
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error in placeOrder:', error.message);
            res.status(500).json({ success: false, message: 'Error placing order' })
        } else {
            console.log('Unknown error in placeOrder:', error);
            res.status(500).json({ success: false, message: 'Unknown error placing order' });
        }
    }
};

export const listOrders = async (req: Request, res: Response, next: unknown): Promise<void> => {
    try {
        const orders = await Order.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error in listOrders:', error.message);
            res.status(500).json({ success: false, message: 'Error listing orders' })
        } else {
            console.log('Unknown error in listing order:', error);
            res.status(500).json({ success: false, message: 'Unknown error listing order' });
        }
    }
};

export const userOrders = async (req: Request, res: Response, next: unknown): Promise<void> => {
    try {
        const orders = await Order.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error in userOrders:', error.message);
            res.status(500).json({ success: false, message: 'Error fetching user orders' })
        } else {
            console.log('Unknown error in userOrder:', error);
            res.status(500).json({ success: false, message: 'Unknown error user order' });
        }
    }
};

export const updateStatus = async (req: Request, res: Response, next: unknown): Promise<void> => {
    try {
        await Order.findByIdAndUpdate(req.body.orderId, {
            status: req.body.status,
        });
        res.json({ success: true, message: 'Status updated' });
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error in updateStatus:', error.message);
            res.status(500).json({ success: false, message: 'Error updating status' })
        } else {
            console.log('Unknown error in status order:', error);
            res.status(500).json({ success: false, message: 'Unknown error updated status order' });
        }
    }
};

export const verifyOrder = async (req: Request, res: Response, next: unknown): Promise<void> => {
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
        if (error instanceof Error) {
            console.log('Error in verifyOrder:', error.message);
            res.status(500).json({ success: false, message: 'Error verifying payment' })
        } else {
            console.log('Unknown error in verifyOder:', error);
            res.status(500).json({ success: false, message: 'Unknown error veryfiying order' });
        }
    }
};
