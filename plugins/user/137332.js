/**
 * Auto Expand Battlescreen:
 *  - auto expands Battlescreen to fullscreen
 *  - only works for the Battlescreen on the Battlelog webpage
 * 
 * @author dapil
 * @version 1.0.1
 * @last-edit 26. 4. 2015 10:54
 */

BBLog.handle("add.plugin",
{
    id: "dapil-auto-expand-battlescreen",
    name: "Auto Expand Battlescreen",

    init: function (instance)
    {
        instance.AutoExpand(instance);
    },

    domchange: function (instance)
    {
        instance.AutoExpand(instance);
    },

    AutoExpand: function (instance)
    {
      var url = window.location.href;
      if(url.match(/\/battlescreen\//))
      {
          if(!$(".battlescreen #toggle-fullscreen").hasClass("aeb-clicked"))
          {
            $(".battlescreen #toggle-fullscreen").click().addClass("aeb-clicked");
          }
          $(".battlescreen #viewport").css("z-index","1100");
      }
    },
});