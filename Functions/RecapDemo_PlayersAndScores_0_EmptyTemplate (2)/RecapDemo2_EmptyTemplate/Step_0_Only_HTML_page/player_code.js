var names = [];
var scores = [];

    //push names and scores into respective arrays
function pushArrays(){
    names.push(document.getElementById("txtName").value);
    scores.push(Number(document.getElementById("txtScore").value));
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
            break;
        }
        else{
            output = "Insert a valid name to search the database";
        }
    }
    inputname.value = "";
    document.getElementById("pOutput2").innerHTML = output;
}

function winner(){
    var output;
    if(scores.length< 1){
        output = "Error, no players found";    
    }
    else{
    var currentScore= Math.max(...scores);
    var index = 0;

    while(scores[index] != currentScore){
        index++;
    }

    var nameOfWinner= names[index];
    var tiescore = [currentScore,];
    var tieplayer =[nameOfWinner,];
    output = "The winner is: " + nameOfWinner + "<br> With a score of: " + currentScore;

    for(i = index+1; i < scores.length; i++){
        if( scores[i] === currentScore){
            tiescore.push(scores[i]);
            tieplayer.push(names[i]);
           output = "There is a tie, the winners are: <br>" + "Players: " + tieplayer + 
           "<br> Scores: " + tiescore;  
           console.log(tiescore);
           console.log(tieplayer);
        }
        
    }
}
    document.getElementById("pOutput3").innerHTML = output;
}