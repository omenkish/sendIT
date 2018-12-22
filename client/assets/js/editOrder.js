const token = localStorage.getItem('token');
if(!token) window.location = 'signin.html';
const edit = (e) => {
  e.preventDefault();

  const id = window.location.search.split('?')[1];
  const url = `https://eneojo-sendit.herokuapp.com/api/v1/parcels/${id}/destination`;


  let receiver_address = document.querySelector('#destination').value;
  let zip = document.querySelector('#zip').value;
  let state = document.querySelector('#state'). value;
  let resultMessage = document.querySelector('#message');

  const requestData = { receiver_address, zip, state};
  const header = {
    'Content-Type': 'Application/json',
    'Authorization' : `Bearer ${token}`
  };
  const fetchData = {
    method: 'PUT',
    headers: header,
    body: JSON.stringify(requestData)
  }

  fetch(url, fetchData)
  .then(response => response.json())
  .then(result => {

    if(result.status === 200){

      setTimeout(() => { window.location.reload(true); }, 7000);
      let span = createNode('span');
      let text = document.createTextNode('Destination Updated Successfully...');

      append(span, text);
      append(resultMessage, span);
      resultMessage.setAttribute('class', 'success');
    }
    else if(result.message === 'TokenExpiredError: jwt expired}'){
      window.location = 'signin.html';
    }
    else{
      let span = createNode('span');
      let text = document.createTextNode(result.message);

      append(span, text);
      append(resultMessage, span);
      resultMessage.setAttribute('class', 'error');
      resultMessage.classList.add('fadeOut');
      console.log('==================',result);
    }
  })
  .catch(error => {
    console.log('-------------> Error', error);
  })
}

const loadPage = () => {
  const id = window.location.search.split('?')[1];
  const url = `https://eneojo-sendit.herokuapp.com/api/v1/parcels/${id}`;

  // fetch input tags
  let phone = document.querySelector('#phone');
  let cLocation = document.querySelector('#location');
  let cost = document.querySelector('#price');
  let status = document.querySelector('#status');
  let address = document.querySelector('#destination');
  let zip = document.querySelector('#zip');
  let state = document.querySelector('#state');

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
      const parcel = result.data;
      phone.setAttribute('value', parcel.receiver_number);
      cLocation.setAttribute('value', parcel.current_location);
      cost.setAttribute('value', parcel.price);
      status.setAttribute('value', parcel.status);
      address.setAttribute('value', parcel.receiver_address);
      phone.setAttribute('value', parcel.receiver_number);
      zip.setAttribute('value', parcel.zip);
      state.setAttribute('value', parcel.state);
    }
    else{
      console.log('It didnt work');
    }
  })
  .catch(error => {
    console.log('-------------> Error', error);
  })
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

window.onload = loadPage;
document.querySelector('#changeDestination').addEventListener('submit', edit);
