import express from 'express';
const router = express.Router();

import ParcelOrder from '../controllers/parcel';

router.post('/', ParcelOrder.create);
router.get('/', ParcelOrder.getAll);
router.get('/:id', ParcelOrder.getOne);
router.put('/:id', ParcelOrder.update);
router.put('/:id/cancel', ParcelOrder.delete);


export default router;