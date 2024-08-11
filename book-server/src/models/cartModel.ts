import mongoose, { Document, Schema, Model } from "mongoose";

interface ICartItem {
    bookId: mongoose.Types.ObjectId;
    quantity: number;
}

interface ICart extends Document {
    userId: mongoose.Types.ObjectId;
    items: ICartItem[];
}

const cartSchema: Schema<ICart> = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            unique: true,
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
            },
        ],
    },
    {
        timestamps: true,
    }
);


const Cart: Model<ICart> = mongoose.model<ICart>('Cart', cartSchema);

export default Cart;
