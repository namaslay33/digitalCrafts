// //Javascript Exercises: Rewriting Python

// //Question 1: Madlib Exercise
// function madlib (name, subject){
//     var string = (name + "'s favorite subject in school is " + subject + ".");

//     return(string);
// }
// madlib('Anushka', 'art')

// //Question 2: Tip Calculator
// function tipAmount (bill, service) {

//     if (service == "good"){
//         return('$' + .20 * bill);
//     }
//     else if (service == "fair"){
//         return('$' + .15 * bill);
//     }
//     else {
//         return('$' + .10 * bill);
//     }
// }
// tipAmount(10, 'good')

// //why my switch statement isn't working?
// function tipAmount (bill, service){
// switch(service) {
//         case 'good':
//             console.log('$' + .20 * bill);
//         case 'fair':
//             console.log('$' + .15 * bill);
//         case 'bad':
//             console.log('$' + .10 * bill);
//         default:
//             console.log('Please Re-enter level of service (good, fair, or poor).')
//     }
// }
// tipAmount(20, 'bad')

// //Question 3: Tip Calculator 2
// function tipAmount (bill, service) {
//     totalGood = ((.20 * bill) + bill);
//     totalFair = ((.15 * bill) + bill);
//     totalBad = ((.10 * bill) + bill);

//     if (service == "good"){
//         return('$' + totalGood);
//     }
//     else if (service == "fair"){
//         return('$' + totalFair);
//     }
//     else {
//         return('$' + totalBad);
//     }
// }
// tipAmount(10, 'good')

// //Question 4: Print Numbers
// function printNumbers(startNum, endNum){
//     for (var startNum; startNum <= endNum; startNum++) {
//         console.log(startNum + '\n');
//     }
// }
// printNumbers(2,8)

// function printNumbers2(startNum2, endNum2){
//     while(startNum2 <= endNum2){
//         console.log(startNum2 + '\n');
//         startNum2++;
//     }
// }
// printNumbers2(5,11)

// //Question 5: Print a Square
// function printSquare(size){             /*Print a 0 at the end?? */
//     var square = `*****`;

//     var n = 1;
//     while (n <= size){
//     console.log(square +'\n' * size);
//     n++;
//     } 
// }
// printSquare(5)

// //Question 6: Print a Box
// function printBox(width,height){
//     var box = '*';

//     console.log((box * width) + `\n`);
//     console.log(box + '\t' + (height/2) + `\n`);
//     console.log(box + '\t' + (height/2) + `\n`);
//     console.log(box * width + `\n`);
// }
// printBox(6,4)
// /* Need to get it to not try to add * 2 */

//Question 7: Print a Banner
function printBanner(text){
    var star = '*';

    console.log(text.length * star);                /* Same problem as #6 on this line */
    console.log(star + " " + text + " " + star);
    console.log(text.length * star);                /* Same problem as #6 on this line */
}
printBanner('Welcome to DigitalCrafts')

// //Question 8: Leetspeak
// function leetspeak(string){

// strA = "a"
// strE = "e"
// strG = "g"
// strI = "i"
// strO = "o"
// strS = "s"
// strT = "t"

   

// }
// leetspeak('leet')

// //Question 9: Long-long Vowels

// //Question 10: Just the Positives

// //Revisit problems: 2, 5, 6, 7
// //Finish problems: 8, 9, 10