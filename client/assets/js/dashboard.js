const token = localStorage.getItem('token');
const is_admin = localStorage.getItem('admin');
const username = localStorage.getItem('username');

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
    if(result.status === 201){
      console.log('hurray')
      let span = createNode('span');
      const text = document.createTextNode(result.message);
      append(span, text);
      append(resultMessage, span);
      resultMessage.setAttribute('class', 'success');
      document.getElementById('createParcel').reset();
      resultMessage.classList.add('fadeOut');
    }
    else{
      console.log('nahhh')
      let span = createNode('span');
      const text = document.createTextNode(result.message);
      append(span, text);
      append(resultMessage, span);
      resultMessage.setAttribute('class', 'error');
      resultMessage.classList.add('fadeOut');
    }
  })
  .catch(error => {
    console.log('--------------------', result);
  });
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

window.onload = function upAndRunning(){
  if(!token) return window.location = 'signin.html';
}
document.getElementById('createParcel').addEventListener('submit', createParcel);