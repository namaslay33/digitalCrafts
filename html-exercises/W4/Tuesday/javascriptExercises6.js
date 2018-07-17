//Javascript Exercises 6

//1) Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
function lvl6exercise1(num) {
	switch (num) {
        case 1:
            console.log(`1) hello`);
            break;
        case 2:
            console.log(`1) world`);
            break;
        default:
            console.log(`1) bye`);
    }
	
}
lvl6exercise1()

//2 Push 10 "hello" strings into the array using a for loop, then return it
function lvl6exercise2() {
	var array = [];
    for (var count = 0; count < 10; count++) {
        array.push(`hello`);
    }
    console.log("2) " + array);
}
lvl6exercise2()

//3) Empty this array using a while loop and return it
function lvl6exercise3() {
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
    var count = 10;
    while (count > 0) {
        array.pop();
        count--;
    }
    console.log("3) " + array);
}
lvl6exercise3()