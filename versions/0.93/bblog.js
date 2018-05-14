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
    * The current version
    *
    * @type String
    */
    currentVersion : 0.93,

    /**
    * The latest update timestamp for a noticable change in the functionality of the addon
    * Timestamp Format: YYYYMMDD
    *
    * @type int
    */
    lastUpdateTimestamp : 20111228,

    /**
    * Available option flags
    *
    * @type Array
    */
    optionFlags : [
        "minorBugfixes", "extWeapons", "inlineYoutube", "optimizeBoard", "userradar", "serverradar"
    ],

    /**
    * All available flags in storage
    *
    * @type Array
    */
    availableStorageFlags : [
        "minorBugfixes", "extWeapons", "inlineYoutube", "optimizeBoard", "userradar", "userradarObject", "lastUpdateTimestamp",
        "ccofflinestate", "serverradar", "serverradarObject",
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
            "options-serverradar" : "Lokales Serverradar",
            "weapon-infoTitle" : "Erweiterte Waffeninformationen",
            "weapon-switch" : "Zu einer anderen Waffe wechseln",
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
            "latest-news" : "28.12.2011 - Huge update",
            "button-userradar" : "Radar aktivieren / deaktivieren",
            "userradar-warning" : "Spieler <b>{0}</b> ist auf diesem Server",
            "userradar-deleteall" : "Liste leeren, alle Spieler entfernen",
            "userradar-inlist" : "{0} Spieler in deiner Liste",
            "userradar-editlist" : "Spieler anzeigen / editieren",
            "userradar-syntax" : "Syntax: PLAYERID (USERNAME) - Username ist manchmal nur \"true\" und nicht der echte Username. Der Username dient nur zum einfacheren Vergleich für dich. Das Addon braucht nur die PlayerId. Falls Username leer sein soll dann einfach nur die Klammern setzen. Zeilen mit falschem Syntax werden nicht gespeichert.",
            "button-serverradar" : "Radar aktivieren / deaktivieren",
            "serverradar-warning" : "Serverradar <b>Warnung</b>. Server in Radarliste",
            "serverradar-deleteall" : "Liste leeren, alle Server entfernen",
            "serverradar-inlist" : "{0} Server in deiner Liste",
            "serverradar-editlist" : "Server anzeigen / editieren",
            "serverradar-syntax" : "Syntax: SERVERID (NAME) - Der Name dient nur zum einfacheren Vergleich für dich. Das Addon braucht nur die ServerId. Falls Name leer sein soll dann einfach nur die Klammern setzen. Zeilen mit falschem Syntax werden nicht gespeichert.",
            "extOption" : "Erweiterte Einstellungen",
            "save" : "Speichern",
            "cancel" : "Abbrechen"
        },
        "en" : {
            "options-what" : "What does it mean?",
            "options-minorBugfixes" : "Minor Bugfixes",
            "options-extWeapons" : "Extended Weapon Informations",
            "options-inlineYoutube" : "Inline Youtube Videos",
            "options-optimizeBoard" : "Some Board Improvements",
            "options-userradar" : "Local Userradar",
            "options-serverradar" : "Local Serverradar",
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
            "latest-news" : "28.12.2011 - Großes Update",
            "button-serverradar" : "Activate / Deactivate Radar",
            "serverradar-warning" : "Serverradar <b>Warning</b>. Server in radar list.",
            "serverradar-deleteall" : "Reset my list, removes all servers from radar",
            "serverradar-inlist" : "{0} servers in your list",
            "serverradar-editlist" : "Show / Edit serverlist",
            "serverradar-syntax" : "Syntax: SERVERID (NAME) - The name is just for you, the addon only compare the serverid. If you wish to enter a empty name you must set only the brackets (). Lines with wrong syntax are not be saved.",
            "extOption" : "Extended Settings",
            "save" : "Save",
            "cancel" : "Cancel"
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

        // init some stuff
         $(document).bind("click", function(e){
             if(e.button == 0){
                 if(BBLog.bblog != null){
                     BBLog.bblog.children(".bblog_menu").hide();
                 }
             }
        });
        // add bblog menu
        $("#base-mainheader").prepend(
              '<div class="bblog" id="bblog"><div class="bblog_menu">'
            + '<h4>Better Battlelog Beta '+this.currentVersion
            + '<img src="'+this.baseUrl+'api?action=addon-counter&username='+$.trim($("#base-user-name").text())+'" alt="" style="position:absolute;"/></h4>'
            + '<div class="latest-news"><a href="'+this.baseUrl+this.lang+'" target="_blank">'+this.trans("latest-news")+'</a></div>'
			+ '<div class="options">Sorry, youre installed version is to old. Update to the newest available version. Click the link bellow.<br/><br/></div>'
            + '</div></div>'
        );

        // save bblog container
        this.bblog = $("#bblog");

        // bind toggle clicks
        this.bblog.bind("click", function(e){
            $(this).children(".bblog_menu").removeClass("expanded").toggle().find(".extOptionContainer").hide();
            e.stopPropagation();
            window.getSelection().removeAllRanges();
        });

        // bind toggle clicks
        this.bblog.children(".bblog_menu").bind("click", function(e){
            e.stopPropagation();
            window.getSelection().removeAllRanges();
        });

        $.getJSON(this.baseUrl+"api?jsoncallback=?", {action: "getnewestversion"}, function(data) {
            // check current version of bblog addon installed against newest version
            if(BBLog.currentVersion < data){
                BBLog.bblog.prepend('<div class="addon-update">UPDATE</div>').find(".options").append('<br/><a href="'+BBLog.baseUrl+BBLog.lang+'/download" target="_blank">* '+BBLog.trans("new-addon")+'</a>');
            }e
        });
    },

    initRadars : function(){
        // bind reset userradar
        $("#resetUserradar").bind("click", function(){
            if(confirm('Really?')){
                BBLog.storage("userradarObject", {});
                $(this).find(".userradarcounter").html(0);
                BBLog.bblog.trigger("click");
            }
        });

        // bind userradar list
        $("#listUserradar").bind("click", function(){
            BBLog.bblog.find(".bblog_menu").addClass("expanded");
            var obj = BBLog.storage("userradarObject");
            obj = !obj ? {} : obj;
            var text = [];
            for(i in obj){
                if(!obj[i]) continue;
                text.push(i+" ("+obj[i]+")");
            }
            BBLog.bblog.find(".expand").html(
                '<h4>'+BBLog.trans("userradar-editlist")+'</h4><textarea style="height:150px;" cols="45" rows="10">'+text.join("\n")+'</textarea>'
                + '<div style="font-size:10px; padding-bottom:3px; letter-spacing:normal;">'+BBLog.trans("userradar-syntax")+'</div>'
                + '<input type="button" value="'+BBLog.trans("save")+'" class="base-button-arrow-tiny" id="saveUserradar"/> &nbsp; '
                + '<input type="button" value="'+BBLog.trans("cancel")+'" class="base-button-arrow-tiny" onclick="BBLog.bblog.trigger(\'click\')"/>'
            );
            $("#saveUserradar").prevAll("textarea").bind("click", function(e){
                e.stopPropagation();
            });
            $("#saveUserradar").bind("click", function(){
                var text = $(this).prevAll("textarea").val();
                var spl = text.split("\n");
                var id, name = "";
                obj = {};
                for(i in spl){
                    if(!spl[i].match(/^([0-9]+)/) || !spl[i].match(/\((.*)\)/)) continue;
                    id = parseInt(spl[i].match(/^([0-9]+)/)[1]);
                    name = spl[i].match(/\((.*)\)/)[1];
                    obj[id] = name;
                }
                BBLog.bblog.trigger("click");
                BBLog.storage("userradarObject", obj);
            });
        });


        // bind reset userradar
        $("#resetServerradar").bind("click", function(){
            if(confirm('Really?')){
                BBLog.storage("serverradarObject", {});
                $(this).find(".serverradarcounter").html(0);
                BBLog.bblog.trigger("click");
            }
        });

        // bind userradar list
        $("#listServerradar").bind("click", function(){
            BBLog.bblog.find(".bblog_menu").addClass("expanded");
            var obj = BBLog.storage("serverradarObject");
            obj = !obj ? {} : obj;
            var text = [];
            for(i in obj){
                if(!obj[i]) continue;
                text.push(i+" ("+obj[i]+")");
            }
            BBLog.bblog.find(".expand").html(
                '<h4>'+BBLog.trans("serverradar-editlist")+'</h4><textarea style="height:150px;" cols="45" rows="10">'+text.join("\n")+'</textarea>'
                + '<div style="font-size:10px; padding-bottom:3px;  letter-spacing:normal;">'+BBLog.trans("serverradar-syntax")+'</div>'
                + '<input type="button" value="'+BBLog.trans("save")+'" class="base-button-arrow-tiny" id="saveServerradar"/> &nbsp; '
                + '<input type="button" value="'+BBLog.trans("cancel")+'" class="base-button-arrow-tiny" onclick="BBLog.bblog.trigger(\'click\')"/>'
            );
            $("#saveServerradar").prevAll("textarea").bind("click", function(e){
                e.stopPropagation();
            });
            $("#saveServerradar").bind("click", function(){
                var text = $(this).prevAll("textarea").val();
                var spl = text.split("\n");
                var id, name = "";
                obj = {};
                for(i in spl){
                    if(!spl[i].match(/^([0-9a-z\-]+)/i) || !spl[i].match(/\((.*)\)/)) continue;
                    id = spl[i].match(/^([0-9a-z\-]+)/i)[1];
                    name = spl[i].match(/\((.*)\)/)[1];
                    obj[id] = name;
                }
                BBLog.bblog.trigger("click");
                BBLog.storage("serverradarObject", obj);
            });
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
        // serverradar counter update
        el.find(".serverradarcounter").html(BBLog.count(BBLog.storage("serverradarObject")));
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

        // serverradar
        if(BBLog.storage("serverradar")){
            if(url.match(/\/servers\/show\/(.*?)/)){
                BBLog.updateServerradar("page");
            }else if(url.match(/\/servers\/(.*)/)){
                BBLog.updateServerradar("servers");
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
    * Update serverradar
    *
    * @param action
    */
    updateServerradar : function(action){
        // on a profile page
        if(action == "page" && !$("#bblog_serverradar_profile").size()){
            var id = $("#serverguide-show-joinserver-form").attr("guid");
            if(id){
                var name = $("#server-header h1:first").text();
                $("#serverguide-middle").prepend('<div class="bblog_userradar_profile bubble-title" id="bblog_serverradar_profile" data-battlebubble="'+this.trans('button-serverradar')+'" data-serverid="'+id+'" data-servername="'+name+'"><span></span></div>');
                this.updateServerradar("addicon");
            }
        // on the serverlist
        }else if(action == "servers" || action == "page"){
            var serverId = $("#serverguide-show-joinserver-form").not("[data-processed-server]");
            if(!serverId.size()){
                return;
            }
            serverId.attr("data-processed-server", true);
            serverId = serverId.attr("guid");

            var opt = BBLog.storage("serverradarObject");
            var urlMatch = window.location.href.match(/(.*)\/servers\//);
            if(!urlMatch) return;
            if(typeof opt[serverId] != "undefined"){
                var form = $("#serverguide-show-joinserver-form");
                form.prepend(
                    '<div class="bblog_userradar_warning"><span></span> '+BBLog.trans("serverradar-warning")+'</div>'
                );
                if(window.location.href.match(/servers\/show\//)){
                    form.css({"float" : "right", "top" : "-30px", "position" : "relative"});
                    form.closest("#server-header").css("margin-bottom", "0px");
                }
            }
        // addicon
        }else if(action == "addicon"){
            var id = $("#bblog_serverradar_profile").attr("data-serverid");
            var name = $("#bblog_serverradar_profile").attr("data-servername");
            $("#bblog_serverradar_profile").bind("click", function(){
                var data = BBLog.storage("serverradarObject");
                data = !data ? {} : data;
                $(this).toggleClass("active");
                if($(this).hasClass("active")){
                    data[id] = name;
                }else{
                    if(typeof data[id] != "undefined"){
                        delete data[id];
                    }
                }
                BBLog.storage("serverradarObject", data);
            });
            var data = BBLog.storage("serverradarObject");
            if(typeof  data[id] != "undefined" &&  data[id]){
                $("#bblog_serverradar_profile").addClass("active");
            }
        }
    },

    /**
    * Update userradar
    *
    * @param action
    */
    updateUserradar : function(action){
        // on a profile page
        if(action == "profile" && !$("#bblog_userradar_profile").size()){
            var m = $("div.soldier-name a").attr("href").match(/\/([^\/]+)\/stats\/([0-9]+)/);
            if(m){
                $("div.profile-post-general-report:first").before('<div class="bblog_userradar_profile bubble-title" id="bblog_userradar_profile" data-battlebubble="'+this.trans('button-userradar')+'" data-userid="'+m[2]+'" data-username="'+m[1]+'"><span></span></div>');
                this.updateUserradar("addicon");
            }
        // on a user stats page
        }else if(action == "stats" && !$("#bblog_userradar_profile").size()){
            var m = window.location.href.match(/\/([^\/]+)\/stats\/([0-9]+)/);
            if(m){
                $(".tabs-outer:first").prepend('<div class="bblog_userradar_profile bubble-title" id="bblog_userradar_profile" data-battlebubble="'+this.trans('button-userradar')+'" style="top:10px; z-index:1;" data-userid="'+m[2]+'" data-username="'+m[1]+'"><span></span></div>');
                this.updateUserradar("addicon");
            }
        // serverlist
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
                            var url = window.location.href.replace(/\/servers\/(.*)/ig, "/")+"soldier/"+player.personaName+"/stats/"+userId+"/";
                            form.prepend(
                                '<div class="bblog_userradar_warning" data-user="'+userId+'"><span></span>'+BBLog.trans("userradar-warning").replace(/\{0\}/, '<a href="'+url+'" style="font-size:11px;">'+player.personaName+'</a>')+'</div>'
                            );
                        }
                    }
                }
            });
        // addicon
        }else if(action == "addicon"){
            var userId = parseInt($("#bblog_userradar_profile").attr("data-userid"));
            var username = $("#bblog_userradar_profile").attr("data-username");
            $("#bblog_userradar_profile").bind("click", function(){
                var data = BBLog.storage("userradarObject");
                data = !data ? {} : data;
                $(this).toggleClass("active");
                if($(this).hasClass("active")){
                    data[userId] = username;
                }else{
                    if(typeof data[userId] != "undefined"){
                        delete data[userId];
                    }
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

        // get box tpl
        var getBoxTpl = function(cl, additionalData){
            additionalData = typeof additionalData == "undefined" ? "" : additionalData;
            return '<div class="'+cl+' common-box-narrow common-box-title-clean venice-single-stats-column"><div class="common-box-container"><div class="common-box-inner-border"><div class="common-box-title"></div><div class="common-box-inner venice-single-stats-column-height"><div class="venice-statsitem-bar-container">'+additionalData+'</div></div></div></div></div>'
        };

        // get item row
        var getItemRow = function(title, value){
            return '<div class="venice-statsitem-box-item"><div class="venice-statsitem-bar-title">'+title+'</div>'
                + '<div class="venice-statsitem-bar-value">'+value+'</div><div style="clear:both;"></div>'
        };

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
        boxContainer.closest(".venice-stats-container").append('<div style="margin-top:10px; margin-bottom:10px;" class="common-secondary-column-line"></div><div id="fastWeaponSwitch" class="bblog_weaponswitch">'+this.trans("weapon-switch")+'</div>');
        boxContainer.after('<div class="venice-stats-small-boxes bblog_weaponInfo" style="margin-top:10px;" id="bblog_weaponInfo"></div><div class="venice-stats-small-boxes bblog_weaponInfo" style="margin-top:10px;" id="bblog_weaponInfo_second"></div>');
        $("#fastWeaponSwitch").append(weapDiv).bind("click", function(){
            $(this).find(".hidden").removeClass("hidden");
        });

        var firstBox = $(getBoxTpl("extraInfos first"));
        var secondBox = $(getBoxTpl("damagemodel", '<div class="torso"></div>'));
        var thirdBox = $(getBoxTpl("damagecharts"));

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
            appendCont.append(getItemRow(text, displayInfos[i]));
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
            appendCont.append(getItemRow(text, calculatedDistDmg+"%"));
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
        secondBox = $(getBoxTpl("plotinfo"));
        thirdBox = $(getBoxTpl("plotdesc"));

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
            appendCont.append(getItemRow(text, +wdata["recoil"][i]));
        }
        for(i in wdata["spread"]){
            text = this.trans("weapon-spread-"+i);
            if(typeof text == "object"){
                text = text[0]+" <span class='bubble-title info' data-battlebubble='"+text[1]+"'></span>";
            }
            appendCont.append(getItemRow(text, +wdata["spread"][i]));
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