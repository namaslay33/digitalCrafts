$('#submitWeather').on('click',(function() {  

    console.log("this function is firing")
    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "de46350de722004ffde134dedbcef92c"; // Replace "APIKEY" with your own API key;
   


    $('#submitWeather').on('click' , (i) => {
        var city = $("#city").val();
        // i.preventDefault();



    $.get(url + city + '&appid=' + apiKey)
    .done(function(response) {

        console.log(response);
        updateUISuccess(response)
        
    })
    .fail(function(error) {
        console.log(error);
        
        updateUIError()
            
    });

    
    function updateUISuccess(response) {

        var condition = response.weather[0].main;
        console.log(condition);
        
        var degC = response.main.temp - 273.15;

        console.log(degC);
        
        var degCInt = Math.floor(degC);
        
        console.log(degCInt);

        var degF = degC * 1.8 + 32;
        
        console.log(degF);
        var degFInt = Math.floor(degF);
        console.log(degFInt);
        
        
        var weatherBox = document.getElementById("showWeather");
        weatherBox.innerHTML = "<p>Temperature: " + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p> Condition: " + condition + "</p>";
    }

    // handle XHR error
    function updateUIError() {
        var $weatherBox = $('#showWeather');
        $weatherBox.addClass('hidden');
    }
})

}));
