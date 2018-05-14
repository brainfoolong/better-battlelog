/**
 * Embedded Vimeo Videos:
 *  - Replaces Vimeo links with embedded videos
 * 
 * @author dapil
 * @version 1.0
 * @last-edit 31. 1. 2016 22:44
 */

BBLog.handle("add.plugin",
{
    id: "dapil-vimeo",
    name: "Embedded Vimeo Videos",

    init: function (instance)
    {
        instance.AddVimeoEmbeds(instance);
    },

    domchange: function (instance)
    {
        instance.AddVimeoEmbeds(instance);
    },

    AddVimeoEmbeds: function (instance)
    {
        var iframe_html = '<div class="bblog-vimeo"><iframe src="//player.vimeo.com/video/{id}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="width: 620px; height: 349px"></iframe></div>';
        $("#profile-presentation, div.platoon-presentation-padder, div.forum-threadview-post-text, .box.presentation .box-content").each(function(){
            $(this).find("a[href*='vimeo.com/']").each(function () {
                var id = this.href.split("/").slice(-1)[0].split("?")[0];
                if (id) { $(this).replaceWith(iframe_html.replace(/{id}/ig, id)); }
            });
        });
    },
});