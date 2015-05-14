/**
 * Created by Georgi on 17.3.2015 г..
 */
function selectFunc() {
    var shape = document.getElementById("shape").value;
    var color = document.getElementById("color");
    var colorLabel = document.getElementById("colorLabel");
    var radius = document.getElementById("radius");
    var radiusLabel = document.getElementById("radiusLabel");
    var x2 = document.getElementById("X2");
    var x2Label = document.getElementById("X2label");
    var y2 = document.getElementById("Y2");
    var y2Label = document.getElementById("Y2label");
    var x3 = document.getElementById("X3");
    var x3Label = document.getElementById("X3label");
    var y3 = document.getElementById("Y3");
    var y3Label = document.getElementById("Y3label");

    if(shape == "Line" || "Segment") {
        color.hidden=true;
        colorLabel.hidden=true;
        radius.hidden=true;
        radiusLabel.hidden=true;
        x2.hidden=false;
        y2.hidden=false;
        x3.hidden=true;
        y3.hidden=true;
        x2Label.hidden=false;
        y2Label.hidden=false;
        x3Label.hidden=true;
        y3Label.hidden=true;
    }
    if(shape == "Circle") {
        color.hidden=false;
        colorLabel.hidden=false;
        radius.hidden=false;
        radiusLabel.hidden=false;
        x2.hidden=true;
        y2.hidden=true;
        x3.hidden=true;
        y3.hidden=true;
        x2Label.hidden=true;
        y2Label.hidden=true;
        x3Label.hidden=true;
        y3Label.hidden=true;
    }
    if(shape == "Triangle") {
        color.hidden=false;
        colorLabel.hidden=false;
        radius.hidden=true;
        radiusLabel.hidden=true;
        x2.hidden=false;
        y2.hidden=false;
        x3.hidden=false;
        y3.hidden=false;
        x2Label.hidden=false;
        y2Label.hidden=false;
        x3Label.hidden=false;
        y3Label.hidden=false;
    }
    if(shape == "Rectangle") {
        color.hidden=false;
        colorLabel.hidden=false;
        radius.hidden=true;
        radiusLabel.hidden=true;
        x2.hidden=false;
        y2.hidden=false;
        x3.hidden=true;
        y3.hidden=true;
        x2Label.hidden=false;
        y2Label.hidden=false;
        x3Label.hidden=true;
        y3Label.hidden=true;
    }
}

Object.prototype.extends = function(properties) {
    function f() {};
    f.prototype = Object.create(this);
    for (var prop in properties) {
        f.prototype[prop] = properties[prop];
    }

    f.prototype._super = this;
    return new f();
};


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
    }
};

var Circle = Shape.extends({
    constructor: function (color, ax, ay, radius) {
        this._super.constructor.call(this, color, ax, ay);
        this._shapeName = "Circle";
        this._radius = radius;
        return this;
    },
    draw: function draw() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

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
    draw: function draw() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
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
    draw: function draw() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

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
    draw: function draw() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

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
    draw: function draw() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(this._ax, this._ay);
        ctx.lineTo(this._bx, this._by);
        ctx.stroke();
    }
});

function drawFunc() {
    var shape = document.getElementById("shape").value;
    var color = document.getElementById("color").value;
    var x1 = document.getElementById("X").value;
    var y1 = document.getElementById("Y").value;
    var x2 = document.getElementById("X2").value;
    var y2 = document.getElementById("Y2").value;
    var x3 = document.getElementById("X3").value;
    var y3 = document.getElementById("Y3").value;
    var radius = document.getElementById("radius").value;
    if(shape == "Line") {
        if(color, x1, y1, x2, y2) {
            var line = Object.create(Line);
            line.constructor(color, x1, y1, x2, y2);
            line.draw();
        } else {
            throw "You must introduce all required arguments.";
        }

    }
    if(shape == "Segment") {
        if(color, x1, y1, x2, y2) {
            var segment = Object.create(Segment);
            segment.constructor(color, x1, y1, x2, y2);
            segment.draw();
        } else {
            throw "You must introduce all required arguments.";
        }
    }
    if(shape == "Circle") {
        if (color, x1, y1, radius) {
            var circ = Object.create(Circle);
            circ.constructor(color, x1, y1, radius);
            circ.draw();
        } else {
            throw "You must introduce all required arguments.";
        }
    }
    if(shape == "Triangle") {
        if (color, x1, y1, x2, y2, x3, y3) {
            var trian = Object.create(Triangle);
            trian.constructor(color, x1, y1, x2, y2, x3, y3);
            trian.draw();
        } else {
            throw "You must introduce all required arguments.";
        }
    }
    if(shape == "Rectangle") {
        if (color, x1, y1, x2, y2) {
            var rect = Object.create(Rectangle);
            rect.constructor(color, x1, y1, x2, y2);
            rect.draw();
        }else {
            throw "You must introduce all required arguments.";
        }
    }
    var txt = shape + ": X=" + x1 + ", Y=" + y1 + "; Color=" + color;
    if (radius) {
        txt += " Radius=" + radius + ";";
    }
    if (x2) {
        txt += " X2=" + x2 + ", Y2=" + y2 + ";";
    }
    if (x3) {
        txt += " X3=" + x3 + ", Y3=" + y3 + ";";
    }

    document.getElementById("text").value += txt + "\n";
    document.getElementById("X").value = "";
    document.getElementById("Y").value = "";
    document.getElementById("X2").value = "";
    document.getElementById("Y2").value = "";
    document.getElementById("X3").value = "";
    document.getElementById("Y3").value = "";
    document.getElementById("radius").value = "";
}

function clearAllFunc() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("text").value = "";
}

function clearFunc() {
    //TODO
}