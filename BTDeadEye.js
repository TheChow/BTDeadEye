var BTDeadeye = BTDeadeye || (function() {


})();


on("chat:message", function(msg) {
    if (msg.type == "api" && msg.content.indexOf("!defa") !== -1) {

        var mod = msg.content.split(' ')[1];
        var newLoc = (parseInt(BTHitLocation.LastRoll) + parseInt(mod));
        if (newLoc === 12 || newLoc === 2) {
            sendChat(msg.who, "You can't adjust to 2 or 12");
        } else {
            newLoc = BTHitLocation.LocationTable.Front[newLoc - 2];
            sendChat(msg.who, "Deadeye Adjusted location to: " + newLoc);
        }
    } else if (msg.type == "api" && msg.content.indexOf("!dera") !== -1) {

        var mod = msg.content.split(' ')[1];
        var newLoc = (parseInt(BTHitLocation.LastRoll) + parseInt(mod));
        if (newLoc === 12 || newLoc === 2) {
            sendChat(msg.who, "You can't adjust to 2 or 12");
        } else {
            newLoc = BTHitLocation.LocationTable.Right[newLoc - 2];
            sendChat(msg.who, "Deadeye Adjusted location to: " + newLoc);
        }
    } else if (msg.type == "api" && msg.content.indexOf("!dela") !== -1) {

        var mod = msg.content.split(' ')[1];
        var newLoc = (parseInt(BTHitLocation.LastRoll) + parseInt(mod));
        if (newLoc === 12 || newLoc === 2) {
            sendChat(msg.who, "You can't adjust to 2 or 12");
        } else {
            newLoc = BTHitLocation.LocationTable.Left[newLoc - 2];
            sendChat(msg.who, "Deadeye Adjusted location to: " + newLoc);
        }
    } else if (msg.type == "api" && msg.content.indexOf("!derr") !== -1) {

        var mod = msg.content.split(' ')[1];
        var newLoc = (parseInt(BTHitLocation.LastRoll) + parseInt(mod));
        if (newLoc === 12 || newLoc === 2) {
            sendChat(msg.who, "You can't adjust to 2 or 12");
        } else {
            newLoc = BTHitLocation.LocationTable.Rear[newLoc - 2];
            sendChat(msg.who, "Deadeye Adjusted location to: " + newLoc);
        }
    }
});