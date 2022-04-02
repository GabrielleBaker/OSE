// Create an array with file names of images
var images = ["face.png", "heart.png", "sun.png", "moon.png", "cloud.png"];

function addImages() {
    for( i = 0; i < images.length; i++){
        document.write("<img src='" + images[i] + "' alt='Funny shape'>");
    }
       
}