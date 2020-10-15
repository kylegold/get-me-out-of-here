// COVID-19 Statistics API
// - https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics?endpoint=apiendpoint_aad07092-4297-48f8-ae76-849cf549b192


// loop - for every 'stateList' entry...;
for (i = 0; i < stateList.length; i++) {
  // - create option tag; apply the state to the value of <option>; append option to select '.stateDropdown';
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
var userReport;

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
          findDistance(userReport);
          browseRoutes();
          initMap(userReport)
          // map needs to be called from this click event
          report = $("<h1>")
            .text(userReport.name + " confirmed cases: " + userReport.confirmed)
            .attr("id", "reportElement");
          $("body").append(report);
        }
      }
    });
  });
});
