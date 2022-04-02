
    var wordArray = ["Actions speak louder than words", "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.",
     "If you lie down with dogs, you wake up with fleas.", "A barking dog never bites.", "Imitation is the sincerest form of flattery."];
    
    var randomNumber = Math.floor(Math.random() * wordArray.length);

    var outputText = wordArray[randomNumber];

    document.getElementById("pOutput").innerHTML= outputText;

