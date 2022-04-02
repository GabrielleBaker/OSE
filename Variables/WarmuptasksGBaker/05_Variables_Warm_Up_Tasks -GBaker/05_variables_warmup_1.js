// 05_variables_warmup_1 JavasScript code

function showEmail() {
// declare variables 
    var givenName = document.getElementById("txtGivenName").value;

    var surname = document.getElementById("txtSurname").value;
    
    var emailAddress = givenName + "." + surname + "@myy.haaga-helia.fi";
// display email address
    document.getElementById("pOutput").innerHTML=emailAddress;

}
