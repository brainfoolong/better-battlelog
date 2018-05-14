/**
* Example Plugin - Show how you can use the plugin engine
* NOTE: Do NOT set global values outside of the plugin object
*    Maybe they will conflict with other addons or any in-page related variables
*    Only use the plugin cache/storage to set/get variables
*
* @author BrainFooLong
* @version 1.1
* @url https://getbblog.com
*/

// initialize your plugin
BBLog.handle("add.plugin", {

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id : "my-plugin",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name : "Name of my Plugin",

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations : {
        "en" : {
            "foo.bar" : "My Test Config Flag",
            "foo.bar.tooltip" : "The tooltip for my foo bar flag",
            "my.option" : "Config Flag 2",
            "my.btn.option" : "Edit List",
            "other.trans" : "Foo Bar"
        },
        "de" : {
            "foo.bar" : "Mein Test",
            "foo.bar.tooltip" : "Der Tooltip zum Test Key",
            "my.option" : "Config Flag 2",
            "my.btn.option" : "Liste bearbeiten",
            "other.trans" : "Foo Bar",
            "plugin.name" : "Der Name meines Plugins"
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
        {"key" : "foo.bar", "init" : 0},
        {"key" : "my.option", "init" : 1},
        {"key" : "my.btn.option", "init" : 1, "handler" : function(instance){
            instance.myOwnCustomFunc123(instance);
        }}
    ],

    /**
    * A handler that be fired immediately (only once) after the plugin is loaded into bblog
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    init : function(instance){
        // some log to the console to show you how the things work
        console.log(
            "plugin."+instance.id+".init",
            instance.t("my.option"),
            instance.storage("foo.bar"),
            instance.storage("my.option"),
            instance.cache("cache.test"),
            instance.storage("permanent.test")
        );
        // testdata
        instance.cache("cache.test", Math.random());
        instance.storage("permanent.test", Math.random());
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
        // some log to the console to show you how the things work
        console.log(
            "plugin."+instance.id+".domchanged",
            instance.t("my.option"),
            instance.storage("foo.bar"),
            instance.storage("my.option"),
            instance.cache("cache.test"),
            instance.cache("permanent.test")
        );
    },

    /**
    * This could be a function that you've implemented, it's up to you and your plugin
    * Notice the "instance" parameter, you should always pass the instance to any own function
    * See in the "my.btn.option" config flag click handler where this function is called for example
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use "instance" to access any plugin related function, not use "this" because it's not working properly
    *    For example: If you add a new function to your addon, always pass the "instance" object
    */
    myOwnCustomFunc123 : function(instance){
        alert("Hooo boy, you've clicked the button in the options. Now it's on you what you will make with this feature!");
    },

    /**
    * This function will be setted (injected) by the initializer
    * This placeholder must not be implemented in your plugin,
    *    it's added for tutorial purposes only in this example to show you how the function will look like
    * Get the translation for your plugin, depends on the current user language
    *
    * @param string key
    */
    t : function(key){},

    /**
    * This function will be setted (injected) by the initializer
    * This placeholder must not be implemented in your plugin,
    *    it's added for tutorial purposes only in this example to show you how the function will look like
    * Get/Set values in the plugin cache, cache means a temporarily cache which will be flushed after a complete page reload (not a ajax reload)
    * You don't need to add a prefix/namespace to the key, it's already namespaced and sandboxed to your plugin
    *
    * @param string key
    * @param mixed value Optional, if not set the function return the value instead of setting it
    */
    cache : function(key, value){},

    /**
    * This function will be setted (injected) by the initializer
    * This placeholder must not be implemented in your plugin,
    *    it's added for tutorial purposes only in this example to show you how the function will look like
    * Get/Set values in the permanent storage, this data will be stored forever
    * Please use this not as much because users browser storage is limited
    * You don't need to add a prefix/namespace to the key, it's already namespaced and sandboxed to your plugin
    * Also the config flag setting will be stored here, in our example "foo.bar", "my.option" and "my.btn.option" as integer values
    *
    * @param string key
    * @param mixed value Optional, if not set the function return the value instead of setting it
    */
    storage : function(key, value){}
});