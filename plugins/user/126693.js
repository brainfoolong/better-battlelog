/**
* Platoon Dropdown:
*  - adds a platoon dropdown menu
*
* @author dapil
* @version 3.0
* @url http://dapil.github.io/platoon-dropdown-bblog/platoon-dropdown.js
* @last-edit 21. 9. 2014 21:50
*/

BBLog.handle("add.plugin", {
id : "platoon-dropdown",
name : "Platoon Dropdown",
    
configFlags : [
            ["plugin.description", 1, function(instance){instance.AddPlatoonDropdownSettings(instance);}],
    ],

translations : {
        "en" : {
            "plugin.description" : "Manage displayed platoons",
            "text.description" : "Here you can choose which platoons will be displayed. You can get the Platoon ID from the URL of its page, for example: in http://battlelog.battlefield.com/bf3/en/platoon/2832655241424190855/, the ID is <strong>2832655241424190855</strong>.",
            "button.add" : "Add",
            "hint.name" : "Displayed name",
            "hint.id" : "Platoon ID",
         },
        "cs" : {
            "plugin.name" : "Vyjížděcí menu pro čety",
            "plugin.description" : "Spravovat zobrazené čety",
            "text.description" : "Zde můžete určit, které čety se budou zobrazovat. ID čety můžete získat z URL stránky čety, například pro http://battlelog.battlefield.com/bf3/cs/platoon/2832655241424190855/ je ID <strong>2832655241424190855</strong>.",
            "button.add" : "Přidat",
            "hint.name" : "Zobrazované jméno",
            "hint.id" : "ID čety",            
        },
        "fr" : {
            "plugin.description" : "GESTION DES SECTIONS",
            "text.description" : "Vous pouvez choisir quelle section sera affiché en prenant l'ID de la section suivant l'exemple ci-dessous: http://battlelog.battlefield.com/bf3/en/platoon/2832655241424190855/ ID SECTION : 2832655241424190855.",
            "button.add" : "AJOUTER LA SECTION",
            "hint.name" : "AFFICHER LE NOM DE LA SECTION",
            "hint.id" : "ID DE LA SECTION",
        },
        "pt" : {
            "plugin.description" : "Gerenciar Tropas exibidas",
            "text.description" : "Aqui você pode escolher quais tropas serão exibidas. Você pode obter o ID de uma tropa na URL da seguinte página, por exemplo: http://battlelog.battlefield.com/bf3/en/platoon/2832655241424190855/, o ID é <strong>2832655241424190855</strong>.",
            "button.add" : "Adicionar",
            "hint.name" : "Nome Exibido",
            "hint.id" : "ID da Tropa",
         },
         "de" : {
            "plugin.description" : "Verwalte angezeigte Platoons",
            "text.description" : "In diesem Dialog kannst du ausw&auml;hlen welche Platoons angezeigt werden sollen. Die ID des gew&uuml;nschten Platoons kannst du der Seiten-URL entnehmen. Beispiel: URL = http://battlelog.battlefield.com/bf4/platoons/view/4726603585846748181/, Platoon-ID = <strong>4726603585846748181</strong>.",
            "button.add" : "Hinzuf&uuml;gen",
            "hint.name" : "Anzeigename",
            "hint.id" : "Platoon-ID",
         },
    },
    
AddPlatoonDropdownSettings : function(instance) {
    var platoon_dropdown_settings_code = '<p>' + instance.t("text.description") + '</p><div id="pd-settings-list">';
    var platoon_dropdown_stored_platoons_settings = instance.storage("platoon_dropdown_stored_platoons");
    if(platoon_dropdown_stored_platoons_settings != null && platoon_dropdown_stored_platoons_settings!="")
    {
      $.each(platoon_dropdown_stored_platoons_settings, function(index,value) {
        var item = value.split("||||");
        platoon_dropdown_settings_code += '<div><span style="float: left">' + item[0] + ' - ' + item[1] +' - '+item[2].toUpperCase()+'</span><span class="bblog-button pd-delete" style="float: right" data-pdindex="'+index+'">' + BBLog.t("delete") + '</span><div style="clear: both"></div></div>';        
      });
    }
    platoon_dropdown_settings_code += '</div><input type="text" id="pd-name" placeholder="' + instance.t("hint.name") + '"></input><input type="text" id="pd-id" placeholder="' + instance.t("hint.id") + '"></input><select id="pd-game"><option value="bf4">BF4</option><option value="bf3">BF3</option></select><span id="pd-arrow">▼</span><span id="pd-add" class="bblog-button">' + instance.t("button.add") + '</span>';
    BBLog.popup("platoon-dropdown", instance.t("plugin.description"), platoon_dropdown_settings_code);
    
    $(".pd-delete").click(function() {
	var index = $(this).attr("data-pdindex");
	platoon_dropdown_stored_platoons_settings.splice(index, 1);
	instance.storage("platoon_dropdown_stored_platoons", platoon_dropdown_stored_platoons_settings);
	location.reload();
    });    
    $("#pd-add").one("click",function() {
        var pd_name = $("#pd-name").val();
        var pd_id = $("#pd-id").val();
        var pd_game = $("#pd-game").val();
        var item = pd_name + '||||' + pd_id + '||||' + pd_game;
        if(platoon_dropdown_stored_platoons_settings == null || platoon_dropdown_stored_platoons_settings=="") 
        {
        	platoon_dropdown_stored_platoons_settings = [item];
        }
        else
        {
        	platoon_dropdown_stored_platoons_settings.push(item);
        }
        instance.storage("platoon_dropdown_stored_platoons", platoon_dropdown_stored_platoons_settings);
        location.reload();
    });     
},
  
init : function(instance){
	var old_storage = instance.storage("platoondropdownstoredplatoons");
	var new_storage;
	if(old_storage != null && old_storage != "")
    	{
    		new_storage = [];
    		$.each(old_storage, function(index, value) {
		      var old_item = value.split("||||");
		      var new_item = old_item[0]+'||||'+old_item[1]+'||||bf4';
		      new_storage.push(new_item);
		});
    		instance.storage("platoon_dropdown_stored_platoons", new_storage);
    		instance.storage("platoondropdownstoredplatoons", "");
    		BBLog.popup("platoon-dropdown-migration", "Platoon Dropdown", "<p>The plugin now allows you to choose which platoons are for which game. Your platoon list was converted to contain game info and it's set to BF4 by default.</p><br><p>If some of your platoons are for BF3, you can open the settings, copy the platoon details, select BF3, click 'Add' and then delete the old one.</p><br><p>This window will not be displayed again.</p>");
    	}
	if(BBLog.cache("mode") == "bf3" || BBLog.cache("mode") == "bf4")
	{
		instance.AddPlatoonDropdown(instance);
	}
},   

domchange : function(instance){
	if(BBLog.cache("mode") == "bf3" || BBLog.cache("mode") == "bf4")
	{
        	instance.AddPlatoonDropdown(instance);
	}
},   
    
    
AddPlatoonDropdown : function(instance){
    if (!$('#pd-style').length) {
    	$("head").append("<style id='pd-style'>#pd-settings-list{margin: 0.75em 0}.pd-delete, #pd-add{vertical-align: middle}#pd-name, #pd-id{width: 35%; margin-right: 12px}#pd-arrow{position: relative; right: 16px; pointer-events: none}.pd-empty{background-color: transparent !important; cursor: default !important}#base-bf4-html #pd-game option{background-color: black; color: #d5dde5}</style>");
    }	
    if (!$('.dropdown-content[data-for="platoons"]').length) {
    	$(".base-section-menu li[data-page='platoons']").addClass("has-dropdown");
    	$(".base-section-menu li[data-page='platoons']").attr('data-bind-toggle', 'dropdown');
    	$(".dropdown-bar").append('<div class="dropdown-content" data-for="platoons"><div class="row"><nav class="span4 dropdown-menu"></nav></div></div>');
    	var platoon_dropdown_stored_platoons = instance.storage("platoon_dropdown_stored_platoons");
    	console.log(platoon_dropdown_stored_platoons);
    	if(platoon_dropdown_stored_platoons != null && platoon_dropdown_stored_platoons != "")
    	{
    		var items_for_game = 0;
		$.each(platoon_dropdown_stored_platoons, function(index, value) {
		      var item = value.split("||||");
		      if(item[2] == BBLog.cache("mode"))
		      {
		      	if(item[2] == "bf3")
		      	{
				$('.dropdown-content[data-for="platoons"] .row nav').append('<a href="http://battlelog.battlefield.com/bf3/'+BBLog.cache("battlelog.language")+'platoon/'+item[1]+'/"><i class="icon-white icon-friends2"></i><span>'+item[0]+'</span></a>');           
		      	}
		      	if(item[2] == "bf4")
		      	{
		      		$('.dropdown-content[data-for="platoons"] .row nav').append('<a href="http://battlelog.battlefield.com/bf4/'+BBLog.cache("battlelog.language")+'platoons/view/'+item[1]+'/"><i class="icon-white icon-friends2"></i><span>'+item[0]+'</span></a>');           
		      	}
		      	items_for_game++;
		      }
		});
		if(items_for_game == 0)
		{
			$('.dropdown-content[data-for="platoons"] .row nav').append('<a class="pd-empty"><span>You can configure the platoons for this game in the BBLog Menu</span></a>');
		}
	}
	else
	{
		$('.dropdown-content[data-for="platoons"] .row nav').append('<a class="pd-empty"><span>You can configure the platoons in the BBLog Menu</span></a>');
	}
    }
},
});