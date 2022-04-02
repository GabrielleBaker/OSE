function calculateBMI() {
    var weight = Number(document.getElementById("weight").value);
      //declare var weight and assign value
    var height = Number(document.getElementById("height").value);
      //declare var height and assign value
    var bmi = Number(weight / (height/100.0 * height/100.0)).toFixed(2);
      //calculate bmi using weight and height
    var weightRange
    //declaring weight range assign values here later
  if (bmi <= 18.4){
    //underweight stipulations and value declared to weightRange 
    weightRange = "Body Mass Index (BMI) is " + bmi + " (Weight less than normal weight)";
  }
    else if (bmi >= 18.5 && bmi <=24.9){
      //normal weight stipulations and value declated to weightRange
      weightRange = "Body Mass Index (BMI) is " + bmi + " (Normal weight)";
  }
		else {
      //anything other than underweight or normalweight =overweight
      weightRange = "Body Mass Index (BMI) is " + bmi + " (Overweight)";
      }
 document.getElementById("answer").innerHTML= weightRange;   
}
