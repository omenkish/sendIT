const cancel = () => {

  let messageDiv = document.querySelector('#message');
  let id = document.querySelector('#delete').getAttribute('data-id');
  const url = `http://localhost:5000/api/v1/parcels/${id}/cancel`;

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
      location.reload();
    }
    else{
      let span = createNode('span');
      let text = document.createTextNode(result.message);
      append(span, text);
      append(messageDiv, span);

      messageDiv.setAttribute('class', 'error');
      messageDiv.classList.add('fadeOut');
    }
  })
  .catch(error => {
    console.log('-------------> Error', error);
  })
}

const fetchId = (element) => {
  let id = element.getAttribute('data-id');
  document.getElementById('myModal').style.display = 'block';
  let btn = document.querySelector('#delete');
  btn.setAttribute('data-id', id);
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

document.querySelector('#delete').addEventListener('click', cancel);