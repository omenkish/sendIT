import express from 'express';
const router = express.Router();

import ParcelOrder from '../controllers/parcel';
import Validate from '../middleware/vallidation';

router.route('/')
.get(ParcelOrder.getAll)
.post(Validate.createParcel, ParcelOrder.create)

router.route('/:id')
.get(ParcelOrder.getOne)
.put(ParcelOrder.updateLocation);

router.route(':id/cancel')
.put(ParcelOrder.cancel);

router.route('**', (req, res) => {
  return res.status(404).json({message: 'This route doesn\'t exist'});
});

export default router;