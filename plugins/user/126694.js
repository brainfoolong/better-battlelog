/**
* Hide Forum:
*  - hides forum from menu
*  - hides forum posts from feed and profiles
*  - blocks acces to forum
*
* @author dapil
* @version 2.6.2
* @last-edit 27. 9. 2013 23:13
*/

BBLog.handle("add.plugin", {
    id : "hide-forum",
    name : "Hide Forum",
    
    configFlags : [
		["option.menu", 1],
		["option.feed", 1],
		["option.block", 1],
	],

    translations : {
        "en" : {
            "dont.want" : "You don't want to go here", //without the dot
            "anyway" : "But if you want, click ", //in translations, leave the space on the end
            "here" : "here",
            "option.menu" : "Hide forum from menu",
            "option.feed" : "Hide forum posts from feed and profiles",
            "option.block" : "Block access to forum",
        },
        "cs" : {
            "plugin.name" : "Schovat fórum",
            "dont.want" : "Sem nechceš jít",
            "anyway" : "Ale pokud ano, klikni ",
            "here" : "zde",
            "option.menu" : "Schovat fórum z menu",
            "option.feed" : "Schovat příspěvky z fóra ve feedu a profilech",
            "option.block" : "Blokovat přístup k fóru",
        },
        "fr" : {
            "plugin.name" : "Masquer le forum",
            "dont.want" : "Vous ne voulez pas vraiment y aller",
            "anyway" : "Mais si vous changez d'avis, cliquez ",
            "here" : "ici",
            "option.menu" : "Masquer le lien vers le forum dans le menu",
            "option.feed" : "Masquer les discussions du forum dans le feed et sur le profil ",
            "option.block" : "Bloquer l'accès au forum",
        },
        "es" : {
            "dont.want" : "No querrás entrar aquí",
            "anyway" : "Pero si de verdad quieres hacerlo, haz click ",
            "here" : "aquí",
            "option.menu" : "Esconder el foro del menú de navegación",
            "option.feed" : "Esconder el contenido de los foros del registro y perfiles",
            "option.block" : "Bloquear el acceso al foro",
	    },
    },
    
    init : function(instance){
           if (instance.storage("option.menu")){
           	 instance.HideForumFromMenu(instance);
           }
           if (instance.storage("option.feed")){
           	instance.HideForumPosts(instance);
           }
           if (instance.storage("option.block")){
        	if(BBLog.cache("mode") == "bf3"){
           		instance.DontAllowToVisitForumBF3(instance);
           	}
        	if(BBLog.cache("mode") == "bf4"){
           		instance.DontAllowToVisitForumBF4(instance);
           	}    	
           }
    },   

    domchange : function(instance){
           if (instance.storage("option.menu")){
           	 instance.HideForumFromMenu(instance);
           }
           if (instance.storage("option.feed")){
           	instance.HideForumPosts(instance);
           }
           if (instance.storage("option.block")){
        	if(BBLog.cache("mode") == "bf3"){
           		instance.DontAllowToVisitForumBF3(instance);
           	}
        	if(BBLog.cache("mode") == "bf4"){
           		instance.DontAllowToVisitForumBF4(instance);
           	}    	
           }
    },
    
    HideForumFromMenu : function(instance){
    	$("li[data-page='forum']").remove();
    },
    
    HideForumPosts : function(instance){
        $.each($(".feed-single-item"), function (index, section){
            if(section != null && $(section).html().indexOf('forum') !== -1){
                $(section).hide();
            };
        });
    },
    
    DontAllowToVisitForumBF3 : function(instance){
    	var url = window.location.href;
    	if(url.match(/\/forum\//) && url.indexOf("?view=1") == -1)
    	{
    		$('.base-middle-content').css("min-height","0px");
    		$('.base-middle-content').html("<div style='text-align:center'><span style='font-size: 65pt; font-family: BebasNeueRegular'>" + instance.t("dont.want") +".</span><br><span>" + instance.t("anyway") + "<a href='" + url + "?view=1'>" + instance.t("here") + "</a>.</div>")
    	}
    },
    
    DontAllowToVisitForumBF4 : function(instance){
    	var url = window.location.href;
    	if(url.match(/\/forum\//) && url.indexOf("?view=1") == -1)
    	{
    		$('.breadcrumb, .forum-search-container, .forum-reply-container, .forum-start-border, .forum-postreply-disabled').remove();
    		$('.thread-title').html(instance.t("dont.want"));
    		if(!$("#bblog-hide-forum").length)
    			$('<div id="bblog-hide-forum" class="box"><footer>' + instance.t("anyway") + '<a href="' + url + '?view=1">' + instance.t("here") + '</a>.</footer></div>').insertAfter(".forum-start-title");
    	}
    },
});
