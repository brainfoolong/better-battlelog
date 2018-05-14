/**
* BBLog Plugin        - tested with Version 4.9.0
* Battlelog Extension - tested with Version 231
*
* @author Richard Kuhnt (r15ch13)
* @link https://github.com/r15ch13/bblog-preset-updater
* @license MIT License (http://r15ch13.mit-license.org/)
* @version 1.0.2
*/

// initialize your plugin
BBLog.handle('add.plugin', {

    /**
    * The unique, lowercase id of my plugin
    * Allowed chars: 0-9, a-z, -
    */
    id: 'preset-updater',

    /**
    * The name of my plugin, used to show config values in bblog options
    * Could also be translated with the translation key 'plugin.name' (optional)
    *
    * @type String
    */
    name: 'Preset Updater',
    version: '1.0.2',
    css: '',
    debug: false,

    /**
    * Some translations for this plugins
    * For every config flag must exist a corresponding EN translation
    *   otherwise the plugin will no be loaded
    *
    * @type Object
    */
    translations:
    {
        'en':
        {
            'option.enabled': 'Preset Updater enabled',
            'confirm.placeholder': 'Enter a name for your preset',
            'confirm.title': 'Update preset',
            'confirm.error': 'You must specify a name for the preset to update it',
            'button.update': 'Update',
            'button.cancel': 'Cancel',
            'error.unexpected': 'Something went wrong! Please contact the developer.',
        },
        'de':
        {
            'option.enabled': 'Preset Updater aktiviert',
            'confirm.placeholder': 'Gib einen Namen für deine Voreinstellung ein',
            'confirm.title': 'Voreinstellung aktualisieren',
            'confirm.error': 'Du musst einen Namen für die Voreinstellung festlegen, um sie aktualisieren zu können',
            'button.update': 'Aktualisieren',
            'button.cancel': 'Abbrechen',
            'error.unexpected': 'Das ist etwas schief gelaufen! Bitte kontaktiere den Entwickler.',
        }
    },

    /**
    * Config flags, added to the BBLog Options Container
    * Config flags are served as integer, 1 or 0
    * Every flag must be a array with following keys,
    *   first key[0]: is the config flag name
    *   second key[1]: is the default value that is initially setted, when the plugin is loading the first time, 1 or 0
    *   third key[2]: (optional) must be a function, this turns the config entry into a
    *     button and the handler will be executed when the user click on it (like plugins, themes, radar, etc..)
    */
    configFlags:
    [
        {'key': 'option.enabled', 'init': 1},
    ],


    /**
    * Copy of window.BL.backbone.model_instances.loadoutModel
    */
    model: {},

    /**
    * A handler that be fired immediately (only once) after the plugin is loaded into bblog
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use 'instance' to access any plugin related function, not use 'this' because it's not working properly
    *    For example: If you add a new function to your addon, always pass the 'instance' object
    */
    init: function(instance)
    {
        if( ! $('#loadout-flipper').length || ! instance.storage('option.enabled')) return;

        if(instance.debug) console.log(this.name + ' v' + this.version + ' loaded (init)');

        instance.model = window.BL.backbone.model_instances.loadoutModel;

        instance.addPresetUpdateButtons(instance);

        if(instance.css)
        {
            var style = $('<style></style>');
            style.html(instance.css);
            $('head').append(style);
        }
        else
        {
            var css = document.currentScript.src.substr(0, document.currentScript.src.length - 2) + 'css';
            $('head').append($('<link rel="stylesheet" href="' + css + '" />'));
        }

        $('#content').on('click', '#loadout-overview .quick-update-preset', function(event)
        {
            event.preventDefault();
            instance.showDialog(instance, $(this).prev());
        });

        $('#dialog-container').on('click', '#popup-' + instance.id + ' a[data-bind-action=cancel]', function(event)
        {
            event.preventDefault();
            instance.clearCache(instance);
            BBLog.closeAllPopups();
        });

        $('#dialog-container').on('click', '#popup-' + instance.id + ' a[data-bind-action=ok]', function(event)
        {
            event.preventDefault();

            instance.cache('name', instance.getNewPresetName(instance));

            if(instance.validatePreset(instance)) {
                instance.updatePreset(instance);
            }
        });
    },

    /**
    * A trigger that fires everytime when the dom is changing but at max only once each 200ms (5x per second) to prevent too much calls in a short time
    * Example Case: If 10 DOM changes happen in a period of 100ms than this function will only been called 200ms after the last of this 10 DOM changes
    * This make sure that all actions in battlelog been finished before this function been called
    * This is how BBLog track Battlelog for any change, like url, content or anything
    *
    * @param object instance The instance of your plugin which is the whole plugin object
    *    Always use 'instance' to access any plugin related function, not use 'this' because it's not working properly
    *    For example: If you add a new function to your addon, always pass the 'instance' object
    */
    domchange: function(instance)
    {
        if( ! $('#loadout-flipper').length || ! instance.storage('option.enabled')) return;

        if(instance.debug) console.log(this.name + ' v' + this.version + ' loaded (domchange)');

        instance.addPresetUpdateButtons();

        instance.model = window.BL.backbone.model_instances.loadoutModel;
    },

    /**
    * Clear cached values
    */
    clearCache: function(instance)
    {
        instance.cache('id', null);
        instance.cache('key', null);
        instance.cache('type', null);
        instance.cache('name', null);
    },

    addPresetUpdateButtons: function(instance)
    {

        var presets = $('#loadout-overview').find('.quick-apply-preset');

        presets.each(function(k, presetEl)
        {
            if($(presetEl).next('.quick-update-preset').length == 0)
            {
                var el = '<a class="quick-update-preset" href="#update-preset">';
                    el += '<i class="icon-floppy-disk"></i>';
                    el += '</a>';
                $(presetEl).after(el);
            }
        });
    },

    showDialog: function(instance, presetEl)
    {
        if(presetEl)
        {
            instance.cache('id', presetEl.attr('data-id'));
            instance.cache('key', presetEl.attr('data-key'));
            instance.cache('type', presetEl.attr('data-type'));
            var name = presetEl.find('span').html();
            instance.cache('name', name);

            var confirmText = '<p><input maxlength="240" type="text" name="preset-name" value="' + Surface.valOut(name) + '" placeholder="' + instance.t('confirm.placeholder') + '"></p>'
                            + '<p class="error-message">' + instance.t('confirm.error') + '</p>';
            var confirmButtons = '<div class="btn-group"><a class="btn btn-small btn-primary href="#" data-bind-action="ok">'
                               + instance.t('button.update') + '</a><a class="btn btn-small" href="#" data-bind-action="cancel">'
                               + instance.t('button.cancel') + '</a></div>';

            BBLog.popup(instance.id, instance.t('confirm.title'), confirmText, confirmButtons);


            // Workaround for strange bblog popup resizing stuff ...
            $(window).off("resize.bblog-popup");
            $('#popup-' + instance.id + ' .dialog-body').height('auto');
        }
    },

    /**
    * Get preset name from input field
    */
    getNewPresetName: function(instance)
    {
        return $('#popup-' + instance.id).find('input[name=preset-name]').val().trim();
    },

    /**
    * Validate new preset name and check if
    */
    validatePreset: function(instance)
    {

        if( ! instance.cache('name'))
        {
            $('#popup-' + instance.id).addClass('error');
            return false;
        }

        if( ! instance.cache('id') || ! instance.cache('key') || ! instance.cache('type'))
        {
            $('#popup-' + instance.id).addClass('error');
            $('#popup-' + instance.id).find('.error-message').html(instance.t('error.unexpected'));
            return false;
        }

        return true;
    },

    /**
    * Start the update by deleting the preset first and react to the 'presetDeleted' event
    */
    updatePreset: function(instance)
    {
        var key = instance.cache('key');

        if(key)
        {
            instance.model.listenToOnce(instance.model, 'presetDeleted', _.bind(instance.onPresetDeleted, instance));
            instance.model.deletePreset(key);
        }
    },

    /**
    * On 'presetDeleted' save preset with the same name
    */
    onPresetDeleted: function()
    {
        var instance = this;

        var id = instance.cache('id');
        var type = instance.cache('type');
        var name = instance.cache('name');

        if(id && type && name)
        {
            instance.model.listenToOnce(instance.model, 'presetSaved', _.bind(instance.onPresetSaved, instance));
            instance.model.savePreset(name, type, id);
        }
    },

    /**
    * All done
    */
    onPresetSaved: function()
    {
        var instance = this;

        instance.clearCache(instance);

        BBLog.closeAllPopups();
    },

});