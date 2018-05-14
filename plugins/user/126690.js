/**
 * General Enhancements:
 *  - ideas by GeneralHastati
 * 
 * @author dapil
 * @version 1.1.1
 * @url http://dapil.github.io/general-enhancements-bblog/general-enhancements.js
 * @last-edit 19. 9. 2014 20:42
 */
BBLog.handle("add.plugin",
{
    id: "general-enhancements",
    name: "General Enhancements",

    configFlags: [
        ["option.add-leaderboards-dropdown", 1],
        ["option.remove-secondary-menu", 0],
        ["option.add-missions-menu-item", 1],
        ["option.remove-what-are-battlepacks", 1],
        ["option.add-mission-names-to-their-buttons", 1],
        ["option.hide-missions-from-multiplayer-dropdown", 0],
        ["option.add-missions-after-awards-in-soldier-dropdown", 0],
        ["option.add-bf4stats-link-to-soldier-dropdown", 1],
        ["option.open-bf4stats-link-in-new-tab", 1],
    ],

    translations:
    {
        "en":
        {
            "option.add-leaderboards-dropdown": "Add a Leaderboards dropdown",
            "option.remove-secondary-menu": "Remove the secondary menu",
            "option.add-missions-menu-item": "Add a Missions menu item",
            "option.remove-what-are-battlepacks": "Remove the 'What are Battlepacks?' box",
            "option.add-mission-names-to-their-buttons": "Add mission names to their buttons",
            "option.hide-missions-from-multiplayer-dropdown": "Hide Missions from the Multiplayer dropdown",
            "option.add-missions-after-awards-in-soldier-dropdown": "Add a Missions item after Awards in the Soldier dropdown",
            "option.add-bf4stats-link-to-soldier-dropdown": "Add a link to bf4stats.com to the Soldier dropdown",
            "option.open-bf4stats-link-in-new-tab": "Open the bf4stats.com link in a new tab",
            "level1": "BAKU",
            "level2": "SHANGHAI",
            "level3": "S. CHINA SEA",
            "level4": "SINGAPORE",
            "level5": "KUNLUN MNTS",
            "level7": "TASHGAR",
            "level8": "SUEZ",
        },
        "cs":
        {
            "level1": "BAKU",
            "level2": "ŠANGHAJ",
            "level3": "JIHOČÍNSKÉ M.",
            "level4": "SINGAPUR",
            "level5": "KUNLUNSKÉ H.",
            "level7": "TASHGAR",
            "level8": "SUEZ",
        },
        "fr":
        {
            "level1": "BAKOU",
            "level2": "SHANGHAI",
            "level3": "MER DE CHINE MÉRIDIONALE",
            "level4": "SINGAPOUR",
            "level5": "CORDILLÈRE DU KUNLUN",
            "level7": "TASHGAR",
            "level8": "SUEZ",
        },
        "pt":
        {
            "option.add-leaderboards-dropdown": "Adicionar lista suspensa de Líderes",
            "option.remove-secondary-menu": "Remover menu secundário",
            "option.add-missions-menu-item": "Adicionar menu de missões",
            "option.remove-what-are-battlepacks": "Remover'O que são Pacotes de Batalha?' ",
            "option.add-mission-names-to-their-buttons": "Adicionar nome das missões em seus botões",
            "option.hide-missions-from-multiplayer-dropdown": "Esconder missões do menu multiplayer",
            "option.add-missions-after-awards-in-soldier-dropdown": "Adicionar itens de MISSÕES após PRÊmios no menu do soldado",
            "option.add-bf4stats-link-to-soldier-dropdown": "Adicionar um link ao bf4stats.com ao menu do soldado",
            "option.open-bf4stats-link-in-new-tab": "Abrir bf4stats.com em nova aba",
            "level1": "BAKU",
            "level2": "XANGAI",
            "level3": "MAR DA CHINA MERIDIONAL",
            "level4": "CINGAPURA",
            "level5": "MONTANHAS KUNLUN",
            "level7": "TASHGAR",
            "level8": "SUEZ",
        },
    },

    init: function (instance)
    {
        if(BBLog.cache("mode") == "bf4"){
          instance.AddEnhancements(instance);
        }
    },

    domchange: function (instance)
    {
        if(BBLog.cache("mode") == "bf4"){
          instance.AddEnhancements(instance);
        }
    },

    AddEnhancements: function (instance)
    {
      var url = window.location.href;
      var id = $(".base-section-menu .soldier a").attr("href").match(/\/\d+\//g);
      var username = $(".soldierstats-box header .name a").html();
      var platform = $(".base-section-menu .soldier .icon-platform").clone().removeClass("icon-platform inverted").attr("class");
      var lang = BBLog.cache("battlelog.language");
      if(instance.storage("option.add-leaderboards-dropdown") && !$(".dropdown-content[data-for='leaderboards']").length)
      {
          $(".base-section-menu li[data-page='leaderboards']").attr("data-bind-toggle","dropdown").addClass("has-dropdown");
          var html = '<div class="dropdown-content" data-for="leaderboards"><div class="row"><nav class="span4 dropdown-menu">';
          html += '<a href="/bf4/'+lang+'geoleaderboard/view'+id+platform+'/general/"><i class="icon-white icon-chartbars"></i><span>General</span></a>';
          html += '<a href="/bf4/'+lang+'geoleaderboard/view'+id+platform+'/records/"><i class="icon-white icon-chartbars"></i><span>Records</span></a>';
          html += '<a href="/bf4/'+lang+'geoleaderboard/view'+id+platform+'/kitsteam/"><i class="icon-white icon-chartbars"></i><span>Kits & Team</span></a>';
          html += '<a href="/bf4/'+lang+'geoleaderboard/view'+id+platform+'/weapons/"><i class="icon-white icon-chartbars"></i><span>Weapons</span></a>';
          html += '<a href="/bf4/'+lang+'geoleaderboard/view'+id+platform+'/vehicles/"><i class="icon-white icon-chartbars"></i><span>Vehicles</span></a>';
          html += '</nav></div></div>';
          $(".dropdown-bar").append(html);
      }
      
      if(instance.storage("option.remove-secondary-menu"))
      {
        $("#base-header-secondary-nav").remove();
      }
      
      if(instance.storage("option.add-missions-menu-item") && !$(".base-section-menu li[data-page='missions']").length)
      {
          $(".base-section-menu li[data-page='campaign']").after('<li data-page="missions"><a class="wfont" href="'+$(".dropdown-content[data-for='multiplayer'] .dropdown-menu > a:nth-of-type(4)").attr("href")+'">'+$(".dropdown-content[data-for='multiplayer'] .dropdown-menu > a:nth-of-type(4) span").html()+'</a></li>');
      }
      
      if(instance.storage("option.remove-what-are-battlepacks") && url.match(/\/battlepacks\//))
      {
          $("#what-is-battlebacks-box").remove();
      }
      if(instance.storage("option.add-mission-names-to-their-buttons") && url.match(/\/campaign\//) && !$("#campaign-content .box .number:hidden").length)
      {
          $("#campaign-content .box .number").hide();
          $("#campaign table.menu td:not(.overview) footer").css("text-align","center");
          for(i = 0; i < 8; i++)
          {
            var sp;
            if(i != 5)
            {   
                sp = i + 1;
                $("#campaign-content .box[data-level='sp"+ sp +"'] footer").append(instance.t("level"+sp));
            }
          }
      }
      if(instance.storage("option.hide-missions-from-multiplayer-dropdown"))
      {
        $(".dropdown-content[data-for='multiplayer'] .dropdown-menu > a:nth-of-type(4)").hide();
      }
      if(instance.storage("option.add-missions-after-awards-in-soldier-dropdown") && !$(".dropdown-content[data-for='stats'] .dropdown-menu .icon-mission").length)
      {
        $(".dropdown-content[data-for='stats'] .dropdown-menu:nth-of-type(2) > a:nth-of-type(2)").after('<a href="'+$(".dropdown-content[data-for='multiplayer'] .dropdown-menu > a:nth-of-type(4)").attr("href")+'"><i class="icon-white icon-mission"></i> <span>'+$(".dropdown-content[data-for='multiplayer'] .dropdown-menu > a:nth-of-type(4) span").html()+'</span></a>');
      }
      if(instance.storage("option.add-bf4stats-link-to-soldier-dropdown") && !$("#bblog-ge-bfstats").length)
      {
        var html = '<a href="http://bf4stats.com/' + platform + '/' + username + '"';
        if(instance.storage("option.open-bf4stats-link-in-new-tab"))
        {
        html += ' target="_blank"';
        }
        html += ' id="bblog-ge-bfstats"><i class="icon-white icon-chartbars"></i> <span>BF4Stats</span></a>';
        $(".dropdown-content[data-for='stats'] .dropdown-menu:nth-of-type(1)").append(html);
      }
    },
});