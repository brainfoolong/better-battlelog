/*
    @name Custom Teamspeak
    @author ColdIce
    @version 0.1
    @release_date 19.05.2015

    The MIT License (MIT)

	Copyright (c) 2015 ColdIce

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/
BBLog.handle("add.plugin", {
    id : "custom-teamspeak-plugin",
    name : "Custom Teamspeak",
    version : '0.1',
    build : '20150519',
	
	translations : {
        "en" : {
            "custom.teamspeak.enabled" : "Custom Teamspeak Viewer Enabled?",
            "custom.teamspeak.serverID" : "Set Teamspeak Server ID",
        },
    },

    configFlags : [
		["custom.teamspeak.enabled", 1],
		["custom.teamspeak.serverID", 1, function(instance){instance.setCustomTeamspeakServerID(instance);}]
	],

    init : function (instance) {
		if($("#bblog-custom-teamspeak").length === 0 && instance.storage("custom.teamspeak.enabled")) {
			instance.loadCSS.loadit(instance);
			$("body").append($('<div id="bblog-custom-teamspeak">').on("click open", function(){
				var teamspeakServerID = instance.storage("bblog-custom-tsserverID")===undefined ? 1015984 : instance.storage("bblog-custom-tsserverID");
				$("#bblog-sidebar").remove();
				var e = $('<div id="bblog-sidebar" style="left:-'+$(this).width()+'px"><div class="inner"><div class="scrollArea"></div></div></div>');
				$("body").append(e);
				e.animate({left : 0}, 200);

				$(document).on("mousemove.bblog", function(ev){
					if(!$("#bblog-sidebar").length) return;
					if(ev.pageX > $("#bblog-sidebar").width()+ 20) {
						$("#bblog-sidebar").animate({left : -$("#bblog-sidebar").width()}, 200, function(){
							$(this).remove();
						});
					}
				});

				var cont = e.find(".scrollArea");
				cont.height($("#bblog-sidebar").height()-20);
				cont.append($('<div id="ts3viewer_'+teamspeakServerID+'" style="margin-top:20px;">Loading...</div>'));

				$.ajax({
					url: "http://static.tsviewer.com/short_expire/js/ts3viewer_loader.js",
					dataType: "script"
				});
				var iv = setInterval(function(){
					if(typeof ts3v_display == "undefined")return;
					var ts3v_url_1 = "http://www.tsviewer.com/ts3viewer.php?ID="+teamspeakServerID+"&text=ffffff&text_size=12&text_family=1&js=1&text_s_weight=bold&text_s_style=normal&text_s_variant=normal&text_s_decoration=none&text_s_weight_h=bold&text_s_style_h=normal&text_s_variant_h=normal&text_s_decoration_h=underline&text_i_weight=normal&text_i_style=normal&text_i_variant=normal&text_i_decoration=none&text_i_weight_h=normal&text_i_style_h=normal&text_i_variant_h=normal&text_i_decoration_h=underline&text_c_weight=normal&text_c_style=normal&text_c_variant=normal&text_c_decoration=none&text_c_weight_h=normal&text_c_style_h=normal&text_c_variant_h=normal&text_c_decoration_h=underline&text_u_weight=bold&text_u_style=normal&text_u_variant=normal&text_u_decoration=none&text_u_weight_h=bold&text_u_style_h=normal&text_u_variant_h=normal&text_u_decoration_h=none";
					clearInterval(iv);
					ts3v_display.init(ts3v_url_1, teamspeakServerID, 100);
					ts3v_display._finishUpdate = ts3v_display.finishUpdate;
					ts3v_display.finishUpdate = function(RegID, text){
						ts3v_display._finishUpdate(RegID, text);
						cont.jScrollPane().off("mousewheel").on("mousewheel", function(ev){
							ev.preventDefault();
						});
					};
				}, 100);
			}));
			$("#bblog-custom-teamspeak").hover(function(){
				$("#").css('opacity', '1');
				}, function(){
				$("#bblog-custom-teamspeak").css('opacity', '0.6');
			});
		}
    },
	
	loadCSS : {
		css : {
			any : "#bblog-custom-teamspeak { position: fixed; z-index: 1000; left:0px; top:170px; width:27px; height:152px; cursor: pointer; opacity:0.6; background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAACYCAYAAAAV8JIjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODA4NkNGMDMzQ0E3MTFFNEE4RjZDN0MyNUVFMkUzMkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODA4NkNGMDQzQ0E3MTFFNEE4RjZDN0MyNUVFMkUzMkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MDg2Q0YwMTNDQTcxMUU0QThGNkM3QzI1RUUyRTMyQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MDg2Q0YwMjNDQTcxMUU0QThGNkM3QzI1RUUyRTMyQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrMwKDkAAA8VSURBVHja7FwLcFNl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'); } #bblog-teamspeak:hover{ opacity:1; }"
		},
		
		loadit : function (instance) {
			var style = $('<style></style>');
            style.html(instance.loadCSS.css.any);
            $('head').append(style);
        },
	},
	setCustomTeamspeakServerID : function(instance){
        var teamspeakServerID = prompt("Enter Teamspeak Server ID");
        if (teamspeakServerID !== null) {
          instance.storage("bblog-custom-tsserverID", teamspeakServerID);
        }
    },
});