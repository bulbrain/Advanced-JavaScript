/**
 * Created by Georgi on 1.4.2015 ã..
 */
define(function() {
    var Section = (function (title) {
        var Section = function Section(title) {
            this.title = title;
        };

        Section.prototype = {
            addToDOM: function (title, count) {
                var target = document.getElementById("sectionContainer");
                var newElement = document.createElement("DIV");
                newElement.innerHTML =
                    '<div id = ' + this.title + ' class="sectionContainer">' +
                    '<h2>' + this.title + '</h2>' +
                    '<div id="itemContainer' + count + '">' +
                    '</div>' +
                    '<input type="text" class="addNewItem" id="newItemField' + count + '" placeholder="Add item..." />' +
                    '<button class="itemButton" id="' + count + '" onclick="addItem(this.id)">+</button>' +
                    '</div>';
                target.appendChild(newElement);
            }
        };
        return Section;
    }());
    return Section;
});