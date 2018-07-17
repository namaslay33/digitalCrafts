//Javascript Exercises 3

//1) Create a "hello" and a "world", return the concatenation of the two
function helloWorld() {
    var str1 = `hello`;
    var str2 = `world`;
	console.log("1) " + str1 + " " + str2);

}

helloWorld()

//2) Create a "hello" and a 12, return the concatenation of the two 

function helloTwelve() {
    var phrase1 = `hello`;
    var num = 12;
    console.log("2) " + phrase1 + num);

}
helloTwelve()

//3 Create a variable that equals 12 and convert it to a string with concatenation. Return it.
function convert() {
    var yo = 12;
    console.log("3) " + yo.toString());

}
convert()

//4 Create a "hello world!" string. Return the length of the string
function length() {
    str3 = `hello world!`;
    console.log("4) " + str3.length);
}
length()

//5 Create a "hello world!" string. Return the index of the word "world".
function index() {
	str3 = `hello world!`;
	console.log("5) " + str3.indexOf(`world`));
}
index()
