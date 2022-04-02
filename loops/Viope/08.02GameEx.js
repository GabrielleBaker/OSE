/*function calculateProfit() {

    var rounds = Number(document.getElementById("rounds").value);
    var bet = 1;
    var pipsPayout = Number(rounds * bet); //payout is full amount bet, losses are deducted so payout is never 0
    var output = "";
    var roundsnew = rounds; // kept rounds separate as it gets used later
    var profit = Number(rounds*bet); // profit is full amount bet minus winners wins
    while(Number(roundsnew) <= rounds && roundsnew > 0){
        var pips = Math.round( (Math.random( ) * 5) + 1 );
        console.log("pips were:" + pips); 

        if (pips === 1 || pips === 3 || pips ===5){
             pipsPayout = pipsPayout - bet; // as payout is full amount bet, when losing, one bet amount is deducted
        }                                 //as casino won, no amount added since they only profit from amount bet
            else if (pips === 2 || pips === 4){
                pipsPayout = pipsPayout + (bet * .25); // as payout is full amount bet, when winning, only the excess should be added to the payout
                profit = profit - (bet * 1.25); //when player wins, casino takes a loss
        }
            else { 
            pipsPayout = pipsPayout + (bet * .50); //when player wins, additional winnings are added
            profit = profit - (bet * 1.50); //casino takes an additional loss when player wins
        }
               
        output = "Bets were altogether " + rounds + " euros." + "<br>" + "Wins were " + pipsPayout.toFixed(2) + " euros." + "<br>" + "Profit was " + profit.toFixed(2) + " euros.";
        roundsnew = roundsnew-1;
        console.log("rounds remaining:" + roundsnew);
    }
    document.getElementById("answer").innerHTML= output;

}*/

function calculateProfit() {

    var rounds = Number(document.getElementById("rounds").value);
    var bet = 1;
    var pipsPayout = rounds * bet; //payout is full amount bet, losses are deducted so payout to player is never less than 0
    var output = "";
    var roundsnew = rounds; // kept rounds separate as it gets used later
    var profit = rounds*bet; //profit starts at a max value of the amount bet
	// profit is full amount bet minus winners wins->NOTE profit CAN be negative as even if one bet is made, should the player win, 
	//they would win an additional .25-.50 which immediately puts the casino into a loss
    //while(roundsnew > 0){ //while there are rounds remaining
    while(roundsnew-- > 0){ //while there are rounds remaining and counting down
        var pips = Math.round( (Math.random( ) * 5) + 1 );
        console.log("pips were:" + pips); 

        if (pips === 1 || pips === 3 || pips ===5){
             pipsPayout = pipsPayout - bet; // as payout is full amount bet, when losing, one bet amount is deducted
        }                                 //as casino won, no amount added since they only profit from amount bet
        else if (pips === 2 || pips === 4){
            pipsPayout = pipsPayout + (bet * .25); // as payout is full amount bet, when winning, only the excess should be added to the payout
            profit = profit - (bet * 1.25); //when player wins, casino takes a loss
        }
        else { 
            pipsPayout = pipsPayout + (bet * .50); //when player wins, additional winnings are added
            profit = profit - (bet * 1.50); //casino takes an additional loss when player wins
        }
        //roundsnew = roundsnew-1;
        console.log("profit is "+profit);
        console.log("rounds remaining:" + roundsnew);
    }
    output = "Bets were altogether " + rounds + " euros." + "<br>" + "Wins were " + pipsPayout.toFixed(2) + " euros." + "<br>" + "Profit was " + profit.toFixed(2) + " euros.";
    document.getElementById("answer").innerHTML= output;

}
//for(roundsnew = rounds; roundsnew > 0; roundsnew--) counting down
//for(roundsnew =0; roundsnew< rounds; roundsnew++) counting up
//for(rounds new = 1; roundsnew <= rounds; roundsnew++)