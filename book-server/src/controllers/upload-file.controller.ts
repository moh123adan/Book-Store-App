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

// Extend the Express Request interface to include the file property
declare module "express-serve-static-core" {
  interface Request {
    file?: Express.Multer.File;
  }
}

const router: Router = express.Router();

initializeApp(config.firebaseConfig);

const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  "/",
  upload.single("filename"),
  async (req: Request, res: Response) => {
    try {
      if (!req.file) {
        return res.status(400).send({ message: "No file uploaded" });
      }

      const dateTime = giveCurrentDateTime();
      const storageRef = ref(
        storage,
        `files/${req.file.originalname}_${dateTime}`
      );

      const metadata = {
        contentType: req.file.mimetype,
      };

      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log("File successfully uploaded.");
      return res.send({
        message: "File uploaded to Firebase Storage",
        name: req.file.originalname,
        type: req.file.mimetype,
        downloadURL: downloadURL,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      return res.status(400).send({ message: error.message });
    }
  }
);

const giveCurrentDateTime = () => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return date + "_" + time;
};

export default router;
