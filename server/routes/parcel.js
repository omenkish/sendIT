import express from 'express';
const router = express.Router();

import Parcel from '../controllers/Parcel';
import VerifyToken from '../middleware/authMiddleware';
import validate from '../middleware/validate';

router.route('/')
.all(VerifyToken)
.post(validate.createParcel, Parcel.createParcelOrder)
.get(validate.adminOnly, Parcel.getAllParcels)

router.route('/:id')
.get(VerifyToken, validate.adminOnly, validate.getById, Parcel.getParcelById)

router.put('/:id/cancel', VerifyToken, Parcel.cancelParcelOrder)

export default router;