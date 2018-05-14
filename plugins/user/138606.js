/**
 * Add Twitter Feed:
 *  - Adds a twitter feed to the main page
 * 
 * @author dapil
 * @version 1.0.1
 * @last-edit 25. 4. 2015 18:31
 */

BBLog.handle("add.plugin",
{
    id: "dapil-add-twitter-feed",
    name: "Add Twitter Feed",

    init: function (instance)
    {
        if(BBLog.cache("mode") != "mohw")
        {
            instance.AddTwitterFeed(instance);
        }
    },

    domchange: function (instance)
    {
        if(BBLog.cache("mode") != "mohw")
        {
            instance.AddTwitterFeed(instance);
        }
    },

    AddTwitterFeed: function (instance)
    {
      if(!$(".twitter-timeline").length)
      {
        $("#main-postlistsmall").before('<a class="twitter-timeline" data-tweet-limit="4" width="300" data-chrome="transparent noscrollbar nofooter noheader" href="https://twitter.com/Battlefield" data-widget-id="508369636333584384"></a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>');
        $("head").append("<style>#main-postlistsmall{margin-top: 16px} #twitter-widget-0{background-color: rgba(7, 7, 7, 0.5); padding: 0 10px !important}</style>")
      }
    },
});
