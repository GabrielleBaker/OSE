// Create an object array about courses
var courses = [ 
    {  name: "Orientation to software engineering",
        code   : "SWD1TF001",
        extent : 5,
        timing : "1.semester"
          }, 
    {  name: "Programming",
        code   : "SWD1TF002",
        extent : 5,
        timing : "2.semester"
          }, 
    {  name: "Data management and databases",
        code   : "SWD1TF003",
        extent : 5,
        timing : "2.semester"
          }, 
    {  name: "Mobile development project",
        code   : "SWD1TF004",
        extent : 10,
        timing : "3.semester"
          }
    ];
    var outputtext = "";
    var stringy = JSON.stringify(courses);
function listCourses() {
    for(i = 0; i < courses.length; i++){
        outputtext += 
        "<p>" + courses[i] + "</p>";
        
        
    }
    // List courses from an object array , i is an index of array
    document.getElementById("answer").innerHTML= outputtext;
    // Write the answer on the page, to the answer div, as content of the div
    
}
