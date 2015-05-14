/**
 * Created by Georgi on 10.3.2015 г..
 */

function traverse(selector) {
    var node = document.querySelector(selector);
    if (node !== undefined && node !== null) {
        traverseNode(node, '');
    }

    function traverseNode(node, spacing) {
        spacing = spacing || '  ';
        var nodeId = node.getAttribute('id');
        var nodeClass = node.getAttribute('class');
        var output = spacing + node.nodeName.toLowerCase() + ":";

        if (node.id) {
            output += " id=\"" + nodeId + "\"";
        }

        if (node.className) {
            output += " class=\"" + nodeClass + "\"";
        }

        console.log(spacing + output);

        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];
            if (child.nodeType === document.ELEMENT_NODE) {
                traverseNode(child, spacing + '  ');
            }
        }
    }
}


var selector = ".birds";
traverse(selector);
