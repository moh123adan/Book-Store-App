import express, { Request, Response, NextFunction } from 'express';
import {
  placeOrder,
  listOrders,
  userOrders,
  updateStatus,
  verifyOrder,
} from '../controllers/orderController';

const router = express.Router();

// Route to place a new order
router.post('/place', (req: Request, res: Response, next: NextFunction) => {
  placeOrder(req, res, next);
});

// Route to list all orders
router.get('/list', (req: Request, res: Response, next: NextFunction) => {
  listOrders(req, res, next);
});

// Route to get orders for a specific user
router.post('/user', (req: Request, res: Response, next: NextFunction) => {
  userOrders(req, res, next);
});

// Route to update the status of an order
router.post('/update-status', (req: Request, res: Response, next: NextFunction) => {
  updateStatus(req, res, next);
});

// Route to verify order payment
router.post('/verify', (req: Request, res: Response, next: NextFunction) => {
  verifyOrder(req, res, next);
});

export default router;
