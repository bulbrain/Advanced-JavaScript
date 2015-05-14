/**
 * Created by Georgi on 12.3.2015 г..
 */
function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._name = firstName + " " + lastName;
    return {
        firstName: this._firstName,
        lastName: this._lastName,
        name: this._name
    }
}

var peter = new Person("Peter", "Jackson");
console.log(peter.name);
console.log(peter.firstName);
console.log(peter.lastName);