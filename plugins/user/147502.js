/**
* BF4 Live-Scoreboard Sorter - Sort the live scoreboard by your needs.
*
* @author I-MrFixIt-I
* @version 0.1
* @url https://getbblog.com
*/

// initialize your plugin
BBLog.handle("add.plugin", {

    // default values by battlelog
    sortedRowIndex : 4,
    sortedRowReverse : true,

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id : "mrfixit-scoreboard-sorter",

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key "plugin.name" (optional)
    *
    * @type String
    */
    name : "BF4 Live-Scoreboard Sorter",

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations : {
        "en" : {
            "use.scoreboard-sorter" : "Use Live-Scoreboard Sorter",
            "use.synchronize-tables" : "Synchronize both tables",
            "use.include-tag" : "Consider clan-tag"
        },
        "de" : {
            "use.scoreboard-sorter" : "Live-Scoreboard Sorter verwenden",
            "use.synchronize-tables" : "Beide Tabellen synchronisieren",
            "use.include-tag" : "Clan-Tag berücksichtigen"
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
        {"key" : "use.scoreboard-sorter", "init" : 1},
        {"key" : "use.synchronize-tables", "init" : 1},
        {"key" : "use.include-tag", "init" : 0}
    ],

    compare : function (a, b, reverse){
        var retValue = 0; // values have the same size
        
    	if (a > b) retValue = 1;
    	else if (a < b) retValue = -1;
    	
    	if (reverse) retValue *= -1; // reverse the order
    	
    	return retValue;
    },
    
    sortScoreboard : function (instance, table, rowIndex, reverse){
        rows = $(table).find("tbody tr");

        $(table).find("thead tr th").removeAttr("data-sort"); // remove all data-sort attributes, so there would be only one
        
        // add sort direction to clicked row header (used for detections sort direction)
        th = $(table).find("thead tr th").eq(rowIndex - 1);
        if (reverse)
        {
            $(th).attr("data-sort", "desc");
        }
        else
        {
            $(th).attr("data-sort", "asc");
        }

    	// the "real" sorting part (using JS function sort)
    	rows.sort(function(a, b) {
    		cmp = instance.compare(a, b, false);

            // get the necessary compare values (like name and numbers)
    		switch (rowIndex)
    		{
    			// Soldiername
    			case 1:
    			    if (!instance.storage("use.include-tag"))
    			    {
    			        // get clan tag from player
        			    tagA = $(a.cells[rowIndex]).find(".user-info div .bblog-tag").text();
        			    tagB = $(b.cells[rowIndex]).find(".user-info div .bblog-tag").text();
        			    
        			    // get playername and cut the clantag from it
        				valA = $(a.cells[rowIndex]).find(".user-info div > span").text().substr(tagA.length).toLowerCase();
        				valB = $(b.cells[rowIndex]).find(".user-info div > span").text().substr(tagB.length).toLowerCase();
    			    }
    			    else
                    {
                        // get playername
        				valA = $(a.cells[rowIndex]).find(".user-info div > span").text().toLowerCase();
        				valB = $(b.cells[rowIndex]).find(".user-info div > span").text().toLowerCase();
                    }
    				
    				cmp = instance.compare(valA, valB, reverse);
    				break;
    			// Kills and Deaths
    			case 2:
    			case 3:
    				valA = parseInt(a.cells[rowIndex].innerHTML, 10);
    				valB = parseInt(b.cells[rowIndex].innerHTML, 10);
    				
    				cmp = instance.compare(valA, valB, reverse);
    				break;
    			// Score
    			case 4:
    			    // replace "," and "." from number for the real value and sorting
    				valA = parseInt(a.cells[rowIndex].innerHTML.replace(',','').replace('.',''), 10);
    				valB = parseInt(b.cells[rowIndex].innerHTML.replace(',','').replace('.',''), 10);
    				
    				cmp = instance.compare(valA, valB, reverse);
    				break;
    		}
    		
    		return cmp;
    
    	});

    	// rebuild the numbering in the first column
    	$.each(rows, function(index) {
    		$(this).find("td:first span").text(index + 1);
    	});
    	
    	table.find("tbody").append(rows);
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
        if (instance.storage("use.scoreboard-sorter"))
        {
            if(window.location.href.match('battlelog.battlefield.com/bf4/'))
            { // this plugin is only supporting bf4
                if ($("#server-players-list").length) // the server-players-list is available
                {
                    $("#server-players-list table thead th").off("click.scoreboardclick").on("click.scoreboardclick", function() { // bind and unbind the click handler to every header on the scoreboard table 
                		var rowIndex = $(this).index() + 1; // get clicked row Index
                		
                		// get sort direction => reversed = true means desc
                		reversed = false;
                    	if ($(this).attr("data-sort") == "asc") // if the row is already sorted (asc) then do it now desc, otherwise asc
                    	{
                    		reversed = true;
                    	}
                		
                		// save the new state (needed later for the live-scoreboard / live data)
                		instance.sortedRowIndex = rowIndex;
                        instance.sortedRowReverse = reversed;
                		
                		if (instance.storage("use.synchronize-tables"))
                        {
            				$.each($("#server-players-list table"), function() {
            				    instance.sortScoreboard(instance, $(this), rowIndex, reversed);
            				});
            			}
            			else
        			    {
        			        instance.sortScoreboard(instance, $(this).closest("table"), rowIndex, reversed);
        			    }
        			    
        			    /*$.each($("#server-players-list table"), function() {
        				    instance.sortScoreboard(instance, $(this), rowIndex, reversed);
        				});*/
                	});
                	
                	if ($("#serverbrowser-edit-livescoreboard").prop('checked')) // live-scoreboard is enabled
                	{
            			if ($("#server-players-list table thead tr th[data-sort]").length === 0) // no element is sorted (happens on page refresh or live data)
            			{
            			    $.each($("#server-players-list table"), function() {
            				    instance.sortScoreboard(instance, $(this), instance.sortedRowIndex, instance.sortedRowReverse);
            				});
            			}
                	}
                }
            }
        }
    }
});