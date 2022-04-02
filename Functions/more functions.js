function displayGreeting(name){
    console.log("Hello " + name);
}

displayGreeting('Joe');
displayGreeting('Mike');
displayGreeting('Anne');

function displayGreetingWithAge(name,yob){
  var age= 2022-yob;
   console.log("Hello " + name + "! You are " + age + " years old this year.");
   }
displayGreetingWithAge('Mike',1989);
displayGreetingWithAge('Anne',2002);
displayGreetingWithAge('Joe',2010);

function getGreetingWithAge(name,yob){
    var age = 2022 - yob;
    return "Hello " + name + "! You are " + age + " years old this year."
}
getGreetingWithAge('Mike', 1989);
function displayGreetingWithAge(name,yob){
    var output = getGreetingWithAge(name,yob);
     console.log(output);
     }
     displayGreetingWithAge('Mike',1989);
     displayGreetingWithAge('Anne',2002);
     displayGreetingWithAge('Joe',2010);
