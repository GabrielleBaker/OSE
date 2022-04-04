function processName() {
    //get the input
    var name = document.getElementById("name").value;
    //change name to uppercase
    document.getElementById("upperCase").innerHTML = "With upper case letters: " + name.toUpperCase();
    //change name to lowercase
    document.getElementById("lowerCase").innerHTML = "With lower case letters: " + name.toLowerCase();
    //check length of name inlc white space
    document.getElementById("length").innerHTML = "Character count: " + name.length;
    
    var muumiIndex;
    //check if muumi exists in text and use the output of indexOf to generate correct response
if(name.indexOf('muumi') === -1){
    muumiIndex = "Doesn't contain the text muumi."
}  
else{
    muumiIndex = "Contains the text muumi."
}
    //print index of answer in human readable response to html
    document.getElementById("contains").innerHTML = muumiIndex;
    //check first character, remember it starts from zero
    document.getElementById("firstCharacter").innerHTML = "First character: " + name.charAt(0);

    document.getElementById("manyCharacters").innerHTML = "First three characters: " + name.substr(0, 3);
    // tell which ones are the first three characters using subStr().
   
}