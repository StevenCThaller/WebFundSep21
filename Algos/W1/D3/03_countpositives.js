var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// We want to check every single number in our array, so we:
// - start at 0, because the first element in an array is at index 0
// - continue as long as i is less than the array's length
// - increment i after each iteration
for(var i = 0; i < numbers.length; i++) {
    // If we want to know if a number is positive, then we really
    // just need to know if it is greater than zero.
    if(numbers[i] > 0) {
        // Assuming that the number IS greater than zero, we just want to increment 
        // our countPositives variable
        countPositives++;
    }

}
    
console.log("there are " + countPositives + " positive values");
