/**
 * Created by Georgi on 17.3.2015 г..
 */

var shapes = {
    var: Shape = function () {
        function Shape(color, ax, ay, bx, by, cx, cy) {
            this._color = color;
            this._ax = ax;
            this._ay = ay;
            this._bx = bx;
            this._by = by;
            this._cx = cx;
            this._cy = cy;
            this._name = arguments.callee.name;
        }

        Shape.prototype.toString = function toString() {
            return this._name + ": Color = " + this._color;
        };

        return Shape;
    }(),

    var: Circle = (function () {
        function Circle(color, ax, ay, radius) {
            Shape.call(this, color, ax, ay);
            this._name = arguments.callee.name;
            this._radius = radius;
        }

        Circle.prototype = Object.create(Shape.prototype);
        Circle.prototype.constructor = Circle;

        Circle.prototype.toString = function toString() {
            return Shape.prototype.toString.call(this) + "; Center O = " + "(" + this._ax + ", " + this._ay +
                "); Radius = " + this._radius;
        };

        return Circle;
    }()),

    var: Rectangle = (function () {
        function Rectangle(color, ax, ay, width, height) {
            Shape.call(this, color, ax, ay);
            this._name = arguments.callee.name;
            this._width = width;
            this._height = height;
        }

        Rectangle.prototype = Object.create(Shape.prototype);
        Rectangle.prototype.constructor = Rectangle;

        Rectangle.prototype.toString = function toString() {
            return Shape.prototype.toString.call(this) + "; Top left corner A = " + "(" + this._ax + ", " + this._ay +
                "); Width = " + this._width + "; Height = " + this._height;
        };

        return Rectangle;
    }()),

    var: Triangle = (function () {
        function Triangle(color, ax, ay, bx, by, cx, cy) {
            Shape.call(this, color, ax, ay, bx, by, cx, cy);
            this._name = arguments.callee.name;
        }

        Triangle.prototype = Object.create(Shape.prototype);
        Triangle.prototype.constructor = Triangle;

        Triangle.prototype.toString = function toString() {
            return Shape.prototype.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" +
                this._bx + ", " + this._by + "); C = (" + this._cx + ", " + this._cy + ")";
        };

        return Triangle;
    }()),

    var: Line = (function () {
        function Line(color, ax, ay, bx, by) {
            Shape.call(this, color, ax, ay, bx, by);
            this._name = arguments.callee.name;
        }

        Line.prototype = Object.create(Shape.prototype);
        Line.prototype.constructor = Line;

        Line.prototype.toString = function toString() {
            return Shape.prototype.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" +
                this._bx + ", " + this._by + ")";
        };

        return Line;
    }()),

    var: Segment = (function () {
        function Segment(color, ax, ay, bx, by) {
            Shape.call(this, color, ax, ay, bx, by);
            this._name = arguments.callee.name;
        }

        Segment.prototype = Object.create(Shape.prototype);
        Segment.prototype.constructor = Segment;

        Segment.prototype.toString = function toString() {
            return Shape.prototype.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" +
                this._bx + ", " + this._by + ")";
        };

        return Segment;
    }())
};


var circ = new Circle("#FF99CC", 1, 5, 35);
console.log(circ.toString());

var rect = new Rectangle("#FF0000", 10, 20, 35, 45);
console.log(rect.toString());

var trian = new Triangle("#FF99CC", 10, 20, 20, 30, 30, 40);
console.log(trian.toString());

var line = new Line("#FF0000", 10, 20, 20, 30);
console.log(line.toString());

var segment = new Segment("#FF99CC", 10, 12, 22, 34);
console.log(segment.toString());