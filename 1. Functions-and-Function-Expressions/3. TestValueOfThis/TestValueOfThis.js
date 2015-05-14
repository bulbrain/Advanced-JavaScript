/**
 * Created by Georgi on 9.3.2015 г..
 */

function testContext() {

    anotherFunction();

    function anotherFunction() {
        console.log(this);
        //do nothing
    }
}

console.log(this);
//prints an empty object.

var obj = new testContext();
//prints a lot of staff