import express, { Request, Response, NextFunction } from 'express';
import {
    listBooks,
    addBook,
    removeBook,
    updateBook,
    getCategories,
} from '../controllers/bookController';
// import upload from '../middleware/uploadMiddleware';

const router = express.Router();

// Serve static files from the "uploads" directory
// router.use('/uploads', express.static('uploads'));

// Route to get the list of all books
router.get('/', (req: Request, res: Response, next: NextFunction) => {
    listBooks(req, res, next);
});

// Route to add a new book
router.post('/add', upload.single('image'), (req: Request, res: Response, next: NextFunction) => {
    addBook(req, res, next);
});

// Route to remove a book
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
    removeBook(req, res, next);
});

// Route to update a book
router.put('/update/:id', upload.single('image'), (req: Request, res: Response, next: NextFunction) => {
    updateBook(req, res, next);
});

// Route to get all categories
router.get('/categories', (req: Request, res: Response, next: NextFunction) => {
    getCategories(req, res, next);
});

export default router;