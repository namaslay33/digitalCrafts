(function(){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=Houston,Texas";

    var apiKey = "9361bd03ec7175e9eea92fdf7a717518";

    var httpRequest;

    makeRequest()
    function makeRequest(){
        httpRequest = new XMLHttpRequest(); //creating xhr object

        httpRequest.onreadystatechange = funciton(){
            //block of information
        }

        httpRequest.open('Get', url, "&appid=" + apiKey);

        httpRequest.send();
    }

    function responseMethod(){
       if(httpRequest.readyState == 4 && httpRequest.status == 200){
           console.log(httpRequest.responseTest);
       }
       else{
           console.log("failed");
       }
    }
    


}) () //self invoking function