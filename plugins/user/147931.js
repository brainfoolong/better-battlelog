/**
* Friends Highlighter - Highlights your friends in the scoreboard and battlereports
*
* @author I-MrFixIt-I
* @version 1.0
* @url https://getbblog.com/
*/

// initialize your plugin
BBLog.handle("add.plugin", {

    stdColor : "#00c8ff",

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id : "mrfixit-friends-highlighter",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name : "Friends Highlighter",

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations : {
        "en" : {
            "use.friends-highlighter" : "Use Friends Highlighter",
            "use.highlight-scoreboard" : "Highlight friends in scoreboard",
            "use.highlight-battlereport" : "Highlight friends in battlereport",
            "change-color" : "Change color",
            "choose-color" : "Choose a color of your choice. Example: #00c8ff"
        },
        "de" : {
            "use.friends-highlighter" : "Friends Highlighter verwenden",
            "use.highlight-scoreboard" : "Freunde im Scoreboard hervorheben",
            "use.highlight-battlereport" : "Freunde im Kampfbericht hervorheben",
            "change-color" : "Farbe ändern",
            "choose-color" : "Wähle eine Farbe deiner Wahl. Beispiel: #00c8ff"
        }
    },

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
    configFlags : [
        {"key" : "use.friends-highlighter", "init" : 1},
        {"key" : "use.highlight-scoreboard", "init" : 1},
        {"key" : "use.highlight-battlereport", "init" : 1},
        {"key" : "change-color", "init" : 0, "handler" : function(instance){
            var color = prompt(instance.t("choose-color"));
            if (color.charAt(0) != "#")
            {
                color =+ "#";
            }
            
            var isHexValue  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
            if (isHexValue)
            {
                instance.storage("color", color);
            }
        }}
    ],

    friendsListcontainsUsername : function(soldierName){
        var containsUsername = false;
        var friendsList = comcenter.getFriendsListFromLs();
        friendsList.forEach(function(friend) {
            if (friend.username == soldierName)
            {
                containsUsername = true;
            }
        });
        
        return containsUsername;
    },
    
    highlightFriends : function(instance, rows){
        $.each($(rows), function() {
            var soldierNameContainer = $(this).find(".soldier-name .user-info .common-playername-personaname-nolink");
            var soldierName = $(soldierNameContainer).text();
    	    var tag = $(soldierNameContainer).find(".bblog-tag").text(); // get clan tag from player
    	    
    	    if (tag.length > 0)
    	    {
    	        soldierName = soldierName.substr(tag.length); // get playername and cut the clantag from it
    	    }
    
            if(instance.friendsListcontainsUsername(soldierName))
            {
                if (instance.storage("change-color"))
                {
                    var color = instance.storage("color");
                    if (color !== null)
                    {
                        $(soldierNameContainer).css("color", color);
                    }
                    else
                    {
                        $(soldierNameContainer).css("color", instance.stdColor);
                    }
                    
                }
                else
                {
                    $(soldierNameContainer).css("color", instance.stdColor);
                }
            }
        });
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
    domchange : function(instance){
        if (instance.storage("use.friends-highlighter"))
        {
            if(instance.storage("use.highlight-scoreboard") && window.location.href.match(/\/servers\/show\/pc\//i)){
                instance.highlightFriends(instance, $("#server-players-list .row table tbody tr"));
        	}
        	else if(instance.storage("use.highlight-battlereport") && window.location.href.match(/\/battlereport\/show\/1\//i)){
                instance.highlightFriends(instance, $("#battlereport-scoreboard .row table tbody tr"));
        	}
        }
    }
});