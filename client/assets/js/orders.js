const token = localStorage.getItem('token');
if(!token){
  window.location = 'signin.html';
}

const userParcels = () => {

  let table = document.getElementById('table');
  let resultMessage = document.getElementById('message');
  const url = 'http://localhost:5000/api/v1/users/parcels';
  
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
    console.log(result)
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
        
        tableRow.innerHTML += `<td>${index}</td>
                          <td><a href="order.html?rec=${parcel.id}">${parcel.order_number}</a></td>
                          <td>${parcel.price}</td>
                          <td>${parcel.receiver_number}</td>
                          <td>${parcel.receiver_address}</td>
                    
                          <td>${parcel.current_location}</td>
                          <td>${parcel.status}</td>
                          <td> <a href="order.html?id=${parcel.id}" ><i class="fa fa-eye fa-2x"></i></a> &nbsp;
                          <a href="order.html"><i class="fa fa-pen-square fa-2x"></i></a> &nbsp; 
                            <a id="myBtn" href="#" onclick="document.getElementById('myModal').style.display = 'block'"> <i class="fa fa-trash-alt fa-2x" ></i></a>
                          </td>`;

        
      });
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