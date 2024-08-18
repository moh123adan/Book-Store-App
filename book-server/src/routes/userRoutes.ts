import express, { Request, Response, NextFunction } from 'express';
import {
    loginUser,
    registerUser,
    // getUserProfile,
    // updateUserProfile,
    // getUsers,
    // forgotPassword,
    // resetPassword,
    // getResetPasswordToken,
    googleLogin,
    // createUser,
    // updateUser,
    // deleteUser,
    logoutUser,
} from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';
import { admin } from '../middleware/adminMiddleware';
// import uploads from '../middleware/uploadMiddleware';

const router = express.Router();

// Route to log in a user
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    loginUser(req, res, next);
});

// Route to log in a user with Google
router.post('/google-login', (req: Request, res: Response, next: NextFunction) => {
    googleLogin(req, res, next);
});

// Route to register a new user
router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    registerUser(req, res, next);
});

// Routes for user profile management
router
    .route('/profile')
    .get(protect, (req: Request, res: Response, next: NextFunction) => {
        getUserProfile(req, res, next);
    })
    .put(protect, (req: Request, res: Response, next: NextFunction) => {
        updateUserProfile(req, res, next);
    });

// Route to get all users and create a new user (Admin only)
router
    .route('/')
    .get(protect, admin, (req: Request, res: Response, next: NextFunction) => {
        getUsers(req, res, next);
    })
    .post(protect, admin, (req: Request, res: Response, next: NextFunction) => {
        createUser(req, res, next);
    });

// Route to update a user by ID
router.put('/update/:id', protect, (req: Request, res: Response, next: NextFunction) => {
    updateUser(req, res, next);
});

// Route to delete a user by ID (Admin only)
router.delete('/delete/:id', protect, admin, (req: Request, res: Response, next: NextFunction) => {
    deleteUser(req, res, next);
});

// Route for password recovery
router.post('/forgot-password', (req: Request, res: Response, next: NextFunction) => {
    forgotPassword(req, res, next);
});

// Route to get reset password token
router.get('/reset-password/:token', (req: Request, res: Response, next: NextFunction) => {
    getResetPasswordToken(req, res, next);
});

// Route to reset password
router.post('/reset-password', (req: Request, res: Response, next: NextFunction) => {
    resetPassword(req, res, next);
});

// Route to log out a user
router.post('/logout', (req: Request, res: Response, next: NextFunction) => {
    logoutUser(req, res, next);
});

export default router;
