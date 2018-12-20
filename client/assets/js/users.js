const token = localStorage.getItem('token');
const admin = localStorage.getItem('admin');

const fetchUsers = () => {
  if(admin === 'false') window.location = 'index.html';
  const url = 'https://eneojo-sendit.herokuapp.com/api/v1/users';
  
  if(!token) return window.location = 'index.html';
  let fetchData = { 
    method: 'GET', 
    headers: {
      'Content-Type': 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }
  console.log(22222)
  fetch(url, fetchData).then(responese => responese.json())
  .then(result => {
    if(result.data){
      let myTable = document.querySelector("#table");
      let dataTable = new DataTable(myTable);
      let index = 0;
      let newData = [];
    result.data.forEach(user => {
      index += 1;
      let othernames = ' ';
      if(user.othernames){
        othernames = user.othernames;
      }
      newData.push({
        "S/N": `${index}`,
        "Name": `${user.firstname} ${othernames} ${user.lastname}`,
        "Email": `${user.email}`,
        "Action": `<a id="btn" data-id = "${user.id}" onclick="makeAdmin(this);"><button id="cancelbtn">Make admin</button></a> 
        <a id="myBtn" href="#" data-id = "${user.id}" onclick="fetchId(this);"> <button id="cancelbtn">View Parcels</button></a>`
      })
    });
      //dataTable.rows().add(result.data);
      dataTable.insert(newData);
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