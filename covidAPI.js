// Dependencies / DOM Elements
var userChoice;

// Create an onclick once user enters information into form
$("#submit-btn").on("click", function(event){
   userChoice = $("#userInput").val();
    const settings = {
            async: true,
            crossDomain: true,
            url: "https://rapidapi.p.rapidapi.com/reports?region_province=" + userChoice,
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

$.ajax(settings).done(function (response) {
    console.log(response);
});

// User looks at returned results and chooses
response.push()
