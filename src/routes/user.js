import express from 'express';
const router = express.Router();

import User from '../controllers/user';

router.post('', User.create);
router.get('/:id/parcels', User.getUserParcels)

export default router;