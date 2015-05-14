/**
 * Created by Georgi on 17.3.2015 г..
 */
Object.prototype.extends = function(properties) {
    function f() {};
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }

    f.prototype._super = this;
    return new f();
};

var shapes = {
    var: Shape = {
        constructor: function (color, ax, ay, bx, by, cx, cy) {
            this._shapeName = "Shape";
            this._color = color;
            this._ax = ax;
            this._ay = ay;
            this._bx = bx;
            this._by = by;
            this._cx = cx;
            this._cy = cy;
            return this;
        },
        toString: function toString() {
            return this._shapeName + ": Color: " + this._color;
        }
    },
    var: Circle = Shape.extends({
        constructor: function (color, ax, ay, radius) {
            this._super.constructor.call(this, color, ax, ay);
            this._shapeName = "Circle";
            this._radius = radius;
            return this;
        },
        toString: function toString() {
            return this._super.toString.call(this) + "; Center O = " + "(" + this._ax + ", " + this._ay +
                "); Radius = " + this._radius;
        }
    }),

    var: Rectangle = Shape.extends({
        constructor: function (color, ax, ay, width, height) {
            this._super.constructor.call(this, color, ax, ay);
            this._shapeName = "Rectangle";
            this._height = height;
            this._width = width;
            return this;
        },
        toString: function toString() {
            return this._super.toString.call(this) + "; Top left corner A = " + "(" + this._ax + ", " + this._ay +
                "); Width = " + this._width + "; Height = " + this._height;
        }
    }),

    var: Triangle = Shape.extends({
        constructor: function (color, ax, ay, bx, by, cx, cy) {
            this._super.constructor.call(this, color, ax, ay, bx, by, cx, cy);
            this._shapeName = "Triangle";
            return this;
        },
        toString: function toString() {
            return this._super.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" +
                this._bx + ", " + this._by + "); C = (" + this._cx + ", " + this._cy + ")";
        }
    }),

    var: Line = Shape.extends({
        constructor: function (color, ax, ay, bx, by) {
            this._super.constructor.call(this, color, ax, ay, bx, by);
            this._shapeName = "Line";
            return this;
        },
        toString: function toString() {
            return this._super.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" +
                this._bx + ", " + this._by + ")";
        }
    }),

    var: Segment = Shape.extends({
        constructor: function (color, ax, ay, bx, by) {
            this._super.constructor.call(this, color, ax, ay, bx, by);
            this._shapeName = "Segment";
            return this;
        },
        toString: function toString() {
            return this._super.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" +
                this._bx + ", " + this._by + ")";
        }
    })
};




var circ = Object.create(Circle);
circ.constructor("#FF99CC", 1, 5, 35);
console.log(circ.toString());

var rect = Object.create(Rectangle);
rect.constructor("#FF0000", 10, 20, 35, 45);
console.log(rect.toString());

var trian = Object.create(Triangle);
trian.constructor("#FF99CC", 10, 20, 20, 30, 30, 40);
console.log(trian.toString());

var line = Object.create(Line);
line.constructor("#FF0000", 10, 20, 20, 30);
console.log(line.toString());

var segment = Object.create(Segment);
segment.constructor("#FF0099", 12, 22, 20, 32);
console.log(segment.toString());