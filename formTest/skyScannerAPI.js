// Get to SkyScanner
// 

// Header Parameters
// - 

// Required Parameters*
// - countryString var;
// - currency var ;
// - locale = 'en-US';
// - originPlace;
// - destinationPlace;
// - departureDate = [“yyyy-mm-dd”, “yyyy-mm” or “anytime”];

// optional parameters*
// - returnDate “yyyy-mm-dd”, “yyyy-mm” or “anytime”;
// - shortApiKey 'ra66933236979928';

// 

// 

// 

// List Places
// Get a list of places that match a query string.

// Required Parameters*
// - queryString = 'Stockholm';
// - countryString = 'UK'; // - where is your user*
// - currencyString = 'GDP'
// - locale = 'en-US'
// "url": "https://rapidapi.p.rapidapi.com/apiservices/browseroutes/v1.0/userCountry/userCurrency/en-US/originPlace/destinationPlace/userOutDate",

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
	var destinationPlace = 'TIJ';
	var userOutDate = convertDate(todaysDate);
	console.log(userOutDate);
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://rapidapi.p.rapidapi.com/apiservices/browseroutes/v1.0/" + userCountry + "/" + userCurrency + "/" + locale + "/" + originPlace + "-sky/" + destinationPlace + "-sky/" + userOutDate,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "07058048ffmshe16787ad7b4eeffp1c88f9jsn4040b743a04a"
		}
	};
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
}
