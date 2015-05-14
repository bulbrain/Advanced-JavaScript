/**
 * Created by Georgi on 1.4.2015 ã..
 */
define('factory', [], function() {
    this.container;

var count = 0;

function addContainer() {
    require(['container'], function(Container) {
        this.container = new Container("TODO List");
        this.container.addToDOM();
        return this.container;
    });
}

function addSection() {
    require(['section'], function (Section) {
        count++;
        var title = document.getElementById("newSectionField").value;
        if (title) {
            var sect = new Section(title);
            sect.addToDOM(title, count);
            document.getElementById("newSectionField").value = "";
        } else {
            alert("You must insert some text.")
        }
    });
}

function addItem(count) {
    require(['item'], function (Item) {
        this._count = count;
        var title = document.getElementById("newItemField" + _count).value;
        if (title) {
            var item = new Item(title);
            item.addToDOM(title, _count);
            document.getElementById("newItemField" + _count).value = "";
        } else {
            alert("You must insert some text.")
        }
    });
}

    return {
        addContainer : addContainer(),
        addSection : addSection(),
        addItem : addItem()
    }
});