/**
 * Created by Georgi on 8.3.2015 г..
 */

function printArgsInfo() {

    var toType = function(obj) {
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    };

    for(i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + "(" + toType(arguments[i]) + ")");
    }
}

printArgsInfo.call();
printArgsInfo.call(2, 3, 2.5, -110.5564, false);
printArgsInfo.apply();
printArgsInfo.apply(null, [null, undefined, "", 0, [], {}]);
//printArgsInfo([1, 2], ["string", "array"], ["single value"]);
//printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
//printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);