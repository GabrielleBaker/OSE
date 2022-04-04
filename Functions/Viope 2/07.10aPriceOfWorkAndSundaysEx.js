function calculate() {
    //get input from html
    var dateText = document.getElementById("date").value;
    //call second function
    var sunday = isSunday(dateText);
    var price ;
    var day;
    //if sunday is marked true from 2nd function, then give sunday price
    if(sunday === true){
        price = 72;
        day = "(Sunday)";
    }
    //else use weekday prices
    else{
        price = 48;
        day = "(Work day).";
    }
    //print to html
    document.getElementById("answer").innerHTML= " <p> Date " + dateText + day + " <br>" + 
    "The price of this repair work is " + price + " euros per hour.</p>" ;
}

 //second function to figure out day of week
function isSunday(dateText) {
	//takes the day from input text
    var day= dateText.substr(0, 2);
    var month = dateText.substr(3, 2);
    var year = dateText.substr(6, 4);
    //takes input text and creates a date with it
	var asDate = new Date();
        asDate.setDate(day);
        asDate.setMonth(month-1);
        asDate.setFullYear(year);
    //uses date created to get the day
    var dayNow = asDate.getDay();
    var output ;
    //create boolean to use in function 1
    if(dayNow === 0){
        output = true;
    }
    else{
       output =  false;
    }
    //return boolean to use in function 1
    return output;

}