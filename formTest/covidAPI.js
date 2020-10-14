// Dependencies / DOM Elements
var userChoice;

// Create an onclick once user enters information into form
// $("#submit-btn").on("click", function(event){
//    userChoice = $("#userInput").val();
//    userChoice = "";
//    console.log(userChoice);
//    searchQuery = "https://rapidapi.p.rapidapi.com/reports?region_province=" + userChoice + 
//    console.log(searchQuery);
//    const settings = {
//             async: true,
//             crossDomain: true,
//             // url: "https://covid-19-statistics.p.rapidapi.com/provinces?iso=" + userChoice,
//             method: "GET",
//             headers: {
//                 "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
//                 "x-rapidapi-key": "07058048ffmshe16787ad7b4eeffp1c88f9jsn4040b743a04a",
//             },
//         };
//         $.ajax(settings).done(function (response) {
//             console.log(response);
//             testResults = response;
//         });
var statesList = [
            {
                name: "Alabama",
                abbreviation: "AL",
            },
            {
                name: "Alaska",
                abbreviation: "AK",
            },
            {
                name: "Arizona",
                abbreviation: "AZ",
            },
            {
                name: "Arkansas",
                abbreviation: "AR",
            },
            {
                name: "California",
                abbreviation: "CA",
            },
            {
                name: "Colorado",
                abbreviation: "CO",
            },
            {
                name: "Connecticut",
                abbreviation: "CT",
            },
            {
                name: "Delaware",
                abbreviation: "DE",
            },
            {
                name: "District Of Columbia",
                abbreviation: "DC",
            },
            {
                name: "Florida",
                abbreviation: "FL",
            },
            {
                name: "Georgia",
                abbreviation: "GA",
            },
            {
                name: "Guam",
                abbreviation: "GU",
            },
            {
                name: "Hawaii",
                abbreviation: "HI",
            },
            {
                name: "Idaho",
                abbreviation: "ID",
            },
            {
                name: "Illinois",
                abbreviation: "IL",
            },
            {
                name: "Indiana",
                abbreviation: "IN",
            },
            {
                name: "Iowa",
                abbreviation: "IA",
            },
            {
                name: "Kansas",
                abbreviation: "KS",
            },
            {
                name: "Kentucky",
                abbreviation: "KY",
            },
            {
                name: "Louisiana",
                abbreviation: "LA",
            },
            {
                name: "Maine",
                abbreviation: "ME",
            },
            {
                name: "Maryland",
                abbreviation: "MD",
            },
            {
                name: "Massachusetts",
                abbreviation: "MA",
            },
            {
                name: "Michigan",
                abbreviation: "MI",
            },
            {
                name: "Minnesota",
                abbreviation: "MN",
            },
            {
                name: "Mississippi",
                abbreviation: "MS",
            },
            {
                name: "Missouri",
                abbreviation: "MO",
            },
            {
                name: "Montana",
                abbreviation: "MT",
            },
            {
                name: "Nebraska",
                abbreviation: "NE",
            },
            {
                name: "Nevada",
                abbreviation: "NV",
            },
            {
                name: "New Hampshire",
                abbreviation: "NH",
            },
            {
                name: "New Jersey",
                abbreviation: "NJ",
            },
            {
                name: "New Mexico",
                abbreviation: "NM",
            },
            {
                name: "New York",
                abbreviation: "NY",
            },
            {
                name: "North Carolina",
                abbreviation: "NC",
            },
            {
                name: "North Dakota",
                abbreviation: "ND",
            },
            {
                name: "Ohio",
                abbreviation: "OH",
            },
            {
                name: "Oklahoma",
                abbreviation: "OK",
            },
            {
                name: "Oregon",
                abbreviation: "OR",
            },
            {
                name: "Pennsylvania",
                abbreviation: "PA",
            },
            {
                name: "Puerto Rico",
                abbreviation: "PR",
            },
            {
                name: "Rhode Island",
                abbreviation: "RI",
            },
            {
                name: "South Carolina",
                abbreviation: "SC",
            },
            {
                name: "South Dakota",
                abbreviation: "SD",
            },
            {
                name: "Tennessee",
                abbreviation: "TN",
            },
            {
                name: "Texas",
                abbreviation: "TX",
            },
            {
                name: "Utah",
                abbreviation: "UT",
            },
            {
                name: "Vermont",
                abbreviation: "VT",
            },
            {
                name: "Virgin Islands",
                abbreviation: "VI",
            },
            {
                name: "Virginia",
                abbreviation: "VA",
            },
            {
                name: "Washington",
                abbreviation: "WA",
            },
            {
                name: "West Virginia",
                abbreviation: "WV",
            },
            {
                name: "Wisconsin",
                abbreviation: "WI",
            },
            {
                name: "Wyoming",
                abbreviation: "WY",
            },
        ];
        // loop - for every 'data' entry...;
        for (i = 0; i < statesList.length; i++) {
            // - create option tag; apply the 'province' to the value of <option>; append option to datalist '.provinceDropdown';
            var provinceOption = $("<option></option>");
            provinceOption.attr("value", statesList[i].name);
            $(".provinceDropdown").append(provinceOption);
        }

var userState = "";
// Starting with button onclick
$("#submit-btn").on("click", function (event) { 
  // <!-- Get user State information -->
  userState = $("#userInput").val();
  console.log(userState);
  encodeURIComponent(userState);

  //   var searchQuery =
  //     "https://covid-19-statistics.p.rapidapi.com/provinces?iso=" + userChoice;
  //   console.log(searchQuery);

  var queryUrl =
    "https://rapidapi.p.rapidapi.com/reports?q=" +
    userState +
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
// We need to take testResults value (string) and compare it to Total Report.Data.Confirmed
// ---------------------------------------------------------------------------------------------------------------
// <!-- Get user State information -->
// <!-- look into data [0] -->
// <!-- look into region object -->
// <!-- look into the cities array -->
// <!-- loop through the cities array or use a filter method to now only have the cities within the State -->
// <!-- if city now you have access to specific city covid data-->
// <!-- else city does not exist choose new city -->
