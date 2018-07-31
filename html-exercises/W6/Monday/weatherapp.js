(function() {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=Houston,us";
    var apiKey = "de46350de722004ffde134dedbcef92c";

    $.get(url, '&appid=' + apiKey)
    .done(function(response) {
        console.log(response);
        updateUISuccess(response)
    })
    .fail(function(error){
        console.log(error);

        updateUIError()
    });
    function updateUISuccess(response) {

        var condition = response.weather[0]. main;
        console.log(condition);

        var degC = response.main.temp - 273.15;
        var degF = degC * 1.8 + 32
        console.log(degC);

        var degCInt = Math.floor(degC);
        var degFInt = Math.floor(degF);

        console.log(degCInt);
            // var weatherBox = document.getElementById("weather");
            // weatherBox.innerHTMl = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p?" + conditon + "</p>";
            var $weatherBox = $('#weather');
            $weatherBox.append("<p> Temperature: " + degCInt + "&#176; C / " + degFInt + "&#176; F </p><p>Condition: " + condition + "</p>");
    }

    function updateUIError() {
        // var weatherBox = document.getElementById("weather");
		// weatherBox.className = "hidden";
		var $weatherBox = $('#weather');
		$weatherBox.addClass('hidden');
    }

    
    
})();

(function(){

    $("#submitWeather").click(function(){
        var url = "http://api.openweathermap.org/data/2.5/weather?q=";
        var city = $("#city").val();
        var apiKey = "de46350de722004ffde134dedbcef92c";
        var units  = "&units=metric";

        if(city != ""){
            $.get(url + city + units + '&appid=' + apiKey)
            .done(function(data) {
                console.log(data);
                updateUISuccess(data)
            })
            .fail(function(error){
                console.log(error);
        
                updateUIError()
            });
            function updateUISuccess(data) {
                var cityName = data.name;
                var country = data.sys.country;
                console.log(cityName);
                console.log(country);

                var degC = data.main.temp
                var degF = degC * 1.8 + 32;
                console.log(degC);


                var $showWeatherBox = $('showWeather');
                $showWeatherBox.append("<p> City: " + cityName + ", " + country + "</p><p>Temperature: " + degC + "&#176; C / " + degF + "&#176; F </p>");
            }
        }

        else{
            $("error").html("Field cannot be empty")
        }
    });


    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "de46350de722004ffde134dedbcef92c";

    var button = select('#submitWeather');
    button.mousePressed(weatherAsk);
    input = select('#city');

    $.get(url + value.input() + '&appid=' + apiKey)
    .done(function(response) {
        console.log(response);
        updateUISuccess(response)
    })
    .fail(function(error){
        console.log(error);

        updateUIError()
    });
    function updateUISuccess(response) {

    };
})();

