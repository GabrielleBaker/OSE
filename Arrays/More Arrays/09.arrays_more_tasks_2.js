// 09.array_warm_up_2.js JavasScript code
// Initially, this program can translate only three words (cat, dog, bird).
// Modify the program so that it can translate more words. 
// Please feel free to choose the words yourself.

function bloodCount() {
    var input = document.getElementById("txtInput").value;

    var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];
    var counter = 0; 
   for (i = 0; i < bloodTypes.length; i++) {
       if (bloodTypes[i] === input){
           counter = counter + 1;
           console.log("counter value " + counter);
       }

        var output = Number(counter / (bloodTypes.length) * 100);
    
    
}
document.getElementById("pOutput").innerHTML = input + " " + output + "percent";
}