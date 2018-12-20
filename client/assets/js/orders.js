const token = localStorage.getItem('token');

if(!token){
  window.location = 'signin.html';
}

const userParcels = () => {

  let table = document.getElementById('table');
  let resultMessage = document.getElementById('message');
  const url = 'https://eneojo-sendit.herokuapp.com/api/v1/users/parcels';
  
  if(!token) return window.location = 'index.html';
  
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
      const parcels = result.data;  
      let index = 0;
      let tbody = createNode('tbody')
      let column = ["S/N", "Order No", "Cost ($)", "Phone","Address","Cur. Location","Status","Action"];
      let columnCount = column.length;
      let tableHeader = table.createTHead();
      
      let tableRow = tableHeader.insertRow(-1);

      for(let i = 0; i < columnCount; i++){
        let headerCell = createNode('th');
        headerCell.innerHTML = column[i].toUpperCase();
        append(tableRow, headerCell);
      }

      append(table, tbody);


      parcels.forEach(parcel => {
        tableRow = tbody.insertRow(-1);
        index  += 1;
        if(parcel.status === 'delivered'){
          tableRow.innerHTML += `
                          <td>${index}</td>
                          <td><a href="order.html?rec=${parcel.id}">${parcel.order_number}</a></td>
                          <td>${parcel.price}</td>
                          <td>${parcel.receiver_number}</td>
                          <td>${parcel.receiver_address}</td>
                    
                          <td>${parcel.current_location}</td>
                          <td>${parcel.status}</td>
                          <td> <a class="btn" data-id = "${parcel.id}" href="#" onclick="getId(this);"><button id="cancelbtn">view</button></i></a> &nbsp;
                  
                          </td>`;   
        }
        else {
          tableRow.innerHTML += `
                          <td>${index}</td>
                          <td><a href="order.html?rec=${parcel.id}">${parcel.order_number}</a></td>
                          <td>${parcel.price}</td>
                          <td>${parcel.receiver_number}</td>
                          <td>${parcel.receiver_address}</td>
                    
                          <td>${parcel.current_location}</td>
                          <td>${parcel.status}</td>
                          <td> <a class="btn" data-id = "${parcel.id}" href="#" onclick="getId(this);"><button id="cancelbtn">view</button></i></a> &nbsp;
                          <a href="order.html?${parcel.id}" ><button id="cancelbtn">Edit</button></a> &nbsp; 
                            <a class="myBtn" href="#" data-id = "${parcel.id}" onclick="fetchId(this);"> <button id="cancelbtn">Cancel</button></a>
                          </td>`;   
        }
        tableRow.setAttribute('data-id', `${parcel.id}`);
      });

      
    }
    else if(result.message === 'TokenExpiredError: jwt expired}'){
      window.location = 'signin.html';
    }
    else{
      let span = createNode('span');
      let text = document.createTextNode(result.message);
      append(span, text);
      append(resultMessage, span);
      resultMessage.setAttribute('class', 'success');
    }
  })
  .catch(error => {
    console.log('------------------ Error', error);
  });
}


function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}
window.onload= userParcels;