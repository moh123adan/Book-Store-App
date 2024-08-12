import { Request, Response, NextFunction } from 'express';

interface User {
  isAdmin: boolean;
}

interface AuthenticatedRequest extends Request {
  user?: User;
}

const admin = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as an admin' });
  }
};

export { admin };
