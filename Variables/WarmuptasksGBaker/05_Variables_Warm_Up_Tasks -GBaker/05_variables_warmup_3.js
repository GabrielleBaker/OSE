// 05_variables_warmup_3 JavasScript code
function showMinutes() {
    var hours =
    Number(document.getElementById("txtHours").value);
    console.log(hours);

    var minutes =
    Number(document.getElementById("txtMinutes").value);
    console.log(minutes);

    var totalMinutes =
    Number(hours)*60 + Number(minutes);
    console.log(totalMinutes);

    document.getElementById("pOutput").innerHTML= totalMinutes + "minutes";
}
