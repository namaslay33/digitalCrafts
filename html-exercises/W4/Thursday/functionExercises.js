//Function Exercises with Javascript

// Question 1: Positive Numbers

var array = [6, 1, -5, 2, -1, 8, 10, -4];

function numFilter(num){
    return num > 0;
}

function posNum() {
    var newArray = array.filter(numFilter);
    console.log("1) " + newArray);
}
posNum()

// - - - - - - - - - - - - - - - - - - - - - - 

//Question 2: Even Numbers
function numFilter2(num){
    return num % 2 == 0;
}

function evenNum(){
    var newArray2 = array.filter(numFilter2);
    console.log("2) " + newArray2);
}
evenNum()

//Question 3: Square the Numbers
function myCalc(num){
    
    return Math.pow(num,2);
}

function numPow(){
    var newArray3 = array.map(myCalc);
    console.log("3) " + newArray3);
}
numPow()

//Question 4: Cities 1
var cities = [ { name: 'Los Angeles', temperature: 60.0}, { name: 'Atlanta', temperature: 52.0 }, { name: 'Detroit', temperature: 48.0 }, { name: 'New York', temperature: 80.0 } ];

var output = cities.filter(function(dictionaryValue) { 
    if (dictionaryValue["temperature"] < 70){
        return dictionaryValue;}
    }
)
console.log(output);

//Question 5: Cities 2
var outputNames = cities.map(function(dictionaryValue2){
    return(dictionaryValue2["name"]);
});
console.log(outputNames);

//Question 6: Good Job!
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

function goodJob(name){
    people.map(function(name){
        console.log("Good job, " + name + "!");
        }

    );
}
goodJob()

//Question 7: Sort an Array
function sort(){
    people = people.sort();
    console.log(people);
}
sort()

// Question 8: Sort An Array 2
sort(function sort2(){
    var newPeople = people.map(function(name){
        return name.length;
    })
})
sort()




// //Question 9: Sort an Array 3
// var arr = [ [1, 3, 4], [2, 4, 6, 8], [3, 6] ];

// function sum(num){
    
//     });
    
// }
// sum()

