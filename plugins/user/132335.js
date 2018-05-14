/**
 * Remove "BUY BATTLEPACKS" box:
 *  - ideas by Armand Tresova
 *
 * @author xjsv
 * @version 1.0.1
 * @url https://raw.githubusercontent.com/XjSv/BBLog-Remove-Buy-BattlePacks/master/hide-buy-battlepacks.js
 * @last-edit 1.2.2015 15:22
 */

BBLog.handle("add.plugin", {

    id : "remove-buy-battlepacks",
    name : "Remove BUY BATTLEPACKS box",

    configFlags : [
        ["option.remove-buy-battlepacks", 0],
    ],

    translations : {
        "en" : {
            "option.remove-buy-battlepacks" : "Remove BUY BATTLEPACKS box?",
        },
        "de" : {
            "option.remove-buy-battlepacks" : "Remove BUY BATTLEPACKS box?",
        }
    },

    init : function(instance) {
        if(BBLog.cache("mode") == "bf4") {
          instance.removeBuyBattlePacks(instance);
        }
    },

    domchange : function(instance) {
        if(BBLog.cache("mode") == "bf4") {
          instance.removeBuyBattlePacks(instance);
        }
    },

    removeBuyBattlePacks : function(instance) {
        var url = window.location.href;
        if(instance.storage("option.remove-buy-battlepacks") && url.match(/\/battlepacks\//) && $(".battlepacks-buypacks").length > 0) {
           $(".battlepacks-buypacks").remove();
        }
    }
});