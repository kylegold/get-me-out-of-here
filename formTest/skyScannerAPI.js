
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
	var destinationPlace = unsafeZone[Math.floor(Math.random() * unsafeZone.length)].code;
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
		console.log(response.Quotes);
		flights = $("<h2>").css('text-align', 'center')
            .text(userReport.name + " confirmed cases: " + userReport.confirmed)
            .attr("id", "reportElement");
          $("#covid-information").append(report);
	});
}
