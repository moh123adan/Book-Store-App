import mongoose, { Document, Schema, Model } from "mongoose";


interface IBook extends Document {
    title: string;
    author: string;
    description: string;
    price: number;
    image: string;
    category: string;
    stock: number;
    tags: string[];
}

const bookSchema: Schema<IBook> = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
        },
        tags: {
            type: [String],
            required: true,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Book: Model<IBook> = mongoose.model<IBook>("Book", bookSchema);

export default Book;
