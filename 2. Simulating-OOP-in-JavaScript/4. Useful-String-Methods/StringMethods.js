/**
 * Created by Georgi on 12.3.2015 г..
 */
String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

String.prototype.startsWith = function(subStr) {
    var thisLen = this.length;
    var subStrLen = subStr.length;

    if (typeof(subStr) !== "string") {
        throw "Substring must be a string!";
    }
    else if (subStrLen > thisLen) {
            return false;
    }

    for (var i = 0; i < subStrLen; i++) {
        if (this[i] !== subStr[i]) {
            return false
        }
    }

    return true;
};

String.prototype.endsWith = function(subStr) {
    var strReverse = this.reverse();
    var subStrReverse = subStr.reverse();
    var subStrReverseLen = subStrReverse.length;

    if (typeof(subStr) !== "string") {
        throw "Substring must be a string!";
    }
    if (subStrReverse.length > strReverse.length) {
        return false;
    }

    for (var i = 0; i < subStrReverseLen; i++) {
        if (strReverse[i] != subStrReverse[i]) {
            return false;
        }
    }

    return true;
};

String.prototype.left = function(count) {
    if (typeof(count) !== "number") {
        throw "Count must be a number!";
    } else
        return this.substr( 0, count );
};

String.prototype.right = function (count) {
    var rightLen = this.length;
    if (typeof(count) !== "number") {
        throw "Count must be a number!";
    }
    if (rightLen <= count) {
        return this.toString();
    } else {
        return this.substr( rightLen - count, rightLen );
    }
};

String.prototype.padLeft = function (count, character) {
    var strLen = this.length;
    var output = "";
    if (typeof(count) !== "number") {
        throw "Count must be a number!";
    } else if (character == undefined) {
            for (var i = strLen; i < count; i++) {
                output += " ";
            }

            output += this;
        } else {
            if (typeof(character) !== "string") {
                throw "Character must be a string!";
            }
                for (var j = strLen; j < count; j++) {
                    output += character;
                }

                output += this;
            }

        return output;
};


String.prototype.padRight = function (count, character) {
    var output = this;
    var thisLen = this.length;
    if (typeof(count) !== "number") {
        throw "Count must be a number!";
    } else if (character == undefined) {
        for (var i = thisLen; i < count; i++) {
            output += " ";
        }
    } else {
        if (typeof(character) !== "string") {
            throw "Character must be a string!";
        } else
        for (var j = thisLen; j < count; j++) {
            output += character;
        }
    }

    return output.toString();

};

String.prototype.repeat = function (count) {
    var output = "";
    if (typeof(count) !== "number") {
        throw "Count must be a number!";
    } else {
        for (var i = 0; i < count; i++) {
            output += this;
        }

        return output;
    }
};

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

// Combinations must also work
var example = "abcdefgh";
console.log(example.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));

console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));