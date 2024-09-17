import express from 'express';

import { getHealthDetails, createHealthDetail, updateHealthDetail, deleteHealthDetail } from '../controllers/healthDetail.js';

import authentication from '../middleware/authentication.js';

const router = express.Router();

router.get('/HD', getHealthDetails);
router.post('/HD', authentication, createHealthDetail);
router.patch('/HD/:id', authentication, updateHealthDetail);
router.delete('/HD/:id', authentication, deleteHealthDetail);

export default router;
