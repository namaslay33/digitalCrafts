//Javascript Exercise 7

//Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction (i) {
    // var number = prompt('Please enter a number. ');  Didn't know the input didn't work in javascript. Had been trying for 30 min 
    var array = [];
    var string = 'Eat, Pray, Love'.split(',');
    // console.log(string[1])
    var count;

    for (count = 0; count <= i; count++) {
        // console.log(string[count])
        array.push(string[count]);
    }
    console.log(array);      
}
finalFunction(3)