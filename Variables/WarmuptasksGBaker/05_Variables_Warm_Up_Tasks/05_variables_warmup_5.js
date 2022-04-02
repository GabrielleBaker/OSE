// 05_variables_warmup_5 JavasScript code
function calculate(){
    console.log("hello");

    var startingBalance =
    Number(document.getElementById("txtStartingBalance").value);
    console.log(startingBalance);

    var interestRate =
    Number(document.getElementById("txtInterestRate").value);
    console.log(interestRate);

    var yearOne  =
    Number(startingBalance * Number(interestRate) / 100 + startingBalance).toFixed(2);
    console.log(yearOne); 

    var yearTwo =
    Number(yearOne * Number(interestRate) / 100 + Number(yearOne)).toFixed(2);
    console.log(yearTwo);

    document.getElementById("pOutput").innerHTML= "First-year: " + yearOne + ". " + "<br>" + 
    "Second-year: " + yearTwo;
}