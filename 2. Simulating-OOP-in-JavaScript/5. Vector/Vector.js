/**
 * Created by Georgi on 25.3.2015 г..
 */
function Vector(arguments) {
    if(arguments.length < 1) {
        throw "Vector must have some numbers";
    }

    this.nums = [];
    for(var i = 0; i < arguments.length; i++) {
        this.nums[i] = arguments[i];
    }

    this.toString = function() {
        return "(" + this.nums.toString() + ")";
    };

    this.add = function() {
        var newVector = arguments[0].nums;
        var oldVector = new Vector(this.nums);
        if(oldVector.nums.length == newVector.length) {
            for(var i = 0; i < this.nums.length; i++) {
                oldVector.nums[i] += newVector[i];
            }
            return new Vector(oldVector.nums);
        } else {
            throw "Vectors must have the same length!";
        }

    };
    this.subtract = function() {
        var newVector = arguments[0].nums;
        var oldVector = new Vector(this.nums);
        if(oldVector.nums.length == newVector.length) {
            for(var i = 0; i < this.nums.length; i++) {
                oldVector.nums[i] -= newVector[i];
            }
            return new Vector(oldVector.nums);
        } else {
            throw "Vectors must have the same length!";
        }

    };
    this.dot = function() {
        var newVector = arguments[0].nums;
        var oldVector = new Vector(this.nums);
        var result = 0;
        if(oldVector.nums.length == newVector.length) {
            for(var i = 0; i < this.nums.length; i++) {
                result += oldVector.nums[i] * newVector[i];
            }
            return new Vector([result]);
        } else {
            throw "Vectors must have the same length!";
        }

    };
    this.norm = function() {
        var oldVector = new Vector(this.nums);
        var result = 0;
        for(var i = 0; i < this.nums.length; i++) {
            result += oldVector.nums[i] * oldVector.nums[i];
        }
        result = Math.sqrt(result);
        return result;
    };
}

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());
// The following throw errors
//var wrong = new Vector();
//var anotherWrong = new Vector([]);

var result = a.add(b);
console.log(result.toString());
//a.add(c); // Error

var result = a.subtract(b);
console.log(result.toString());
//a.subtract(c); // Error

var result = a.dot(b);
console.log(result.toString());
//a.dot(c); // Error

console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());