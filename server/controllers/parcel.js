import ParcelOrderModel from '../models/parcel';

class ParcelOrder {
  
  /**
   * 
   * @returns {Object} created parcel order
   */
  static create() {
    return (req, res) => {
      const parcelOrder = ParcelOrderModel.create(req.body);
      return res.status(201).send(parcelOrder);
    }
  }

  /**
   * 
   * @returns [array] all parcel orders
   */
  static getAll() {
    return (req, res) => {
      const parcelOrders = ParcelOrderModel.findAll();
      return res.status(200).send(parcelOrders);
    }
  }


  /**
   * 
   * @returns {Object} particular parcel order
   */
  static getOne() {
    return (req, res) => {
      const parcelOrder = ParcelOrderModel.findOne(parseInt(req.params.id));
      if (!parcelOrder) {
        return res.status(404).send({ 'message: ': 'Order with this ID does not exist.' });
      }
      return res.status(200).send(parcelOrder);
    }
  }

  /**
   * 
   * @returns {Object} updated parcel order
   */
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
    return (req, res) => {
      const parcelOrder = ParcelOrderModel.findOne(req.params.id);
      if (!parcelOrder) {
        return res.status(404).send({ 'message': 'Order not found' });
      }
      const ref = ParcelOrderModel.cancel(req.params.id);
      return res.status(204).send(ref);
    }
  }

}

export default ParcelOrder;
