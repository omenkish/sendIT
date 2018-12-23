const token = localStorage.getItem('token');

const userParcels = () => {

  let myTable = document.querySelector("#table");
  let resultMessage = document.getElementById('message');
  const url = 'https://eneojo-sendit.herokuapp.com/api/v1/users/parcels';
  
  if(!token) return window.location = 'signin.html';
  
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
    
    if(result.status === 200){
      const parcels = result.data;  
      let dataTable = new DataTable(myTable);
      let newData = [];
      
      let deliver = ``;
      parcels.forEach(parcel => {
        let status = 'Active';
        console.log(`Order ${parcel.id} is ${parcel.cancelled}`);
        if(parcel.cancelled === true){
          status = 'Cancelled';
        }
        if(parcel.cancelled === true){
          status = 'Cancelled';
          deliver = `<a class="btn" data-id = "${parcel.id}" onclick="getId(this);">
                    <button id="cancelbtn">view</button></i></a>`;
        }
        else if(parcel.status === 'delivered'){
          deliver = `<a class="btn" data-id = "${parcel.id}" onclick="getId(this);">
                    <button id="cancelbtn">view</button></i></a> &nbsp;
                    <a href="order.html?${parcel.id}" ><button id="cancelbtn">Edit</button></a> &nbsp; `;
                
        }
        else {
          deliver= `<a class="btn" data-id = "${parcel.id}"  onclick="getId(this);">
                    <button id="cancelbtn">view</button></i></a> &nbsp;
                    <a href="order.html?${parcel.id}" ><button id="cancelbtn">Edit</button></a> &nbsp; 
                    <a class="myBtn" href="#" data-id = "${parcel.id}" onclick="fetchId(this);">
                     <button id="cancelbtn">Cancel</button></a>`;   
        }
        newData.push({
          "Order No.": `<a href="order.html?${parcel.id}">${parcel.order_number}</a>`,
          "Receiver No.": `${parcel.receiver_number}`,
          "Receiver Addr.": `${parcel.receiver_address}`,
          "Price ($)": `${parcel.price}`,
          "Cur. Location": `${parcel.current_location}`,
          "Order Status": `${status}`,
          "Delivery Status": `${parcel.status}`,
          "Action": `${deliver}`
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
    else{
      myTable.setAttribute('class', 'hide');
      let span = createNode('span');
      let text = document.createTextNode(result.message);
      append(span, text);
      append(resultMessage, span);
      resultMessage.setAttribute('class', 'success');
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
window.onload= userParcels;