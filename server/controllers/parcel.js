import ParcelOrderModel from '../models/parcel';
const parcelOrderModel = new ParcelOrderModel();

class ParcelOrder {
  /**
   * 
   * @returns {Object} created parcel order
   */
  static create(req, res){
      const parcelOrder = parcelOrderModel.create(req.body);
      return res.status(201).send(parcelOrder);
  }

  /**
   * 
   * @returns [array] all parcel orders
   */
  static getAll(req, res){
    const parcelOrders = parcelOrderModel.findAll();
    return res.status(200).send(parcelOrders);
  }


  /**
   * This is a description of the getOne method
   * @returns {Object} particular parcel order
   */
  static getOne(req, res){
    const parcelOrder = parcelOrderModel.findOne(parseInt(req.params.id));
    if (!parcelOrder) {
      return res.status(404).send({ 'message: ': 'Order with this ID does not exist.' });
    }
    return res.status(200).send(parcelOrder);
    
  }

  /**
   * 
   * @returns {Object} - object updated parcel order
   */
  static updateLocation(req, res) {
    const parcelOrder = parcelOrderModel.findOne(req.params.id);
    if (!parcelOrder) {
      return res.status(404).send({ 'message': ' Order not found' })
    }
    const updatedParcelOrder = parcelOrderModel.update(req.params.id, req.body);
    return res.status(201).send(updatedParcelOrder); 
  }

  /**
   * method cancel 
   * cancels a particular order
   */
  static cancel(req, res) {
    
      const parcelOrder = parcelOrderModel.findOne(req.params.id);
      if (!parcelOrder) {
        return res.status(404).send({ 'message': 'Order not found' });
      }
      const ref = parcelOrderModel.cancel(req.params.id);
      return res.status(201).send(ref);
    }
  }


export default ParcelOrder;
