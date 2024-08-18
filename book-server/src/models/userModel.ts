import mongoose, { Document, Schema, Model } from 'mongoose';

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    cartData: object;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

// User schema
const userSchema: Schema<IUser> = new Schema(
    {
        _id: {
            type: mongoose.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(), // Default to a new ObjectId
        },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: true, default: false },
        cartData: { type: Object, default: {} },
        resetPasswordToken: { type: String },
        resetPasswordExpires: { type: Date },
    },
    {
        minimize: false,
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
