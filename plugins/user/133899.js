/**
 * Additional Enhancements:
 *  - ideas by Armand Tresova
 *
 * @author xjsv
 * @version 1.4.0
 * @url https://raw.githubusercontent.com/XjSv/BBLog-Additional-Enhancements/master/additional-enhancements.js
 * @last-edit 12.28.2015 17:10
 */

BBLog.handle("add.plugin", {

    id   : "additional-enhancements",
    name : "Additional Enhancements",

    configFlags : [
        ["option.remove-buy-battlepacks", 0],
        ["option.remove-tiles",           0],
        ["option.remove-side-bar",        0],
        ["option.remove-buy-hardline",    0],
        ["option.remove-comcenter",       0],
        ["option.remove-cookiebar",       0]
    ],

    translations : {
        "en" : {
            "option.remove-buy-battlepacks"         : "Remove the 'BUY BATTLEPACKS' box in the Battlepacks page",
            "option.remove-buy-battlepacks.tooltip" : "Removes the 'BUY BATTLEPACKS' box above the 'UPCOMING RANK BATTLEPACKS' box in the Battlepacks page.",
            "option.remove-tiles"                   : "Remove the tiles below the 'TOP STORY' in the landing page",
            "option.remove-tiles.tooltip"           : "Removes the tiles below the 'TOP STORY' in the landing page (battlelog.battlefield.com/bf4/).",
            "option.remove-side-bar"                : "Remove the right sidebar in the landing page",
            "option.remove-side-bar.tooltip"        : "Removes the right sidebar in the landing page (battlelog.battlefield.com/bf4/) and expands the battle feed.",
            "option.remove-buy-hardline"            : "Remove Battlefield Hardline Ad (BUY NOW) in the landing page",
            "option.remove-buy-hardline.tooltip"    : "Removes Battlefield Hardline advertisement (BUY NOW) in the landing page (battlelog.battlefield.com/bf4/).",
            "option.remove-comcenter"               : "Remove the Com Center panel on the right",
            "option.remove-comcenter.tooltip"       : "Removed the Com Center on the right of all BF4 Battlelog Pages and widens the Top bar.",
            "option.remove-cookiebar"               : "Remove the EU Cookie Agreement Bottom bar entirely",
            "option.remove-cookiebar.tooltip"       : "Removes the Cookie Agreement Bar at the bottom of the page entirely (including the close button thing)"
        },
        "de" : {
            "option.remove-buy-battlepacks"         : "Entferne 'Battlepacks kaufen' von Battlepack Seite",
            "option.remove-buy-battlepacks.tooltip" : "Entfernt die 'Battlepack kaufen' Box von der Battlepack Seite.",
            "option.remove-tiles"                   : "Entferne die Boxen unter der Top Story",
            "option.remove-tiles.tooltip"           : "Entfernt die Boxen (Empfohlener Server, Platoon, Missionen etc.) von der Startseite (battlelog.battlefield.com/bf4/).",
            "option.remove-side-bar"                : "Entferne rechte Seitenleiste auf der Startseite",
            "option.remove-side-bar.tooltip"        : "Entfernt die rechte Seitenleiste auf der Startseite und verbreitert den Battlefeed.",
            "option.remove-buy-hardline"            : "Entferne Hardline Werbung",
            "option.remove-buy-hardline.tooltip"    : "Entfernt den 'Hardline kaufen' Werbeblock von der Startseite (battlelog.battlefield.com/bf4/).",
            "option.remove-comcenter"               : "Entferne Com Center",
            "option.remove-comcenter.tooltip"       : "Entfernt das ComCenter am rechten Bildschirmrand auf allen (BF4) Seiten im Battlelog und passt die Breite an.",
            "option.remove-cookiebar"               : "Entferne Cookie Zustimmung",
            "option.remove-cookiebar.tooltip"       : "Entfernt die Cookie Zustimmungsleiste am unteren Bildschirmrand komplett."
        },
    },

    init : function(instance) {
        if(BBLog.cache("mode") == "bf4") {
            instance.removeBuyBattlePacks(instance);
            instance.removeTiles(instance);
            instance.removeSideBar(instance);
            instance.removeBuyHardline(instance);
            instance.removeComCenter(instance);
            instance.removeCookieBar(instance);
        }
    },

    domchange : function(instance) {
        if(BBLog.cache("mode") == "bf4") {
            instance.removeBuyBattlePacks(instance);
            instance.removeTiles(instance);
            instance.removeSideBar(instance);
            instance.removeBuyHardline(instance);
            instance.removeComCenter(instance);
            instance.removeCookieBar(instance);
        }
    },

    removeBuyBattlePacks : function(instance) {
        var url = window.location.href;
        if(instance.storage("option.remove-buy-battlepacks") && url.match(/\/battlepacks\//) && $(".battlepacks-buypacks").length > 0) {
            $(".battlepacks-buypacks").remove();
        }
    },

    removeTiles : function(instance) {
        var path = window.location.pathname;
        if(instance.storage("option.remove-tiles") && path == '/bf4/' && $("#bottom-tiles").length > 0) {
            $("#bottom-tiles").remove();
        }
    },

    removeSideBar : function(instance) {
        var path = window.location.pathname;
        if(instance.storage("option.remove-side-bar") && path == '/bf4/' && $(".base-middle-content").length > 0 && $(".main-side-column").length > 0) {
            var battleFeed = $(".base-middle-content .span8");

            if($(battleFeed).hasClass('span8')) {
                $(battleFeed).removeClass('span8').addClass('span12');
            }

            $(".main-side-column").remove();
        }
    },

    removeBuyHardline : function(instance) {
        var path = window.location.pathname;
        if(instance.storage("option.remove-buy-hardline") && path == '/bf4/' && $("#main-header .get-bfh-tile").length > 0) {
            $('#main-header .get-bfh-tile').remove();
        }
    },

    removeComCenter: function (instance) {
        if (instance.storage("option.remove-comcenter") && window.location.pathname.substr(0, 5) == '/bf4/' && $('#comcenter_container').length > 0) {
            $('#comcenter_container').remove();
            $('#base-header').css('right', 0);
            $('#viewport').css('padding-right', 0);
        }
    },

    removeCookieBar: function (instance) {
        if (instance.storage("option.remove-cookiebar") && window.location.pathname.substr(0, 5) == '/bf4/' && $('#cookie-preferences').length > 0) {
            $('#cookie-preferences').remove();
        }
    }
});
