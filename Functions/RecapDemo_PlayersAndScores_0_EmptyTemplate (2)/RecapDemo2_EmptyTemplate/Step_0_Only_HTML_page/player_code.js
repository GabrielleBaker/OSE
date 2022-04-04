var names = [];
var scores = [];

    //push names and scores into respective arrays
function pushArrays(){
    names.push(document.getElementById("txtName").value);
    scores.push(document.getElementById("txtScore").value);
    //clear input fields 
    txtName.value = "";
    txtScore.value = "";
}


//display string of players' names onclick
function listPlayers(){
    //get string from array
        var nameList= "";
    for(i=0; i < names.length; i++){
      nameList = nameList  + "<br>" + names[i];
}

    document.getElementById("pOutput").innerHTML = "List of players: " + nameList;
}

function Search(text){
    var text = document.getElementById("inputname").value;
    for (i=0; i < names.length; i++){
        if (text === names[i]){
            var name = names[i];
            var score = scores[i];
            var output = "Player: " + name + "<br> Score: " + score;
        }
        else{
            output = "Insert a valid name to search the database";
        }
    }
    inputname.value = "";
    document.getElementById("pOutput2").innerHTML = output;
}

function winner(){
    var currentScore= 0;
    var tieScore = 0;
    var nameOfWinner= "";
    var nameOfTie ="";
    var output;
    for(i = 0; i < scores.length; i++){
        if( scores[i] > currentScore && scores[i] > tieScore){
            currentScore = scores[i];
            tieScore = 0;
            nameOfWinner = names[i];
            nameOfTie = "";
            output = "The winner is: " + nameOfWinner + "<br> With a score of: " + currentScore;
        }
        else if (scores[i] === currentScore){
            tieScore = scores[i];
            nameOfTie = names[i];
            output = "There is a tie. The winners are: " + nameOfWinner + " and " + nameOfTie + 
            "<br> With scores of: " + currentScore + " and " + tieScore;
        }
        else{
            output = "There is no winner at present";
        }
    }
    document.getElementById("pOutput3").innerHTML = output;
}