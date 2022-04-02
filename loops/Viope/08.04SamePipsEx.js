// Randomize the pips once
var pips1 = Math.round((Math.random() * 5) + 1);
var pip2 = Math.round((Math.random() * 5) + 1);
// Set the count to be one (now you have randomized once)
var count = 1;
// Repeat as long as (pips are not equal) 
while( pips1 != pip2){
    pips1 = Math.round((Math.random() * 5) + 1);
    pips2 = Math.round((Math.random() * 5) + 1);
    count= count + 1;
}
document.getElementById("answer").innerHTML= "There were " + count + " randomization rounds until we got the same pips.";

