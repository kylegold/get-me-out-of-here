// Distance Calculator
// Utility*
function distance(lat1, lon1, lat2, lon2, unit) {
	// - if the latitudes and longitudes are the same return 0 distance;
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		// - converts latitudes to radians;
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		// - finds theta; then the radian value of theta;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		// - Caluculus! - triangle math;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		// - distance to arccosine; distance multiplied by circumference; unit conversion;
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		// Unit converters - kilometers; nautical
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

// Find Distance
//
function findDistance (userReport){
	// loop - for every entry on the airport list...;
    for (i =0; i < airportList.length; i++){
		// - convert users selected city latitude and longitude to an integer;
        var selectedLat =  parseFloat(userReport.lat) 
		var selectedLong = parseFloat(userReport.long)
		// - establish the latitude and longitude og the current airport entry;
        airLat = airportList[i].lat
		airLong = airportList[i].long
		// - determine distance between two places;
		var  distanceFrom = distance(selectedLat, selectedLong, airLat, airLong, 'K')
		// - append that distance to airport list;
        airportList[i].dist = distanceFrom
	}
	// - sort list by dist, lowest to highest;
    airportList.sort((a,b) => a.dist - b.dist)
    console.log(airportList[0]);
}


