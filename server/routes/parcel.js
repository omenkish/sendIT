import express from 'express';
const router = express.Router();

import ParcelOrder from '../controllers/parcel';
import Validate from '../middleware/vallidation'

router.route('/')
.get(ParcelOrder.getAll())
.all(Validate.createParcel())
.post(ParcelOrder.create())

router.route('/:id')
.all(Validate.getUserById())
.get(ParcelOrder.getOne())
.put(ParcelOrder.update());

router.route(':id/cancel')
.all(Validate.getUserById())
.put(ParcelOrder.cancel());

export default router;