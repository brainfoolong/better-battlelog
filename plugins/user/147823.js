/**
* Categorized Favorites for BF4 and BFH - Categorize your favorites
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
    id : "mrfixit-categorized-favorites",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name : "Categorized Favorites",

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations : {
        "en" : {
            "use.categorized-favorites" : "Use Categorized Favorites",
            
            "create-folder-message" : "Which category you want to add?",
            "remove-folder-message" : "Which category you want to remove?",
            
            "create-folder" : "Add category",
            "delete-folder" : "Remove category",
            
            "add-to-folder" : "Add to %s",
            "remove-from-folder" : "Remove from %s"
        },
        "de" : {
            "use.categorized-favorites" : "Categorized Favorites verwenden",
            
            "create-folder-message" : "Welche Kategorie möchtest du hinzufügen?",
            "remove-folder-message" : "Welche Kategorie möchtest du entfernen?",
            
            "create-folder" : "Kategorie hinzufügen",
            "delete-folder" : "Kategorie entfernen",
            
            "add-to-folder" : "Zu %s hinzufügen",
            "remove-from-folder" : "Von %s entfernen"
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
        {"key" : "use.categorized-favorites", "init" : 1}
    ],

    // get the game from the url => bf3, bf4, bfh, or mohw
    getGameFromURL : function(){
        var prefix = "http://battlelog.battlefield.com/";
        var substring = window.location.href.substring(prefix.length);
        var index = substring.indexOf("/");
        return substring.substring(0, index);
    },

    // get all saved folders from storage
    getFolderList : function(instance){
        var game = instance.getGameFromURL() + ".";
        return JSON.parse(instance.storage(game + "folders"));
    },
    
    // save folderList in storage
    setFolderList : function(instance, folderList){
        var game = instance.getGameFromURL() + ".";
        instance.storage(game + "folders", JSON.stringify(folderList));
    },
    
    // add folder to folderList
    addFolder : function(instance, folder){
        var folderList = instance.getFolderList(instance);
        if (folderList === null)
        {
            var tmp = [];
            tmp[0] = folder;
            instance.setFolderList(instance, tmp);
        }
        else if (folderList.indexOf(folder) == -1)
        {
            folderList.push(folder);
            instance.setFolderList(instance, folderList);
        }
    },
    
    // remove folder from folderList
    removeFolder : function(instance, folder){
        var game = instance.getGameFromURL() + ".";
        instance.storage(game + folder, null); // delete folder and all containing server from storage
        
        var folderList = instance.getFolderList(instance);
        if (folderList !== null)
        {
            var folderIndex = folderList.indexOf(folder);
            if (folderIndex > -1)
            {
                folderList.splice(folderIndex, 1); // delete folder from array
                instance.setFolderList(instance, folderList);
            }
        }
    },

    // get all saved server from folder from storage
    getServerList : function(instance, folderName){
        var game = instance.getGameFromURL() + ".";
        return JSON.parse(instance.storage(game + folderName));
    },
    
    // save serverList in folder in storage
    setServerList : function(instance, folderName, serverList){
        var game = instance.getGameFromURL() + ".";
        instance.storage(game + folderName, JSON.stringify(serverList));
    },
    
    // add server to serverList in folder
    addServer : function(instance, folder, server){
        var serverList = instance.getServerList(instance, folder);
        if (serverList === null)
        {
            var tmp = [];
            tmp[0] = server;
            instance.setServerList(instance, folder, tmp);
        }
        else if (serverList.indexOf(server) == -1)
        {
            serverList.push(server);
            instance.setServerList(instance, folder, serverList);
        }
    },
    
    // remove server from serverList in folder
    removeServer : function(instance, folder, server){
        var serverList = instance.getServerList(instance, folder);
        if (serverList !== null)
        {
            var serverIndex = serverList.indexOf(server);
            if (serverIndex > -1)
            {
                serverList.splice(serverIndex, 1); // delete server from array
                instance.setServerList(instance, folder, serverList);
            }
        }
    },
    
    // get the currently active data-guid from the "join server" button
    getActiveServerGUID : function(){
        return $("#favorites .server-info .action-buttons-container button").attr("data-guid");
    },
    
    // create folder in storage and add to page
    // this function gets called by clicking the "Create folder" button
    createFolder_onClick : function(instance){
        var folderName = prompt(instance.t("create-folder-message")); // open prompt and let use choose a folder name
        if (folderName !== null) { // if the prompt was successfully
            instance.addFolder(instance, folderName); // add the foldername to the folderlist in storage
            
            // if the "add-to-folder" div element isn't created until now, create it now
            if (!$("#add-to-folder").length)
            {
                var folderHTML = "<div id='add-to-folder' style='margin-top: 9px;'></div>";
                $(folderHTML).insertAfter($("#favorites .server-info .action-buttons-container"));
            }
            
            // append the new created folder to the page and add the onClick function
            $("#add-to-folder").append("<button data-folder-name=" + folderName + " class='btn btn-secondary btn-tiny btn-block arrow' style='margin-top: -1px;'>" + instance.t("add-to-folder").replace("%s", folderName) + "</button>").click(function() {
                instance.addServerToFolder_onClick(instance, this);
            });
            
            // if the "favorites-folder" div element isn't created until now, create it now
            if (!$("#favorites-folder").length)
            {
                var folderMenuHTML = "<nav id='favorites-folder' class='submenu spacing-bottom-small'><ul>";
                $(folderMenuHTML).insertAfter($("#serverbrowser > nav[class*='submenu']"));
            }
            // append the new created menu item to the page and add the onClick function
            $("#favorites-folder > ul").append( "<li data-folder-name='" + folderName + "'><a>" + folderName + "</a></li>").click(function() {
                instance.openFolder_onClick(instance, this);
            });
        }
    },
    
    // remove folder and all it's containing server from storage and remove it from page
    // this function gets called by clicking the "Delete folder" button
    deleteFolder_onClick : function(instance){
        var folderName = prompt(instance.t("create-folder-message")); // open prompt and let use choose a folder name
        if (folderName !== null) { // if the prompt was successfully
            instance.removeFolder(instance, folderName);
            
            $("#add-to-folder button[data-folder-name='" + folderName + "']").remove();
            $("#favorites-folder ul li[data-folder-name='" + folderName + "']").remove();
        }
    },
    
    openFolder_onClick : function(instance, element){
        $("#favorites-folder ul li[class='active']").removeClass("active"); // remove from all menu items the active class...
        $(element).addClass("active"); // ... and add it to the clicked element
        
        var folderName = $(element).attr("data-folder-name");
        var serverList = instance.getServerList(instance, folderName);
        if (serverList !== null && serverList.length > 0)
        {
            $("#serverbrowser-results tbody tr").css("display", ""); // make all server visible
            $.each($("#serverbrowser-results tbody tr"), function() { // iterate through each server...
                if (serverList.indexOf($(this).attr("data-guid")) == -1) // and if the server isn't in the folder...
                {
                    $(this).css("display", "none"); // make it invisible again
                }
            });
        }
        else
        {
            $("#serverbrowser-results tbody tr").css("display", "none"); // make all server visible
        }
        
        $("#serverbrowser-results tbody tr:visible:first").click(); // click the first visible server, battlelog will now refresh the server info on the right side
    },
    
    closeFolder_onClick : function(){
        $("#favorites-folder ul li[class='active']").removeClass("active"); // remove from all menu items the active class...
        $("#serverbrowser-results tbody tr").css("display", ""); // make all server visible
        $("#serverbrowser-results tbody tr:visible:first").click(); // click the first visible server, battlelog will now refresh the server info on the right side
    },
    
    // add server to folder in storage
    // this function gets called by clicking the "Add to ..." button
    addServerToFolder_onClick : function(instance, element){
        var folderName = $(element).attr("data-folder-name");
        var guid = instance.getActiveServerGUID();
        instance.addServer(instance, folderName, guid);
        
        $(element).attr("data-action", "remove-from-folder");
        
        $(element).text(instance.t("remove-from-folder").replace("%s", folderName));
        if ($("#favorites-folder ul li[class='active'] a").text() == folderName)
        {
            $("#serverbrowser-results tbody tr[data-guid='" + guid + "']").css("display", ""); // make it invisible again
        }
    },
    
    // remove server from folder in storage
    // this function gets called by clicking the "Remove from ..." button
    removeServerFromFolder_onClick : function(instance, element){
        var folderName = $(element).attr("data-folder-name");
        var guid = instance.getActiveServerGUID();
        instance.removeServer(instance, folderName, guid);
        
        $(element).attr("data-action", "add-to-folder");
        
        $(element).text(instance.t("add-to-folder").replace("%s", folderName));
        if ($("#favorites-folder ul li[class='active'] a").text() == folderName)
        {
            $("#serverbrowser-results tbody tr[data-guid='" + guid + "']").css("display", "none"); // make it invisible again
        }
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
        if(instance.storage("use.categorized-favorites") && window.location.href.match("/servers/favourites/pc/")){
            var game = instance.getGameFromURL();
            if (game == "bf4" || game == "bfh")
            {
                if (!$("#folder-management").length)
                {
                    $("#serverbrowser > header[class='clearfix'").append("<div id='folder-management' class='pull-right'></div>");
                    
                    $("#serverbrowser > header[class='clearfix'] #folder-management").append("<button id='create-folder-button' class='btn btn-secondary btn-medium arrow'>" + instance.t("create-folder") + "</button>");
                    $("#serverbrowser > header[class='clearfix'] #folder-management #create-folder-button").click(function() {
                        instance.createFolder_onClick(instance);
                    });
                    
                    $("#serverbrowser > header[class='clearfix'] #folder-management").append("<button id='delete-folder-button' class='btn btn-secondary btn-medium arrow'>" + instance.t("delete-folder") + "</button>");
                    $("#serverbrowser > header[class='clearfix'] #folder-management #delete-folder-button").click(function() {
                        instance.deleteFolder_onClick(instance);
                    });
                }
        
                var folderList = instance.getFolderList(instance);
                if (folderList !== null)
                {
                    if (!$("#add-to-folder").length)
                    {
                        var folderHTML = "<div id='add-to-folder' style='margin-top: 9px;'>";
                        var guid = instance.getActiveServerGUID();
                        
                        folderList.forEach(function(folder) {
                            var serverList = instance.getServerList(instance, folder);
                            if (serverList === null || serverList.indexOf(guid) == -1)
                            {
                                folderHTML += "<button data-folder-name='" + folder + "' data-action='add-to-folder' class='btn btn-secondary btn-tiny btn-block arrow' style='margin-top: -1px;'>" + instance.t("add-to-folder").replace("%s", folder) + "</button>";
                            }
                            else
                            {
                            	folderHTML += "<button data-folder-name='" + folder + "' data-action='remove-from-folder' class='btn btn-secondary btn-tiny btn-block arrow' style='margin-top: -1px;'>" + instance.t("remove-from-folder").replace("%s", folder) + "</button>";
                            }
                        });
            
                        folderHTML += "</div>";
        
                        $(folderHTML).insertAfter($("#favorites .server-info .action-buttons-container"));
        
                        $.each($("#favorites .server-info #add-to-folder button"), function() {
                            $(this).click(function() {
                                if ($(this).attr("data-action") == "add-to-folder")
                                {
                                    instance.addServerToFolder_onClick(instance, this);
                                }
                                else if ($(this).attr("data-action") == "remove-from-folder")
                                {
                                    instance.removeServerFromFolder_onClick(instance, this);
                                }
                            });
                        });
                    }
                    
                    if (!$("#favorites-folder").length)
                    {
                        var folderMenuHTML = "<nav id='favorites-folder' class='submenu spacing-bottom-small'><ul>";
                        folderList.forEach(function(folderName) {
                            folderMenuHTML += "<li data-folder-name='" + folderName + "'><a>" + folderName + "</a></li>";
                        });
            
                        folderMenuHTML += "</ul></nav>";
            
                        $(folderMenuHTML).insertAfter($("#serverbrowser > nav[class*='submenu']"));
                        
                        $.each($("#favorites-folder ul li"), function() {
                            $(this).click(function() {
                                if (!$(this).hasClass("active"))
                                {
                                    instance.openFolder_onClick(instance, this);
                                }
                                else
                                {
                                    instance.closeFolder_onClick();
                                }
                            });
                        });
                    }
                }
            }
        }
    }
});