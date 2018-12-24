const getId = (el) =>{
  if(!token) return window.location = 'signin.html';
  
  let mapbtn = document.querySelector('#forMap');
  document.getElementById('userModal').style.display = 'block';
  let parcelDiv = document.getElementById('userParcel');
  let mapButton = document.querySelector('#forMap');
  let id = el.getAttribute('data-id');
  const url = `https://eneojo-sendit.herokuapp.com/api/v1/parcels/${id}`;

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
      if(result.data.status === 'pending'){
        mapButton.style.display = 'none';
      }
      else{
        mapButton.style.display = 'inline';
      }
      const parcel = result.data;
      let para = createNode('p');
      let label = createNode('label');
      let text = document.createTextNode('Receiver Number: ');
      let span = createNode('span');
      let text1 = document.createTextNode(parcel.receiver_number);
      append(label, text);
      append(para, label);
      append(span, text1);
      append(para, span);
      append(parcelDiv, para);

      let para1 = createNode('p');
      let label1 = createNode('label');
      let tex = document.createTextNode('Item Description: ');
      let span1 = createNode('span');
      let text2 = document.createTextNode(parcel.description);
      append(label1, tex);
      append(para1, label1);
      append(span1, text2);
      append(para1, span1);
      append(parcelDiv, para1);

      let para2 = createNode('p');
      let label2 = createNode('label');
      let tex1 = document.createTextNode('Price: ');
      let span2 = createNode('span');
      let text3 = document.createTextNode(`$ ${parcel.price}`);
      append(label2, tex1);
      append(para2, label2);
      append(span2, text3);
      append(para2, span2);
      append(parcelDiv, para2);

      let para3 = createNode('p');
      let label3 = createNode('label');
      let tex2 = document.createTextNode('Present Location: ');
      let span3 = createNode('span');
      let text4 = document.createTextNode(parcel.current_location);
      append(label3, tex2);
      append(para3, label3);
      append(span3, text4);
      append(para3, span3);
      append(parcelDiv, para3);

      let para4 = createNode('p');
      let label4 = createNode('label');
      let tex3 = document.createTextNode('Destination: ');
      let span4 = createNode('span');
      let text5 = document.createTextNode(parcel.receiver_address);
      append(label4, tex3);
      append(para4, label4);
      append(span4, text5);
      append(para4, span4);
      append(parcelDiv, para4);

      let para5 = createNode('p');
      let label5 = createNode('label');
      let tex4 = document.createTextNode('Delivery Status: ');
      let span5 = createNode('span');
      let text6 = document.createTextNode(parcel.status);
      append(label5, tex4);
      append(para5, label5);
      append(span5, text6);
      append(para5, span5);
      append(parcelDiv, para5);

      mapbtn.setAttribute('href', `./location.html?${parcel.id}`);
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
    console.log('-------------> Error', error);
  })
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}