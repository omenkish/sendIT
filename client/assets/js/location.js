const update = (e) => {
  e.preventDefault();
  let resultMessage = document.querySelector('#message');
  const current_location = document.querySelector('#current-location').value;
  const id = document.querySelector('#delete').getAttribute('data-id');
  const url = `https://eneojo-sendit.herokuapp.com/api/v1/parcels/${id}/location`;
  console.log(current_location);

  let fetchData = { 
    method: 'PUT', 
    headers: {
      'Content-Type': 'Application/json',
      'Authorization' : `Bearer ${token}`,
    },
    body: JSON.stringify({current_location})
  }
  
  fetch(url, fetchData)
  .then(response => response.json())
  .then(result => {
    if(result.status === 200){

      setTimeout(() => { window.location.reload(true); }, 7000);
      let span = createNode('span');
      let text = document.createTextNode('Current Location Updated Successfully...');

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

document.querySelector('#update-form').addEventListener('submit', update);