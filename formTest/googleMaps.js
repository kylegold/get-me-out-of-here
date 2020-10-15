function initMap(userReport) {
  // initialize
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  // initialize google map opject at the map id div .. setting initial position to center of usa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 39.8283, lng: -98.5795 },
  });
  directionsRenderer.setMap(map);
  // run calculate function
  calculateAndDisplayRoute(directionsService, directionsRenderer, userReport);
  console.log(airportList[0]);
  // // change mode of transport (listen event)
  document.getElementById("mode").addEventListener("change", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer, userReport);
  });
}
// this function will actually calculate the route
function calculateAndDisplayRoute(
  directionsService,
  directionsRenderer,
  userReport
) {
  // this will link the mode id to the selectMode option object
  const selectedMode = document.getElementById("mode").value;
  directionsService.route(
    {
      // origin user city choice
      origin: {
        lat: parseFloat(userReport.lat),
        lng: parseFloat(userReport.long),
      },
      // destination of closest airport in mexico or canada
      destination: { lat: airportList[0].lat, lng: airportList[0].long },
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
        // console.log(response)
        console.log("Start Address: " + response.routes[0].legs[0].start_address)
        console.log("End Address: " + response.routes[0].legs[0].end_address)
        console.log("Duration: " + response.routes[0].legs[0].duration.text)
        console.log("Distance (miles): " + response.routes[0].legs[0].distance.text)
        $('#startLocation').text("Start address: " + response.routes[0].legs[0].start_address)
        $('#endLocation').text("End address: " + response.routes[0].legs[0].end_address)
        $('#directionsDuration').text("Duration: " + response.routes[0].legs[0].duration.text)
        $('#directionsDistance').text("Distance (miles): " + response.routes[0].legs[0].distance.text)
      }
      // catch
      else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}
