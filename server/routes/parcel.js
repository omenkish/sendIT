import express from 'express';
const router = express.Router();

import ParcelOrder from '../controllers/parcel';

router.route('/')
.post(ParcelOrder.createParcelOrder)
.get(ParcelOrder.getAllParcels)

router.route('/:id')
.get(ParcelOrder.getParcelById)

router.route('/:id/cancel')
.put(ParcelOrder.cancelParcelOrder)

export default router;