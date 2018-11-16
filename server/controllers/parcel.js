import ParcelOrderModel from '../models/parcel';

class ParcelOrder {

  static create() {
    return (req, res) => {
      const parcelOrder = ParcelOrderModel.create(req.body);
      return res.status(201).send(parcelOrder);
    }
  }
  static getAll() {
    return (req, res) => {
      const parcelOrders = ParcelOrderModel.findAll();
      return res.status(200).send(parcelOrders);
    }
  }



  static getOne() {
    return (req, res) => {
      if (!Number(req.params.id)) {
        return res.status(400).json("This Id is not a number")
      }
      const parcelOrder = ParcelOrderModel.findOne(parseInt(req.params.id));
      if (!parcelOrder) {
        return res.status(404).send({ 'message: ': 'Order with this ID does not exist.' });
      }
      return res.status(200).send(parcelOrder);
    }
  }

  static update() {
    return (req, res) => {
      if (!Number(req.params.id)) {
        return res.status(400).json("This Id is not a number")
      }
      const parcelOrder = ParcelOrderModel.findOne(req.params.id);
      if (!parcelOrder) {
        return res.status(404).send({ 'message': ' Order not found' })
      }
      const updatedParcelOrder = ParcelOrderModel.update(req.params.id, req.body);
      return res.status(200).send(updatedParcelOrder);
    }
  }
  /**
   * Cancel a particular order
   * 
   */
  static cancel() {
    (req, res) => {
      const parcelOrder = ParcelOrderModel.findOne(req.params.id);
      if (!parcelOrder) {
        return res.status(404).send({ 'message': 'Order not found' });
      }
      const ref = ParcelOrderModel.delete(req.params.id);
      return res.status(204).send(ref);
    }
  }

}

export default ParcelOrder;
