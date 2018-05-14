/**
* Missions Screen Enhancer:
*  - when creating a mission, show the missions as a grid
*  - collapse the missions menu when creating a mission
*  - hide unlocked dogtags on the Missions screen
* 
* @author dapil
* @version 1.2.1
* @url http://dapil.github.io/missions-screen-enhancer-bblog/missions-screen-enhancer.js
* @last-edit 19. 9. 2014 6:37
*/

BBLog.handle("add.plugin", {
    id : "missions-screen-enhancer",
    name : "Missions Screen Enhancer",
    
    configFlags : [
      ["option.missionsasgrid", 1],
      ["option.collapsemissions", 1],
      ["option.hideunlocked", 1],
      ["option.invitesearch", 1],
    ],
    
    translations : {
        "en" : {
            "option.missionsasgrid" : "When creating a mission, show the missions as a grid",
            "option.collapsemissions" : "Add an option to collapse the missions menu when creating a mission",
            "option.hideunlocked" : "Hide unlocked dogtags on the Missions screen",
            "option.invitesearch" : "Add an option to search in the list of friends in the invite window",
        },
        "cs" : {
            "option.missionsasgrid" : "Při zakládání mise ukázat mise v tabulce",
            "option.collapsemissions" : "Přidat možnost zajížděcího menu s misemi při zakládání mise",
            "option.hideunlocked" : "Schovat odemčené psí známky na stránce Mise",
            "option.invitesearch" : "Přidat možnost hledat v přátelích v okně na zvaní spoluhráčů do misí",
        },
        "de" : {
            "option.missionsasgrid" : "Liste Missionen in der Missionserstellung in einer Tabelle auf",
            "option.collapsemissions" : "Minimiert das Missionsmen&uuml; nach Missionsselektierung",
        },
        "fr" : {
            "option.missionsasgrid" : "Montrer les missions dans une grille.",
            "option.collapsemissions" : " Ajouter une option pour déplier le menu des missions.",
            "option.hideunlocked" : "Masquer Plaques (Verouillé)",
        },
        "pt" : {
            "option.missionsasgrid" : "Quando criando uma missão mostrar as missões como uma grade",
            "option.collapsemissions" : "Adicionar opções de esconder as missões quando criando uma missão",
            "option.hideunlocked" : "Esconder dogtags desbloqueadas na tela de missões",
            "option.invitesearch" : "Adicionar uma opção para buscar na lista de amigos uma janela de convite",
        },
    },
    
    init : function(instance){
      var url = window.location.href;
      if(url.match(/\/missions\/create\//))
      {
        if (instance.storage("option.missionsasgrid")){
          instance.MissionsGrid(instance);
        }
        if (instance.storage("option.collapsemissions")){
          instance.CollapsibleSections(instance);
        }
        if (instance.storage("option.invitesearch")){
            instance.InviteSearch(instance);
        }
      }
      else
      {
        if(url.match(/\/missions\//))
        {
          if (instance.storage("option.hideunlocked")){
            instance.HideUnlocked(instance);
          }
        }
      }
    },   

    domchange : function(instance){
      var url = window.location.href;
      if(url.match(/\/missions\/create\//))
      {
        if (instance.storage("option.missionsasgrid")){
          instance.MissionsGrid(instance);
        }
        if (instance.storage("option.collapsemissions")){
          instance.CollapsibleSections(instance);
        }
        if (instance.storage("option.invitesearch")){
            instance.InviteSearch(instance);
        }
      }
      else
      {
        if(url.match(/\/missions\//))
        {
          if (instance.storage("option.hideunlocked")){
            instance.HideUnlocked(instance);
          }
        }
      }
    },
    
    MissionsGrid : function(instance){
      $("#challenge-type-select .scroll-left, #challenge-type-select .scroll-right").remove();
      $("#challenge-type-select .scroll-container").css({"left": "0", "right": "0"});
      $("#challenge-type-select .scroll-container .jspHorizontalBar, #challenge-type-select .scroll-container .jspVerticalBar").remove();
      $("#challenge-type-select .scrollables").css({"width": "990px"});
      $("#challenge-type-select .scroll-container.jspScrollable").css({"height": "500px", "width":"1000px"});
      $("#challenge-type-select").css({"height": "462px"});
      $("#challenge-type-select .scroll-container .jspContainer").css({"height": "500px", "width":"1000px"});
      $("#challenge-type-select .scroll-container .scrollable").css({"height": "150px", "width": "150px", "margin-bottom": "3px"});
      $("head").append("<style>.dont-move {left: 0px !important; top: 0px !important}</style>");
      $("#challenge-type-select .scroll-container.jspScrollable .jspContainer .jspPane").addClass("dont-move");
      $("#challenge-type-select .scroll-container.jspScrollable .jspContainer .jspPane").css("overflow","visible")
      $("#challenge-type-select .scroll-container .scrollable img").css({"width": "112px"});
      $("#mission-description").css({"position": "relative", "right":"75px"});
  
    },

    CollapsibleSections : function(instance){
      var height;
      if (instance.storage("option.missionsasgrid")){
        height = "462px";
      }
      else
      {
        height = "181px";
        $("#challenge-type-select .scroll-container .jspHorizontalBar").css({"position":"relative","top":"173px"});
        $("#challenge-type-select .scroll-container .jspVerticalBar").remove();
      }
      var missionsopened = 0;
      var mapsopened = 0;
      if(!$(".selectmission").hasClass("moved")){  
        $("#challenge-type-select .scroll-container .jspContainer").css({"height": "500px"});
        $("#challenge-type-select .scroll-container.jspScrollable, #challenge-type-select.scroll-container-outer").css("height", "0px");
        //, #map-select .scroll-container.jspScrollable, #map-select.scroll-container-outer
        $("#mission-description").css("display","none");
        $(".selectmission").css({"margin-bottom":"0px","cursor":"pointer"});
      }
      if(!$(".collapsible-sections-arrow").is("span")) {
        $(".selectmission h1").append(" <span class='collapsible-sections-arrow'>▼</span>");
        //, .selectmap h1
      }
      $(".selectmission").click(function() {
        $(".selectmission").addClass("moved");
        console.log("clicked");
        $("#challenge-type-select .scroll-container.jspScrollable, #challenge-type-select.scroll-container-outer").stop();
        if(missionsopened == 0)
        {
          missionsopened = 1;
          $(".selectmission").css("margin-bottom","1px");
          $("#mission-description").css("display","inline");
          $(".selectmission h1 .collapsible-sections-arrow").html("▲");
          $("#challenge-type-select .scroll-container.jspScrollable, #challenge-type-select").animate({ "height": height }, "slow", function() {
            $("#challenge-type-select .scroll-container.jspScrollable, #challenge-type-select.scroll-container-outer").stop();
          });
          return;  
        }
        else
        {
          missionsopened = 0;
          $(".selectmission h1 .collapsible-sections-arrow").html("▼");
          $("#challenge-type-select .scroll-container.jspScrollable, #challenge-type-select.scroll-container-outer").animate({ "height": "0px" }, "slow", function() {
            $("#mission-description").css("display","none");
            $(".selectmission").css("margin-bottom","0px");
            $("#challenge-type-select .scroll-container.jspScrollable, #challenge-type-select.scroll-container-outer").stop();
          });
          return;
        }
       });
  /*   $(".selectmap .collapsible-sections-arrow").click(function() {
        if(mapsopened == 0)
        {
          $("#map-select .scroll-container.jspScrollable, #map-select.scroll-container-outer").animate({ "height": "118px" }, "slow" );
          mapsopened = 1;
          $(".selectmap h1 .collapsible-sections-arrow").html("▲");
        }
        else
        {
          $("#map-select .scroll-container.jspScrollable, #map-select.scroll-container-outer").animate({ "height": "0px" }, "slow" );
          mapsopened = 0;
          $(".selectmap h1 .collapsible-sections-arrow").html("▼");
        }
        });
        */
    },

    HideUnlocked : function(instance){
      $("#missions-dogtags .span1-04").not(".locked").remove();
    },
    
    InviteSearch : function(instance){
      if(!$("#mse-invite-search").length)
      {
        $("#friend-invite-popup").parent().parent().find("header h3").after('<input type="search" placeholder="Click here to start a search" id="mse-invite-search">');
        $("#friend-invite-popup").parent().parent().find("header h3").remove();
        $("head").append("<style>#mse-invite-search{width: 450px; margin-left: 60px; background-color: transparent; border: 0; text-align: center; color: black; font-size: 18px; font-family: Purista,sans-serif; text-transform: uppercase; font-weight: 600} #mse-invite-search::-webkit-input-placeholder {color: black} #mse-invite-search::-webkit-search-cancel-button{-webkit-appearance: none}</style>");
        $("#invite-friends-list .friend-row .friend-name").each(function(){
            var name = $(this).text().toLowerCase();
            $(this).parent().attr("mse-name",name);
        });
        $("#mse-invite-search").on('keyup change', function(){
          var keyword = $(this).val().toLowerCase();
          $("#invite-friends-list .friend-row").show();
          if(keyword)
          {
              $("#invite-friends-list .friend-row").hide();
              $("#invite-friends-list .friend-row[mse-name*='" + keyword + "'").show();
          }
        });
      }
    },
});