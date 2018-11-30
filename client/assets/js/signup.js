const signup = (e) =>{

  e.preventDefault();

  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const othernames = document.getElementById('othernames').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  let resultMessage = document.getElementById('message');

  const requestData = {
    firstname, lastname, othernames, email, phone,password
  }
  

  const url = 'http://localhost:5000/api/v1/auth/signup';

  const header = {
    'Content-Type': 'application/json',
  };

  fetch(url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(requestData),
  })
    .then((res) => {
      res.json().then(result => {
        if(result.status === 201) {
          const token = result.token;

          sessionStorage.setItem('token', token);
          sessionStorage.setItem('username', result.data.firstname);
          sessionStorage.setItem('admin', result.data.is_admin);
          window.location.replace('profile.html');
        }
        else {
          resultMessage.setAttribute('class', 'error');
          let spann = document.createElement('span');
          const text = document.createTextNode(`${result.message}`);

          spann.appendChild(text);
          resultMessage.appendChild(spann);
          resultMessage.classList.add('fadeOut');
        }
      });
    });
}

document.getElementById('create').addEventListener('submit', signup);