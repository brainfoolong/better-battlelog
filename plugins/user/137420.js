BBLog.handle("add.plugin", {
	/** @type 	{String} 		The extension's id. 		*/
	id: 'bfh-weapon-unlock-feeds-remover',
	/** @type 	{String}		The extension's name.  		*/
	name: 'BFH weapon unlock feeds remover',
	/** @type 	{String} 		The version string.		*/
	version: '1.0.0.1',
	/** @type 	{Object} 		BBL Translation stuff.		*/
	translations: {},
	/** @type 	{Object} 		Config flags from BBL.		*/
	configFlags: [],
	/** @type 	{Object} 		BBLogs main instance. 		*/
	instance: {},
	/** @type 	{Array} 		Dropdown element.		*/
	dropdown: [null],
	/** @type 	{Array} 		@see getMatches 		*/
	matches: [null, null, null],
	/** @type 	{Bool} 		Whether the user has a soldier or not.	*/
	hasSoldier: false,
	
	init : function(instance) {
		this.instance = instance
		if ((BBLog.cache('mode') === 'bf3') || (BBLog.cache('mode') === 'mohw') || (BBLog.cache('mode') === 'bf4') || (BBLog.cache('mode') === 'bfh')) {
			this.setContainer()
		}
	},
	
	domchange: function () {
		if ((BBLog.cache('mode') === 'bf3') || (BBLog.cache('mode') === 'mohw') || (BBLog.cache('mode') === 'bf4') || (BBLog.cache('mode') === 'bfh')) {
			this.setContainer()
		}
	},
	
	setContainer: function() {
		var isFeedList = $("html").find(".list.feed-events.base-menu").length
		if (isFeedList == 1) {
			$(".list.feed-events.base-menu li:has('div div div div'):has('.weapon_unlock.medium.*.bfh-weapon_unlock')").remove()
		}
	}
});