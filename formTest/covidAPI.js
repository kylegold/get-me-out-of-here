// Dependencies / DOM Elements
var userChoice;

// Create an onclick once user enters information into form
$("#submit-btn").on("click", function (event) {
  userChoice = $("#userInput").val();
  userChoice = "";
  console.log(userChoice);

  //   var searchQuery =
  //     "https://covid-19-statistics.p.rapidapi.com/provinces?iso=" + userChoice;
  //   console.log(searchQuery);

  var queryUrl =
    "https://rapidapi.p.rapidapi.com/reports?iso=USA&region_name=US&city_name=" +
    userChoice +
    "&date=2020-04-16";
  console.log(queryUrl);

  const settings = {
    async: true,
    crossDomain: true,
    url: queryUrl,
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "07058048ffmshe16787ad7b4eeffp1c88f9jsn4040b743a04a",
    },
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    testResults = response;
  });
});
// Display city into DOM

// Open Covid AJAX API and compare to location

// User looks at returned results and chooses

// We need to take testResults value (string) and compare it to Total Report.Data.Confirmed
// ---------------------------------------------------------------------------------------------------------------
// <!-- Get user State information -->
// <!-- look into data [0] -->
// <!-- look into region object -->
// <!-- look into the cities array -->
// <!-- loop through the cities array or use a filter method to now only have the cities within the State -->
// <!-- if city now you have access to specific city covid data-->
// <!-- else city does not exist choose new city -->
