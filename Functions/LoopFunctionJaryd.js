function square(number){
    return number*number;
}
var numbersarray = [0,1,2,3,4,5,6,7,8,9,10];

var numbersSquared= [];

for(i=0; i<numbersarray.length;i++){
    numbersSquared.push(square(numbersarray[i]));
}
console.log(numbersSquared);