const token = localStorage.getItem('token');

function initMap(){

  fetchApi().then(response => response.json())
  .then(result => {
    geocode(result.data.sender_address, '#from')
    .then(res1 => {
      geocode(result.data.receiver_address, '#to')
        .then(res2 => {

          let fromLat = res1.data.results[0].geometry.location.lat;
          let fromLng = res1.data.results[0].geometry.location.lng;

          let toLat = res2.data.results[0].geometry.location.lat;
          let toLng = res1.data.results[0].geometry.location.lng;

        //map options
        let options = {
          zoom:7,
          center: {lat: toLat, lng: toLng}
        }

        let map = new google.maps.Map(document.getElementById('map'), options);
        // array of markers
        const markers = [
          {
            coordinatesObject: {lat: fromLat, lng: fromLng},
            content:`<h2>${result.data.sender_address}</h2>`
          },
          {
            coordinatesObject: {lat: toLat, lng: toLng},
            content:`${result.data.receiver_address}`
          }
        ];
        
        for(let i = 0; i < markers.length; i++){
          addmarker(markers[i]);
        }

        // add marker function
        function addmarker(properties){
          let marker = new google.maps.Marker({
            position: properties.coordinatesObject,
            map:map
          });
          
          if(properties.content){
            let infoWindow = new google.maps.InfoWindow({
            content: properties.content
            });

            marker.addListener('click', () => {
            infoWindow.open(map, marker);
          })
          }
        }
      });
    });
  })
  .catch(error => {
    console.log(error);
  })
  
}

function geocode(address){      
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
    params: {
      address,
      key: 'AIzaSyA5ClUSuBJwu_AyLCcj-qDia_xuQkcteJI'
    }
  })
}

function fetchApi(){
  const id = parseInt(window.location.search.split('?')[1]);
  const url = `https://eneojo-sendit.herokuapp.com/api/v1/parcels/${id}`;
  let fetchData = { 
    method: 'GET', 
    headers: {
      'Content-Type': 'Application/json',
      'Authorization' : `Bearer ${token}`
    }
  }
  
  return fetch(url, fetchData);
  
}
