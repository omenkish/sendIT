const token = sessionStorage.getItem('token');
const is_admin = sessionStorage.getItem('admin');
const username = sessionStorage.getItem('username');

const createParcel = (e) => {
  e.preventDefault();

  const receiver_number = document.getElementById('phone').value;
  const description = document.getElementById('description').value;
  const weight = document.getElementById('weight').value;
  const weight_metric = document.getElementById('metric').value;
  const sender_address = document.getElementById('from').value;
  const receiver_address = document.getElementById('to').value;
  const zip = document.getElementById('zip').value;
  const state = document.getElementById('state').value;

  const resultMessage = document.getElementById('message');

  const requestData = { description, receiver_number, weight, weight_metric, sender_address, receiver_address, zip, state};
  
  
  const url = 'http://localhost:5000/api/v1/parcels';
  const header = {
    'Content-Type': 'Application/json',
    'Authorization' : `Bearer ${token}`
  }
  const fetchData = {
    method: 'POST',
    headers: header,
    body: JSON.stringify(requestData)
  }

  fetch(url, fetchData).then(response => response.json())
  .then(result => {
    if(status === 201){
      
    }
    else{

    }
  })
  .catch(error => {
    console.log('--------------------', error);
  });
}
window.onload = function upAndRunning(){
  if(!token) return window.location = 'signin.html';
}
document.getElementById('createParcel').addEventListener('submit', createParcel);