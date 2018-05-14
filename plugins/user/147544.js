/**
* Comcenter Remover - Removes the comcenter (chat and friends)
*
* @author I-MrFixIt-I
* @version 1.0
* @url https://getbblog.com/
*/

// initialize your plugin
BBLog.handle("add.plugin", {

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id : "mrfixit-comcenter-remover",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name : "Comcenter Remover",

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations : {
        "en" : {
            "use.comcenter-remover" : "Use Comcenter Remover"
        },
        "de" : {
            "use.comcenter-remover" : "Comcenter Remover verwenden"
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
        {"key" : "use.comcenter-remover", "init" : 1}
    ],

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
        if (instance.storage("use.comcenter-remover"))
        {
            $("#comcenter_container").remove(); // remove comcenter container which is holding the comcenter object
            
            var body = $('body'); // get body container
            
            // remove any classes which contain the word "comcenter", for example the class "show-comcenter"
            var classList = String(body.attr('class')).split(/\s+/);
            $.each(classList, function(index, item) {
                if (item.indexOf('comcenter') >= 0)
                {
                    body.removeClass(item);
                }
            });
            
            // add the class "no-comcenter" to fix the positioning of the content (default class if you are logged out (no comcenter))                    
            body.addClass("no-comcenter");
        }
    }
});