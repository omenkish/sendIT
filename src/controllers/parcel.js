import ParcelOrderModel from '../models/parcelOrder';

const ParcelOrder = {
  create (req, res) {
    if(!req.body.orderNo && !req.body.address && !req.body.presentLocation && !req.body.status && !req.body.price && !req.body.description){
      return res.status(400).send('message: All fields are required!');
    }
    const parcelOrder = ParcelOrderModel.create(req.body);
    return res.status(201).send(parcelOrder);
  },
  getAll (req, res) {
    const parcelOrders = ParcelOrderModel.findAll();
    return res.status(200).send(parcelOrders);
  }

};

export default ParcelOrder;
