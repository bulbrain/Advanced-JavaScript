/**
 * Created by Georgi on 24.3.2015 г..
 */
var specialConsole = function specialConsole() {

    function writeLine() {
        var msg = arguments[0];
        var args = [];
        for(var i = 1; i < arguments.length; i++) {
            msg = msg.replace(/{\d+}/, arguments[i]);
        }

        return console.log(msg);
    }

    return {
        writeLine : writeLine,
        writeError : writeLine,
        writeWarning : writeLine,
        writeInfo : writeLine
    }
}();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});