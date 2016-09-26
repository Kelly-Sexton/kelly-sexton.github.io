$(function () {
    var darkSkyKey = "b7bc09fbf528eaf0b0cb02eeb7fbf8a4";
    var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
   
   $("#zipButton").click(function(data){
        var zip = $("#zipBox").val();
            $.ajax(googleUrl + zip + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")
                .done(function(data){
                    var lng = (data.results[0].geometry.location.lng);
                    var lat = (data.results[0].geometry.location.lat);                      
                    $("#card1").append("<center>" + data.results[0].formatted_address + " ");
    $.ajax("https://api.darksky.net/forecast/b7bc09fbf528eaf0b0cb02eeb7fbf8a4/" + lat + "," + lng,
        { dataType: "jsonp"})
            .done(function(data) {
                $("#card1")
                    .append("Temp " + Math.round(data.currently.temperature) + " " )
                    .append("Precipitation " + Math.round(data.currently.precipProbability) + "% ")
                    .append("MinTemp " + Math.round(data.daily.data[0].temperatureMin) + " ")
                    .append("MaxTemp " + Math.round(data.daily.data[0].temperatureMax) + " "); 
            })
        })
    })



   $("#zipButton2").click(function(data){
        var zip2 = $("#zipBox2").val();
            $.ajax(googleUrl + zip2 + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")
                .done(function(data){
                    var lng2 = (data.results[0].geometry.location.lng);
                    var lat2 = (data.results[0].geometry.location.lat);                      
                    $("#card2").append("<center>" + data.results[0].formatted_address + " ");
    $.ajax("https://api.darksky.net/forecast/b7bc09fbf528eaf0b0cb02eeb7fbf8a4/" + lat2 + "," + lng2,
        { dataType: "jsonp"})
            .done(function(data) {
                $("#card2")
                    .append("Temp " + Math.round(data.currently.temperature) + " " )
                    .append("Precipitation " + Math.round(data.currently.precipProbability) + "% ")
                    .append("MinTemp " + Math.round(data.daily.data[0].temperatureMin) + " ")
                    .append("MaxTemp " + Math.round(data.daily.data[0].temperatureMax) + " "); 
            })
        })
    })


   $("#zipButton3").click(function(data){
        var zip3 = $("#zipBox3").val();
            $.ajax(googleUrl + zip3 + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")
                .done(function(data){
                    var lng3 = (data.results[0].geometry.location.lng);
                    var lat3 = (data.results[0].geometry.location.lat);                      
                    $("#card3").append("<center>" + data.results[0].formatted_address + " ");
    $.ajax("https://api.darksky.net/forecast/b7bc09fbf528eaf0b0cb02eeb7fbf8a4/" + lat3 + "," + lng3,
        { dataType: "jsonp"})
            .done(function(data) {
                $("#card3")
                    .append("Temp " + Math.round(data.currently.temperature) + " " )
                    .append("Precipitation " + Math.round(data.currently.precipProbability) + "% ")
                    .append("MinTemp " + Math.round(data.daily.data[0].temperatureMin) + " ")
                    .append("MaxTemp " + Math.round(data.daily.data[0].temperatureMax) + " "); 
            })
        })
    })



   $("#zipButton4").click(function(data){
        var zip4 = $("#zipBox4").val();
            $.ajax(googleUrl + zip4 + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")
                .done(function(data){
                    var lng4 = (data.results[0].geometry.location.lng);
                    var lat4 = (data.results[0].geometry.location.lat);                      
                    $("#card4").append("<center>" + data.results[0].formatted_address + " ");
    $.ajax("https://api.darksky.net/forecast/b7bc09fbf528eaf0b0cb02eeb7fbf8a4/" + lat4 + "," + lng4,
        { dataType: "jsonp"})
            .done(function(data) {
                $("#card4")
                    .append("Temp " + Math.round(data.currently.temperature) + " " )
                    .append("Precipitation " + Math.round(data.currently.precipProbability) + "% ")
                    .append("MinTemp " + Math.round(data.daily.data[0].temperatureMin) + " ")
                    .append("MaxTemp " + Math.round(data.daily.data[0].temperatureMax) + " "); 
            })
        })
    })



   $("#zipButton5").click(function(data){
        var zip5 = $("#zipBox5").val();
            $.ajax(googleUrl + zip5 + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")
                .done(function(data){
                    var lng5 = (data.results[0].geometry.location.lng);
                    var lat5 = (data.results[0].geometry.location.lat);                      
                    $("#card5").append("<center>" + data.results[0].formatted_address + " ");
    $.ajax("https://api.darksky.net/forecast/b7bc09fbf528eaf0b0cb02eeb7fbf8a4/" + lat5 + "," + lng5,
        { dataType: "jsonp"})
            .done(function(data) {
                $("#card5")
                    .append("Temp " + Math.round(data.currently.temperature) + " " )
                    .append("Precipitation " + Math.round(data.currently.precipProbability) + "% ")
                    .append("MinTemp " + Math.round(data.daily.data[0].temperatureMin) + " ")
                    .append("MaxTemp " + Math.round(data.daily.data[0].temperatureMax) + " "); 
            })
        })
    })


   $("#zipButton6").click(function(data){
        var zip6 = $("#zipBox6").val();
            $.ajax(googleUrl + zip6 + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA")
                .done(function(data){
                    var lng6 = (data.results[0].geometry.location.lng);
                    var lat6 = (data.results[0].geometry.location.lat);                      
                    $("#card6").append("<center>" + data.results[0].formatted_address + " ");
    $.ajax("https://api.darksky.net/forecast/b7bc09fbf528eaf0b0cb02eeb7fbf8a4/" + lat6 + "," + lng6,
        { dataType: "jsonp"})
            .done(function(data) {
                $("#card6")
                    .append("Temp " + Math.round(data.currently.temperature) + " " )
                    .append("Precipitation " + Math.round(data.currently.precipProbability) + "% ")
                    .append("MinTemp " + Math.round(data.daily.data[0].temperatureMin) + " ")
                    .append("MaxTemp " + Math.round(data.daily.data[0].temperatureMax) + " "); 
            })
        })
    })

})
