// 09.array_example_2.js JavasScript code

function insertValue() {
    //get input
    var Name = document.getElementById("Nameinput").value; 
    var Age = document.getElementById("Ageinput").value;

    //if input is incorrect format
if (Age.trim() === "" || isNaN(Age) || Name.trim() === "" || !isNaN(Name)){ 
    document.getElementById("divOutput").innerHTML = "Please enter valid characters, for Name field: letters A-Z, for Age field numbers 0-99";
    
    Nameinput.value = ""; //clear input fields
    Ageinput.value="";
    Nameinput.focus();
}
    //if input is correct proceed
else{ 
    ageArray.push(Age);        // Adds a new element to the end of the arrays
    nameArray.push(Name);
    
    
    Nameinput.value = "";   //clears input fields
    Ageinput.value="";
    Nameinput.focus();           // Moves the cursor to the input field

    var outputText = ageArray.length + " members"; //shows member numbers

    document.getElementById("divOutput").innerHTML = outputText;}

}

var nameArray = [];     // Creates an empty array to push data into
var ageArray = [];

//function to get all minors from age array
function minors(){
    var outputminor = "";
    for(i=0; i< ageArray.length; i++){
        if(ageArray[i] < 18){
        outputminor = outputminor  + nameArray[i]+ ", " + ageArray[i]+ " years. <br>"; //output is previous entry plus new entry to show all entries
    }   
}
document.getElementById("divOutputage").innerHTML = outputminor;
}

function adults(){
    var outputadult = "";
    for(i = 0; i < ageArray.length; i++){
        if (ageArray[i] > 18){
        outputadult = outputadult + nameArray[i] + ", " + ageArray[i] + " years. <br>";
        }
    }
    document.getElementById("divOutputage").innerHTML = outputadult;
}

function old(){
    var oldest = 0;
    var outputold = "";
    for(i = 0; i < ageArray.length; i++){
        if (ageArray[i] > oldest){
        oldest = ageArray[i];
        }
    }

    for(i = 0; i < ageArray.length; i++){
        if (ageArray[i] === oldest){
            outputold = outputold + nameArray[i] + ", " + ageArray[i] + " years. <br>";
        }
    }
    document.getElementById("divOutputage").innerHTML = outputold;
}

function young(){
    var youngest = 1;
    var outputyoung = "";
    for(i = 0; i < ageArray.length; i++){
        if (ageArray[i] <= youngest){
        youngest = ageArray[i];
        }
    }

    for(i = 0; i < ageArray.length; i++){
        if (ageArray[i] === youngest){
            outputyoung = outputyoung + nameArray[i] + ", " + ageArray[i] + " years. <br>";
        }
    }
    document.getElementById("divOutputage").innerHTML = outputyoung;
}