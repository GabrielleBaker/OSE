// 05_variables_warmup_2 JavasScript code

function add() {
    console.log("hello");
    //delcare variables making them numbers
    var numberOne = 
    Number(document.getElementById("txtFirst").value);
   // console.log(numberOne);
    var numberTwo = 
    Number(document.getElementById("txtSecond").value);
  //  console.log(numberTwo);
    var addition = 
    Number(numberOne)+Number(numberTwo); 
   // console.log(addition);
    //display the output
    document.getElementById("pOutput").innerHTML= numberOne + "+" + numberTwo + "=" + addition;
}
