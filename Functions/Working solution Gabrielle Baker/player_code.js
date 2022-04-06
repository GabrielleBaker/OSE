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
    //clear input field
        var nameList= "";
        //list names of players as string
    for(i=0; i < names.length; i++){
      nameList = nameList  + "<br>" + names[i];
}

    document.getElementById("pOutput").innerHTML = "List of players: " + nameList;
}
//find speficic player
function Search(text){
    //get input from user
    var text = document.getElementById("inputname").value;
    //search array names[] to find if there is a match
    for (i=0; i < names.length; i++){
        //if there is a match, display it
        if (text === names[i]){
            var name = names[i];
            var score = scores[i];
            var output = "Player: " + name + "<br> Score: " + score;
            //exit once match has been found
            break;
        }
        //error message for no match
        else{
            output = "Insert a valid name to search the database";
        }
    }
    //clear input field
    inputname.value = "";
    document.getElementById("pOutput2").innerHTML = output;
}

//find the winner or winners 
function winner(){
    //output to assign what will be printed later
    var output;
    //if there are no entries and someone searches for a winner, display error to avoid infinite loop
    if(scores.length< 1){
        output = "Error, no players found";    
    }
    //if there are entries continue to loop
    else{
    //find the highest score in the array using Math.max(...array)
    var currentScore= Math.max(...scores);
    //index to be used in finding the name of the highest scoring player
    var index = 0;
    //while loop finds the first player with the highest score and changes index to correspond to its index within the scores array
    while(scores[index] != currentScore){
        index++;
    }
    //name of winner if there is only one is now found using the index of the first player with the highest score
    var nameOfWinner= names[index];
    //arrays to push all tied players into, starts off with the current winner we found using Math.max
    var tiescore = [currentScore,];
    var tieplayer =[nameOfWinner,];
    //output if only one winner
    output = "The winner is: " + nameOfWinner + "<br> With a score of: " + currentScore;
    //for loop to start finding and pushing all consecutive winners names and scores into corresponding arrays, starts from index value where we found the first max number
    for(i = index+1; i < scores.length; i++){
        //if the current i value in the array scores matches max score, use i position in array to push new names and scores to corresponding arrays 
        if( scores[i] === currentScore){
            //push to arrays
            tiescore.push(scores[i]);
            tieplayer.push(names[i]);
            //output changes to reflect a tie and who the winners are
           output = "There is a tie, the winners are: <br>" + "Players: " + tieplayer + 
           "<br> With a shared score of: " + currentScore;  
        }
        
    }
}
    document.getElementById("pOutput3").innerHTML = output;
}