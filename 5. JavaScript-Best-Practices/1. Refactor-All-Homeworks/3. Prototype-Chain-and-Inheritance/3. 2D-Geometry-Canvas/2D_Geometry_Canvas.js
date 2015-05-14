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

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var Shape = {
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
};

var Circle = Shape.extends({
    constructor: function (color, ax, ay, radius) {
        this._super.constructor.call(this, color, ax, ay);
        this._shapeName = "Circle";
        this._radius = radius;
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + "; Center O = " + "(" + this._ax + ", " + this._ay + "); Radius = " +
            this._radius;
    },
    draw: function draw() {
        ctx.beginPath();
        ctx.arc(this._ax, this._ay, this._radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this._color;
        ctx.fill();
    }
});

var Rectangle = Shape.extends({
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
    },
    draw: function draw() {
        ctx.fillStyle = this._color;
        ctx.fillRect(this._ax, this._ay, this._width, this._height);
    }
});

var Triangle = Shape.extends({
    constructor: function (color, ax, ay, bx, by, cx, cy) {
        this._super.constructor.call(this, color, ax, ay, bx, by, cx, cy);
        this._shapeName = "Triangle";
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" + this._bx +
            ", " + this._by + "); C = (" + this._cx + ", " + this._cy + ")";
    },
    draw: function draw() {
        ctx.fillStyle = this._color;
        ctx.beginPath();
        ctx.moveTo(this._ax, this._ay);
        ctx.lineTo(this._bx, this._by);
        ctx.lineTo(this._cx, this._cy);
        ctx.fill();
    }
});

var Line = Shape.extends({
    constructor: function (color, ax, ay, bx, by) {
        this._super.constructor.call(this, color, ax, ay, bx, by);
        this._shapeName = "Line";
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" + this._bx +
            ", " + this._by + ")";
    },
    draw: function draw() {
        ctx.beginPath();
        ctx.moveTo(this._ax, this._ay);
        ctx.lineTo(this._bx, this._by);
        ctx.stroke();
    }
});

var Segment = Shape.extends({
    constructor: function (color, ax, ay, bx, by) {
        this._super.constructor.call(this, color, ax, ay, bx, by);
        this._shapeName = "Segment";
        return this;
    },
    toString: function toString() {
        return this._super.toString.call(this) + "; A = " + "(" + this._ax + ", " + this._ay + "); B = (" + this._bx +
            ", " + this._by + ")";
    },
    draw: function draw() {
        ctx.beginPath();
        ctx.moveTo(this._ax, this._ay);
        ctx.lineTo(this._bx, this._by);
        ctx.stroke();
    }
});

var circ = Object.create(Circle);
circ.constructor("#FF99CC", 100, 50, 35);
console.log(circ.toString());
circ.draw();

var rect = Object.create(Rectangle);
rect.constructor("#FF0000", 10, 20, 35, 45);
console.log(rect.toString());
rect.draw();

var trian = Object.create(Triangle);
trian.constructor("#0099CC", 175, 50, 200, 250, 100, 150);
console.log(trian.toString());
trian.draw();

var line = Object.create(Line);
line.constructor("#FFFFFF", 10, 20, 200, 300);
console.log(line.toString());
line.draw();

var segment = Object.create(Segment);
segment.constructor("#FF0099", 10, 300, 200, 32);
console.log(segment.toString());
segment.draw();