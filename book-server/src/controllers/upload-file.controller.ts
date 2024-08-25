import express, { Router, Request, Response } from "express";
import { initializeApp } from "firebase/app";

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from "firebase/storage";
import multer from "multer";

import config from "../config/firebase.config";

const router: Router = express.Router();

initializeApp(config.firebaseConfig);

const storage = getStorage();

const upload = multer({ storage: multer.memoryStorage() });

router.post(
    "/",
    upload.single("filename"),
    async (req: Request, res, Response) => {
        try {
            const dateTime = giveCurrentDateTime();

            const storageRef = ref(
                storage,
                `files/${req.file.originalname + "       " + dateTime}`
            );

            const metadata = {
                contentType: req.file.mimetype,
            };

            const snapshot = await uploadBytesResumable(
                storageRef,
                req.file.buffer,
                metadata
            );

            const getDownloadURL = getDownloadURL(snapshot.ref);

            const downloadURL = await getDownloadURL(snapshot.ref);

            console.log("file successfully uploaded.");
            return res.send({
                message: "file uploaded to firebase storage",
                name: req.file.originalname,
                type: req.file.mimetype,
                getDownloadURL: downloadURL,
            });
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
);

const giveCurrentDateTime = () => {
    const today = new Date();
    const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    return dateTime;
};

export default router;
