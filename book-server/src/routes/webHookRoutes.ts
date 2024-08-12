import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import Stripe from 'stripe';
import Order from '../models/orderModel'; // Adjust the import path according to your project structure

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

const router = express.Router();

router.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }),
  async (req: Request, res: Response) => {
    const sig = req.headers['stripe-signature'] as string;
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET as string
      );
    } catch (err) {
      return res.status(400).send(`Webhook error: ${(err as Error).message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.client_reference_id as string;

      try {
        const order = await Order.findById(orderId);
        if (order) {
          order.isPaid = true;
          await order.save();
        }
      } catch (error) {
        return res.status(500).send(`Failed to update order: ${(error as Error).message}`);
      }
    }

    res.status(200).send('Received');
  }
);

export default router;
