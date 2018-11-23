import express from 'express';
const router = express.Router();

import Parcel from '../controllers/Parcel';
import VerifyToken from '../middleware/authMiddleware';
import validate from '../middleware/validate';

router.route('/')
.all(VerifyToken)
.post(validate.createParcel, Parcel.createParcelOrder)
.get(Parcel.getAllParcels)

router.route('/:id')
.get(Parcel.getParcelById)

router.put('/:id/cancel', VerifyToken, Parcel.cancelParcelOrder);
router.put('/:id/location',VerifyToken,validate.adminOnly, Parcel.updateCurrentLocation);
router.put('/:id/destination',VerifyToken, Parcel.changeDestination);
router.put('/:id/deliver', VerifyToken, Parcel.markAsDelivered);

// update status;



export default router;