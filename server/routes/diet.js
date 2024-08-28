import express from "express";
import authentication from '../middleware/authentication.js';

import { getDietPost, createDietPost, updateDietPost, likeDietPost, deleteDietPost } from '../controllers/diet.js';
const router = express.Router();

router.get('/diet', getDietPost);
router.post('/diet', authentication, createDietPost);
router.patch('/diet/:id', authentication, updateDietPost);
router.patch('/diet/:id/likeDietPost', authentication, likeDietPost);
router.delete('/diet/:id', authentication, deleteDietPost);


export default router;