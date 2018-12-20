const token = localStorage.getItem('token');
const allParcels = () => {

  let table = document.getElementById('table');
  const url = 'https://eneojo-sendit.herokuapp.com/api/v1/parcels';
  
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
      let myTable = document.querySelector("#table");
      let dataTable = new DataTable(myTable);
      //dataTable.rows().add(result.data);
      //dataTable.insert(result.data);
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
          tableRow.innerHTML += `<td>${index}</td>
                          <td><a href="order.html?rec=${parcel.id}">${parcel.order_number}</a></td>
                          <td>${parcel.price}</td>
                          <td>${parcel.receiver_number}</td>
                          <td>${parcel.receiver_address}</td>
                    
                          <td>${parcel.current_location}</td>
                          <td>${parcel.status}</td>
                          
                          <td>  
                            Delivered orders cannot be edited.
                          </td>`;

        }
        else{
          tableRow.innerHTML += `<td>${index}</td>
                          <td><a href="order.html?rec=${parcel.id}">${parcel.order_number}</a></td>
                          <td>${parcel.price}</td>
                          <td>${parcel.receiver_number}</td>
                          <td>${parcel.receiver_address}</td>
                    
                          <td>${parcel.current_location}</td>
                          <td>${parcel.status}</td>
                          
                          <td> <a id="btn" data-id = "${parcel.id}" onclick="deliver(this);"><button id="cancelbtn">Mark Delivered</button></a> 
                            <a id="myBtn" href="#" data-id = "${parcel.id}" onclick="fetchId(this);"> <button id="cancelbtn">Update</button></a>
                          </td>`;

        };
        dataTable.rows().add(tableRow)

        
        
      });
    }
    else if(result.message === 'TokenExpiredError: jwt expired}'){
      window.location = 'signin.html';
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