import mongoose, { Document, Schema, Model } from "mongoose";

//interface for the order items
interface IOrderItem {
    bookId: mongoose.Types.ObjectId;
    quantity: number;
    price: number;
}

// interface for the order document
interface IOrder extends Document {
    userId: mongoose.Types.ObjectId;
    items: IOrderItem[];
    totalAmount: number;
    shippingAddress: string;
    status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    paymentMethod: 'Credit Card' | 'EVC Plus' | 'eDahab';
    paymentStatus: 'Pending' | 'Paid' | 'Failed';
}

// schema corresponding to the document interface
const orderSchema: Schema<IOrder> = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        items: [
            {
                bookId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Book',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1,
                },
                price: {
                    type: Number,
                    required: true,
                    min: 0,
                },
            },
        ],
        totalAmount: {
            type: Number,
            required: true,
            min: 0,
        },
        shippingAddress: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
            default: 'Pending',
        },
        paymentMethod: {
            type: String,
            required: true,
            enum: ['Credit Card', 'EVC Plus', 'eDahab'],
        },
        paymentStatus: {
            type: String,
            required: true,
            enum: ['Pending', 'Paid', 'Failed'],
            default: 'Pending',
        },
    },
    {
        timestamps: true,
    }
);

// Create and export the model
const Order: Model<IOrder> = mongoose.model<IOrder>('Order', orderSchema);

export default Order;
