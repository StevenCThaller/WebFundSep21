// Write a function called reverse that accepts an array as a parameter,
// and returns the array in reverse

function reverse(arr) {
    // Let's look at that previous while loop example: It used a 
    // start and end variable, then while start was less than
    // end, decremented end and incremented start by 2. 
    // This time, we'll do the same but by 1 instead of 2
    var start = 0;
    // also, end will be the array's length - 1 (i.e. the last element in the array)
    var end = arr.length - 1;

    while(start < end) {
        // well, start is at the first element.
        // end is at the last element.
        // reversing an array is basically just swapping the first and last,
        // then second and second to last, etc etc

        // so let's swap the array at start and array at end
        var temp = arr[start]; // remember, we need a temp variable to swap
        arr[start] = arr[end];
        arr[end] = temp;

        // finally, we'll increment start, and decrement end!
        start++;
        end--;
    }

    // we want to return the same array that was given to us,
    // but after everything has been reversed.
    return arr;
}


// SAMPLE INPUTS AND OUTPUTS
// var array1 = [1, 2, 3, 4, 5];
// expected output of reverse(array1): [5, 4, 3, 2, 1] 

// var array2 = [8, 6, 7, 5, 3, 0, 9];
// expected output of reverse(array2): [9, 0, 3, 5, 7, 6, 8]