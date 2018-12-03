const token = localStorage.getItem('token');
const allParcels = () => {

  let table = document.getElementById('table');
  const url = 'http://localhost:5000/api/v1/parcels';
  
  if(!token) return window.location = 'index.html';
  // const header = new Headers({
  //   'Content-Type': 'Application/json',
  //   'Authorization' : `Bearer ${token}`
  // });
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
    if(result.status === 401){
      window.location = 'index.html';
    }
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
                          <td> <a href="location.html" data-id = "${parcel.id}"><button id="cancelbtn"> Delivered</button></a> 
                            <a id="myBtn" href="#" data-id = "${parcel.id}" onclick="fetchId(this);"> <button id="cancelbtn">Update</button></a>
                          </td>`;

        
      });
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
window.onload= allParcels;