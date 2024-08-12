import mongoose, { Document, Schema, Model } from "mongoose";

// interface for the user document
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// export the model
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
