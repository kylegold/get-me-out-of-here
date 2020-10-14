// loop - for every 'data' entry...;
for (i = 0; i < statesList.length; i++) {
  // - create option tag; apply the 'province' to the value of <option>; append option to select '.stateDropdown';
  var provinceOption = $("<option></option>");
  provinceOption.attr("value", statesList[i].name).text(statesList[i].name);
  $("#userState").append(provinceOption);
}

$("#userState").on("change", function () {
  event.stopPropagation();
  $("#userCity").children().remove().end();
  userState = $("#userState").val();
  console.log(userState);

  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://rapidapi.p.rapidapi.com/reports?region_province=" +
      encodeURIComponent(userState),
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      "x-rapidapi-key": "07058048ffmshe16787ad7b4eeffp1c88f9jsn4040b743a04a",
    },
  };
  console.log(settings.url);
  $.ajax(settings).done(function (response) {
    citiesData = response.data[0].region.cities;
    console.log(citiesData);
    for (i = 0; i < citiesData.length; i++) {
      var cityOption = $("<option></option>");
      cityOption.attr("value", citiesData[i].name).text(citiesData[i].name);
      $(".cityDropdown").append(cityOption);
    }
    $("#submit-btn").off("click");
    $("#submit-btn").on("click", function (event) {
      $("#reportElement").remove().end();
      event.stopPropagation();
      userCityInput = $("#userCity").val();
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
// object returned as a response
// <!-- look into data[0] -->
// <!-- look into region object (region.cities) -->
// <!-- loop through the region.cities array now populate a dropdown of  only have the cities within the State -->
// <!-- if city now you have access to specific city covid data-->
// <!-- else city does not exist choose new city -->
