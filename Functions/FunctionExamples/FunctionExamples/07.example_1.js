// 07.example_1 JavasScript code

// Definition of the function displayPriceWithVAT
// NB! The function is executed only when it is explicitly called. 
function displayPriceWithVAT(price) {
    
    var priceWithVAT =  price * 1.24;
    
    var outputText = "Price: " + price.toFixed(2) + 
        " | Price with VAT: " + priceWithVAT.toFixed(2);
    
    console.log(outputText);
}

// NB! The web browser executes the code below 
// when the HTML page is loaded/refreshed

// Making calls to the function
displayPriceWithVAT(100.00);
displayPriceWithVAT(125.50);
displayPriceWithVAT(180.25);
displayPriceWithVAT(650.00);