function initMap(userReport) {
  // initialize 
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  // initialize google map opject at the map id div .. setting initial position to center of usa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: parseFloat(userReport.lat), lng: parseFloat(userReport.long) },
  });
  directionsRenderer.setMap(map);
  // run calculate function 
  calculateAndDisplayRoute(directionsService, directionsRenderer, userReport);
  console.log(airportList[0])
  // // change mode of transport (listen event)
  // document.getElementById("mode").addEventListener("change", () => {
  //   calculateAndDisplayRoute(directionsService, directionsRenderer, userReport);
    
  // });
}
// this function will actually calculate the route
function calculateAndDisplayRoute(directionsService, directionsRenderer, userReport) {
  // this will link the mode id to the selectMode option object
  const selectedMode = document.getElementById("mode").value;
  directionsService.route(
    {
      // origin user city choice
      origin: { lat: parseFloat(userReport.lat), lng: parseFloat(userReport.long) },
      // destination of closest airport in mexico or canada
      destination: { lat: airportList[0].lat , lng: airportList[0].long },
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      // this will allow user to select mode of transportation
      travelMode: google.maps.TravelMode[selectedMode],
    },
    // if finds directions
    (response, status) => {
      if (status == "OK") {
        directionsRenderer.setDirections(response);
      }
      // catch 
      else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}