const login = (e) => {

  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const resultMessage = document.getElementById('message');

  const requestData = {email, password}
  const url = 'http://localhost:5000/api/v1/auth/login';
  const header = {'Content-Type': 'Application/json'};

  fetch(url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(requestData)
  })
  .then(response => response.json())
  .then(result => {
    if(result.status === 200){
      const token = result.token;

      localStorage.setItem('token', token);
      localStorage.setItem('username', result.data.firstname);
      localStorage.setItem('admin', result.data.is_admin);
      
      if(result.data.is_admin){
        return window.location.replace('admin.html');
      }
      window.location.replace('orders.html')
    }
    else {
      let span = document.createElement('span');
      const text = document.createTextNode(result.message);
      span.appendChild(text);
      resultMessage.appendChild(span);
      resultMessage.setAttribute('class', 'error');
      resultMessage.classList.add('fadeOut');
    }
    
  })
  .catch(error => {
    let span = document.createElement('span');
    const text = document.createTextNode('Something is wrong... Please try again later.');
    span.appendChild(text);
    resultMessage.appendChild(span);
    resultMessage.setAttribute('class', 'error');
    resultMessage.classList.add('fadeOut');
  })


}
document.getElementById('login').addEventListener('submit', login);