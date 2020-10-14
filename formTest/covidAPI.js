// Covid-19 API
// 


// loop - for every 'stateList' entry...;
for (i = 0; i < stateList.length; i++) {
  // - create option tag; apply the 'province' to the value of <option>; append option to select '.stateDropdown';
  var provinceOption = $("<option></option>");
  provinceOption.attr("value", stateList[i].name).text(stateList[i].name);
  $("#userState").append(provinceOption);
}

// 'Change' EVENT - when user selects a state...;
$("#userState").on("change", function () {
  // - clear old cities in citiesDropdown; pull; establish what user selected;
  $("#userCity").children().remove().end();
  userState = $("#userState").val();

  // Settings - from rapidAPI; 
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://rapidapi.p.rapidapi.com/reports?region_province=" +
      // - plug in user state choice; 
      encodeURIComponent(userState),
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "07058048ffmshe16787ad7b4eeffp1c88f9jsn4040b743a04a",
    },
  };

  // Ajax - from rapidAPI;
  $.ajax(settings).done(function (response) {
    // - take response from covidAPI;
    citiesData = response.data[0].region.cities;
    // loop - for every city entry...;
    for (i = 0; i < citiesData.length; i++) {
      // - create <option> tag; assign value & text to tag; append list to cityDropdown;
      var cityOption = $("<option></option>");
      cityOption.attr("value", citiesData[i].name).text(citiesData[i].name);
      $(".cityDropdown").append(cityOption);
    }
    // - remove old submit Event; add new submit Event;
    $("#submit-btn").off("click");
    $("#submit-btn").on("click", function (event) {
      // remove old 'report'; take user choice from userCityInput;
      $("#reportElement").remove().end();
      userCityInput = $("#userCity").val();
      // Loop - for every city listed; if the user choice matches a list entry...; 
      for (i = 0; i < citiesData.length; i++) {
        if (citiesData[i].name == userCityInput) {
          console.log("works");
          console.log(citiesData[i]);
          console.log(i);
          userReport = citiesData[i];
          report = $("<h1>")
            .text(userReport.name + " confirmed cases: " + userReport.confirmed)
            .attr("id", "reportElement");
          $("body").append(report);
        }
      }
    });
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
