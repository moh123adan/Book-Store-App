import { Request, Response } from 'express';
import Cart from '../models/cartModel';
import mongoose from 'mongoose';

// Add a book to the user's cart
export const addToCart = async (req: Request, res: Response, next: unknown): Promise<void> => {
    try {
        const { userId, bookId } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            // If the user has no cart, create a new cart
            const newCart = new Cart({
                userId: new mongoose.Types.ObjectId(userId),
                items: [{ bookId: new mongoose.Types.ObjectId(bookId), quantity: 1 }],
            });
            await newCart.save();
            res.json({ success: true, message: 'Added to Cart', cart: newCart });
        } else {
            // Check if the book already exists in the cart
            const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);

            if (itemIndex > -1) {
                // If the book exists, increment the quantity
                cart.items[itemIndex].quantity += 1;
            } else {
                // If the book does not exist, add it to the cart
                cart.items.push({ bookId: new mongoose.Types.ObjectId(bookId), quantity: 1 });
            }

            await cart.save();
            res.json({ success: true, message: 'Added to Cart', cart });
        }
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ success: false, message: 'Error adding to cart' });
    }
};

// Remove a book from the user's cart
export const removeFromCart = async (req: Request, res: Response, next: unknown): Promise<void> => {
    try {
        const { userId, bookId } = req.body;

        const cart = await Cart.findOne({ userId });

        if (!cart) {
            res.status(404).json({ success: false, message: 'Cart not found' });
            return;
        }

        const itemIndex = cart.items.findIndex(item => item.bookId.toString() === bookId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity -= 1;

            if (cart.items[itemIndex].quantity === 0) {
                cart.items.splice(itemIndex, 1); // Remove the item if quantity is 0
            }

            await cart.save();
            res.json({ success: true, message: 'Removed from Cart', cart });
        } else {
            res.status(404).json({ success: false, message: 'Book not found in cart' });
        }
    } catch (error) {
        console.error('Error removing from cart:', error);
        res.status(500).json({ success: false, message: 'Error removing from cart' });
    }
};

// Get the user's cart
export const getCart = async (req: Request, res: Response, next: unknown): Promise<void> => {
    try {
        const { userId } = req.body;

        const cart = await Cart.findOne({ userId }).populate('items.bookId', 'title author price');

        if (!cart) {
            res.status(404).json({ success: false, message: 'Cart not found' });
            return;
        }

        res.json({ success: true, cartData: cart });
    } catch (error) {
        console.error('Error getting cart:', error);
        res.status(500).json({ success: false, message: 'Error getting cart' });
    }
};
