import moment from 'moment';
class ParcelOrder {

  /**
   * class constructor
   * @param {object} data
   */
  constructor () {
    this.parcelOrders = [
      {
        id: this.randomDigits(5),
        userId: 1,
        orderNo: Math.random().toString(36).substring(8),
        address: 'Badagry',
        presentLocation: 'Birom',
        deliveryStatus: 'Active',
        orderStatus: 'Transit',
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
   * @param {length} length of number 
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
    return this.parcelOrders.find(parcelOrder => parcelOrder.id === parseInt(id));
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
    this.parcelOrders[index].deliveryStatus = 'Cancelled.';
    return this.parcelOrders[index];
  }
}

export default new ParcelOrder();

