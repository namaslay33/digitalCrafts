function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};

//#1 and #2 Instantiate Object for Sonny and Jordan
var sonny = new Person("Sonny", "sonny@hotmail.com", "483-485-4948");
var jordan = new Person("Jordan", "joran@aol.com", "495-586-3456");

// created array
var personArray = [sonny, jordan];

//#3 Sonny greet Jordan


//#4 Joran greet Sonny




// #5 Print Sonny contact info
console.log(personArray[0]);

//#6 Print Jordan Contact Info
console.log(personArray[1]);