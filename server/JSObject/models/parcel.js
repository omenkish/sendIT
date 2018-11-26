import moment from 'moment';
class ParcelOrder {

  /**
   * class constructor
   * @constructor {object} data
   */
  constructor (data) {
    this.parcelOrders = data ? data : [
      {
        id: 12345,
        userId: 1,
        orderNo: Math.random().toString(36).substring(8),
        destination: 'Badagry',
        presentLocation: 'Birom',
        deliveryStatus: 'Transit',
        orderStatus: 'Active',
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
   * @param length of number 
   * @returns {integer} digits of size length
   */

  randomDigits(length) {
    const chars = '0123456789'
     let result =""
    for (let i = length; i > 0; --i)
        result += chars[Math.round(Math.random() * (chars.length - 1))];
    return parseInt(result);
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
      id: this.randomDigits(5),
      userId: data.userId || '',
      orderNo: orderNumber,
      destination: data.destination || '',
      presentLocation: data.presentLocation || '',
      deliveryStatus: data.status || 'Transit',
      orderStatus: data.status || 'Active',
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
    const result = this.parcelOrders.find(parcelOrder => parcelOrder.id === parseInt(id));
    return result;
  }

  /**
   * 
   * @returns {object} all parcel order objects
   */
  findAll (){
    return this.parcelOrders;
  }

  /**
   * 
   * @param  id
   * @param  data
   * @returns {object} parcel order object
   */
  update(id, data) {
    const parcelOrder = this.findOne(id);
    const index = this.parcelOrders.indexOf(parcelOrder);
    this.parcelOrders[index].destination = data['destination'] || parcelOrder.destination;
    this.parcelOrders[index].orderStatus = data['orderStatus'] || parcelOrder.orderStatus;
    this.parcelOrders[index].description = data['description'] || parcelOrder.description;
    this.parcelOrders[index].modifiedDate = this.currentTime();
    return this.parcelOrders[index];
  }

  changeDestination(id, data) {
    const parcelOrder = this.findOne(id);
    const index = this.parcelOrders.indexOf(parcelOrder);
    this.parcelOrders[index].destination = data['destination'] || parcelOrder.destination;
    this.parcelOrders[index].modifiedDate = this.currentTime();
    return this.parcelOrders[index];
  }

  changeLocation(id, data) {
    const parcelOrder = this.findOne(id);
    const index = this.parcelOrders.indexOf(parcelOrder);
    this.parcelOrders[index].presentLocation = data['presentLocation'] || parcelOrder.presentLocation;
    this.parcelOrders[index].modifiedDate = this.currentTime();
    return this.parcelOrders[index];
  }

  cancel (id) {
    const parcelOrder = this.findOne(id);
    const index = this.parcelOrders.indexOf(parcelOrder);
    this.parcelOrders[index].deliveryStatus = 'Cancelled.';
    return this.parcelOrders[index];
  }
}

export default ParcelOrder;

