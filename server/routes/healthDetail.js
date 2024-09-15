import express from 'express';

import { getHealthDetails, createHealthDetail, updateHealthDetail, deleteHealthDetail } from '../controllers/healthDetail.js';

import authentication from '../middleware/authentication.js';

const router = express.Router();


export default router;
