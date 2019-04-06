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
.get(VerifyToken, Parcel.getParcelById)

router.patch('/:id', VerifyToken, Parcel.cancelParcelOrder);
router.patch('/:id/location',VerifyToken, validate.adminOnly, Parcel.updateCurrentLocation);
router.patch('/:id/destination',VerifyToken, Parcel.changeDestination);
router.patch('/:id/deliver', VerifyToken, validate.adminOnly, Parcel.markAsDelivered);

export default router;