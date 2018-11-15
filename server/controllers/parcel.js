import ParcelOrderModel from '../models/parcelOrder';

class ParcelOrder  {
  
  create (req, res) {
    if(!req.body.orderNo && !req.body.address && !req.body.presentLocation && !req.body.status && !req.body.price && !req.body.description){
      return res.status(400).send('message: All fields are required!');
    }
    const parcelOrder = ParcelOrderModel.create(req.body);
    return res.status(201).send(parcelOrder);
  }

  getAll (req, res) {
    const parcelOrders = ParcelOrderModel.findAll();
    return res.status(200).send(parcelOrders);
  }

  getOne(req, res){
    if(!Number(req.params.id)) {
      return res.status(400).json("This Id is not a number")
    } 
    const parcelOrder = ParcelOrderModel.findOne(parseInt(req.params.id));
    if(!parcelOrder){
      return res.status(404).send({'message: ': 'Order with this ID does not exist.'});
    }
    return res.status(200).send(parcelOrder);
  }

  update (req, res){
    if(!Number(req.params.id)) {
      return res.status(400).json("This Id is not a number")
    } 
    const parcelOrder = ParcelOrderModel.findOne(req.params.id);
    if(!parcelOrder){
      return res.status(404).send({'message': ' Order not found'})
    }
    const updatedParcelOrder = ParcelOrderModel.update(req.params.id, req.body);
    return res.status(200).send(updatedParcelOrder);
  }

  delete(req, res){
    const parcelOrder = ParcelOrderModel.findOne(req.params.id);
    if(!parcelOrder){
      return res.status(404).send({'message': 'Order not found'});
    }
    const ref = ParcelOrderModel.delete(req.params.id);
    return res.status(204).send(ref);
  }

}

export default new ParcelOrder();
