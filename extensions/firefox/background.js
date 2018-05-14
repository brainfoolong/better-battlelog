/**
* Background JS for saving options
*/

var extensionApi = ((chrome && chrome.extension && chrome.extension.onConnect ? chrome.extension : null) || browser.runtime);
extensionApi.onConnect.addListener(function(port) {
    if(port.name == "storage"){
        port.onMessage.addListener(function(msg) {
            if(msg.action == "get"){
                var storageObject = localStorage.getItem("BBLogStorage");
                storageObject = (typeof storageObject == "undefined" || storageObject == null || storageObject == "undefined") ? {} : JSON.parse(storageObject);
                port.postMessage({"BBLogStorage" : storageObject, "action" : "get"});
            }
            if(msg.action == "save"){
                localStorage.setItem("BBLogStorage", JSON.stringify(msg.storageObject));
            }
        });
    }
});