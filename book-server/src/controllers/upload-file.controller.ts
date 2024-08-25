import express, { Router } from 'express'
import { initializeApp } from 'firebase/app';

import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import multer from 'multer';

import config from '../config/firebase.config';

const router: Router = express.Router();

initializeApp(config.firebaseConfig);

const storage = getStorage();

const upload = multer({ storage: multer.memoryStorage() })

router.post('/', upload.single("filename"), async (req, res) => {
    try {
        const dateTime = giveCurrentDateTime();

        

    } catch (error) {
        
    }
})





