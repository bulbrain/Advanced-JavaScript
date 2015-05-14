/**
 * Created by Georgi on 9.3.2015 г..
 */

function add(n) {
    var addSum = function (x) {
        return add(n + x);
    };

    addSum.valueOf = addSum.toString = function () {
        return n;
    };

    return addSum;
}

var addTwo = +add(2);
console.log(addTwo); //2

var addTwo = add(2);
console.log(+addTwo(3)(5)(1)(7));