// Dependencies / DOM Elements
var userChoice;

// Create an onclick once user enters information into form
$("#submit-btn").on("click", function(event){
//    userChoice = $("#userInput").val();
   userChoice = "USA";
   console.log(userChoice);
   searchQuery = "https://covid-19-statistics.p.rapidapi.com/provinces?iso=" + userChoice 
   console.log(searchQuery);
   const settings = {
            async: true,
            crossDomain: true,
            url: "https://covid-19-statistics.p.rapidapi.com/provinces?iso=" + userChoice,
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