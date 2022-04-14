// 10.object_more_tasks_3.js JavasScript code
// Complete this program so that it allows the user to add new courses and list courses.

// INSERT YOUR CODE HERE
// (1) Define an object constructor function here

function Courses(code, name){
 this.courseCode = code;
 this.courseName = name;
 this.toString = function(){
     return this.courseName + this.courseCode;
 }
}
// This array is created when the page is loaded
var courseArray = [];

function addCourse() {
    var courseCode = document.getElementById("txtCourseCode").value;
    var courseName = document.getElementById("txtCourseName").value;
    
    if (courseCode === "" || courseName === "") {
        return;
    }
    // INSERT YOUR CODE HERE
    // (2) Create a new Course object here and insert it into the course array
    courseArray.push(new Courses(courseCode,courseName));
    
    document.getElementById("txtCourseCode").value = "";
    document.getElementById("txtCourseName").value = "";
    document.getElementById("txtCourseCode").focus();
    document.getElementById("pOutput").innerHTML = "";
}

function listCourses() {
    var outputText = "";
    
    // INSERT YOUR CODE HERE
    // (3) Build the output text here. You need to write a loop.
    for(i = 0; i < courseArray.length; i++){
        outputText += courseArray[i].courseName + " (" + courseArray[i].courseCode + ") <br>";
    }
    
    document.getElementById("pOutput").innerHTML = outputText;
}

function sortCourseArray() {
    function compareTwoCourses(a, b) {
        if (a.courseName.toUpperCase() > b.courseName.toUpperCase()) {
            return 1;
        } else {
            return -1;
        }
    }
    var outputText="";
    for(i = 0; i < courseArray.length; i++){
        outputText += courseArray[i].courseName + " (" + courseArray[i].courseCode + ") <br>";
    }
    courseArray.sort(compareTwoCourses);
    document.getElementById("pOutput").innerHTML= outputText;
}



// End
