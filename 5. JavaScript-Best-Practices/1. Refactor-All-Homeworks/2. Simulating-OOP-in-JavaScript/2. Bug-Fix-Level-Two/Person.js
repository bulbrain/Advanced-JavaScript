/**
 * Created by Georgi on 24.3.2015 г..
 */
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { //I coulndt make it other way sorry :(
        if(arguments.length > 0) {
            var fullName = arguments[0].split(" ");
            this.firstName = fullName[0];
            this.lastName = fullName[1];
        }

        return this.firstName + " " + this.lastName;
    };
}

var person = new Person("Peter", "Jackson");

// Getting values
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

// Changing values
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName());
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName());

// Changing the full name should work too
person.fullName("Alan Marcus");
console.log(person.fullName());
console.log(person.firstName);
console.log(person.lastName);
