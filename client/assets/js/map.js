
function initMap(){

geocode('290 ikwerre road, portharcourt', '#from')
  .then(res1 => {
    geocode('51 iweka road onitsha', '#to')
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
          content:`<h2>From location</h2>`
        },
        {
          coordinatesObject: {lat: toLat, lng: toLng},
          content:`<h2>To location</h2>`
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
}

function geocode(address){      
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
    params: {
      address,
      key: 'AIzaSyA5ClUSuBJwu_AyLCcj-qDia_xuQkcteJI'
    }
  })
}
// window.onload = initMap;