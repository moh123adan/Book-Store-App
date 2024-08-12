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
}

// User schema
const userSchema: Schema<IUser> = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: true, default: false },
        cartData: { type: Object, default: {} },
        resetPasswordToken: { type: String },
        resetPasswordExpires: { type: Date },
    },
    { minimize: false }
);

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
