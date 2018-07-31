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



