// 05_variables_warmup_4 JavasScript code
function showHoursAndMinutes(){
    console.log("hello");

    var hourMinute =
    Number(document.getElementById("txtMinutes").value);
    console.log(hourMinute);

    var hours = Math.trunc(hourMinute/60).toFixed(0);
    console.log(hours);

    var minutes = hourMinute%60;
    console.log(minutes);

    document.getElementById("pOutput").innerHTML = hours + " hours & " + minutes + " minutes";
}
