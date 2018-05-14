/*
	@name BF4/BF3/BFH Show Map Rotation
	@author GreatApo & DarkThanos
	@version 1.7
	@release_date 27/07/2016
	@url http://www.alites.com

	Licensed under CC BY-NC-ND 3.0
	Link: http://creativecommons.org/licenses/by-nc-nd/3.0/deed.en
*/

/* BetterBattlelog Plugin Setup */
BBLog.handle("add.plugin", {
	/* Plugin Infos */
	id : "show-map-rotation-plugin",
	name : "Show Map Rotation",
	version : '1.7',
	build : '20160727',

	/* Plugin load on ... */
	init : function (instance) {
		// Check if is BF4
		if (BBLog.cache("mode") === "bf4") {
			// Attack page load event
			instance.events.onPageLoad(instance, {
				page : "^/bf4/(" + BBLog.cache("language") + "/)*(servers|serverbrowserwarsaw)/(playnow/|favourites/|history/)*(pc/|ps3/|ps4/|xbox360/|xboxone/)*[^/]*$",
				callback : instance.mapRotation.init
			});
			// Load Bf4 CSS
			instance.loadCSS.bf4(instance);

		// Check if is BF3
		} else if (BBLog.cache("mode") === "bf3") {
			// Attack page load event
			instance.events.onPageLoad(instance, {
				page : "^/bf3/(" + BBLog.cache("language") + "/)*servers/(playnow/|favourites/|history/)*(pc/|ps3/|ps4/|xbox360/|xboxone/)*[^/]*$",
				callback : instance.mapRotationBF3.init
			});
			// Load Bf3 CSS
			instance.loadCSS.bf3(instance);
		
		// Check if is BFH
		} else if (BBLog.cache("mode") === "bfh") {
			// Attack page load event
			instance.events.onPageLoad(instance, {
				page : "^/bfh/(" + BBLog.cache("language") + "/)*servers/(playnow/|favourites/|history/)*(pc/|ps3/|ps4/|xbox360/|xboxone/)*[^/]*$",
				callback : instance.mapRotationBFH.init
			});
			// Load Bf3 CSS
			instance.loadCSS.bfh(instance);
		}
	},
	domchange : function (instance) {
		instance.eventsFire.onPageLoad(instance);
	},

	/* Events Functions */
	events : {
		onPageLoad : function (instance, page_info) {
			if (!page_info.page || !page_info.callback) {
				return;
			}
			instance.eventsData.onPageLoad.push(page_info);
		}
	},
	eventsFire : {
		onPageLoad : function (instance) {
			var page;
			for (page = 0; page < instance.eventsData.onPageLoad.length; page++) {
				if (document.location.pathname.match(new RegExp(instance.eventsData.onPageLoad[page].page))) {
					instance.eventsData.onPageLoad[page].callback(instance);
				}
			}
		}
	},
	eventsData : {
		onPageLoad : []
	},

	/* Load StyleSheets */
	loadCSS : {
		css : {
			// Both BF3/BF4 css
			any : "#serverbrowser-show .server-info .map-rotation .maps-icons," +
				"#serverguide-show .map-rotation .maps-icons{" +
				"    margin-top: 1px;" +
				"    text-shadow: 0px 0px 4px rgb(0, 0, 0);" +
				"}" +
				"#serverbrowser-show .server-info .map-rotation .maps-icons.wait-to-load," +
				"#serverguide-show .map-rotation .maps-icons.wait-to-load{" +
				"    margin: 6px;" +
				"}" +
				"#serverbrowser-show .server-info .map-rotation .maps-icons .map-icon.active," +
				"#serverguide-show .map-rotation .maps-icons .map-icon.active{" +
				"    border-left:3px solid #60c0f6;" +
				"}" +
				".dialog.dialog-map-rotation{" +
				"    position: fixed;" +
				"    top: 50%;" +
				"    left: 50%;" +
				"    width: 992px;" +
				"    margin-left: -497px!important;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body{" +
				"    width:992px;" +
				"    position: relative;" +
				"    padding: 0px!important;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .active-indicator{" +
				"    position: absolute;" +
				"    top: 5px;" +
				"    right: 5px;" +
				"    background-color: rgba(0, 0, 0, 0.5);" +
				"    padding: 7px 5px 5px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .active-indicator h6{" +
				"    float: right;" +
				"    margin: 2px 0px 0px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .scroll-button{" +
				"    position:absolute;" +
				"    top:0px;" +
				"    font-family:consolas;" +
				"    font-size:5em;" +
				"    width:130px;" +
				"    text-align:center;" +
				"    cursor:pointer;" +
				"    text-shadow: 0px 0px 4px black,0px 0px 4px black,0px 0px 4px black,0px 0px 4px black;" +
				"    -webkit-touch-callout: none;" +
				"    -webkit-user-select: none;" +
				"    -khtml-user-select: none;" +
				"    -moz-user-select: none;" +
				"    -ms-user-select: none;" +
				"    user-select: none;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .left-scroll-button{" +
				"    left:0px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .right-scroll-button{" +
				"    right:0px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-name{" +
				"    position:absolute;" +
				"    left:0px;" +
				"    bottom:82px;" +
				"    right:0px;" +
				"    background-color:rgba(0,0,0,0.5);" +
				"    text-align:center;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-carousel{" +
				"    position:absolute;" +
				"    left:0px;" +
				"    bottom:0px;" +
				"    right:0px;" +
				"    background-color:rgb(0,0,0);" +
				"    height: 82px;" +
				"    overflow: hidden;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-carousel .map-preview{" +
				"    float:left;" +
				"    width:146px;" +
				"    height:79px;" +
				"    border:1px solid rgb(90,90,90);" +
				"    position:relative;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-carousel .map-preview .map-preview-title{" +
				"    font-size: 0.9em;" +
				"    font-weight: bold;" +
				"    position: absolute;" +
				"    bottom: 2px;" +
				"    left: 0px;" +
				"    right: 0px;" +
				"    text-align: center;" +
				"    background-color: rgba(0,0,0,0.3);" +
				"    padding: 3px 0px 3px 0px;" +
				"    text-shadow: 0px 0px 3px black,0px 0px 3px black,0px 0px 3px black;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-carousel .map-preview .active-preview{" +
				"    position: absolute;top:2px;left:2px;border:4px solid #60c0f6;" +
				"}",

			// BF4 css
			bf4 : "#serverbrowser-show .quick-info .holder{" +
				"    z-index: 2;" +
				"    text-shadow: 0px 0px 4px rgb(0,0,0);" +
				"}" +
				"#serverbrowser-show .server-info .map-rotation{" +
				"    position:absolute;" +
				"    z-index:1;" +
				"    padding:2px;" +
				"    opacity:0.7;" +
				"    transition: opacity .25s ease-in-out;" +
				"    -moz-transition: opacity .25s ease-in-out;" +
				"    -webkit-transition: opacity .25s ease-in-out;" +
				"}" +
				"#serverbrowser-show .server-info .map-rotation:hover{" +
				"    opacity:1;" +
				"}" +
				"#serverbrowser-show .server-info .map-rotation .maps-icons .map-icon{" +
				"    cursor:pointer;" +
				"    width:26px;" +
				"    height:26px;" +
				"    border-left:3px solid #d5dde5;" +
				"    margin:1px 2px 1px 2px;" +
				"    box-shadow:1px 1px 10px #888;" +
				"}" +
				".dialog.dialog-map-rotation{" +
				"    height: 458px;" +
				"    margin-top: -229px!important;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body{" +
				"    height:427px !important;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .scroll-button{" +
				"    height:288px;" +
				"    line-height:288px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-name{" +
				"    padding-top:8px;" +
				"}",

			// BF3 Css
			bf3 : "#serverguide-show .map-rotation{" +
				"    padding-bottom: 10px;" +
				"}" +
				"#serverguide-show .map-rotation .maps-icons .map-icon{" +
				"    cursor:pointer;" +
				"    width:30px;" +
				"    height:24px;" +
				"    border-left:3px solid #777;" +
				"    margin:1px 3px 1px 0px;" +
				"    box-shadow:0px 0px 2px #000;" +
				"}" +
				".dialog.dialog-map-rotation{" +
				"    height: 285px;" +
				"    margin-top: -143px!important;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body{" +
				"    height:246px;" +
				"    color: white;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .active-indicator{" +
				"    font-family: Purista,sans-serif;" +
				"    font-style: normal;" +
				"    font-weight: 600;" +
				"    font-size: 1.2em;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .active-indicator .loader{" +
				"    margin-right: 5px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .scroll-button{" +
				"    height:164px;" +
				"    line-height:164px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-name{" +
				"    padding-top:0px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-name h1{" +
				"    font-size: 1.8em;" +
				"    padding: 5px;" +
				"    font-family: Purista,sans-serif;" +
				"    font-style: normal;" +
				"    font-weight: 600;" +
				"}",

			// BFH Css
			bfh : "#serverbrowser-show .quick-info .holder{" +
				"    z-index: 2;" +
				"    text-shadow: 0px 0px 4px rgb(0,0,0);" +
				"}" +
				"#serverbrowser-show .server-info .map-rotation{" +
				"    position:absolute;" +
				"    z-index:1;" +
				"    padding:2px;" +
				"    opacity:0.7;" +
				"    transition: opacity .25s ease-in-out;" +
				"    -moz-transition: opacity .25s ease-in-out;" +
				"    -webkit-transition: opacity .25s ease-in-out;" +
				"}" +
				"#serverbrowser-show .server-info .map-rotation:hover{" +
				"    opacity:1;" +
				"}" +
				"#serverbrowser-show .server-info .map-rotation .maps-icons .map-icon{" +
				"    cursor:pointer;" +
				"    width:39px;" +
				"    height:21px;" +
				"    border-left:3px solid #d5dde5;" +
				"    margin:1px 2px 1px 2px;" +
				"    box-shadow:1px 1px 10px #888;" +
				"}" +
				".dialog.dialog-map-rotation{" +
				"    color: white;" +
				"    height: 458px;" +
				"    margin-top: -229px!important;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body{" +
				"    height:427px !important;" +
				"    background-size: cover;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .scroll-button{" +
				"    height:288px;" +
				"    line-height:288px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-name{" +
				"    padding-top:8px;" +
				"}" +
				".dialog.dialog-map-rotation .dialog-body .map-name h1{" +
				"    color: white;" +
				"}"
		},
		bf4 : function (instance) {
			instance.loadCSS.add(instance.loadCSS.css.any);
			instance.loadCSS.add(instance.loadCSS.css.bf4);
		},
		bf3 : function (instance) {
			instance.loadCSS.add(instance.loadCSS.css.any);
			instance.loadCSS.add(instance.loadCSS.css.bf3);
		},
		bfh : function (instance) {
			instance.loadCSS.add(instance.loadCSS.css.any);
			instance.loadCSS.add(instance.loadCSS.css.bfh);
		},
		add : function (css) {
			var style = $('<style></style>');
			style.html(css);
			$('head').append(style);
		}
	},


	/* Interface Functions */
	mapRotation : {
		// Store an active ajax
		active_ajax : null,
		active_server : {
			id : null,
			maps : null
		},

		// Initiate 
		init : function (instance) {
			// Check for an incorrect page load
			if ($("#serverbrowser-show").length === 0) {
				return;
			}

			// Check for already loaded extension
			if ($("#serverbrowser-results").data(instance.id)) {
				return;
			}
			$("#serverbrowser-results").data(instance.id, true);

			// Add New Sever Click Event
			$("#serverbrowser-show")[0].addEventListener('DOMNodeInserted', function (event) {
				// Check if DOM ready
				if (!event || !event.target || event.target.className !== "box") {
					return;
				}
				// Check if map-rotation exist already
				if ($("#serverbrowser-show .map-rotation").length > 0) {
					return;
				}
				// Get Server Maps
				instance.mapRotation.updateServerInfo(instance);
			}, true);

			// Get Server Maps
			instance.mapRotation.updateServerInfo(instance);
		},

		// Load Rotation In server info
		updateServerInfo : function (instance) {
			// Check for an active ajax
			if (instance.mapRotation.active_ajax !== null) {
				// Kill active ajax
				instance.mapRotation.active_ajax.abort();
			}

			// Build map rotation element
			$("#serverbrowser-show .server-info").prepend('<div class="map-rotation"><div class="maps-icons wait-to-load">&#9776;</div></div>');

			// Get server map rotation
			instance.mapRotation.getMapRotation(instance);
		},

		// Get Server Maps
		getMapRotation : function (instance) {

			// Get server info url
			var server_url = $("#serverbrowser-show footer a").attr('href');

			// Make an ajax call
			instance.mapRotation.active_ajax = $.ajax({
				url : server_url,
				success : function (result) {
					// Request completed
					instance.mapRotation.active_ajax = null;
					// Parse server map rotation
					var mapRotation = instance.mapRotation.parseMapRotation(result);

					// Check for errors
					if (mapRotation.error) {
						// If error
						$('#serverbrowser-show .server-info .map-rotation .maps-icons').html('&#9776; Error');
					} else {
						// No error
						instance.mapRotation.showMapRotation(instance, mapRotation.maps);
					}
				}
			});
		},

		parseMapRotation : function (result) {
			// Get server info
			var server_data = result.match(/<section id="server-page"[^>]+>/im);
			// Check for error
			if (!server_data || !server_data[0].match(/data-ip="([^"]+)"/i) || server_data[0].match(/data-ip="([^"]+)"/i)[1] !== $("#serverbrowser-show .join").data("ip") || $("#serverbrowser-show .map-rotation").length === 0) {
				return {error : true};
			}

			var data = [];
			// Get maps
			var maps_data = result.match(/<td class="([^"]*)">[^<]*<span class="map-image" style="background-image: url\('([^']+)'\)"><\/span>[^<]*<p>[^<]*(<i[^>]+><\/i>|)[^<]*<strong>([^<]+)<\/strong><br>[^<]*<span>([^<]+)<\/span>[^<]*<\/p>/gm);
			if(!maps_data){
				return {error : true};
			}
			// Parse each map
			var map, map_name, map_mode, map_image, map_active;
			for (var i = 0; i < maps_data.length; i++) {
				map = maps_data[i].match(/<td class="([^"]*)">[^<]*<span class="map-image" style="background-image: url\('([^']+)'\)"><\/span>[^<]*<p>[^<]*(<i[^>]+><\/i>|)[^<]*<strong>([^<]+)<\/strong><br>[^<]*<span>([^<]+)<\/span>[^<]*<\/p>/im);
				// Parse map data
				map_name = map[4];
				map_mode = map[5];
				map_image = map[2].replace('/195x79/', '/IMAGExSIZE/');
				map_active = (map[1]=="active") ? true : false;
				
				// Store data
				data.push({
					name : map_name.trim(),
					mode : map_mode.trim(),
					image : {
						big : map_image.replace('IMAGExSIZE', '992x345'),
						medium : map_image.replace('IMAGExSIZE', '146x79'),
						small : map_image.replace('IMAGExSIZE', '30x21')
					},
					active : map_active
				});
			};

			// Return maps
			return {
				maps : data,
				error : false
			};
		},

		// Show maps on server info
		showMapRotation : function (instance, maps) {
			// Save data
			instance.mapRotation.active_server.id = $('#serverbrowser-show .server-info .join').data('guid');
			instance.mapRotation.active_server.maps = maps;

			// Display data
			var i = 0,
				icon,
				maps_icons = $('<div class="maps-icons"></div>'),
			// Icon click handler
				iconClickHandler = function () {
					// Open Map Rotation Modal
					instance.mapRotation.showMapRotationPopUp(instance, parseInt($(this).data('index'), 10));
				};
			// For each map
			for (i = 0; i < maps.length; i++) {
				// Build icon
				icon = $('<img class="' + ((maps[i].active) ? 'active ' : '') + 'map-icon" src="' + maps[i].image.small + '" data-tooltip="' + maps[i].name + ' - ' + maps[i].mode + '" data-index="' + i + '"/>');
				// Add click event on icon
				icon.click(iconClickHandler);
				// Insert icon on icon list element
				maps_icons.append(icon);
			}

			// Insert icons on page
			$('#serverbrowser-show .server-info .map-rotation').html('').append(maps_icons);
		},

		// Create popup
		showMapRotationPopUp : function (instance, index) {
			var i, map,
			// Current map's index
				view_map = index,
			// Get maps that this rotate
				maps = instance.mapRotation.active_server.maps,
			// Current map's data
				map_data = maps[view_map],
			// Popup element variable
				popup,
			// Content element variable
				content,
			// Active map indicator element variable
				active,
			// Nav buttons elements variables
				goLeft,
				goRight,
			// Modal's title element variable
				content_title,
			// Map rotation element
				maps_elements,
			// Slider change map function
				mapCarouselGoto;

			// Create BBLog popup
			BBLog.popup(instance.id, '[' + (view_map + 1) + '/' + maps.length + '] ' + map_data.name + ' - ' + map_data.mode, '');
			// Get popup element
			popup = $('#popup-' + instance.id).addClass('dialog-map-rotation');
			// Get modal's content element
			content = popup.find('.dialog-body').css('background-image', "url('" + map_data.image.big + "')");
			// Create Active indicator
			active = $('<div class="active-indicator"><h6>Active</h6><div class="loader small"></div></div>').hide();
			// Show idicator if map is active
			if (map_data.active) {
				active.show();
			}
			// Nav buttons
			goLeft = $('<div class="scroll-button left-scroll-button">&lt;</div>');
			goRight = $('<div class="scroll-button right-scroll-button">&gt;</div>');
			// Content Title
			content_title = $('<div class="map-name"><h1>' + map_data.name + ' - ' + map_data.mode + '</h1></div>');
			// Maps
			maps_elements = $('<div style="width:' + ((maps.length + 1) * 148 + 1) + 'px;margin-left:992px;"></div>');

			// For every map, create preview in slider
			for (i = 0; i < maps.length; i++) {
				// Create map preview element
				map = $('<div class="map-preview" style="background-image:url(' + maps[i].image.medium + ');"></div>');
				// Insert title on map preview element
				map.append('<div class="map-preview-title">' + maps[i].name + '<br>' + maps[i].mode + '</div>');
				// If this map is active
				if (maps[i].active) {
					// Change border color
					map.css('border-color', '#60c0f6');
					// Create indicator
					map.append('<div class="active-preview"></div>');
				}
				// If this map is current on slider
				if (i === view_map) {
					// Change his preview box-shadow
					map.css('box-shadow', '0px 0px 10px white inset');
				}
				// Hold a pointer on the preview element
				maps[i].preview_element = map;
				// Insert element on modal
				maps_elements.append(map);
			}

			// Insert element in row
			content.append(active);
			content.append(goLeft);
			content.append(goRight);
			content.append(content_title);
			content.append($('<div class="map-carousel">').append(maps_elements));

			// Animate preview maps (slide in)
			maps_elements.animate({marginLeft : (992 / 2) - (148 / 2) - (view_map * 148)}, 500);

			// Goto function for slider
			mapCarouselGoto = function (number) {
				// If goto current map, nothing to do
				if (number === view_map) {
					return;
				}
				// If goto out of left border redirect to first right
				if (number < 0) {
					number = maps.length - 1;
					if (number === view_map) {
						return;
					}
				// If goto out of right border redirect to first left
				} else if (number > maps.length - 1) {
					number = 0;
					if (number === view_map) {
						return;
					}
				}
				// Reset current's map preview box-shadow
				maps[view_map].preview_element.css("box-shadow", "");
				// Change current map index to goto index
				view_map = number;
				// Get new current map's data
				map_data = maps[view_map];
				// Change new current map's preview box-shadow
				map_data.preview_element.css("box-shadow", "0px 0px 10px white inset");
				// Change new current map's preview title
				content_title.html('<h1>' + map_data.name + ' - ' + map_data.mode + '</h1>');
				// Change modals slider image
				content.css('background-image', "url('" + map_data.image.big + "')");
				// Change modal's title
				popup.find('header h3').html('[' + (view_map + 1) + '/' + maps.length + '] ' + map_data.name + ' - ' + map_data.mode);
				// If map is active anable indicator
				if (map_data.active) {
					active.show();
				} else {
					active.hide();
				}
				// Animate slider to new current map's preview
				maps_elements.animate({marginLeft : (992 / 2) - (148 / 2) - (view_map * 148)}, 500);
			};

			// Add event listener on left arrow
			goLeft.click(function () {
				mapCarouselGoto(view_map - 1);
			});
			// Add event listener on right arrow
			goRight.click(function () {
				mapCarouselGoto(view_map + 1);
			});
		}
	},

	/* Interface Functions */
	mapRotationBF3 : {
		// Store an active ajax
		active_ajax : null,
		active_server : {
			id : null,
			maps : null
		},

		// Initiate 
		init : function (instance) {
			// Check for an incorrect page load
			if ($(".serverguide-list").length === 0 || $("#serverguide-show").length === 0) {
				return;
			}

			// Check for already loaded extension
			if ($("#serverguide-server-list").data(instance.id)) {
				return;
			}
			$("#serverguide-server-list").data(instance.id, true);

			// Add New Sever Click Event
			$("#serverguide-show")[0].addEventListener('DOMNodeInserted', function (event) {
				// Check if DOM ready
				if (!event || !event.target || event.target.className !== "base-box-push") {
					return;
				}
				// Check if map-rotation exist already
				if ($("#serverguide-show .map-rotation").length > 0) {
					return;
				}
				// Get Server Maps
				instance.mapRotationBF3.updateServerInfo(instance);
			}, true);

			// Get Server Maps
			instance.mapRotationBF3.updateServerInfo(instance);
		},

		// Load Rotation In server info
		updateServerInfo : function (instance) {

			// Check for an active ajax
			if (instance.mapRotationBF3.active_ajax !== null) {
				// Kill active ajax
				instance.mapRotationBF3.active_ajax.abort();
			}

			// Build map rotation element
			$('<div class="map-rotation"><div class="maps-icons wait-to-load">&#9776;</div></div>').insertBefore("#selected-server-mapimage");

			// Get server map rotation
			instance.mapRotationBF3.getMapRotation(instance);
		},

		// Get Server Maps
		getMapRotation : function (instance) {

			// Get server info url
			var server_url = $("#selected-server-name a").attr('href');

			// Make an ajax call
			instance.mapRotationBF3.active_ajax = $.ajax({
				url : server_url,
				success : function (result) {
					// Request completed
					instance.mapRotationBF3.active_ajax = null;
					// Parse server map rotation
					var mapRotationBF3 = instance.mapRotationBF3.parseMapRotation(result);

					// Check for errors
					if (mapRotationBF3.error) {
						// If error
						$('#serverguide-show .map-rotation .maps-icons').html('&#9776; Error');
					} else {
						// No error
						instance.mapRotationBF3.showMapRotation(instance, mapRotationBF3.maps);
					}
				}
			});
		},

		parseMapRotation : function (result) {
			// Check for error
			if (!result.match(/ ip="([^"]+)"/i) || result.match(/ ip="([^"]+)"/i)[1] !== $("#serverguide-show-serverjoin .base-button-arrow-almost-gigantic").data("ip") || $("#serverguide-show .map-rotation").length === 0) {
				return {error : true};
			}

			// START data parsing
			var data = [],
			// Try to Fix active map bug of bf3
				active_mode = $("#selected-server-info li")[2].innerHTML.trim(),
			// Map Rotation HTML
				html = $(result).find("#maprotation").html();

			// For each map
			$(html).find("td").each(function () {
				if ($(this).find(".maprotation-map-image-wpr img").length === 0) {
					return;
				}

				// Parse map data
				var img_element = $(this).find(".maprotation-map-image-wpr img"),
					map_name = img_element.data('tooltip').split('<br>')[0],
					map_mode = img_element.data('tooltip').split('<br>')[1],
					map_image = img_element.attr('src').trim().replace('/146x79/', '/IMAGExSIZE/'),
					map_active = ($(this).attr('class').match("currentMap")) ? true : false;
				// Check if active map mode is matching
				if (map_active && map_mode !== active_mode) {
					map_active = false;
				}

				// Store data
				data.push({
					name : map_name.trim(),
					mode : map_mode.trim(),
					image : {
						big : map_image.replace('IMAGExSIZE', '992x164'),
						medium : map_image.replace('IMAGExSIZE', '146x79'),
						small : map_image.replace('IMAGExSIZE', '62x42')
					},
					active : map_active
				});

			});

			// Return maps
			return {
				maps : data,
				error : false
			};
		},

		// Show maps on server info
		showMapRotation : function (instance, maps) {
			// Save data
			instance.mapRotationBF3.active_server.id = $('#serverguide-show-serverjoin .base-button-arrow-almost-gigantic').data('guid');
			instance.mapRotationBF3.active_server.maps = maps;
			// Display data
			var i = 0,
				icon,
				maps_icons = $('<div class="maps-icons"></div>'),
			// Icon click handler
				iconClickHandler = function () {
					// Open Map Rotation Modal
					instance.mapRotationBF3.showMapRotationPopUp(instance, parseInt($(this).data('index'), 10));
				};
			// For each map
			for (i = 0; i < maps.length; i++) {
				// Build icon
				icon = $('<img class="' + ((maps[i].active) ? 'active ' : '') + 'map-icon" src="' + maps[i].image.small + '" data-tooltip="' + maps[i].name + ' - ' + maps[i].mode + '" data-index="' + i + '"/>');
				// Add click event on icon
				icon.click(iconClickHandler);
				// Insert icon on icon list element
				maps_icons.append(icon);
			}
			// Insert icons on page
			$('#serverguide-show .map-rotation').html('').append(maps_icons);
		},

		// Create popup
		showMapRotationPopUp : function (instance, index) {
			var i, map,
			// Current map's index
				view_map = index,
			// Get maps that this rotate
				maps = instance.mapRotationBF3.active_server.maps,
			// Current map's data
				map_data = maps[view_map],
			// Popup element variable
				popup,
			// Content element variable
				content,
			// Active map indicator element variable
				active,
			// Nav buttons elements variables
				goLeft,
				goRight,
			// Modal's title element variable
				content_title,
			// Map rotation element
				maps_elements,
			// Slider change map function
				mapCarouselGoto;

			// Create BBLog popup
			BBLog.popup(instance.id, '[' + (view_map + 1) + '/' + maps.length + '] ' + map_data.name + ' - ' + map_data.mode, '');
			// Get popup element
			popup = $('#popup-' + instance.id).addClass('dialog-map-rotation');
			// Get modal's content element
			content = popup.find('.dialog-body').css('background-image', "url('" + map_data.image.big + "')");
			// Create Active indicator
			active = $('<div class="active-indicator"><h6>Active</h6><div class="loader small"></div></div>').hide();
			// Show idicator if map is active
			if (map_data.active) {
				active.show();
			}
			// Nav buttons
			goLeft = $('<div class="scroll-button left-scroll-button">&lt;</div>');
			goRight = $('<div class="scroll-button right-scroll-button">&gt;</div>');
			// Content Title
			content_title = $('<div class="map-name"><h1>' + map_data.name + ' - ' + map_data.mode + '</h1></div>');
			// Maps
			maps_elements = $('<div style="width:' + ((maps.length + 1) * 148 + 1) + 'px;margin-left:992px;"></div>');

			// For every map, create preview in slider
			for (i = 0; i < maps.length; i++) {
				// Create map preview element
				map = $('<div class="map-preview" style="background-image:url(' + maps[i].image.medium + ');"></div>');
				// Insert title on map preview element
				map.append('<div class="map-preview-title">' + maps[i].name + '<br>' + maps[i].mode + '</div>');
				// If this map is active
				if (maps[i].active) {
					// Change border color
					map.css('border-color', '#60c0f6');
					// Create indicator
					map.append('<div class="active-preview"></div>');
				}
				// If this map is current on slider
				if (i === view_map) {
					// Change his preview box-shadow
					map.css('box-shadow', '0px 0px 10px white inset');
				}
				// Hold a pointer on the preview element
				maps[i].preview_element = map;
				// Insert element on modal
				maps_elements.append(map);
			}

			// Insert element in row
			content.append(active);
			content.append(goLeft);
			content.append(goRight);
			content.append(content_title);
			content.append($('<div class="map-carousel">').append(maps_elements));

			// Animate preview maps (slide in)
			maps_elements.animate({marginLeft : (992 / 2) - (148 / 2) - (view_map * 148)}, 500);

			// Goto function for slider
			mapCarouselGoto = function (number) {
				// If goto current map, nothing to do
				if (number === view_map) {
					return;
				}
				// If goto out of left border redirect to first right
				if (number < 0) {
					number = maps.length - 1;
					if (number === view_map) {
						return;
					}
				// If goto out of right border redirect to first left
				} else if (number > maps.length - 1) {
					number = 0;
					if (number === view_map) {
						return;
					}
				}
				// Reset current's map preview box-shadow
				maps[view_map].preview_element.css("box-shadow", "");
				// Change current map index to goto index
				view_map = number;
				// Get new current map's data
				map_data = maps[view_map];
				// Change new current map's preview box-shadow
				map_data.preview_element.css("box-shadow", "0px 0px 10px white inset");
				// Change new current map's preview title
				content_title.html('<h1>' + map_data.name + ' - ' + map_data.mode + '</h1>');
				// Change modals slider image
				content.css('background-image', "url('" + map_data.image.big + "')");
				// Change modal's title
				popup.find('header h3').html('[' + (view_map + 1) + '/' + maps.length + '] ' + map_data.name + ' - ' + map_data.mode);
				// If map is active anable indicator
				if (map_data.active) {
					active.show();
				} else {
					active.hide();
				}
				// Animate slider to new current map's preview
				maps_elements.animate({marginLeft : (992 / 2) - (148 / 2) - (view_map * 148)}, 500);
			};

			// Add event listener on left arrow
			goLeft.click(function () {
				mapCarouselGoto(view_map - 1);
			});
			// Add event listener on right arrow
			goRight.click(function () {
				mapCarouselGoto(view_map + 1);
			});
		}
	},

	/* Interface Functions */
	mapRotationBFH : {
		// Store an active ajax
		active_ajax : null,
		active_server : {
			id : null,
			maps : null
		},

		// Initiate 
		init : function (instance) {
			// Check for an incorrect page load
			if ($("#serverbrowser-show").length === 0) {
				return;
			}

			// Check for already loaded extension
			if ($("#serverbrowser-results").data(instance.id)) {
				return;
			}
			$("#serverbrowser-results").data(instance.id, true);

			// Add New Sever Click Event
			$("#serverbrowser-show")[0].addEventListener('DOMNodeInserted', function (event) {
				// Check if DOM ready
				if (!event || !event.target || event.target.className !== "box") {
					return;
				}
				// Check if map-rotation exist already
				if ($("#serverbrowser-show .map-rotation").length > 0) {
					return;
				}
				// Get Server Maps
				instance.mapRotationBFH.updateServerInfo(instance);
			}, true);

			// Get Server Maps
			instance.mapRotationBFH.updateServerInfo(instance);
		},

		// Load Rotation In server info
		updateServerInfo : function (instance) {
			// Check for an active ajax
			if (instance.mapRotationBFH.active_ajax !== null) {
				// Kill active ajax
				instance.mapRotationBFH.active_ajax.abort();
			}

			// Build map rotation element
			$("#serverbrowser-show .server-info").prepend('<div class="map-rotation"><div class="maps-icons wait-to-load">&#9776;</div></div>');

			// Get server map rotation
			instance.mapRotationBFH.getMapRotation(instance);
		},

		// Get Server Maps
		getMapRotation : function (instance) {

			// Get server info url
			var server_url = $("#serverbrowser-show footer a").attr('href');

			// Make an ajax call
			instance.mapRotationBFH.active_ajax = $.ajax({
				url : server_url,
				success : function (result) {
					// Request completed
					instance.mapRotationBFH.active_ajax = null;
					// Parse server map rotation
					var mapRotation = instance.mapRotationBFH.parseMapRotation(result);

					// Check for errors
					if (mapRotation.error) {
						// If error
						$('#serverbrowser-show .server-info .map-rotation .maps-icons').html('&#9776; Error');
					} else {
						// No error
						instance.mapRotationBFH.showMapRotation(instance, mapRotation.maps);
					}
				}
			});
		},

		parseMapRotation : function (result) {
			// Get server info
			var server_data = result.match(/<section id="server-page"[^>]+>/im);

			// Check for error
			if (!server_data || !server_data[0].match(/data-ip="([^"]+)"/i) || server_data[0].match(/data-ip="([^"]+)"/i)[1] !== $("#serverbrowser-show .join").data("ip") || $("#serverbrowser-show .map-rotation").length === 0) {
				return {error : true};
			}

			var data = [];
			// Get maps
			var maps_data = result.match(/<td class="([^"]*)">[^<]*<img src="([^"]+)" width=\d+ height=\d+ alt="[^"]*" \/>[^<]*<p>[^<]*(<i[^>]+><\/i>|)[^<]*<strong>([^<]+)<\/strong><br>[^<]*<span>([^<]+)<\/span>[^<]*<\/p>/gm);
			console.log(maps_data);
			if(!maps_data){
				return {error : true};
			}
			// Parse each map
			var map, map_name, map_mode, map_image, map_active;
			for (var i = 0; i < maps_data.length; i++) {
				map = maps_data[i].match(/<td class="([^"]*)">[^<]*<img src="([^"]+)" width=\d+ height=\d+ alt="[^"]*" \/>[^<]*<p>[^<]*(<i[^>]+><\/i>|)[^<]*<strong>([^<]+)<\/strong><br>[^<]*<span>([^<]+)<\/span>[^<]*<\/p>/im);
				// Parse map data
				map_name = map[4];
				map_mode = map[5];
				map_image = map[2].replace('/195x79/', '/IMAGExSIZE/');
				map_active = (map[1]=="active") ? true : false;
				
				// Store data
				data.push({
					name : map_name.trim(),
					mode : map_mode.trim(),
					image : {
						big : map_image.replace('IMAGExSIZE', '992x345'),
						medium : map_image.replace('IMAGExSIZE', '146x79'),
						small : map_image.replace('IMAGExSIZE', '30x21')
					},
					active : map_active
				});
			};

			// Return maps
			return {
				maps : data,
				error : false
			};
		},

		// Show maps on server info
		showMapRotation : function (instance, maps) {
			// Save data
			instance.mapRotationBFH.active_server.id = $('#serverbrowser-show .server-info .join').data('guid');
			instance.mapRotationBFH.active_server.maps = maps;

			// Display data
			var i = 0,
				icon,
				maps_icons = $('<div class="maps-icons"></div>'),
			// Icon click handler
				iconClickHandler = function () {
					// Open Map Rotation Modal
					instance.mapRotationBFH.showMapRotationPopUp(instance, parseInt($(this).data('index'), 10));
				};
			// For each map
			for (i = 0; i < maps.length; i++) {
				// Build icon
				icon = $('<img class="' + ((maps[i].active) ? 'active ' : '') + 'map-icon" src="' + maps[i].image.small + '" data-tooltip="' + maps[i].name + ' - ' + maps[i].mode + '" data-index="' + i + '"/>');
				// Add click event on icon
				icon.click(iconClickHandler);
				// Insert icon on icon list element
				maps_icons.append(icon);
			}

			// Insert icons on page
			$('#serverbrowser-show .server-info .map-rotation').html('').append(maps_icons);
		},

		// Create popup
		showMapRotationPopUp : function (instance, index) {
			var i, map,
			// Current map's index
				view_map = index,
			// Get maps that this rotate
				maps = instance.mapRotationBFH.active_server.maps,
			// Current map's data
				map_data = maps[view_map],
			// Popup element variable
				popup,
			// Content element variable
				content,
			// Active map indicator element variable
				active,
			// Nav buttons elements variables
				goLeft,
				goRight,
			// Modal's title element variable
				content_title,
			// Map rotation element
				maps_elements,
			// Slider change map function
				mapCarouselGoto;

			// Create BBLog popup
			BBLog.popup(instance.id, '[' + (view_map + 1) + '/' + maps.length + '] ' + map_data.name + ' - ' + map_data.mode, '');
			// Get popup element
			popup = $('#popup-' + instance.id).addClass('dialog-map-rotation');
			// Get modal's content element
			content = popup.find('.dialog-body').css('background-image', "url('" + map_data.image.big + "')");
			// Create Active indicator
			active = $('<div class="active-indicator"><h6>Active</h6><div class="loader small"></div></div>').hide();
			// Show idicator if map is active
			if (map_data.active) {
				active.show();
			}
			// Nav buttons
			goLeft = $('<div class="scroll-button left-scroll-button">&lt;</div>');
			goRight = $('<div class="scroll-button right-scroll-button">&gt;</div>');
			// Content Title
			content_title = $('<div class="map-name"><h1>' + map_data.name + ' - ' + map_data.mode + '</h1></div>');
			// Maps
			maps_elements = $('<div style="width:' + ((maps.length + 1) * 148 + 1) + 'px;margin-left:992px;"></div>');

			// For every map, create preview in slider
			for (i = 0; i < maps.length; i++) {
				// Create map preview element
				map = $('<div class="map-preview" style="background-image:url(' + maps[i].image.medium + ');"></div>');
				// Insert title on map preview element
				map.append('<div class="map-preview-title">' + maps[i].name + '<br>' + maps[i].mode + '</div>');
				// If this map is active
				if (maps[i].active) {
					// Change border color
					map.css('border-color', '#60c0f6');
					// Create indicator
					map.append('<div class="active-preview"></div>');
				}
				// If this map is current on slider
				if (i === view_map) {
					// Change his preview box-shadow
					map.css('box-shadow', '0px 0px 10px white inset');
				}
				// Hold a pointer on the preview element
				maps[i].preview_element = map;
				// Insert element on modal
				maps_elements.append(map);
			}

			// Insert element in row
			content.append(active);
			content.append(goLeft);
			content.append(goRight);
			content.append(content_title);
			content.append($('<div class="map-carousel">').append(maps_elements));

			// Animate preview maps (slide in)
			maps_elements.animate({marginLeft : (992 / 2) - (148 / 2) - (view_map * 148)}, 500);

			// Goto function for slider
			mapCarouselGoto = function (number) {
				// If goto current map, nothing to do
				if (number === view_map) {
					return;
				}
				// If goto out of left border redirect to first right
				if (number < 0) {
					number = maps.length - 1;
					if (number === view_map) {
						return;
					}
				// If goto out of right border redirect to first left
				} else if (number > maps.length - 1) {
					number = 0;
					if (number === view_map) {
						return;
					}
				}
				// Reset current's map preview box-shadow
				maps[view_map].preview_element.css("box-shadow", "");
				// Change current map index to goto index
				view_map = number;
				// Get new current map's data
				map_data = maps[view_map];
				// Change new current map's preview box-shadow
				map_data.preview_element.css("box-shadow", "0px 0px 10px white inset");
				// Change new current map's preview title
				content_title.html('<h1>' + map_data.name + ' - ' + map_data.mode + '</h1>');
				// Change modals slider image
				content.css('background-image', "url('" + map_data.image.big + "')");
				// Change modal's title
				popup.find('header h3').html('[' + (view_map + 1) + '/' + maps.length + '] ' + map_data.name + ' - ' + map_data.mode);
				// If map is active anable indicator
				if (map_data.active) {
					active.show();
				} else {
					active.hide();
				}
				// Animate slider to new current map's preview
				maps_elements.animate({marginLeft : (992 / 2) - (148 / 2) - (view_map * 148)}, 500);
			};

			// Add event listener on left arrow
			goLeft.click(function () {
				mapCarouselGoto(view_map - 1);
			});
			// Add event listener on right arrow
			goRight.click(function () {
				mapCarouselGoto(view_map + 1);
			});
		}
	}
});
