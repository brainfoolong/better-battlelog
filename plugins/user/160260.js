/**
* True Player Counts - Shows the true player count on the server (Not the ones in queue/cheating with the bots).
* 
* Used I-MrFixIt-I's Friends Highlighter as a base.
* 
* @author xfileFIN
* @version 1.3
* @url https://getbblog.com
*/

// initialize your plugin
BBLog.handle("add.plugin", {

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id: "xfilefin-true-playercounts",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name: "True Player Counts",

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations: {
        "en": {
            "use.true-playercounts": "Use True Player Counts",
            "use.fetch-all": "Fetch all on page load (OnClick only if set to false)",
            "use.trim-view": "Trim Spectator/Commander",
            "change-color-high": "Change color (High)",
            "choose-color-high": "Choose a color of your choice. Example: #ff0000",
            "change-color-mid": "Change color (Mid)",
            "choose-color-mid": "Choose a color of your choice. Example: #99b839",
            "change-color-low": "Change color (Low)",
            "choose-color-low": "Choose a color of your choice. Example: #39b54a"
        },
        "de": {
            "use.true-playercounts": "Use True Player Counts",
            "use.fetch-all": "Fetch all on page load (OnClick only if set to false)",
            "use.trim-view": "Trim Spectator/Commander",
            "change-color-high": "Farbe Ã¤ndern (High)",
            "choose-color-high": "WÃ¤hle eine Farbe deiner Wahl. Beispiel: #ff0000",
            "change-color-mid": "Farbe Ã¤ndern (Mid)",
            "choose-color-mid": "WÃ¤hle eine Farbe deiner Wahl. Beispiel: #99b839",
            "change-color-low": "Farbe Ã¤ndern (Low)",
            "choose-color-low": "WÃ¤hle eine Farbe deiner Wahl. Beispiel: #39b54a"
        }
    },

    stdColorHigh: "#ff0000",
    stdColorMid: "#99b839",
    stdColorLow: "#39b54a",

    /**
    * Configuration Options that appears in the BBLog Menu
    * Every option must be an object with properties as shown bellow
    * Properties available:
    *   key : The name for your config flag - The user can toggle this option
    *         and you can retreive the users choice with instance instance.storage(YOUR_KEY_NAME) (0 or 1 will be returned)
    *   init : Can be 0 or 1 - Represent the initial status of the option when the user load the plugin for the first time
    *          If you want that this option is enabled on first load (opt-out) than set it to 1, otherwise to 0 (opt-in)
    *   handler(optional): When set as a function this config entry turns into a button (like the plugins button you see in the bblog menu)
    *                       The function well be executed when the user clicks the button
    */
    configFlags: [
        { "key": "use.true-playercounts", "init": 1 },
        { "key": "use.fetch-all", "init": 1 },
        { "key": "use.trim-view", "init": 0 },
        {
            "key": "change-color-high", "init": 0, "handler": function (instance) {
                var color = prompt(instance.t("choose-color-high"));
                if (color.charAt(0) != "#") {
                    color = + "#";
                }

                var isHexValue = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
                if (isHexValue) {
                    instance.storage("colorHigh", color);
                }
            }
        },
        {
            "key": "change-color-mid", "init": 0, "handler": function (instance) {
                var color = prompt(instance.t("choose-color-mid"));
                if (color.charAt(0) != "#") {
                    color = + "#";
                }

                var isHexValue = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
                if (isHexValue) {
                    instance.storage("colorMid", color);
                }
            }
        },
        {
            "key": "change-color-low", "init": 0, "handler": function (instance) {
                var color = prompt(instance.t("choose-color-low"));
                if (color.charAt(0) != "#") {
                    color = + "#";
                }

                var isHexValue = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
                if (isHexValue) {
                    instance.storage("colorLow", color);
                }
            }
        }
    ],

    /**
    * A handler that be fired immediately (only once) after the plugin is loaded into bblog
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    init: function (instance) {
        // some log to the console to show you how the things work
        /*console.log(
            "plugin."+instance.id+".init"
        );*/
    },

    /**
    * A trigger that fires everytime when the dom is changing but at max only once each 200ms (5x per second) to prevent too much calls in a short time
    * Example Case: If 10 DOM changes happen in a period of 100ms than this function will only been called 200ms after the last of this 10 DOM changes
    * This make sure that all actions in battlelog been finished before this function been called
    * This is how BBLog track Battlelog for any change, like url, content or anything
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    domchange: function (instance) {
        if (!instance.storage("use.true-playercounts")) {
            return;
        }
        // some log to the console to show you how the things work
        /*console.log(
            "plugin." + instance.id + ".domchanged"
        );*/

        if (BBLog.cache("mode") != "bf4" || !serverbrowserwarsaw || !serverbrowserwarsaw.table) {
            return;
        }

        var e = serverbrowserwarsaw.table;

        e.find("tbody .server-row").each(function () {
            $(this).addClass("bblog-serverbrowser-filters")
            var data = $(this).data("server");
            if (!data) return true;

            // True player count
            var url = "http://keeper.battlelog.com/snapshot/" + data.guid;
            function getByValue(arr, value) {
                if (!arr) return true;
                var result = arr.filter(function (o) { return o.responseURL == value; });
                return result ? result[0] : null; // or undefined
            }

            var snapshotData = getByValue(BBLog.cache("ajax.cache"), url);
            var snappi;
            if (instance.storage("use.fetch-all") && (snapshotData == null || snapshotData.response == null)) {
                $.ajax({
                    async: false,
                    url: url,
                    success: function (result) {
                        snappi = result;
                    }
                });
            }
            else if (snapshotData != null) {
                snappi = JSON.parse(snapshotData.response);
            }
            if (!snappi) {
                return true;
            }
            var totalPlayers = 0;
            if (snappi != null && snappi.snapshot != null && snappi.snapshot.teamInfo != null) {
                var teamInfos = snappi.snapshot.teamInfo;
                totalPlayers += (["0"] in teamInfos ? BBLog.count(teamInfos["0"].players) : 0);
                totalPlayers += (["1"] in teamInfos ? BBLog.count(teamInfos["1"].players) : 0);
                totalPlayers += (["2"] in teamInfos ? BBLog.count(teamInfos["2"].players) : 0);
                totalPlayers += (["3"] in teamInfos ? BBLog.count(teamInfos["3"].players) : 0);
                totalPlayers += (["4"] in teamInfos ? BBLog.count(teamInfos["4"].players) : 0);

                if (data.slots[2] && !$(this).find(".bblog-slots.trueplayercount").length) {
                    if ($(this).find(".bblog-slots.commander").length) {
                        $(this).find(".bblog-slots.commander").before('<div class="bblog-slots trueplayercount">' + totalPlayers + "/" + data.slots[2].max + '</div>');
                    }
                    else if ($(this).find(".bblog-slots.spectator").length) {
                        $(this).find(".bblog-slots.spectator").before('<div class="bblog-slots trueplayercount">' + totalPlayers + "/" + data.slots[2].max + '</div>');
                    }
                    else {
                        $(this).find("td.players").append('<div class="bblog-slots trueplayercount">' + totalPlayers + "/" + data.slots[2].max + '</div>');
                    }
                    var serverplayers = $(this).find(".bblog-slots.trueplayercount");

                    var difference = Math.abs(data.slots[2].current - totalPlayers);
                    if (difference <= 2) {
                        if (instance.storage("change-color-low")) {
                            var color = instance.storage("colorLow");
                            if (color !== null) {
                                $(serverplayers).css("color", color);
                            }
                            else {
                                $(serverplayers).css("color", instance.stdColorLow);
                            }
                        }
                        else {
                            $(serverplayers).css("color", instance.stdColorLow);
                        }
                    }
                    else if (difference <= 5) {
                        if (instance.storage("change-color-mid")) {
                            var color = instance.storage("colorMid");
                            if (color !== null) {
                                $(serverplayers).css("color", color);
                            }
                            else {
                                $(serverplayers).css("color", instance.stdColorMid);
                            }
                        }
                        else {
                            $(serverplayers).css("color", instance.stdColorMid);
                        }
                    }
                    else {
                        if (instance.storage("change-color-high")) {
                            var color = instance.storage("colorHigh");
                            if (color !== null) {
                                $(serverplayers).css("color", color);
                            }
                            else {
                                $(serverplayers).css("color", instance.stdColorHigh);
                            }
                        }
                        else {
                            $(serverplayers).css("color", instance.stdColorHigh);
                        }
                    }
                    $(serverplayers).css("font-size", "12px");
                }
            }

            // Remove the unneeded nodes to make the view a bit nicer/cleaner
            if (instance.storage("use.trim-view")) {
                if (data.slots[4] && $(this).find(".bblog-slots.commander").length && data.slots[4].current <= 0) {
                    $(this).find(".bblog-slots.commander").css("display", "none");
                }
                if (data.slots[8] && $(this).find(".bblog-slots.spectator").length && data.slots[8].current <= 0) {
                    $(this).find(".bblog-slots.spectator").css("display", "none");
                }
            }
        });
    },
});
