/*
    @name BF4 Completed Assignments
    @author GreatApo & DarkThanos
    @version 2.2
    @release_date 18/02/2015
    @url http://www.alites.com

    Licensed under CC BY-NC-ND 3.0
    Link: http://creativecommons.org/licenses/by-nc-nd/3.0/deed.en
*/

/* BetterBattlelog Plugin Setup */
BBLog.handle("add.plugin", {
    /* Plugin Infos */
    id : "completed-assignments",
    name : "Completed Assignments",
    version : '2.2',
    build : '20150218',

    /* Plugin load on ... */
    init : function (instance) {
        // Check if is BF4
        if (BBLog.cache("mode") === "bf4") {
            // Attack page load event
            instance.events.onPageLoad(instance, {
                page : "^/bf4/(" + BBLog.cache("language") + "/)*soldier/[^/]+/assignments/\\d+/(pc/|ps3/|ps4/|xbox360/|xboxone/)*[^/]*$",
                callback : instance.completedAssignments.init
            });
            // Load Bf4 CSS
            instance.loadCSS.bf4(instance);
        }
    },
    domchange : function (instance) {
        instance.eventsFire.onPageLoad(instance);
    },

    /* Events Functions */
    events : {
        onPageLoad : function (instance, page_info) {
            if (!page_info.page || !page_info.callback) {
                return;
            }
            instance.eventsData.onPageLoad.push(page_info);
        }
    },
    eventsFire : {
        onPageLoad : function (instance) {
            var page;
            for (page = 0; page < instance.eventsData.onPageLoad.length; page++) {
                if (document.location.pathname.match(new RegExp(instance.eventsData.onPageLoad[page].page))) {
                    instance.eventsData.onPageLoad[page].callback(instance);
                }
            }
        }
    },
    eventsData : {
        onPageLoad : []
    },

    /* Load StyleSheets */
    loadCSS : {
        css : {
            // BF4 css
            bf4 : ".assignments-list.stat-list-col.col5 > li:nth-child(5n) {" +
                "    width: 130px;" +
                "    margin-right: 1px;" +
                "}" +
                ".assignments-list .locked.active {" +
                "    background-color: rgba(138, 0, 0, 0.7) !important;" +
                "}" +
                ".assignments-list .locked {" +
                "    background-color: rgba(138, 0, 0, 0.3) !important;" +
                "}" +
                ".assignments-list .has-progress{" +
                "    width:130px !important" +
                "}"
        },
        bf4 : function (instance) {
            instance.loadCSS.add(instance.loadCSS.css.bf4);
        },
        add : function (css) {
            var style = $('<style></style>');
            style.html(css);
            $('head').append(style);
        }
    },


    /* Interface Functions */
    completedAssignments : {
        // Initiate 
        init : function () {
            // Check for already loaded extension
            if ($("#hide-completed-button").length > 0) {
                return;
            }

            $("#game-stats nav").append(
                '<button class="btn btn-small" id="hide-completed-button" style="margin-top: 10px;">Show/Hide Completed</button>'
            );

            // Event Handler
            var event_handler = function () {
                if ($(".completed").attr("style") === "display: none !important") {
                    $(".completed").attr("style", "display: inline");
                } else {
                    $(".completed").attr("style", "display: none !important");
                }
            }

            // Add button event
            $("#hide-completed-button")[0].addEventListener('click', event_handler, true);
        }
    }
});
