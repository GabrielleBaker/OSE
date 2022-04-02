function randomInteger(from, to) {
    // Return randomizedNumber between 'from' and 'to'.
    var value = Number(Math.floor(Math.random()*6)+1);
       return value;
}

function rollTheDice() {
    // Call the function randomInteger(from, to) with parameter values 1 and 6.
    var diceValue = randomInteger(1,6);
    // Assign the return value of the function to the variable.
    
    document.getElementById("dice").innerHTML=diceValue;
    return diceValue;
}