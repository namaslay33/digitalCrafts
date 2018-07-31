function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;  
}

var course1 = new Course("dig crafts", "Veronica", 1, true, 155);
var course2 = new Course("dig crafts", "Jeff", 2, false 0);
var course3 = new Course("dig crafts", "Azam", 1, true, 215);
var course4 = new Course("dig crafts", "Nicole", 1, true, 5);

var myArray = [course1, course2, course3, course4];

console.log(course1);

console.log(myArray[1].instructor);

// - - - - - 

let myArray = [1, 2, 3, 4];
myArray.forEach(function(arrayIndex){
    console.log(arrayIndex);
})

// - - - - - -

var person = [1, 2, 4, 5];

for (var attribute in person) {
    var value = person[attribute];

}