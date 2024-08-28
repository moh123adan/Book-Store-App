import { Request, Response } from "express";
import Book from "../models/bookModel";
import fs from "fs";
import { initializeApp } from "firebase/app";
import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from "firebase/storage";
import multer from "multer";
import config from "../config/firebase.config";

//Initialize a firebase application
initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

// List all books
export const listBooks = async (
    req: Request,
    res: Response,
    next: unknown
): Promise<void> => {
    try {
        const books = await Book.find({});
        const baseUrl = `${req.protocol}://${req.get("host")}/uploads/`;

        const booksWithImages = books.map((book) => ({
            ...book.toObject(),
            image: `${baseUrl}${book.image}`,
        }));

        res.json({ success: true, data: booksWithImages });
    } catch (error) {
        console.error("Error listing books:", error);
        res.status(500).json({ success: false, message: "Error listing books" });
    }
};

// Add a new book
export const addBook = async (
    req: Request,
    res: Response,
    next: unknown
): Promise<void> => {
    console.log("File:", req.file);
    console.log("Body:", req.body);
    if (!req.file) {
        res.status(400).json({ success: false, message: "No image file uploaded" });
        return;
    }

    try {
        // Generate a unique file name with timestamp
        const dateTime = Date.now();
        const storageRef = ref(
            storage,
            `books/${dateTime}_${req.file.originalname}`
        );

        // Create file metadata including the content type
        const metadata = {
            contentType: req.file.mimetype,
        };

        // Upload the file to Firebase Storage
        const snapshot = await uploadBytesResumable(
            storageRef,
            req.file.buffer,
            metadata
        );

        // Get the download URL for the uploaded image
        const downloadURL = await getDownloadURL(snapshot.ref);

        // Create a new book entry with the image URL
        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: downloadURL, // Save the image download URL in the database
            stock: req.body.stock,
            tags: req.body.tags ? req.body.tags.split(",") : [],
        });

        console.log(addBook);

        await book.save();
        res.json({ success: true, message: "Book added successfully", data: book });
    } catch (error) {
        console.error("Error adding book:", error);
        res.status(500).json({ success: false, message: "Error adding book" });
    }
};

// Remove a book
export const removeBook = async (
    req: Request,
    res: Response,
    next: unknown
): Promise<void> => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({ success: false, message: "Book not found" });
            return;
        }

        if (book.image) {
            fs.unlink(`uploads/${book.image}`, (err) => {
                if (err) {
                    console.error("Error deleting image file:", err);
                }
            });
        }

        await Book.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Book removed" });
    } catch (error) {
        console.error("Error removing book:", error);
        res.status(500).json({ success: false, message: "Error removing book" });
    }
};

// Update a book
export const updateBook = async (
    req: Request,
    res: Response,
    next: unknown
): Promise<void> => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).json({ success: false, message: "Book not found" });
            return;
        }

        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        book.description = req.body.description || book.description;
        book.price = req.body.price || book.price;
        book.category = req.body.category || book.category;
        book.stock = req.body.stock || book.stock;
        book.tags = req.body.tags || book.tags;

        if (req.file) {
            if (book.image) {
                fs.unlink(`uploads/${book.image}`, (err) => {
                    if (err) {
                        console.error("Error deleting old image file:", err);
                    }
                });
            }
            book.image = req.file.filename;
        }

        await book.save();
        res.json({ success: true, message: "Book updated", data: book });
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ success: false, message: "Error updating book" });
    }
};

// Get all categories
export const getCategories = async (
    req: Request,
    res: Response,
    next: unknown
): Promise<void> => {
    try {
        const categories = await Book.distinct("category");
        res.json({ success: true, data: categories });
    } catch (error) {
        console.error("Error fetching categories:", error);
        res
            .status(500)
            .json({ success: false, message: "Error fetching categories" });
    }
};
