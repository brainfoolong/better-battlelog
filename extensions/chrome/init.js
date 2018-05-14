/**
* Init Better Battlog for chrome
*/

var ivb = setInterval(function(){
    if(!document.head || !document.body || !window || !window.postMessage) return;
    clearInterval(ivb);

    var extensionApi = ((chrome && chrome.extension && chrome.extension.onConnect ? chrome.extension : null) || browser.runtime);
    var version = '9.9.9';

    // get settings from background page and than inject
    var port = extensionApi.connect({name: "storage"});
    port.postMessage({"action" : "get"});
    port.onMessage.addListener(function(msg) {
        if (msg.action == "get"){
            inject(window.document, version, extensionApi.getURL("shared"), msg.BBLogStorage);
        }
    });

    window.addEventListener("message", function(event) {
        if(event.data.action == "store"){
            port.postMessage({"action" : "save", "storageObject" : event.data.data});
        }
        }, false);
}, 5);
