/**
 * Show by DLC:
 *  - add buttons for showing only assignments/weapons/awards/weapon unlocks from selected DLC/base game
 *   - hide items from unowned DLCs from the ALL view
 *   - show unowned DLCs
 *
 * @author dapil
 * @version 1.6
 * @url http://dapil.github.io/show-by-dlc-bblog/show-by-dlc.js
 * @last-edit 19. 11. 2014 6:21
 */
BBLog.handle("add.plugin",
{
    id: "dapil-show-by-dlc",
    name: "Show by DLC",

    configFlags: [
        ["option.show-unowned-dlcs", 0],
        ["option.hide-items-from-unowned-dlcs-from-all-view", 1]
    ],

    translations:
    {
        "en":
        {
            "xp0": "China Rising",
            "xp1": "Second Assault",
            "xp2": "Naval Strike",
            "xp3": "Dragon's Teeth",
            "xp4": "Final Stand",
            "all": "All",
            "basegame": "Base game",
            "option.show-unowned-dlcs": "Show unowned DLCs",
            "option.hide-items-from-unowned-dlcs-from-all-view": "Hide items from unowned DLCs from the ALL view (does not hide them when Show unowned DLCs is enabled)",
        },
        "cs":
        {
            "all": "Všechny",
            "basegame": "Základní­ hra",
        },
        "pt":
        {
            "all": "Tudo",
            "basegame": "Jogo Base",
        },
        "de":
        {
            "all": "Alle",
            "basegame": "Basisspiel",
        },
        "ru":
        {
            "all": "Все",
            "basegame": "Основная игра",
        },
        "fr":
        {
            "all": "Tous", 
            "basegame": "Jeu de base",
        },
  /*    "it":
        {
            "all": "", 
            "basegame": "",
        },
        "es":
        {
            "all": "", 
            "basegame": "",
        },
        "pl":
        {
            "all": "", 
            "basegame": "",
        },                          */
    },

    init: function (instance)
    {
        instance.AddDLCMenu(instance);
    },

    domchange: function (instance)
    {
        instance.AddDLCMenu(instance);
    },

    AddDLCMenu: function (instance)
    {
        var url = window.location.href;
        var pages = ["/assignments/", "/weaponunlocks/", "/awards/", "/weapons/"];
        var parentelements = ["assignments-list", "weapon-stats-list", "awards-list", "weapons-stat-tbl tbody"];
        var xpmenuids = [1,0,2,3,4];
        var xpclasses = ["1048576","524288","2097152","4194304","8388608"];
        var xpowned = [];
        if (!$(".sbd-menu").length)
        {
            if($(".primary.soldier-info-name .premium").length || instance.storage("option.show-unowned-dlcs"))
            {
                xpowned = [true,true,true,true,true];
            }
            else
            {
                for (var currentxp = 0; currentxp < 5; currentxp++)
                {
                        if($(".user .tag-icon-list .common-gameexpansion-" + xpclasses[currentxp]).length)
                        {
                            xpowned[currentxp] = true;
                        }
                        else
                        {
                            xpowned[currentxp] = false;
                        }
                }
            }
            for (var currentpage = 0; currentpage < 4; currentpage++)
            {
                
                if (url.indexOf(pages[currentpage]) != -1)
                {
                    var parentelement = parentelements[currentpage];
                    if (xpowned[0] && xpowned[1] && xpowned[2] && xpowned[3] && xpowned[4])
                    {
                        var dlcmenucode = '<ul class="sbd-menu"><li style="width: 0.8%" class="sbd sbd-all active"><a>' + instance.t("all") + '</a></li><li class="sbd sbd-base" style="width: 1.2%"><a>' + instance.t("basegame") + '</a></li><li class="sbd" data-xpmenu="1" style="width: 1.2%"><a>China Rising</a></li><li class="sbd" data-xpmenu="0" style="width: 1.4%"><a>Second Assault</a></li><li class="sbd" data-xpmenu="2" style="width: 1.2%"><a>Naval Strike</a></li><li class="sbd" data-xpmenu="3" style="width: 1.3%"><a>Dragon\'s Teeth</a></li><li class="sbd" data-xpmenu="4" style="width: 1.2%"><a>Final Stand</a></li></ul>';
                    }
                    else
                    {
                        var dlcmenucode = '<ul class="sbd-menu"><li style="width: 0.8%" class="sbd sbd-all active"><a>' + instance.t("all") + '</a></li><li class="sbd sbd-base"><a>' + instance.t("basegame") + '</a></li>';
                        for (var xpmenu = 0; xpmenu < 5; xpmenu++)
                        {
                            if (xpowned[xpmenu])
                            {
                                dlcmenucode += '<li class="sbd" data-xpmenu="' + xpmenuids[xpmenu] + '"><a>' + instance.t("xp" + xpmenu) + '</a></li>';
                            }
                        }
                        dlcmenucode += '</ul>';
                    }
                    $(".submenu.margin-top").append(dlcmenucode);
                    
                    if(instance.storage("option.hide-items-from-unowned-dlcs-from-all-view"))
                    {
                        for (var currentxphide = 0; currentxphide < 5; currentxphide++)
                        {
                            if(xpowned[currentxphide] == false && !instance.storage("option.show-unowned-dlcs"))
                            {
                                $("." + parentelement + " > *").has(".xp-icon[data-xpack='xp" + xpmenuids[currentxphide] + "']").hide();
                            }
                        }
                        if(parentelement != parentelements[3])
                        {
                            $(".span8 .box header .pull-right").hide();
                        }
                    }

                    $(".sbd").click(function()
                    {
                        $("#bn-show-all").click();
                        $(".sbd.active").removeClass("active");
                        $(this).addClass("active");
                        if(!instance.storage("option.hide-items-from-unowned-dlcs-from-all-view") && parentelement != parentelements[3])
                        {
                            $(".span8 .box header .pull-right").hide();
                        }
                        if ($(this).hasClass("sbd-all"))
                        {
                            $("." + parentelement + "> *").show();
                            if(!instance.storage("option.hide-items-from-unowned-dlcs-from-all-view") && parentelement != parentelements[3])
                            {
                                $(".span8 .box header .pull-right").show();
                            }
                            if(instance.storage("option.hide-items-from-unowned-dlcs-from-all-view"))
                            {
                                for (var currentxphide = 0; currentxphide < 5; currentxphide++)
                                {
                                    if(xpowned[currentxphide] == false && !instance.storage("option.show-unowned-dlcs"))
                                    {
                                        $("." + parentelement + " > *").has(".xp-icon[data-xpack='xp" + xpmenuids[currentxphide] + "']").hide();
                                    }
                                }
                                if(parentelement != parentelements[3])
                                {
                                    $(".span8 .box header .pull-right").hide();
                                }
                            }
                        }
                        if ($(this).hasClass("sbd-base"))
                        {
                            $("." + parentelement + " > *").hide();
                            $("." + parentelement + " > *").not(":has(.xp-icon)").show();
                        }
                        if ($(this).data("xpmenu") != undefined)
                        {
                            $("." + parentelement + " > *").hide();
                            $("." + parentelement + " > *").has(".xp-icon[data-xpack='xp" + $(this).data("xpmenu") + "']").show();
                        }
                    });
                    return;
                }
            }
        }
    },
});