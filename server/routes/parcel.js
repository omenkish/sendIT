import express from 'express';
const router = express.Router();

import ParcelOrder from '../controllers/parcel';
import CreateParcelValidationMiddleware from '../middleware/vallidation'

// router.post('/', CreateParcelValidationMiddleware, ParcelOrder.create);
// router.get('/', ParcelOrder.getAll);
// router.get('/:id', ParcelOrder.getOne);
// router.put('/:id', ParcelOrder.update);
// router.put('/:id/cancel', ParcelOrder.delete);

router.route('/')
.get(ParcelOrder.getAll())
.all(CreateParcelValidationMiddleware)
.post(ParcelOrder.create());
route.route('/:id')
.get(ParcelOrder.getOne())
.put(ParcelOrder.update());

export default router;