/**
* Better Battlelog Addon Inject Script for Firefox
* Licensed under GPLv3
*
* Project is open source for maximum transparence
* So can you can nothing bad happens here
*
* In far future we consider to pack this directly in the addon xpi install file to
* make injecting of script obsulete and also fit to mozilla addon requirements.
*
* @type Object
*/

BBLog = {
    /**
    * The actual version of bblog script
    * Just for human readability
    *
    * @type String
    */
    version : "OpenBeta 0.92",

    /**
    * The actual version of the addon itself
    *
    * @type String
    */
    actualAddonVersion : "0.92",

    /**
    * The installed addon version
    *
    * @type String
    */
    installedAddonVersion : null,

    /**
    * The latest update timestamp for a noticable change in the functionality of the addon
    * Timestamp Format: YYYYMMDD
    *
    * @type int
    */
    lastUpdateTimestamp : 20111226,

    /**
    * Available option flags
    *
    * @type Array
    */
    optionFlags : [
        "minorBugfixes", "extWeapons", "inlineYoutube", "optimizeBoard", "userradar"
    ],

    /**
    * All available flags in storage
    *
    * @type Array
    */
    availableStorageFlags : [
        "minorBugfixes", "extWeapons", "inlineYoutube", "optimizeBoard", "userradar", "userradarObject", "lastUpdateTimestamp",
        "ccofflinestate"
    ],

    /**
    * Current language
    *
    * @type String
    */
    lang : "en",

    /**
    * Translations
    *
    * @type Object
    */
    translations : {
        "de" : {
            "options-what" : "Was bedeutet das?",
            "options-minorBugfixes" : "Allgemeine Bugfixes",
            "options-extWeapons" : "Erweiterte Waffeninformationen",
            "options-inlineYoutube" : "Inline Youtube Videos",
            "options-optimizeBoard" : "Diverse Forumverbesserungen",
            "options-userradar" : "Lokales Userradar",
            "weapon-infoTitle" : "Erweiterte Waffeninformationen",
            "weapon-switch" : "Andere Waffe laden",
            "weapon-rof" : "Feuerrate",
            "weapon-supp" : "Niederhaltung / Kugel",
            "weapon-speed" : ["Geschwindigkeit", "Mündungsgeschwindigkeit"],
            "weapon-rld" : "Zeit zum Nachladen",
            "weapon-rldem" : ["Nachladen leer", "Wenn das Magazin leer ist dauert das Nachladen immer länger"],
            "weapon-rldtrs" : ["Nachladen - Schwelle", "Wenn die Waffe während des Nachladens und vor dieser Zeit gewechselt wird<br/>wird das Nachladen abgebrochen"],
            "weapon-maxdist" : "Max. Distanz",
            "weapon-damage" : "Trefferschaden pro Kugel",
            "weapon-plotinfo" : "Waffengenauigkeit (Plotdaten)",
            "weapon-recoil-dec" : ["Rückstoß Abnahme", "Rückstoß Abnahme pro Sekunde, je höher desto schneller richtet sich die Waffe wieder aus"],
            "weapon-recoil-l" : ["Rückstoß links", "Gibt an wieviel die Waffe nach links pro Schuss ausschlägt"],
            "weapon-recoil-u" : ["Hochschlag", "Gibt an wieviel die Waffe nach oben schlägt bei einem Schuss"],
            "weapon-recoil-r" : ["Rückstoß rechts", "Gibt an wieviel die Waffe nach rechts pro Schuss ausschlägt. Ist meistens mehr als nach links"],
            "weapon-spread-first" : ["Rückstoß Multi 1S", "Der Wert gibt an um das wievielfache der Rückschlag beim ersten Schuss höher ist als bei darauf folgenden"],
            "weapon-spread-inc" : ["Streuung Zunahme", "Wieviel die Streuung pro Schuss zunimmt. Waffe wird pro Schuss immer ungenauer"],
            "weapon-spread-dec" : ["Streuung Abnahme", "Verminderung der Streuung pro Sekunde. Je höher der Wert desto schneller kann man wieder genau schießen"],
            "weapon-spread-min" : ["Streuung Minimal", "Die Streuung beim ersten Schuss. Je kleiner desto genauer trifft die Waffe beim ersten Schuss"],
            "weapon-spread-max" : ["Streuung Maximal", "Maximale mögliche Streuung"],
            "weapon-plot-desc-title" : "Plotinformationen",
            "weapon-plot-desc" : "Der Plot auf der linken Seite ermittelt sich aus den links angezeigten Daten. Der Plot dient rein als optische Anzeige der Daten und ist eine Simulation von 3500 Schussfolgen. Schussfolgen sind Bursts oder Automatik. Einzelschuss kann nicht in den Plot einfließen da je nach Schütze mehr oder weniger Zeit zwischen jedem Schuss vergeht. Bei Waffen die nur Einzelschuss haben ist es eine fiktive Simulation zur Verdeutlichung. Die Plots auf symthic.com unterscheiden sich von den BBLog Plots, jedoch erkennt man immer was wichtig ist - Wohin die Waffe wie stark ausschlägt.",
            "new-addon" : "Es ist ein Addon Update verfügbar",
            "latest-news" : "26.12.2011 - Addon Bugfixes",
            "button-userradar" : "Radar aktivieren / deaktivieren",
            "userradar-warning" : "Spieler <b>{0}</b> ist auf dem Server",
            "userradar-deleteall" : "Liste leeren, alle Spieler entfernen",
            "userradar-inlist" : "{0} Spieler in deiner Liste",
            "extOption" : "Erweiterte Einstellungen"
        },
        "en" : {
            "options-what" : "What does it?",
            "options-minorBugfixes" : "Minor Bugfixes",
            "options-extWeapons" : "Extended Weapon Informations",
            "options-inlineYoutube" : "Inline Youtube Videos",
            "options-optimizeBoard" : "Some Board Improvements",
            "options-userradar" : "Local Userradar",
            "weapon-infoTitle" : "Extended Weapon Informations",
            "weapon-switch" : "Switch to another weapon",
            "weapon-rof" : "Rate of Fire",
            "weapon-supp" : "Suppression / Bullet",
            "weapon-speed" : "Bullet Speed",
            "weapon-mag" : "Magazine",
            "weapon-rld" : "Reload Time",
            "weapon-rldem" : ["Reload when empty", "Reload time if your magazine is empty, takes always more time"],
            "weapon-rldtrs" : ["Reload Treshold", "If you switch the weapon during reloading and before this time the reload attempt be canceled"],
            "weapon-maxdist" : "Max. Distance",
            "weapon-damage" : "Bullet Damage per Bullet",
            "weapon-plotinfo" : "Weapon Accuracy Data (Plotdata)",
            "weapon-recoil-dec" : ["Recoil decrease", "Recoil decrease per second"],
            "weapon-recoil-l" : ["Recoil left", "Horizontal recoil to left"],
            "weapon-recoil-u" : ["Recoil up", "Vertical recoil to upper shot"],
            "weapon-recoil-r" : ["Recoil right", "Horizontal recoil to right"],
            "weapon-spread-first" : ["Recoil 1S Multiplier", "First shot recoil multiplier. This is how much the first shot recoils more or less. If the value is 2.0, first shots recoil is double of what its for the next shot. This is what makes alot difference when shooting in burst or one bullet at a time."],
            "weapon-spread-inc" : ["Spread increase", "Spread increase per shot"],
            "weapon-spread-dec" : ["Spread decrease", "Spread decrease per second"],
            "weapon-spread-min" : ["Spread minimal", "Spread for first bullet"],
            "weapon-spread-max" : ["Spread maximal", "Maximum spread"],
            "weapon-plot-desc-title" : "Plotinformations",
            "weapon-plot-desc" : "The plot is generated by the data you see on the left side. The plot should be only a optical gimmik to display you the accuracy data more visual. Plot is generated by simulating bursts or automatic shots. Single shot is not represented cause the accuracy various for every player (time between a shot). For SingleShot only weapons this is a fictive simulation just for clarification. Plots on symthic.com differs to this bblog plots, but every plot showing the same usable information - How much the weapon spreads.",
            "new-addon" : "A new addon update is ready to install",
            "latest-news" : "26.12.2011 - Addon Bugfixes",
            "button-userradar" : "Activate / Deactivate Radar",
            "userradar-warning" : "Player <b>{0}</b> is on this server",
            "userradar-deleteall" : "Reset my list, removes all players from radar",
            "userradar-inlist" : "{0} players in your list",
            "extOption" : "Extended Settings"
        }
    },

    /**
    * local cache for current session
    *
    * @type Object
    */
    localCache : {},

    /**
    * This initialise check interval
    *
    */
    initCheckIV : null,

    /**
    * Dom changed and url changed interval
    *
    */
    domChangedTO : null,

    /**
    * Initialiser
    */
    init : function(){
        // some basic variables
        this.baseUrl = $("head").attr("data-BBLog_baseUrl");
        this.bblog = null;

        // set current language
        if(window.location.href.match(/bf3\/de/)){
            this.lang = "de";
        }

        // installed version
        this.installedAddonVersion = $("head").attr("data-BBLog_version");

        // preload all required storage keys
        for(i in BBLog.availableStorageFlags){
            (function(){
                var f = BBLog.availableStorageFlags[i];
                port.emit("dataStorage", f, null);
                port.on("dataStorageCallback", function(keyCallback, dataCallback){
                    if(keyCallback == f && typeof BBLog.localCache["storage-"+f] == "undefined"){
                        BBLog.cache("storage-"+keyCallback, dataCallback);
                    }
                });
            })();
        }

        // only when all options are prefetched run the application
        this.initCheckIV = setInterval(function(){
            if(BBLog.initialiseCheck()){
                clearInterval(BBLog.initCheckIV);
                BBLog.run();
            }
        }, 20);
    },

    /**
    * Some initialise checks
    *
    * @returns {Boolean}
    */
    initialiseCheck : function(){
        // all options fetched?
        for(i in this.availableStorageFlags){
            if(typeof this.localCache["storage-"+this.availableStorageFlags[i]] == "undefined"){
                return false;
            }
        }
        return true;
    },

    /**
    * Run the application
    */
    run : function(){
        // dom is changed
        document.addEventListener("DOMNodeInserted", function(){
            clearTimeout(BBLog.domChangedTO);
            BBLog.domChangedTO = setTimeout(function(){
                BBLog.domChanged(window.location.href);
                if(BBLog.cache("lasturl") != window.location.href){
                    BBLog.cache("lasturl", window.location.href);
                    BBLog.urlChanged(window.location.href);
                }
            }, 350);
        });

        // ajax complete event
        $(document).ajaxComplete(function(event, XMLHttpRequest, options){
            BBLog.ajaxComplete(options.url);
        });

        // init some stuff
         $(document).bind("click", function(){
             if(BBLog.bblog != null){
                 BBLog.bblog.children(".bblog_menu").hide();
             }
        });
        // add bblog menu
        $("#base-mainheader").prepend('<div class="bblog" id="bblog"><div class="bblog_menu">'
        + '<h4>Better Battlelog '+this.version+' <img src="'+this.baseUrl+'api?action=addon-counter&username='+$.trim($("#base-user-name").text())+'" alt="" style="position:absolute;"/></h4>'
        + '<div class="latest-news"><a href="'+this.baseUrl+this.lang+'" target="_blank">'+this.trans("latest-news")+'</a></div>'
        + '<div class="options"></div>'
        + '</div></div>');

        // save bblog container
        this.bblog = $("#bblog");

        // bind toggle clicks
        this.bblog.bind("click", function(e){
            $(this).children(".bblog_menu").toggle().find(".extOptionContainer").hide();
            e.stopPropagation();
            window.getSelection().removeAllRanges();
        });

        // bind toggle clicks
        this.bblog.children(".bblog_menu").bind("click", function(e){
            e.stopPropagation();
            window.getSelection().removeAllRanges();
        });

        // define extended options
        var extOptions = {
            "userradar" :
                '<span data-battlebubble="'+this.trans("userradar-deleteall")+'" class="bubble-title" id="resetUserradar" style="cursor:pointer; color:#ff9c00;">Reset ('+this.trans("userradar-inlist").replace(/\{0\}/, '<span class="userradarcounter"></span>')+')</span>'
        };

        // add options
        var html = "";
        for(i in this.optionFlags){
            var option = this.optionFlags[i];
            var url = this.baseUrl+this.lang+"/faq#"+option;
            var text  = this.trans("options-"+option);
            var extHtml = "";
            if(typeof extOptions[option] != "undefined"){
                text = '<span data-battlebubble="'+this.trans("extOption")+'" class="bubble-title extOption" onclick="BBLog.extOptionToggle(this)"></span>'+text;
                extHtml = '<div class="extOptionContainer" style="display:none;">'+extOptions[option]+'</div>';

            }
            var checked = BBLog.storage(option);
            if(checked == null){
                checked = true;
                BBLog.storage(option, true);
            }

            html += '<div><input type="checkbox" value="1" class="'+option+'" '+(checked ? 'checked="checked"' : "")+'/> '+text+'<div class="sub"><a href="'+url+'" target="_blank">'+this.trans("options-what")+'</a></div></div>'+extHtml;
        }
        this.bblog.find(".options").html(html);

        // bind some special things for options

        // bind reset userradar
        $("#resetUserradar").bind("click", function(){
            if(confirm('Really?')){
                BBLog.storage("userradarObject", {});
                $(this).find(".userradarcounter").html(0);
            }
        });

        // bind userradar list
        /*$("#listUserradar").bind("click", function(){
            var p = $("#joinflow-popup").next();
            p.show();
        });*/


        // check current version of bblog addon installed
        if(this.installedAddonVersion != this.actualAddonVersion){
            this.bblog.prepend('<div class="addon-update">UPDATE</div>').find(".options").append('<br/><a href="'+this.baseUrl+this.lang+'/download" target="_blank">* '+this.trans("new-addon")+'</a>');
        }else{
            // otherwise check last update timestamp to users stored timestamp
            var storedTimestamp = BBLog.storage("lastUpdateTimestamp");
            if(!BBLog.bblog.find(".addon-update").size() && (!storedTimestamp || storedTimestamp < BBLog.lastUpdateTimestamp)){
                BBLog.bblog.prepend('<div class="addon-update">NEWS</div>');
                BBLog.bblog.one("click", function(){
                    BBLog.storage("lastUpdateTimestamp", BBLog.lastUpdateTimestamp);
                    $(this).find(".addon-update").hide();
                });
            }
        }

        // bind click to all inputs
        this.bblog.find("input").bind("click", function(){
            BBLog.storage($(this).attr("class"), this.checked);
        });
    },

    /**
    * Toggle the extended options
    *
    * @param el
    */
    extOptionToggle : function (el){
        el = $(el);
        el = el.closest("div").next('.extOptionContainer')
        el.toggle();
        // userradar counter update
        el.find(".userradarcounter").html(BBLog.count(BBLog.storage("userradarObject")));
    },

    /**
    * Get variable from URL
    *
    * @param variable
    */
    get : function(variable){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return unescape(pair[1]).replace(/\+/g, " ");
            }
        }
        return null;
    },

    /**
    * Get translation for current language
    *
    * @param key
    */
    trans : function(key){
        return typeof this.translations[this.lang][key] != "undefined" ? this.translations[this.lang][key] : key;
    },

    /**
    * Store and receive data in storage
    *
    * @param key
    * @param value
    */
    storage : function(key, value){
        // store into local cache and brower storage
        if(typeof value != "undefined"){
            this.cache("storage-"+key, value);
            port.emit("dataStorage", key, value);
            return null;
        }
        return this.cache("storage-"+key);
    },

    /**
    * Store and receive data from local session cache
    *
    * @param key
    * @param value
    */
    cache : function(key, value){
        if(typeof value != "undefined"){
            this.localCache[key] = value;
        }else if(typeof this.localCache[key] != "undefined"){
            return this.localCache[key];
        }
        return null;
    },

    /**
    * Get the weapon xml data as a jquery object
    *
    * @param function callback
    */
    getWeaponXml : function(callback){
        if(this.cache("weaponXml") == null){
            $.getJSON(this.baseUrl+"api?jsoncallback=?", {action: "weaponsJSON"}, function(data) {
                BBLog.cache("weaponXml", data);
                callback(data);
            });
        }else{
            callback(this.cache("weaponXml"));
        }
    },

    /**
    * Everytimes trigger when the ajax complete event fired
    *
    * @param url From which url comes this request
    */
    ajaxComplete : function(url){
        // fix the search bug in forum with a hard search refresh
        if(BBLog.storage("minorBugfixes") && url.match(/dosearch\/(.*)q=\&/) && BBLog.get("q")){
            $("form.form-search-form input[name='q']").val(BBLog.get("q"));
            $("form.form-search-form input[type='submit']").trigger("click");
            return true;
        }
    },

    /**
    * Everytimes trigger when the dom changed
    *
    * @param url From which url comes this request
    */
    domChanged : function(url){
        // enable all inline youtube videos
        if(BBLog.storage("inlineYoutube")){

            setTimeout(function(){
                BBLog.replaceYoutubeLinks();
            }, 200);
        }

        // com center offline user fix and add a offline user counter
        // chat input fix on focus
        if(BBLog.storage("minorBugfixes")){
            // add offline user counter
            if(!$("#comcenter-offline-separator .base-left .counter").size()){
                $("#comcenter-offline-separator .base-left").append('<span class="counter">(0)</span>');
            }
            $("#comcenter-offline-separator .base-left .counter").html("("+$("#comcenter-offline-separator").parent().nextAll().andSelf().find(".comcenter-friend").size()+")");
            // add com center fix
            var e = $("#comcenter-offline-separator > .dropdownicon").not("[data-comcenterfix]");
            if(e.size()){
                e.attr("data-comcenterfix", 1);
                if(BBLog.storage("ccofflinestate") === 0 && e.parent().hasClass("showing-offline")){
                    e.trigger("click");
                }
                e.bind("click", function(){
                    setTimeout(function(){
                        if(e.parent().next().filter(":visible").size()){
                            BBLog.storage("ccofflinestate", 1);
                        }else{
                            BBLog.storage("ccofflinestate", 0);
                        }
                    }, 50);
                });
            }
            // fix chat input
            var chatinp = $("form.comcenter-chat-form .comcenter-chat-input");
            if(!chatinp.filter("[data-chatinputfix]").size()){
                chatinp.attr("data-chatinputfix", 1).attr("data-initval", chatinp.val());
                chatinp.bind("focus", function(){
                    if($(this).val() == $(this).attr("data-initval")){
                        $(this).val('');
                    }
                }).bind("blur", function(){
                    if($(this).val() == ""){
                        $(this).val($(this).attr("data-initval"));
                    }
                }).trigger("blur");
                if(chatinp.filter(":visible").size()){
                    chatinp.trigger("focus");
                }
            }
        }

        // add extra informations to the weapon site
        if(BBLog.storage("extWeapons")){
            var regex = new RegExp("iteminfo\/([^\/]+)\/([0-9]+)\/(.*)", "i");
            if (regex.test(url)) {
                var match = url.match(regex);
                BBLog.getWeaponXml(function(data){
                    BBLog.updateWeaponSite(match[1], data);
                });
                return true;
            }
        }

        // optimize board
        if(BBLog.storage("optimizeBoard")){
            BBLog.optimizeBoard("domchanged");
        }

        // userradar
        if(BBLog.storage("userradar")){
            if(url.match(/\/user\/(.*?)\/(.*)/)){
                BBLog.updateUserradar("profile");
            }else if(url.match(/\/soldier\/(.*?)\/(.*)/)){
                BBLog.updateUserradar("stats");
            }else if(url.match(/\/servers\/(.*)/)){
                BBLog.updateUserradar("servers");
            }
        }
    },

    /**
    * Everytimes triggered when the url changed
    *
    * @param url From which url comes this request
    */
    urlChanged : function(url){
        // optimize board
        if(BBLog.storage("optimizeBoard")){
            BBLog.optimizeBoard("urlchanged");
        }
    },

    /**
    * Update userradar
    *
    * @param action
    */
    updateUserradar : function(action, userId){
        if(action == "profile" && !$("#bblog_userradar_profile").size()){
            $("div.profile-post-general-report:first").before('<div class="bblog_userradar_profile bubble-title" id="bblog_userradar_profile" data-battlebubble="'+this.trans('button-userradar')+'"><span></span></div>');
            var userId = $("div.soldier-name a").attr("href").match(/\/stats\/([0-9]+)/)[1];
            this.updateUserradar("addicon", userId);
        }else if(action == "stats" && !$("#bblog_userradar_profile").size()){
            $(".tabs-outer:first").prepend('<div class="bblog_userradar_profile bubble-title" id="bblog_userradar_profile" data-battlebubble="'+this.trans('button-userradar')+'" style="top:10px; z-index:1;"><span></span></div>');
            if(window.location.href.match(/\/stats\/([0-9]+)/)){
                var userId = window.location.href.match(/\/stats\/([0-9]+)/)[1];
                this.updateUserradar("addicon", userId);
            }
        }else if(action == "servers"){
            var serverId = $("#serverinfo-players-all-view").not("[data-processed]");
            if(!serverId.size()){
                return;
            }
            serverId.attr("data-processed", true);
            serverId = serverId.attr("data");

            var opt = BBLog.storage("userradarObject");
            var urlMatch = window.location.href.match(/(.*)\/servers\//);
            if(!urlMatch) return;
            var getPlayersUrl = urlMatch[1]+"/servers/getPlayersOnServer/"+serverId+"/";
            $.get(getPlayersUrl, function(data){
                data = data.players;
                for(i in data){
                    var player = data[i].persona;
                    if(typeof opt[player.personaId] != "undefined" && opt[player.personaId]){
                        var userId = player.personaId;
                        var form = $("#serverguide-show-joinserver-form");
                        if(!form.find("*[data-user='"+userId+"']").size()){
                            if(window.location.href.match(/servers\/show\//)){
                                form.css({"float" : "right", "top" : "-30px", "position" : "relative"});
                                form.closest("#server-header").css("margin-bottom", "0px");
                            }
                            form.prepend(
                                '<div class="bblog_userradar_warning" data-user="'+userId+'"><span></span>'+BBLog.trans("userradar-warning").replace(/\{0\}/, player.personaName)+'</div>'
                            );
                        }
                    }
                }
            });
        }else if(action == "addicon"){
            $("#bblog_userradar_profile").bind("click", function(){
                var data = BBLog.storage("userradarObject");
                data = !data ? {} : data;
                $(this).toggleClass("active");
                if($(this).hasClass("active")){
                    data[userId] = true;
                }else{
                    data[userId] = false;
                }
                BBLog.storage("userradarObject", data);
            });
            var data = BBLog.storage("userradarObject");
            if(typeof  data[userId] != "undefined" &&  data[userId]){
                $("#bblog_userradar_profile").addClass("active");
            }
        }
    },

    optimizeBoard : function(event){
        if(event == "urlchanged"){
        }else{
            // increase height in edit post
            if(window.location.href.match(/\/editpost\//)){
                var textarea = $("textarea[name='body']");
                if(!textarea.hasClass("increased-height")){
                    textarea.addClass("increased-height").animate({height : "+=300px"}, 0);
                    textarea.closest(".forum-postreply").animate({height : "+=300px"}, 0);
                    textarea.closest(".forum-postreply-container").animate({height : "+=300px"}, 0);
                    textarea.next("input").animate({top : "+=300px"}, 0);
                }
            }
            // add to feed a goto last button
            $(".feed-story-heading a[href*='threadview']").not(".to-last-update").each(function(){
                $(this).addClass("to-last-update").append('<span></span>')
                $(this).children("span:last").bind("click", function(){
                    var a = $(this).closest("a");
                    a.attr("href", a.attr("href")+"last/");
                });
            });
            // goto last entry if last is choosen
            if(window.location.href.match(/\/threadview\/(.*)\/last\/$/)){
                if($("div.forum-threadview-post:last").attr("id")){
                    window.location.href += "#"+$("div.forum-threadview-post:last").attr("id");
                }
            }
        }

    },

    /**
    * Replace all youtube links on the page
    *
    */
    replaceYoutubeLinks : function(){
        var iframeTpl = '<div><iframe width="620" height="350" src="http://www.youtube-nocookie.com/embed/{id}?hd=1" frameborder="0" allowfullscreen></iframe></div>';
        $("div.profile-presentation-text, div.platton-presentation-padder, div.forum-threadview-post-text").not("[data-youtube-processed]").each(function(){
            $(this).attr("data-youtube-processed", true);
            // remove html links before processing
            $(this).find("a[href*='youtube.com/'], a[href*='youtu.be/']").each(function(){
                $(this).replaceWith($(this).text());
            });
            var originalHtml = html = $(this).html();
            html = html.replace(/\[youtu(\.be|be\.com)\]/ig, "<br/>")+" ";
            // all default youtube urls
            var regex = new RegExp("http(.*?)youtube\.com([^\n\r\t <]+)", "ig");
            while (match = regex.exec(originalHtml)) {
                var matchInner = match[2].match(/v=([a-z0-9\-\_]+)/i);
                html = html.replace(match[0], iframeTpl.replace(/{id}/ig, matchInner[1]));
            }
            // all short urls
            var regex = new RegExp("http([^ ]+)youtu\.be\/([^\n\r\t <]+)", "ig");
            while (match = regex.exec(originalHtml)) {
                var matchInner = match[2].match(/([a-z0-9\-\_]+)/i);
                html = html.replace(match[0], iframeTpl.replace(/{id}/ig, matchInner[1]));
            }
            $(this).html(html);
        });
    },

    /**
    * Update the content of the weapon site
    *
    * @param string The weapon info we must find
    * @param jQuery The complete weapon data
    */
    updateWeaponSite : function(weapon, data){
        if($("#bblog_weaponInfo").size()){
            return true;
        }
        var wdata = data[weapon];
        var boxContainer = $("div.venice-stats-small-boxes:first");
        if(!boxContainer.size()){
            return false;
        }

        // special weapon types

        // damageboxes
        if(weapon == "smaw" || weapon == "rpg-7v2" || weapon == "t-90a" || weapon == "m1-abrams"){
            return;
            boxContainer.after('<div class="venice-stats-small-boxes bblog_weaponInfo" style="margin-top:10px;" id="bblog_weaponInfo"></div>');
            var firstBox = $('<div class="accuracy common-box-narrow common-box-title-clean venice-single-stats-column first"><div class="common-box-container"><img src="'+this.baseUrl+'img/tankboxes.png" alt="Damagebox"/></div></div>');
            var secondBox = $('<div class="damageboxinfo common-box-narrow common-box-title-clean venice-single-stats-column"><div class="common-box-container"><div class="common-box-inner-border"><div class="common-box-title"></div><div class="common-box-inner venice-single-stats-column-height"><div class="venice-statsitem-bar-container"></div></div></div></div></div>');
            secondBox.find(".common-box-title").html(this.trans("damagebox-info-title"));
            secondBox.find(".venice-statsitem-bar-container").html('')
            $("#bblog_weaponInfo").append(firstBox).append(secondBox);
            return;
        }

        if(typeof data[weapon] == "undefined"){
            return false;
        }

        // fast weapon switch
        var weapDiv = $('<div class="hidden">');
        for(i in data){
            if(i == weapon) continue;
            var name = typeof data[i]["displayname"] != "undefined" ? data[i]["displayname"] : i
            var url = window.location.href.replace(new RegExp("/"+weapon+"/"), "/"+i+"/");
            var a = $("<a href='"+url+"'>"+name.toUpperCase()+"</option>");
            weapDiv.append(a);
        }

        // default weapon types
        // add a new box with extra info
        boxContainer.after('<div style="clear:both;"></div><div id="fastWeaponSwitch" class="bblog_weaponswitch">'+this.trans("weapon-switch")+'<br/></div><div style="clear:both;"></div><div class="venice-stats-small-boxes bblog_weaponInfo" style="margin-top:10px;" id="bblog_weaponInfo"></div><div class="venice-stats-small-boxes bblog_weaponInfo" style="margin-top:10px;" id="bblog_weaponInfo_second"></div>');
        $("#fastWeaponSwitch").append(weapDiv).bind("click", function(){
            $(this).find(".hidden").removeClass("hidden");
        });

        var firstBox = $('<div class="extraInfos common-box-narrow common-box-title-clean venice-single-stats-column first"><div class="common-box-container"><div class="common-box-inner-border"><div class="common-box-title"></div><div class="common-box-inner venice-single-stats-column-height"><div class="venice-statsitem-bar-container"></div></div></div></div></div>');
        var secondBox = $('<div class="damagemodel common-box-narrow common-box-title-clean venice-single-stats-column"><div class="common-box-container"><div class="common-box-inner-border"><div class="common-box-title"></div><div class="common-box-inner venice-single-stats-column-height"><div class="venice-statsitem-bar-container"><div class="torso"></div></div></div></div></div></div>');
        var thirdBox = $('<div class="damagecharts common-box-narrow common-box-title-clean venice-single-stats-column"><div class="common-box-container"><div class="common-box-inner-border"><div class="common-box-title"></div><div class="common-box-inner venice-single-stats-column-height"><div class="venice-statsitem-bar-container"></div></div></div></div></div>');

        // add some extra weapon info
        firstBox.find(".common-box-title").html(this.trans("weapon-infoTitle"));
        var displayInfos = {
            "supp" : wdata.supp+"%",
            "speed" : wdata.speed+" m/s",
            "rld" : wdata.rld + "s",
            "rldem" : wdata.rldem + "s",
            "rldtrs" : (wdata.rldtrs * wdata.rld).toPrecision(2) + "s / "+(wdata.rldtrs * wdata.rldem).toPrecision(2) + "s",
            "maxdist" : wdata.maxdist + "m"
        };

        var appendCont = firstBox.find(".venice-statsitem-bar-container");
        for(i in displayInfos){
            // if some information not exists than remove it
            if(displayInfos[i].match(/undefined/)) continue;
            var text = this.trans("weapon-"+i);
            if(typeof text == "object"){
                text = text[0]+" <span class='bubble-title info' data-battlebubble='"+text[1]+"'></span>";
            }
            appendCont.append(
                '<div class="venice-statsitem-box-item"><div class="venice-statsitem-bar-title">'+text+'</div>'
                + '<div class="venice-statsitem-bar-value">'+displayInfos[i]+'</div><div style="clear:both;"></div>'
            );
        };

        // add some damage info
        secondBox.find(".common-box-title").html(this.trans("weapon-damage"));
        var appendCont = secondBox.find(".venice-statsitem-bar-container");
        var count = 1;
        var chd = [];
        var meterDist = [1,5,10,15,20,25,30,40,50,60,70,75];
        var entries = this.count(meterDist);
        var minDmg = 999;
        var maxDmg = 0;
        for(i in meterDist){
            var dist = meterDist[i];
            var calculatedDistDmg = 0;
            if(dist <= wdata.dmgFallStart){
                calculatedDistDmg = wdata.dmgMax;
            }else if(dist >= wdata.dmgFallEnd){
                calculatedDistDmg = wdata.dmgMin;
            }else{
                var looseDmgMax = wdata.dmgMax - wdata.dmgMin;
                var percLoose = (100 / wdata.dmgFallEnd) * dist;
                calculatedDistDmg = wdata.dmgMax - (looseDmgMax / 100 * percLoose);
            }
            if(count == entries){
                var text = dist+"m - "+wdata.maxdist+"m";
            }else{
                var text = "in "+dist+"m";
            }
            calculatedDistDmg = calculatedDistDmg.toFixed(1);
            minDmg = Math.min(minDmg, calculatedDistDmg);
            maxDmg = Math.max(maxDmg, calculatedDistDmg);
            chd.push(calculatedDistDmg);
            appendCont.append(
                '<div class="venice-statsitem-box-item"><div class="venice-statsitem-bar-title">'+text+'</div>'
                + '<div class="venice-statsitem-bar-value">'+calculatedDistDmg+'%</div><div style="clear:both;"></div>'
            );
            count++;
        };

        // add charts to third box
        thirdBox.find(".common-box-title").html(this.trans("weapon-damage"));
        minDmg -= 3;
        maxDmg += 3;
        var appendCont = thirdBox.find(".venice-statsitem-bar-container");
        var url = 'http://chart.googleapis.com/chart?chxt=x,x,y,y&cht=lxy&'
            + 'chd=t:0,'+wdata.dmgFallStart+','+wdata.dmgFallEnd+',85|'+wdata.dmgMax+','+wdata.dmgMax+','+wdata.dmgMin+','+wdata.dmgMin+'&'
            + 'chls=3.0&chs=300x150&chxl=1:|weaponinfos by symthic.com|Distance|3:||Damage&chma=0,0,0,0&'
            + 'chxr=0,0,85,10|2,'+minDmg+','+maxDmg+'&chg='+(100/85).toFixed(2)*10+',10,2,2,0&chds=0,85,'+minDmg+','+maxDmg;
        appendCont.html('<img src="'+url+'" alt="" style="padding-top:20px;"/>');
        $("#bblog_weaponInfo").append(firstBox).append(secondBox).append(thirdBox);

        // second row
        firstBox = $('<div class="accuracy common-box-narrow common-box-title-clean venice-single-stats-column first"><div class="common-box-container"></div></div>');
        secondBox = $('<div class="plotinfo common-box-narrow common-box-title-clean venice-single-stats-column"><div class="common-box-container"><div class="common-box-inner-border"><div class="common-box-title"></div><div class="common-box-inner venice-single-stats-column-height"><div class="venice-statsitem-bar-container"></div></div></div></div></div>');
        thirdBox = $('<div class="plotdesc common-box-narrow common-box-title-clean venice-single-stats-column"><div class="common-box-container"><div class="common-box-inner-border"><div class="common-box-title"></div><div class="common-box-inner venice-single-stats-column-height"><div class="venice-statsitem-bar-container"></div></div></div></div></div>');

        // accuracy plots
        firstBox.find("div").html('<img src="'+this.baseUrl+'plots/'+weapon+'.jpg" alt="Accuracy Plot"/>');

        // accuracy plot data
        secondBox.find(".common-box-title").html(this.trans("weapon-plotinfo"));
        var appendCont = secondBox.find(".venice-statsitem-bar-container");
        for(i in wdata["recoil"]){
            text = this.trans("weapon-recoil-"+i);
            if(typeof text == "object"){
                text = text[0]+" <span class='bubble-title info' data-battlebubble='"+text[1]+"'></span>";
            }
            appendCont.append(
                '<div class="venice-statsitem-box-item"><div class="venice-statsitem-bar-title">'+text+'</div>'
                + '<div class="venice-statsitem-bar-value">'+wdata["recoil"][i]+'</div><div style="clear:both;"></div>'
            );
        }
        for(i in wdata["spread"]){
            text = this.trans("weapon-spread-"+i);
            if(typeof text == "object"){
                text = text[0]+" <span class='bubble-title info' data-battlebubble='"+text[1]+"'></span>";
            }
            appendCont.append(
                '<div class="venice-statsitem-box-item"><div class="venice-statsitem-bar-title">'+text+'</div>'
                + '<div class="venice-statsitem-bar-value">'+wdata["spread"][i]+'</div><div style="clear:both;"></div>'
            );
        }

        // accuracy plot desc
        thirdBox.find(".common-box-title").html(this.trans("weapon-plot-desc-title"));
        thirdBox.find(".venice-statsitem-bar-container").html(this.trans("weapon-plot-desc"));
        // append to row
        $("#bblog_weaponInfo_second").append(firstBox).append(secondBox).append(thirdBox);
    },

    /**
    * Count entries of a object
    *
    * @param obj
    * @return int
    */
    count : function(obj){
        if(!obj){
            return 0;
        }
        var c = 0;
        for(i in obj){
            c++;
        }
        return c;
    }
};

// init bblog
BBLog.init();