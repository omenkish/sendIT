const token = localStorage.getItem('token');
const admin = localStorage.getItem('admin');

const fetchUsers = () => {

  if(!token) return window.location = 'signin.html';
  if(admin === 'false') window.location = 'index.html';

  const url = 'https://eneojo-sendit.herokuapp.com/api/v1/users';
  let fetchData = { 
    method: 'GET', 
    headers: {
      'Content-Type': 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }
  fetch(url, fetchData).then(responese => responese.json())
  .then(result => {
    if(result.data){
      let myTable = document.querySelector("#table");
      let dataTable = new DataTable(myTable);
      let newData = [];
    result.data.forEach(user => {
      let othernames = ' ';
      let status = 'Normal';
      let buttons = `<a id="btn" data-id = "${user.id}" onclick="fetchId(this);"><button id="cancelbtn">Make admin</button></a> 
                    <a id="myBtn" href="parcels.html?${user.id}" > <button id="cancelbtn">View Parcels</button></a>`;
      if(user.othernames){
        othernames = user.othernames;
      }
      if(user.is_admin === true){
        status = 'Admin';
        buttons = `<a id="myBtn" href="parcels.html?${user.id}" data-id = "${user.id}" > <button id="cancelbtn">View Parcels</button></a>`;
      }
      newData.push({
        "Name": `${user.firstname} ${othernames} ${user.lastname}`,
        "Email": `${user.email}`,
        "Status": `${status}`,
        "Action": `${buttons}`
      })
    });
      //dataTable.rows().add(result.data);
      dataTable.insert(newData);
    }
    else if(result.message === 'TokenExpiredError: jwt expired}'){
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      localStorage.removeItem('username');
      localStorage.removeItem('userId');
      window.location = 'signin.html';
    }
    else{
      console.log(result);
    }
  })
  .catch(error => {
    console.log(error);
  })
}

window.onload = fetchUsers;