import moment from 'moment';
import uuidv4 from 'uuid/v4';

class ParcelOrder {

  /**
   * class constructor
   * @param {object} data
   */
  constructor () {
    this.parcelOrders = [
      {
        id: uuidv4(),
        userId: 1,
        orderNo: Math.random().toString(36).substring(8),
        address: 'Badagry',
        presentLocation: 'Birom',
        status: 'Transit',
        price: 2000,
        description: 'Black leather belt',
        createdDate: this.currentTime(),
        modifiedDate: this.currentTime()
      }
    ];
  }

  /**
   * 
   * @returns formated date
   */
  currentTime () {
    return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  }
  /**
   * 
   * @returns {object} parcel order object
   */
  create (data){
    const parcels = this.parcelOrders;
    let orderNumber = Math.random().toString(36).substring(8);
    const found = parcels.find(parcel => parcel.orderNo === orderNumber);
    if(found){
      orderNumber = Math.random().toString(36).substring(8);
    }
    const newParcelOrder = {
      id: uuidv4(),
      userId: data.userId || '',
      orderNo: orderNumber,
      address: data.address || '',
      presentLocation: data.presentLocation || '',
      status: data.status || '',
      price: data.price || '',
      description: data.description || '',
      createdDate: this.currentTime(),
      modifiedDate: this.currentTime()
    };
    this.parcelOrders.push(newParcelOrder);
    return newParcelOrder;
  }

  /**
   * 
   * @param  id
   * @returns {object} parcel order object
   */
  findOne (id) {
    return this.parcelOrders.find(parcelOrder => parcelOrder.id === id);
  }

  /**
   * 
   * @returns {object} all parcel order objects
   */
  findAll (){
    return this.parcelOrders;
  }

  update(id, data) {
    const parcelOrder = this.findOne(id);
    const index = this.parcelOrders.indexOf(parcelOrder);
    this.parcelOrders[index].address = data['address'] || parcelOrder.address;
    this.parcelOrders[index].presentLocation = data['presentLocation'] || parcelOrder.presentLocation;
    this.parcelOrders[index].status = data['status'] || parcelOrder.status;
    this.parcelOrders[index].description = data['description'] || parcelOrder.description;
    this.parcelOrders[index].modifiedDate = this.currentTime();
    return this.parcelOrders[index];
  }

  delete (id) {
    const parcelOrder = this.findOne(id);
    const index = this.parcelOrders.indexOf(parcelOrder);
    this.parcelOrders.splice(index,1);
    return {};
  }
}

export default new ParcelOrder();

