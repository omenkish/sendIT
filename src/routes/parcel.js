import express from 'express';
const router = express.Router();

import ParcelOrder from '../controllers/parcel';

router.post('', ParcelOrder.create);

export default router;