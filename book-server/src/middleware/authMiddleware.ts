import jwt, { JwtPayload } from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';
import User, { IUser } from '../models/userModel';

interface AuthenticatedRequest extends Request {
    user?: IUser | null;
}

interface DecodedToken extends JwtPayload {
    id: string;
}

const protect = asyncHandler(async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;

        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            res.status(401);
            throw new Error('Not authorized, user not found');
        }

        next();
    } catch (error) {
        console.error('Failed to authenticate token:', error);
        res.status(401);
        throw new Error('Not authorized, token failed');
    }
});

export { protect };
