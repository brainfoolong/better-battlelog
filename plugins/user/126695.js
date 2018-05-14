/**
* To Top in Loadout:
*  - adds To Top Button to Loadout screen
*
* @author dapil (3+ version) + encryptedband (old version)
* @version 1.3.1
* @url http://dapil.github.io/to-top-in-loadout-bblog/to-top.js
* @last-edit 27. 9. 2013 23:08
*/

BBLog.handle("add.plugin", {
    id : "to-top-in-loadout",
    name : "To Top in Loadout",

    translations : {
        "en" : {
            "to.top" : "To Top"
        },
        "cs" : {
            "to.top" : "Nahoru"
        },
        "es" : {
            "to.top" : "Hacia Arriba"
        },
        "pl" : {
            "to.top" : "Do Góry"
        },
        "de" : {
            "to.top" : "Nach oben"
        },
    },
    
    init : function(instance){
        if(BBLog.cache("mode") == "bf3"){
            instance.AddToTopButton(instance);
        }
    },

    domchange : function(instance){
        if(BBLog.cache("mode") == "bf3"){
            instance.AddToTopButton(instance);
        }
    },
    
    AddToTopButton : function(instance){
       if (window.location.href.match(/\/loadout\//) && !$('#to-top').is('button')) {
        $('<button class="common-button-medium" id="to-top"><p>'+instance.t("to.top")+'</p></button>').appendTo($('div.profile-stats-loadout-header-actions'));
        $('#to-top').css({'margin':'0px 0px 0px 10px','float':'right'}).click(function(){ $('html, body').animate({ scrollTop: 0 }, 0); });
    }  
    
    
    }

});
