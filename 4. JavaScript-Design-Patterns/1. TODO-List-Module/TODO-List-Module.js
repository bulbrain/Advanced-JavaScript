/**
 * Created by Georgi on 19.3.2015 г..
 */
var count = 0;

var addContainer = function addContainer() {
    var cont = new ListModule.Container("TODO List");
    cont.addToDOM();
};

var addSection = function addSection() {
    count++;
    var title = document.getElementById("newSectionField").value;
    if(title) {
        var sect = new ListModule.Section(title);
        sect.addToDOM(title, count);
        document.getElementById("newSectionField").value = "";
    } else {
        alert("You must insert some text.")
    }
};

var addItem = function addItem(count) {
    this._count = count;
    var title = document.getElementById("newItemField"+_count).value;
    if(title) {
        var item = new ListModule.Item(title);
        item.addToDOM(title, _count);
        document.getElementById("newItemField"+_count).value = "";
    } else {
        alert("You must insert some text.")
    }
};

var ListModule = (function () {

    var Container = (function () {
        var Container = function Container(title) {
            this.title = title;
        };
        Container.prototype = {
            addToDOM: function(title) {
                var target = document.getElementById("wrapper");
                var newElement = document.createElement("DIV");
                newElement.innerHTML =
                    '<div id="container">' +
                    '<h1>' + this.title + '</h1>' +
                    '<div id="sectionContainer">' +
                    '</div>' +
                    '<input type="text" id="newSectionField" placeholder="Title..." />' +
                    '<button class="addNewSection" onclick="addSection()">New Section</button>' +
                    '</div>';
                target.appendChild(newElement);
        }
        };
        return Container;
    }());

    var Section = (function(title) {
        var Section = function Section(title) {
            this.title = title;
        };

        Section.prototype = {
            addToDOM: function(title, count) {
                var target = document.getElementById("sectionContainer");
                var newElement = document.createElement("DIV");
                newElement.innerHTML =
                    '<div id = ' + this.title + ' class="sectionContainer">' +
                    '<h2>' + this.title + '</h2>' +
                    '<div id="itemContainer' + count +'">' +
                    '</div>' +
                    '<input type="text" class="addNewItem" id="newItemField' + count +'" placeholder="Add item..." />' +
                    '<button class="itemButton" id="' + count + '" onclick="addItem(this.id)">+</button>' +
                    '</div>';
                target.appendChild(newElement);
            }
        };
        return Section;
    }());

    var Item = (function(title) {
        var Item = function Item(title) {
            this.title = title;
        };

        Item.prototype = {
            addToDOM: function(title, count) {
                this.title = title;
                this.count = count;
                var target = document.getElementById("itemContainer"+count);
                var newElement = document.createElement("DIV");
                newElement.innerHTML =
                    '<p class="itemCont"><input type="checkbox"><label>' + this.title + '</label></p>';
                target.appendChild(newElement);
            }
        };
        return Item;
    }());

    return{
        Item: Item,
        Container: Container,
        Section: Section
    };
}());