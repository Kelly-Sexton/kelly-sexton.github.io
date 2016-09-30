$(function () {

var key = "AIzaSyAw-h9MY80D8txnv_W8xnD8hdukx54Qxzo";

var idNum = 0;

function postInfo(locationData) {
  

  var template = $(".template").html();
  template = template.replace("@@IDNUM@@", idNum);
  template = template.replace("@@LOCATION@@", locationData.results[0].address_components[1].short_name);
  template = template.replace("@@LATITUDE@@", locationData.results[0].geometry.location.lat);
  template = template.replace("@@LONGITUDE@@", locationData.results[0].geometry.location.lng);
  $(".container").append(template);
 

  idNum++;

}
function getLocation(location) {
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key=" + key;
  $.ajax({
    url: url,
    success: postInfo
  });
}



  $("#addBtn").click(function() {
    var location = $("#locInput").val();
    
  
      getLocation(location);
      $("#locInput").val("").focus();
      console.log(location);

  

})

})

