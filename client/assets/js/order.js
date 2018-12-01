
const getId = () =>{
  document.getElementById('userModal').style.display = 'block';
  let parcelDiv = document.getElementById('userParcel');
  let btn  = document.getElementById
  ('btn');
  let id = btn.getAttribute('data-id');

  const url = `http://localhost:5000/api/v1/parcels/${id}`;

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
    console.log(result)
    if(result.status === 200){
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
      let tex = document.createTextNode('Receiver Number: ');
      let span1 = createNode('span');
      let text2 = document.createTextNode(parcel.receiver_number);
      append(label1, tex);
      append(para1, label1);
      append(span1, text2);
      append(para1, span1);
      append(parcelDiv, para1);
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