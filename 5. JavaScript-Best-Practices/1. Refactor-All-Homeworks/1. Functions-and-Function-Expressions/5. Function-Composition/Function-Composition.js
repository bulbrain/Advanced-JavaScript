/**
 * Created by Georgi on 24.3.2015 г..
 */

function add(x, y) {
    return x + y;
}
function addOne(x) {
    return x + 1;
}
function square(x) {
    return x * x;
}

var compose = function(f, g) {
    return function() {
        return console.log(f.call(this, g.apply(this, arguments)));

    };

};

compose(addOne, square)(5);
compose(addOne, add)(5, 6);
compose(Math.cos, addOne)(-1);
compose(addOne, Math.cos)(-1);