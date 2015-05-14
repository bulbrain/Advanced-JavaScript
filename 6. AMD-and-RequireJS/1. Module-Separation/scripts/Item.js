/**
 * Created by Georgi on 1.4.2015 ã..
 */
define(function() {
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
    return Item;
});