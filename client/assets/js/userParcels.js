const token = localStorage.getItem('token');
const admin = localStorage.getItem('admin');
const fetchUserParcels = () =>{
  if(!token) return window.location = 'index.html';
  if(admin === 'false') return window.location = 'index.html';

  let myTable = document.querySelector("#table");
  let messageDiv = document.querySelector('#message1');

  const id = window.location.search.split('?')[1];
  const url = `https://eneojo-sendit.herokuapp.com/api/v1/users/${id}/parcels`;
  
  let fetchData = { 
    method: 'GET', 
    headers: {
      'Content-Type': 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }
  fetch(url, fetchData).then(responese => responese.json())
  .then(result => {
    let parcels = result.data;
    if(result.message === 'TokenExpiredError: jwt expired}'){
      window.location = 'signin.html';
    }
    else if(parcels){
      
      let dataTable = new DataTable(myTable);
      let newData = [];
      let status = 'Active';
      parcels.forEach(parcel => {
        if(parcel.cancelled === true){
          status = 'Cancelled';
        }
        newData.push({
          "Order No.": `${parcel.order_number}`,
          "Receiver No.": `${parcel.receiver_number}`,
          "Receiver Addr.": `${parcel.receiver_address}`,
          "Cur. Location": `${parcel.current_location}`,
          "Order Status": `${status}`,
          "Delivery Status": `${parcel.status}`
        })
        dataTable.insert(newData);
      });
    }
   
    else if(result.status === 404){
      myTable.classList.add('hide');
      let span = createNode('span');
      let text = document.createTextNode('There is currently no parcel delivery order for this user');
      append(span, text);
      append(messageDiv, span);
      messageDiv.setAttribute('class', 'error');
    }
    else {
      console.log(result);
    }
  })
  .catch(error => {
    console.log(error)
  })
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

window.onload = fetchUserParcels;