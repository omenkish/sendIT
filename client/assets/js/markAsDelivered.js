
const deliver = (el) => {
  const id = el.getAttribute('data-id');
 
  let messageDiv = document.querySelector('#message1');
  const url = `https://eneojo-sendit.herokuapp.com/api/v1/parcels/${id}/deliver`;

  let fetchData = { 
    method: 'PUT', 
    headers: {
      'Content-Type': 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }
  
  fetch(url, fetchData)
  .then(response => response.json())
  .then(result => {
    if(result.status === 200){
      setTimeout(() => { window.location.reload(true); }, 7000);
      let span = createNode('span');
      let text = document.createTextNode('Order successfully marked as delivered');
      append(span, text);
      append(messageDiv, span);

      messageDiv.setAttribute('class', 'success');
    }
    else{
      let span = createNode('span');
      let text = document.createTextNode(result.message);
      append(span, text);
      append(messageDiv, span);

      messageDiv.setAttribute('class', 'error');
      setTimeout(() => { window.location.reload(true); }, 7000);
      
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

