// Javascript Exercises 5

//1) Push the string "hello" into the array and return it.
function lvl5exercise1() {
    var array = [1, "adam"];
    array.push(` hello`);	
    console.log("1) " + array);
}
lvl5exercise1()

//2) Remove the last element from the array and return it
function lvl5exercise2() {
    var array = [1, "adam"];
    array.pop();
    console.log("2) " + array);
    
}
lvl5exercise2()

//3) Return the length of the array
function lvl5exercise3() {
	var array = [1, "adam"];
    console.log("3) " + array.length);
}
lvl5exercise3()

//4) Return the index of "adam" in the array
function lvl5exercise4() {
    var array = [1, "adam"];
    console.log("4) " + array.indexOf("adam"));

}
lvl5exercise4()
