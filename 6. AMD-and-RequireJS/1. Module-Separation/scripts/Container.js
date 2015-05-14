/**
 * Created by Georgi on 1.4.2015 ã..
 */
define(function() {
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
    return Container;
});