const token = localStorage.getItem('token');

(() => {

  let name = document.querySelector('#name');
  let phone = document.querySelector('#tel');
  let email = document.querySelector('#email');
  let date = document.querySelector('#date');

  const id = localStorage.getItem('userId');
  const url =  `http://localhost:5000/api/v1/users/${id}`;
  
  //const parcelsUrl =  'http://localhost:5000/api/v1/users/parcels';
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
    let user = result.data;
    let othernames = '';
    let formattedDate = formatDate(user.registered_on);
    if(user.othernames){
      othernames = user.othernames.toUpperCase();
    }
    if(user){
      let span = document.createTextNode(`${user.firstname.toUpperCase()} ${othernames} ${user.lastname.toUpperCase()}`);
      let span1 = document.createTextNode(user.email);
      let span2 = document.createTextNode(user.phone);
      let span3 = document.createTextNode(formattedDate);

      append(name, span);
      append(email, span1);
      append(phone, span2);
      append(date, span3);
    }
    else{

    }

  })
  .catch(error => {
    console.log(error);
  });
})();

function formatDate(timestamp){
  timestamp = new Date(timestamp);
  let d = timestamp.getDate().toString();
  let dd = (d.length === 2) ? d : "0"+d;
  let m = (timestamp.getMonth()+1).toString();
  let mm = (m.length === 2) ? m : "0"+m;     
  return(dd+"/"+mm+ "/" + (timestamp.getFullYear()).toString());
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, element) {
return parent.appendChild(element);
}

//  fetch user parcels
(() => {

  let transit = document.querySelector('#trans');
  let deliver = document.querySelector('#del');

  const url =  'http://localhost:5000/api/v1/users/parcels';
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
    let parcels = result.data;
    
    if(parcels){
      const onTransit = parcels.filter(parcel => parcel.status !== 'delivered');
      const delivered = parcels.filter(parcel => parcel.status === 'delivered');
      
      let span = document.createTextNode(onTransit.length);
      let span1 = document.createTextNode(delivered.length);
     
      append(transit, span);
      append(deliver, span1);
      transit.style.color = 'goldenrod';
      deliver.style.color = 'green';
    }
    else{

    }

  })
  .catch(error => {
    console.log(error);
  });
})();