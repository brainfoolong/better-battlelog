/*
    @name BF3/BF4/BFH Has PBBans
    @author GreatApo & DarkThanos
    @version 1.6.0
    @release_date 20/06/2016
    @url http://www.alites.com

    Licensed under CC BY-NC-ND 3.0
    Link: http://creativecommons.org/licenses/by-nc-nd/3.0/deed.en
*/
/* BetterBattlelog Plugin Setup */
BBLog.handle("add.plugin", {
    /* Plugin Infos */
    id : "has-pbbans-plugin",
    name : "Has PBBans",
    version : '1.6.0',
    build : '20160620',

    /* Plugin load on ... */
    init : function (instance) {
        // Check if is BF4
        if (BBLog.cache("mode") === "bf4") {
            // Attack page load event
            instance.events.onPageLoad(instance, {
                page : "^/bf4/(" + BBLog.cache("language") + "/)*(servers|serverbrowserwarsaw)/(playnow/|favourites/|history/)*(pc/|ps3/|ps4/|xbox360/|xboxone/)*[^/]*$",
                callback : instance.hasPBBans.bf4.serverlist.init
            });
            instance.events.onPageLoad(instance, {
                page : "^/bf4/(" + BBLog.cache("language") + "/)*servers/show/(pc/|ps3/|ps4/|xbox360/|xboxone/)+[0-9a-zA-Z-]+/[^/]+/$",
                callback : instance.hasPBBans.bf4.serverinfo.init
            });
            // Load Bf4 CSS
            instance.loadCSS.bf4(instance);
			
        // Check if is BFH
        } else if (BBLog.cache("mode") === "bfh") {
            // Attack page load event
            instance.events.onPageLoad(instance, {
                page : "^/bfh/(" + BBLog.cache("language") + "/)*(servers|serverbrowserwarsaw)/(playnow/|favourites/|history/)*(pc/|ps3/|ps4/|xbox360/|xboxone/)*[^/]*$",
                callback : instance.hasPBBans.bfh.serverlist.init
            });
            instance.events.onPageLoad(instance, {
                page : "^/bfh/(" + BBLog.cache("language") + "/)*servers/show/(pc/|ps3/|ps4/|xbox360/|xboxone/)+[0-9a-zA-Z-]+/[^/]+/$",
                callback : instance.hasPBBans.bfh.serverinfo.init
            });
            // Load BfH CSS
            instance.loadCSS.bfh(instance);
		
        // Check if is BF3
        } else if (BBLog.cache("mode") === "bf3") {
            // Attack page load event
            instance.events.onPageLoad(instance, {
                page : "^/bf3/(" + BBLog.cache("language") + "/)*servers/(playnow/|favourites/|history/)*(pc/|ps3/|ps4/|xbox360/|xboxone/)*[^/]*$",
                callback : instance.hasPBBans.bf3.serverlist.init
            });
            instance.events.onPageLoad(instance, {
                page : "^/bf3/(" + BBLog.cache("language") + "/)*servers/show/(pc/|ps3/|xbox360/)+[0-9a-zA-Z-]+/[^/]+/$",
                callback : instance.hasPBBans.bf3.serverinfo.init
            });
            // Load Bf3 CSS
            instance.loadCSS.bf3(instance);
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
                if (document.location.pathname.match(new RegExp(instance.eventsData.onPageLoad[page].page,'i'))) {
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
            // All BF3/BF4/BFH css
            any : "",

            // BF4 css
            bf4 : ".icon-pbbans[class*=\" icon-\"]{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QAViiF1/MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsVJyjLbEmLAAABeUlEQVQoz2WPPWsUURiFn/fuzOzsRzZRWQmCIgQU09jEIoWIiK1gYRFUROzs/C8WNmptaSGWmy5NsBBUxI9KjCS6uNn5uDN37n0t4gQxpzzn4YGD/hefvTntX6k2/t+22owKPG0SujBYfCwOlGkQW/ciFiQhXI4ercXDA0x4ePfCA6WMpQaRetVrsZzeXrhDr5ToyQukNeqJQKAKoBg5+YESx0hwlC4qVxoU/esMlLr7vj7vKPjpjEg32FF3JGkS5VhmweVImqRx6b9uXst01aE6XF+q6ouyEa5m/TnyRS372+uXIHyWFadGQDEYwvTdCNvp0FMKjb59qiJeg459IljywtSVSZJjaXx8+cdW1Vekmu+9PDxSj8N2c6Ymv+Lmzbn05tItTFacGrR7dPgYxwyFSVzGA5ihFP7++PnewW5asMHym1/Zx7Wd6zs3dp/mvsAPNu4dMdZY5tA/O5HaWtNpyKne5sMjYM4+UyJpFiEHAmbCs9n3dv8DdJvKVwnBs2MAAAAASUVORK5CYII=) repeat scroll 0% 0% transparent;}" +
                ".icon-ggcstream[class*=\" icon-\"]{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QAViiF1/MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsVMidsZrIOAAAADWlUWHRDb21tZW50AAAAAAAqgNajCQAAAcpJREFUKM8tkD1rU2EYhu/nfc9JkzYcc9pooCmig7gYP/ADLBaldBAcnPQPqODcxR+g9CcU1EUcXMSl4CK4KG4qfqAOOmipiU3SnOScnI+8X49DM95wcXFx4/d68s0yMzNre+7vo38221/s9jqr21sxO2Zm9ubXS00DBgCJG7VVEgITAABEtYVLJWgwAK/adFCZLeDBR6UaOihjMoCJ/lSWRWhZZZYJcJzo7Lj28xkWyWUeJdy5B3BZzSZn9CvNvTaX4kbS8DT0+647tIbbseA3BXGUvd252b/ltOhKI+GekcIu4OUwn3Q4eUCnmVxuIH+pWXnXv+LAu+MPnpXP94O9BHKsbHqQBMEuEPm2aNGyJAeaK3ywMFNwCBMaKka6biqwAigXH73PcUuVpTASKKfTCyL0zhc7M5vD1wMecMT9xUE8t5G86A0jGYuYthtT4wDq6JfmysONn8euSghrguTAtZd32hcvzB9hkIiu3/8RkAM9ZoNhnPdFVD/rb4kVG473ksLKoF7TeIe1XA070oG87ne1pAIdEDT8r6WTJpwsaDgYjNNK20CVJocBQJ5aGtUmiwoaKfRT5ccnctLQKJCl9CRqxE1DihT9B/uB/nxN9/xiAAAAAElFTkSuQmCC) repeat scroll 0% 0% transparent;}" +
                ".icon-anticheatinc[class*=\" icon-\"]{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsVNwMtEqKaAAAADWlUWHRDb21tZW50AAAAAAAqgNajCQAAAVdJREFUKM9Vzj1LHFEUh/Hn3B3N6koaRWFLtTHGDeIIdtHW0sLWF/Bb2IsEUgS0zhexsdBS1ErBlwQCwRXEde7szsydcyxcd/HpDvz+cADQS8st1xMAKBb0SB/1NKwCaGa5dgBo1qw0M9P25QBk09q0wsyCPhcxmJmZAZAvWLdsBvSX9dLffeig8pVulTngO4DuArBCLwfSg64BTAKUh9a0R3wfRlA2BHJKN0QDZARg8Ek3ELIPMPnm4A+F+2LzkAICtM8oQwEFggDRzUQy7sBJJFj9djTpwvRAAi12fPeONPYi2JTgEOfiJBAJfyf9mmApO+/DqLOUIVQeBB0XPi0VD9RhcC8guDtIkLcf0/k2wud9s+SnUMacZ3UhXQehevYGBYheZjOg+h/1QJitbfplqZo4k07lRx+61phXr/l1uPKaamt08bi2Fe7bWfg3vB1fgA9ekwCv/9K82CYzBU4AAAAASUVORK5CYII=) repeat scroll 0% 0% transparent;}" +
                "#serverbrowser-show .settings li.highlight{color: white!important;}",

            // BFH css
            bfh : ".icon-pbbans[class*=\" icon-\"]{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsWEw05BNBiAAABd0lEQVQoz2WPv2sUURSFv/vmvTc/3mZH1l2xUIsEFGIRBC1SRPEvEAsLUVG08R+xE2zE0lYsLSSVbMoUqSxMoYWVCQoadzeb2ZnMuxa6QeM93T0f53BA/5WZXDpr3qJJ+/fXb9iChPnVzCD8fK4NCL2olc8PGUuNWbPPLjed35jy4t72IyF3WoOKX060OF3dGd8lz8U+fo3ME+WkwZBGEKJ83eaAhq7iyBubL1nkD6sYcj31wV9wFPSbKJqaapSOpPI2kFFGt49UvnJ5u7jxbiLLDtHJ6t7Mr+htc71TLCCLmtHd2rwC8kmXnEYBIRIx3y92qdqEXCjUnvmYWtaBgfFKRpjGOjW1/5E1vd3d1dlUkXQ8eHM0xA3Mlj3nCdfc2J6vbu7dwnSmO2Hu26PFOEoEhs1BE6BEKNong4ffjoGWjBPYSf/qKKPf3th/QJKEV/d5egz0ZCxA8XmodVbFxBJI34fOf9WBLj0OxZYQAEMc8rL8Mvd/AbeliI+/Vj/hAAAAAElFTkSuQmCC) repeat scroll 0% 0% transparent;opacity: 0.7;}" +
                ".icon-ggcstream[class*=\" icon-\"]{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsWEwqnYEXBAAAADWlUWHRDb21tZW50AAAAAAAqgNajCQAAAcVJREFUKM8tzb1rFFEYxeHz3vvO3TubmXFnP7Ihq4lioU2CYkwREEUiCBZ2ljamsLYRxDL4JwgmvU2wMJBGsDGENCqKaIoIIshKQtZs1v2cmTuvxVo+8OMczD4KviqBQJCqhem1uvPHEmpN3TyzGQoJBKLzjeS8AoPBpNvJnVElHwt65PaG9xNfj91tKJi+HoLhwe/GCibjPkAkPwdLeazF9LUIQBKk/gX2bAEquI6TQKYeA7BeMbjMb1iqTZiwHtTZg/d+Mj9cxkqk6J0lOi5uN+6NHqg0P3SZg3qJ5O8BwD74kxcXVuUSkRow3HdTdA/TGwp0EHzInNsAAIBDuK5xEzVRAl0RSp2dkyVHCjJhPUietcZhCRwz2ROvyj5cDlj7MfsczRnrFGtg2Bsvqhi1q/bX6HnpbVnKEkt1utzpPQtf1dqxjlREM/X/12WYc/ON7RdP9vdvO+SOo/DU1tZ6c3fxz1mCqPju070OKdCKMEod/yg/PrqSbubXdBy0wqHWnWo7xQ6W/aT02+UgnvxmTpvIiwQe0i/JPMeFigcFRtAbNBnGFGYAgKuv7S1ZIAgijH4ku4VZRQCBgKy9E1w0i44A4B9ftK87RJhYowAAAABJRU5ErkJggg==) repeat scroll 0% 0% transparent;opacity: 0.7;}" +
                ".icon-anticheatinc[class*=\" icon-\"]{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsWEwU331hQAAAADWlUWHRDb21tZW50AAAAAAAqgNajCQAAAVpJREFUKM9V0D1LW2EchvHr/+TJ23lOXQwWMqYu9SVFzOBWXTt2cPUF/BbuIgUHQWe/iIuDXVqkdWqX1kEoviCmRJOTc57bodHQa7vhN90A2DkZmZ0CgF+0Y7uxz6UPADYgsz4AjUCBkD3OlaEybdcMEbnd+w4ghAAoL46GKm/B9p8XsqMxdFDMMaqYB94DuG0AVnjJgV5gbAMtgNKhXdsNvTH0UGoLMopYpw1KAYZ3toYx+A+m7yJcMIwztvCXBBCP1M8o/LBLGSEKfOt1NhXByQtrNiZ7I5gcKKfLVgDEPd51ggl7IyJysZPmeFFruY/CHm630mdYW6oiiivhpsRgqXxFE7Idj4i/IB2d6JOFOqK7a0r3RKnDt2pTJKsg+mf/oAD/arYK9P8QA+Bne+thWTWzKPWLT2PoJhohhlj56X+EmMSJyS8nvQ3/uz7wlw+bX79DyENMc3gCcIOXaJ//CxgAAAAASUVORK5CYII=) repeat scroll 0% 0% transparent;opacity: 0.7;}" +
				"#serverbrowser-show .settings li.highlight{color: white!important;}",

            // BF3 Css
            bf3 : ".selected-server-setting-pbbans{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsWEw05BNBiAAABd0lEQVQoz2WPv2sUURSFv/vmvTc/3mZH1l2xUIsEFGIRBC1SRPEvEAsLUVG08R+xE2zE0lYsLSSVbMoUqSxMoYWVCQoadzeb2ZnMuxa6QeM93T0f53BA/5WZXDpr3qJJ+/fXb9iChPnVzCD8fK4NCL2olc8PGUuNWbPPLjed35jy4t72IyF3WoOKX060OF3dGd8lz8U+fo3ME+WkwZBGEKJ83eaAhq7iyBubL1nkD6sYcj31wV9wFPSbKJqaapSOpPI2kFFGt49UvnJ5u7jxbiLLDtHJ6t7Mr+htc71TLCCLmtHd2rwC8kmXnEYBIRIx3y92qdqEXCjUnvmYWtaBgfFKRpjGOjW1/5E1vd3d1dlUkXQ8eHM0xA3Mlj3nCdfc2J6vbu7dwnSmO2Hu26PFOEoEhs1BE6BEKNong4ffjoGWjBPYSf/qKKPf3th/QJKEV/d5egz0ZCxA8XmodVbFxBJI34fOf9WBLj0OxZYQAEMc8rL8Mvd/AbeliI+/Vj/hAAAAAElFTkSuQmCC) no-repeat scroll 0% 0% transparent!important;}" +
                ".selected-server-setting-ggcstream{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsWEwqnYEXBAAAADWlUWHRDb21tZW50AAAAAAAqgNajCQAAAcVJREFUKM8tzb1rFFEYxeHz3vvO3TubmXFnP7Ihq4lioU2CYkwREEUiCBZ2ljamsLYRxDL4JwgmvU2wMJBGsDGENCqKaIoIIshKQtZs1v2cmTuvxVo+8OMczD4KviqBQJCqhem1uvPHEmpN3TyzGQoJBKLzjeS8AoPBpNvJnVElHwt65PaG9xNfj91tKJi+HoLhwe/GCibjPkAkPwdLeazF9LUIQBKk/gX2bAEquI6TQKYeA7BeMbjMb1iqTZiwHtTZg/d+Mj9cxkqk6J0lOi5uN+6NHqg0P3SZg3qJ5O8BwD74kxcXVuUSkRow3HdTdA/TGwp0EHzInNsAAIBDuK5xEzVRAl0RSp2dkyVHCjJhPUietcZhCRwz2ROvyj5cDlj7MfsczRnrFGtg2Bsvqhi1q/bX6HnpbVnKEkt1utzpPQtf1dqxjlREM/X/12WYc/ON7RdP9vdvO+SOo/DU1tZ6c3fxz1mCqPju070OKdCKMEod/yg/PrqSbubXdBy0wqHWnWo7xQ6W/aT02+UgnvxmTpvIiwQe0i/JPMeFigcFRtAbNBnGFGYAgKuv7S1ZIAgijH4ku4VZRQCBgKy9E1w0i44A4B9ftK87RJhYowAAAABJRU5ErkJggg==) no-repeat scroll 0% 0% transparent!important;}" +
                ".selected-server-setting-anticheatinc{width: 20px;margin-right: -2px;margin-left: -2px;height: 13px;vertical-align: middle;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAQAAAADWYbVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfeCQsWEwU331hQAAAADWlUWHRDb21tZW50AAAAAAAqgNajCQAAAVpJREFUKM9V0D1LW2EchvHr/+TJ23lOXQwWMqYu9SVFzOBWXTt2cPUF/BbuIgUHQWe/iIuDXVqkdWqX1kEoviCmRJOTc57bodHQa7vhN90A2DkZmZ0CgF+0Y7uxz6UPADYgsz4AjUCBkD3OlaEybdcMEbnd+w4ghAAoL46GKm/B9p8XsqMxdFDMMaqYB94DuG0AVnjJgV5gbAMtgNKhXdsNvTH0UGoLMopYpw1KAYZ3toYx+A+m7yJcMIwztvCXBBCP1M8o/LBLGSEKfOt1NhXByQtrNiZ7I5gcKKfLVgDEPd51ggl7IyJysZPmeFFruY/CHm630mdYW6oiiivhpsRgqXxFE7Idj4i/IB2d6JOFOqK7a0r3RKnDt2pTJKsg+mf/oAD/arYK9P8QA+Bne+thWTWzKPWLT2PoJhohhlj56X+EmMSJyS8nvQ3/uz7wlw+bX79DyENMc3gCcIOXaJ//CxgAAAAASUVORK5CYII=) no-repeat scroll 0% 0% transparent!important;}" +
                "#server-header .has-pbbans .selected-server-setting-pbbans, #server-header .has-pbbans .selected-server-setting-ggcstream, #server-header .has-pbbans .selected-server-setting-anticheatinc{margin-left: 0px:margin-right:0px;display: block;background-repeat: no-repeat;padding-left:25px;width:40px;}" +
                "#server-header .has-pbbans{float:left;margin-left: 20px;margin-top: 5px;}" +
                "#server-header .has-pbbans li{float:left;}"
        },
        bf4 : function (instance) {
            instance.loadCSS.add(instance.loadCSS.css.any);
            instance.loadCSS.add(instance.loadCSS.css.bf4);
        },
        bfh : function (instance) {
            instance.loadCSS.add(instance.loadCSS.css.any);
            instance.loadCSS.add(instance.loadCSS.css.bfh);
        },
        bf3 : function (instance) {
            instance.loadCSS.add(instance.loadCSS.css.any);
            instance.loadCSS.add(instance.loadCSS.css.bf3);
        },
        add : function (css) {
            var style = $('<style></style>');
            style.html(css);
            $('head').append(style);
        }
    },

    /* Main Addon code */
    hasPBBans : {
        // Active ajax variable (like mutex)
        ajax : null,

        // BF4 functions
        bf4 : {

            // Server browser functions
            serverlist : {
                // Initiate 
                init : function (instance) {
                    // Check for an incorrect page load
                    if ($("#serverbrowser-show").length === 0) {
                        return;
                    }
                    // Check for already loaded extension
                    if ($("#serverbrowser-results").data(instance.id)) {
                        return;
                    }
                    $("#serverbrowser-results").data(instance.id, true);

                    // Add New Sever Click Event
                    $("#serverbrowser-show")[0].addEventListener('DOMNodeInserted', function (event) {
                        // Check if DOM ready
                        if (!event || !event.target || event.target.className !== "box") {
                            return;
                        }
                        // Check if server-info-hasPBBans exist already
                        if ($("#serverbrowser-show .server-info .hasPBBans").length > 0 || $('#serverbrowser-show .action-buttons-container .join').length === 0) {
                            return;
                        }
                        // Get Server Streams
                        instance.hasPBBans.bf4.serverlist.updateServerInfo(instance);
                    }, true);

                    // Get Server Streams
                    if($('#serverbrowser-show .action-buttons-container .join').length > 0) {
                        instance.hasPBBans.bf4.serverlist.updateServerInfo(instance);
                    }
                },

                // Update server's info on server browser
                updateServerInfo : function (instance) {
                    // Set as active
                    $('#serverbrowser-show .server-info .settings').addClass('hasPBBans');

                    // Check for an active ajax
                    if (instance.hasPBBans.ajax !== null) {
                        // Kill active ajax
                        instance.hasPBBans.ajax.abort();
                    }

                    // Server ip
                    var ip = $('#serverbrowser-show .action-buttons-container .join').data('ip').trim(),
                    // Server port
                        port = $('#serverbrowser-show .action-buttons-container .join').data("port"),

                    // Get Fairfight's row element
                        fairfight = $('#serverbrowser-show .server-info .settings .icon-fairfight').parent().parent(),
                    // Create PBBans row
                        pbbans = $('<li class="highlight">PBBans<b><span class="icon icon-pbbans"></span> <span class="status">...</span></b></li>').insertAfter(fairfight),
                    // Create GGC-Stream row
                        ggcstream = $('<li class="highlight">GGC-Stream<b><span class="icon icon-ggcstream"></span> <span class="status">...</span></b></li>').insertAfter(pbbans),
                    // Create Anticheat Inc row
                        anticheatinc = $('<li class="highlight">Anticheat Inc<b><span class="icon icon-anticheatinc"></span> <span class="status">...</span></b></li>').insertAfter(ggcstream);

                    // Make an ajax call
                    instance.hasPBBans.ajax = instance.hasPBBans.request(instance, ip, port, "http://alites.tk/battlelog-plugins/has-pbbans/chupachups.php?ip=" + ip + "&port=" + port + "&bf=4&json", pbbans, ggcstream, anticheatinc, '.status');
                }
            },

            // Server page functions
            serverinfo : {
                // Initiate 
                init : function (instance) {
                    // Check for an incorrect page load
                    if ($("#server-page").length === 0) {
                        return;
                    }

                    // Check for already loaded extension
                    if ($("#server-page").data(instance.id)) {
                        return;
                    }
                    $("#server-page").data(instance.id, true);

                    // Check for an active ajax
                    if (instance.hasPBBans.ajax !== null) {
                        // Kill active ajax
                        instance.hasPBBans.ajax.abort();
                    }

                    // Server ip
                    var ip = $("#server-page-join-buttons").data("ip").trim(),
                    // Server port
                        port = $("#server-page-join-buttons").data("port"),

                    // Get Fairfight's row element
                        fairfight = $('#server-page-settings .box .icon-fairfight').parent().parent(),
                    // Create PBBans row
                        pbbans = $('<dl><dt>PBBANS</dt><dd><span class="icon icon-pbbans"></span> <span class="status">...</span></dd></dl>').insertAfter(fairfight),
                    // Create GGC-Stream row
                        ggcstream = $('<dl><dt>GGC-STREAM</dt><dd><span class="icon icon-ggcstream"></span> <span class="status">...</span></dd></dl>').insertAfter(pbbans),
                    // Create Anticheat Inc row
                        anticheatinc = $('<dl><dt>ANTICHEAT INC</dt><dd><span class="icon icon-anticheatinc"></span> <span class="status">...</span></dd></dl>').insertAfter(ggcstream);

                    // Make an ajax call
                    instance.hasPBBans.ajax = instance.hasPBBans.request(instance, ip, port, "http://alites.tk/battlelog-plugins/has-pbbans/chupachups.php?ip=" + ip + "&port=" + port + "&bf=4&json", pbbans, ggcstream, anticheatinc, '.status');
                }
            }
        },
		
        // BFH functions
        bfh : {

            // Server browser functions
            serverlist : {
                // Initiate 
                init : function (instance) {
                    // Check for an incorrect page load
                    if ($("#serverbrowser-show").length === 0) {
                        return;
                    }
                    // Check for already loaded extension
                    if ($("#serverbrowser-results").data(instance.id)) {
                        return;
                    }
                    $("#serverbrowser-results").data(instance.id, true);

                    // Add New Sever Click Event
                    $("#serverbrowser-show")[0].addEventListener('DOMNodeInserted', function (event) {
                        // Check if DOM ready
                        if (!event || !event.target || event.target.className !== "box") {
                            return;
                        }
                        // Check if server-info-hasPBBans exist already
                        if ($("#serverbrowser-show .server-info .hasPBBans").length > 0 || $('#serverbrowser-show .action-buttons-container .join').length === 0) {
                            return;
                        }
                        // Get Server Streams
                        instance.hasPBBans.bfh.serverlist.updateServerInfo(instance);
                    }, true);

                    // Get Server Streams
                    if($('#serverbrowser-show .action-buttons-container .join').length > 0) {
                        instance.hasPBBans.bfh.serverlist.updateServerInfo(instance);
                    }
                },

                // Update server's info on server browser
                updateServerInfo : function (instance) {
                    // Set as active
                    $('#serverbrowser-show .server-info .settings').addClass('hasPBBans');

                    // Check for an active ajax
                    if (instance.hasPBBans.ajax !== null) {
                        // Kill active ajax
                        instance.hasPBBans.ajax.abort();
                    }

                    // Server ip
                    var ip = $('#serverbrowser-show .action-buttons-container .join').data('ip').trim(),
                    // Server port
                        port = $('#serverbrowser-show .action-buttons-container .join').data("port"),

                    // Get Fairfight's row element
                        fairfight = $('#serverbrowser-show .server-info .settings .icon-fairfight').parent().parent(),
                    // Create PBBans row
                        pbbans = $('<li>PBBans<b><span class="icon icon-pbbans"></span> <span class="status">...</span></b></li>').insertAfter(fairfight),
                    // Create GGC-Stream row
                        ggcstream = $('<li>GGC-Stream<b><span class="icon icon-ggcstream"></span> <span class="status">...</span></b></li>').insertAfter(pbbans),
                    // Create Anticheat Inc row
                        anticheatinc = $('<li>Anticheat Inc<b><span class="icon icon-anticheatinc"></span> <span class="status">...</span></b></li>').insertAfter(ggcstream);

                    // Make an ajax call
                    instance.hasPBBans.ajax = instance.hasPBBans.request(instance, ip, port, "http://alites.tk/battlelog-plugins/has-pbbans/chupachups.php?ip=" + ip + "&port=" + port + "&bf=h&json", pbbans, ggcstream, anticheatinc, '.status');
                }
            },

            // Server page functions
            serverinfo : {
                // Initiate 
                init : function (instance) {
                    // Check for an incorrect page load
                    if ($("#server-page").length === 0) {
                        return;
                    }

                    // Check for already loaded extension
                    if ($("#server-page").data(instance.id)) {
                        return;
                    }
                    $("#server-page").data(instance.id, true);

                    // Check for an active ajax
                    if (instance.hasPBBans.ajax !== null) {
                        // Kill active ajax
                        instance.hasPBBans.ajax.abort();
                    }

                    // Server ip
                    var ip = $("#server-page-join-buttons").data("ip").trim(),
                    // Server port
                        port = $("#server-page-join-buttons").data("port"),

                    // Get Fairfight's row element
                        fairfight = $('#server-page-settings .box .icon-fairfight').parent().parent(),
                    // Create PBBans row
                        pbbans = $('<dl><dt>PBBANS</dt><dd><span class="icon icon-pbbans"></span> <span class="status">...</span></dd></dl>').insertAfter(fairfight),
                    // Create GGC-Stream row
                        ggcstream = $('<dl><dt>GGC-STREAM</dt><dd><span class="icon icon-ggcstream"></span> <span class="status">...</span></dd></dl>').insertAfter(pbbans),
                    // Create Anticheat Inc row
                        anticheatinc = $('<dl><dt>ANTICHEAT INC</dt><dd><span class="icon icon-anticheatinc"></span> <span class="status">...</span></dd></dl>').insertAfter(ggcstream);

                    // Make an ajax call
                    instance.hasPBBans.ajax = instance.hasPBBans.request(instance, ip, port, "http://alites.tk/battlelog-plugins/has-pbbans/chupachups.php?ip=" + ip + "&port=" + port + "&bf=h&json", pbbans, ggcstream, anticheatinc, '.status');
                }
            }
        },

        // BF3 functions
        bf3 : {

            // Server browser functions
            serverlist : {
                // Initiate 
                init : function (instance) {
                    // Check for an incorrect page load
                    if ($(".serverguide-list").length === 0 || $("#serverguide-show").length === 0) {
                        return;
                    }
                    // Check for already loaded extension
                    if ($("#serverguide-server-list").data(instance.id)) {
                        return;
                    }
                    $("#serverguide-server-list").data(instance.id, true);

                    // Add New Sever Click Event
                    $("#serverguide-show")[0].addEventListener('DOMNodeInserted', function (event) {
                        // Check if DOM ready
                        if (!event || !event.target || event.target.className !== "base-box-push") {
                            return;
                        }
                        // Check if server-info-hasPBBans exist already
                        if ($("#selected-server-settings .hasPBBans").length > 0) {
                            return;
                        }
                        // Get Server Streams
                        instance.hasPBBans.bf3.serverlist.updateServerInfo(instance);
                    }, true);

                    // Get Server Streams
                    if($('#serverguide-show-serverjoin .base-button-arrow-almost-gigantic').length > 0) {
                        instance.hasPBBans.bf3.serverlist.updateServerInfo(instance);
                    }
                },

                // Update server's info on server browser
                updateServerInfo : function (instance) {
                    // Set as active
                    $('#server-settings').addClass('hasPBBans');

                    // Check for an active ajax
                    if (instance.hasPBBans.ajax !== null) {
                        // Kill active ajax
                        instance.hasPBBans.ajax.abort();
                    }

                    // Server ip
                    var ip = $('#serverguide-show-serverjoin .base-button-arrow-almost-gigantic').data('ip').trim(),
                    // Server port
                        port = $('#serverguide-show-serverjoin .base-button-arrow-almost-gigantic').data("port"),

                    // Get Fairfight's row element
                        fairfight = $('#server-settings .selected-server-setting-pb').parent(),
                    // Create PBBans row
                        pbbans = $('<li>PBBans<span class="selected-server-setting selected-server-setting-pbbans">...</span></li>').insertAfter(fairfight),
                    // Create GGC-Stream row
                        ggcstream = $('<li>GGC-Stream<span class="selected-server-setting selected-server-setting-ggcstream">...</span></li>').insertAfter(pbbans),
                    // Create Anticheat Inc row
                        anticheatinc = $('<li>Anticheat Inc<span class="selected-server-setting selected-server-setting-anticheatinc">...</span></li>').insertAfter(ggcstream);

                    // Make an ajax call
                    instance.hasPBBans.ajax = instance.hasPBBans.request(instance, ip, port, "http://alites.tk/battlelog-plugins/has-pbbans/chupachups.php?ip=" + ip + "&port=" + port + "&bf=3&json", pbbans, ggcstream, anticheatinc, '.selected-server-setting');
                }
            },

            // Server page functions
            serverinfo : {
                // Initiate 
                init : function (instance) {
                    // Check for an incorrect page load
                    if ($("#server-page").length === 0) {
                        return;
                    }
                    // Check for already loaded extension
                    if ($("#server-page").data(instance.id)) {
                        return;
                    }
                    $("#server-page").data(instance.id, true);

                    // Check for an active ajax
                    if (instance.hasPBBans.ajax !== null) {
                        // Kill active ajax
                        instance.hasPBBans.ajax.abort();
                    }

                    // Server ip
                    var ip = $("#server-header .base-button-arrow-almost-gigantic").data("ip").trim(),
                    // Server port
                        port = $("#server-header .base-button-arrow-almost-gigantic").data("port"),

                    // Create PBBans row
                        pbbans = $('<li><span title="PBBans" class="status selected-server-setting-pbbans">...</span></li>'),
                    // Create GGC-Stream row
                        ggcstream = $('<li><span title="GGC-Stream" class="status selected-server-setting-ggcstream">...</span></li>'),
                    // Create Anticheat Inc row
                        anticheatinc = $('<li><span title="Anticheat Inc" class="status selected-server-setting-anticheatinc">...</span></li>');

                    // Insert icons on the page
                    $('#server-header').append($('<ul class="has-pbbans"></ul>').append(pbbans).append(ggcstream).append(anticheatinc));

                    // Make an ajax call
                    instance.hasPBBans.ajax = instance.hasPBBans.request(instance, ip, port, "http://alites.tk/battlelog-plugins/has-pbbans/chupachups.php?ip=" + ip + "&port=" + port + "&bf=3&json", pbbans, ggcstream, anticheatinc, '.status');
                }
            }
        },

        // Get info from a server
        request : function (instance, ip, port, url, pbbans, ggcstream, anticheatinc, find) {
            // Return ajax object
            return $.getJSON(url, function (json) {
                // Request completed
                instance.hasPBBans.ajax = null;
                // Show Server Info
                if (json.update) {
                    // Show updating status
                    pbbans.find(find).html('Updating');
                    ggcstream.find(find).html('Updating');
                    anticheatinc.find(find).html('Updating');
                    // Set ajax variable to 'timer'
                    instance.hasPBBans.ajax = 'timer';
                    // Make a new request in 2 sec
                    setTimeout(function () {
                        // Check if no ajax was executed
                        if (instance.hasPBBans.ajax === 'timer') {
                            // Make a new ajax (due to update status)
                            instance.hasPBBans.ajax = instance.hasPBBans.request(instance, ip, port, url, pbbans, ggcstream, anticheatinc, find);
                        }
                    }, 2000);
                } else {
                    // Report PBBans protection status
                    pbbans.find(find).html((json.pbbans && json.pbbans !== 'Unknown') ? '<a style="color:green;" href="http://www.pbbans.com/msi-server-' + ip.replace(/\./g, "-") + '-' + port + '.html" target="_blank">On</a>' : (json.pbbans !== 'Unknown') ? '<span style="color:red;">Off</span>' : '<a href="http://www.pbbans.com/msi-server-' + ip.replace(/\./g, "-") + '-' + port + '.html" target="_blank">n/a</a>');
                    if (json.pbbans && json.pbbans !== 'Unknown') {
                        pbbans.attr('data-tooltip', 'Server protected by PBBans<br>Cross Game : ' + (json.pbbans[0] ? 'On' : 'Off') + '<br>ΜΒi Bans : ' + (json.pbbans[1] ? 'On' : 'Off') + '<br>UMBi Bans : ' + (json.pbbans[0] ? 'On' : 'Off'));
                    }
                    if (json.pbbans === 'Unknown') {
                        pbbans.attr('data-tooltip', 'Unknown if server is protected by PBBans.<br>Click the "n/a" to see server\'s status.');
                    }
                    // Report GGC-Stream protection status
					ggcstream.find(find).html((json.ggc) ? ((json.ggc!='Unknown')?'<a style="color:green;" href="https://www.ggc-stream.net/search/server/wwo" target="_blank">On</a>':'n/a') : '<span style="color:red;">Off</span>');
                    if (json.ggc === 'Unknown') {
                        ggcstream.attr('data-tooltip', 'Unknown if server is protected by GGC-Stream.');
                    }else if (json.ggc) {
                        ggcstream.attr('data-tooltip', 'Server protected by GGC-Stream');
                    }
                    // Report Anticheat Inc protection status
                    anticheatinc.find(find).html((json.aci) ? ((json.aci!='Unknown')?'<a style="color:green;" href="http://www.anticheatinc.net/forums/streaming.php?address=' + ip + '%3A' + port + '" target="_blank">On</a>':'<a href="http://www.anticheatinc.net/forums/streaming.php?address=' + ip + '%3A' + port + '" target="_blank">n/a</a>') : '<span style="color:red;">Off</span>');
                    if (json.aci === 'Unknown') {
                        anticheatinc.attr('data-tooltip', 'Unknown if server is protected by Anticheat Inc.<br>Click the "n/a" to see server\'s status.');
                    }else if (json.aci) {
                        anticheatinc.attr('data-tooltip', 'Server protected by Anticheat Inc<br>LiveSecure : ' + (json.aci[0] ? 'On' : 'Off'));
                    }
                }

            }).fail(function () {
                // If ajax fail, report error
                // Request completed
                instance.hasPBBans.ajax = null;
                // Show Server Info
                pbbans.find(find).html('Error');
                ggcstream.find(find).html('Error');
                anticheatinc.find(find).html('Error');
            });
        }

    }

});
