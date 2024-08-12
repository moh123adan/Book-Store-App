import express, { Request, Response, NextFunction } from 'express';
import {
    addToCart,
    removeFromCart,
    getCart,
} from '../controllers/cartController';

const router = express.Router();

// Route to add an item to the cart
router.post('/add', (req: Request, res: Response, next: NextFunction) => {
    addToCart(req, res, next);
});

// Route to remove an item from the cart
router.post('/remove', (req: Request, res: Response, next: NextFunction) => {
    removeFromCart(req, res, next);
});

// Route to get the user's cart
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    getCart(req, res, next);
});

export default router;
