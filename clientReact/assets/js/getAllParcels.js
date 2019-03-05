const token = localStorage.getItem('token');
const admin = localStorage.getItem('admin');

const allParcels = () => {

  let myTable = document.querySelector("#table");
  let resultMessage = document.getElementById('message');

  const url = 'https://eneojo-sendit.herokuapp.com/api/v1/parcels';
  
  if(!token) return window.location = 'signin.html';
  if(!admin) return window.location = 'index.html';

  let fetchData = { 
    method: 'GET', 
    headers: {
      'Content-Type': 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }
  
  fetch(url, fetchData)
  .then(response => response.json())
  .then(result => {
    if(result.status === 401){
      window.location = 'index.html';
    }
    if(result.data){
      const parcels = result.data;
      
      let dataTable = new DataTable(myTable);
      let newData = [];
      
      let buttons = ``;
      parcels.forEach(parcel => {
        let status = 'Cancelled';
        if(parcel.cancelled === false){
          status = 'Active';
        }
        
        if(parcel.cancelled === true){
          buttons = `No action permitted on cancelled order.`;
          status = 'Cancelled';
        }
        else if(parcel.status === 'delivered'){
          buttons = `Delivered orders cannot be edited.`;

        }
        else{
          buttons = `<a id="btn" data-id = "${parcel.id}" onclick="deliver(this);"><button id="cancelbtn">Mark Delivered</button></a> 
                            <a id="myBtn" href="#" data-id = "${parcel.id}" onclick="fetchId(this);"> <button id="cancelbtn">Update</button></a>`;

        };
       newData.push({
          "Order No.": `${parcel.order_number}`,
          "Receiver No.": `${parcel.receiver_number}`,
          "Receiver Addr.": `${parcel.receiver_address}`,
          "Price ($)": `${parcel.price}`,
          "Cur. Location": `${parcel.current_location}`,
          "Order Status": `${status}`,
          "Delivery Status": `${parcel.status}`,
          "Action": `${buttons}`
        })
        
      });
      dataTable.insert(newData);
    }
    else if(result.message === 'TokenExpiredError: jwt expired}'){
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      localStorage.removeItem('username');
      localStorage.removeItem('userId');
      window.location = 'signin.html';
    }
  })
  .catch(error => {
    console.log('------------------ Error', error);
  });
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}
window.onload= allParcels;