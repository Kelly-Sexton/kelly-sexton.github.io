$(function () {
    $("#submit").click(function () {
        var prebill = $("#bill").val();
        
        if(prebill == ""){
            alert("Please input bill amount.");
        } else{
        var prebill = $("#bill").val();
        var people = $("#people").val();
        var service = $("#service").val();
        // var service = "3";//prep it this way incase of selector value is a string
        var splitBill = (((parseFloat(prebill, 10) * 100) / parseFloat(people, 10)) / 100);
        var splitTip = (((parseFloat(prebill, 10) * 100) * parseFloat(service, 10)) / (parseFloat(people, 10)) / 10000); 
        var splitTotal = (splitBill + splitTip);
        var tip = "Tip $";
        var bill = "Bill $";
        var total = "Total $";
        $("#showTip").html("<h2>" + tip + splitTip.toFixed(2) + "</h2>")
        $("#showBill").html("<h2>" + bill + splitBill.toFixed(2) + "</h2>")
        $("#showTotal").html("<h2>" + total + splitTotal.toFixed(2) + "</h2>")


    }});
    
    $("#reset").click(function () {
        $("#showTip").html("<h2><h2>"
        )
        $("#showBill").html("<h2><h2>"
        )
        $("#showTotal").html("<h2><h2>"
        )


    });

bill.oninput = function () {
    if (this.value.length > 6)
        this.value = this.value.slice(0,6); 
}

people.oninput = function () {
    if (this.value.length > 1)
        this.value = this.value.slice(0,1); 
}



});

