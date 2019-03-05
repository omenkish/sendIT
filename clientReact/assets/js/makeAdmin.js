const createAdmin = () => {
  if(!token) return window.location = 'signin.html';
  if(localStorage.getItem('admin') === 'false') return window.location.replace('signin.html');
  let messageDiv = document.querySelector('#message');
  const id = document.querySelector('#makeAdmin').getAttribute('data-id');
  const url = `https://eneojo-sendit.herokuapp.com/api/v1/users/${id}/createadmin`;
  console.log(url)
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
    console.log(result);
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
  });
}

const fetchId = (element) => {
  let id = element.getAttribute('data-id');
  document.querySelector('#myModal').style.display = 'block';
  let btn = document.querySelector('#makeAdmin');
  btn.setAttribute('data-id', id);
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

document.querySelector('#makeAdmin').addEventListener('click', createAdmin);