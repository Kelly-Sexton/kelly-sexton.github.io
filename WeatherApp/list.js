


// var url = "http://rest.learncode.academy/api/learncode/friends";

// $.ajax(url, {method:"GET"}).done(function(data) {
//     .append("#list")
// });


// var data = [“Michael”, “Kelly”]  // would be .done? or .html?

// for(var i in data) {
// 	var text = data[i];

// for(var index in data) {
// 	var text = data[index];
// 	$(“#list”).append(“<li>” + text “<li>”);
// }












// var url = "http://rest.learncode.academy/api/learncode/friends/57e2c0c91ebec60100061861";

// $.ajax(url, { method: ”GET” })
//     .done(function (data) {
//         // //.append() .prepend()
//         // $(“#list”).html
//         // (data.name + “ abc “ +
//         // data.drink);
//         for (var i in data) {
//             var text = data[i];
//         }

//         for (var index in data) {
//             var text = data[index];
//         }

//         $.(“#list”).append(“<li>” + text “<li>”) }

$(function() {

var zip =("#textinput")

var googleUrl= "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=AIzaSyD_GFnLVIgSuZ1ajEX4BvU3fTERUCC1qbA
")

var var darkSkyKey = "<your key here>";

var LAT = "";

var LONG = "";
   
$.ajax(googleUrl)
    .done(function (data) {
    $(data.LAT, data.LONG).append(LAT, LONG);
});
   
   $.ajax("https://api.darksky.net/forecast/" + b7bc09fbf528eaf0b0cb02eeb7fbf8a4 + LAT + LONG, { dataType: "jsonp"}).done(function(data) {
       console.log(data);
   });




});