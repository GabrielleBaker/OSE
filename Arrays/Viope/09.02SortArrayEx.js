var array = ["Milk", "Bread", "Juice", "Eggs", "Butter", "Salt", "Oranges", "Apples"];
function sortArray() {
    for( i = 0 ; i < array.length; i++){ 
        array.sort();
        array.reverse();
        console.log(array[i]);
    }
}