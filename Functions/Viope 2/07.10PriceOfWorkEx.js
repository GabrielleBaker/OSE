function modifyTitle() {
    
	var inputTitle = document.getElementById("title").value;
	allCapsTitleTrimmed(inputTitle);
    
}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text
    var removeWhiteSpace = text.trim();
	// Changes the text given to it to be ALL CAPS
    var newTitle = removeWhiteSpace.toUpperCase();
	// Return the changed text back to input field
	title.value = newTitle;
}

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
	  day = "Sunday";
  }
  //else use weekday prices
  else{
	  price = 48;
	  day = "Work day";
  }
  //check start and end time from input
var startTime = document.getElementById("startTime").value;
var endTime =document.getElementById("endTime").value;

var workHours = endTime.substr(0, 2) - startTime.substr(0 , 2);
var workMinutes = endTime.substr(3,2) - startTime.substr(3 , 2);
var outputMinutes = workHours*60 + workMinutes;
var costOfLabour = (outputMinutes /60) * price; 
  //print to html
  document.getElementById("answer").innerHTML= "Length of the work was " + outputMinutes + " minutes. <br>" + 
  "The hourly price is during the " + day + "s " + price.toFixed(2) + " euros.<br>" +
  "The price of this repair work is " + costOfLabour.toFixed(2) + " euros.";
}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
    var day= dateText.substr(0, 2);
    var month = dateText.substr(3, 2);
    var year = dateText.substr(6, 4);
	
	var asDate = new Date();
        asDate.setDate(day);
        asDate.setMonth(month-1);
        asDate.setFullYear(year);

    var dayNow = asDate.getDay();
    var output ;

    if(dayNow === 0){
        output = true;
    }
    else{
       output =  false;
    }
    return output;

}


