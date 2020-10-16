
var todaysDate = new Date();

function convertDate(date) {
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth()+1).toString();
  var dd  = (date.getDate()+1).toString();

  var mmChars = mm.split('');
  var ddChars = dd.split('');

  return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
}


function browseRoutes(){
	var userCountry = airportList[0].cur.substring(0,2)
	console.log(userCountry);
	var userCurrency = airportList[0].cur
	console.log(userCurrency);
	var locale = 'en-US'
	var originPlace = airportList[0].code
	console.log(originPlace);
	var destinationPlace = safeZone[Math.floor(Math.random() * safeZone.length)].code;
	console.log(destinationPlace);
	var userOutDate = convertDate(todaysDate);
	console.log(userOutDate);
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://rapidapi.p.rapidapi.com/apiservices/browseroutes/v1.0/" + userCountry + "/" + userCurrency + "/" + locale + "/" + originPlace + "-sky/" + destinationPlace + "-sky/" + userOutDate,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "4ddfa0ddd8mshc80ad8ca9e9c972p19ec1bjsn3d5ff1634bdc"
		}
	};
	console.log(settings.url);
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log(response.Quotes.length);
		console.log(response.Quotes[0].OutboundLeg.CarrierIds[0])
		for (var i = 0 ; i < response.Quotes.length ; i++) {
			console.log(response.Quotes[i].OutboundLeg.CarrierIds[0])
			var responseCarrierId = response.Quotes[i].OutboundLeg.CarrierIds[0].toString();
			var responseMinPrice = response.Quotes[i].MinPrice
			var responseDepartureDate = response.Quotes[i].OutboundLeg.DepartureDate

			var flightOverview = $('<h3>')
			$(flightOverview).text("Flight Information: ")
			$("#skyscanner").append(flightOverview);
			var carrierId = $('<h4>')
			$(carrierId).text("Carrier Id: " + responseCarrierId)
			$("#skyscanner").append(carrierId);
			
			response.Carriers.forEach(carrier => {
				console.log(carrier)
				if(response.Quotes[i].OutboundLeg.CarrierIds[0] === carrier.CarrierId){
				var airlineName = $('<h4>')
			$(airlineName).text("Airline Name: " + carrier.Name)
			$("#skyscanner").append(airlineName);
			// response.Places.forEach(place => {
			// 	console.log(place)
			// 	var destinationLocation = $('<h4>')
			// $(destinationLocation).text("Flight Route: " + place.CityName + ", " + place.CountryName + " | " + place.Name + ", " + place.SkyscannerCode)
			// $("#skyscanner").append(destinationLocation);

			// });
				}
				else {
					console.log("no flights available")
				}
			});


			var minimumPrice = $('<h4>')
			$(minimumPrice).text("Minimum Price: (" + response.Currencies[0].Code + ") " + responseMinPrice)
			$("#skyscanner").append(minimumPrice);
			var departureDate = $('<h4>')
			$(departureDate).text("Departure Date: " + responseDepartureDate)
			$("#skyscanner").append(departureDate);
			// var horizontalRule = $('<hr>');
			// $('#skyscanner').append(horizontalRule);
		}
		
	});
}
