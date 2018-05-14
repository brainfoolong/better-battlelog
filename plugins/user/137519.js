/**
 * Second Assault Map Names Correction:
 *  - removes 2014 from the names of Second Assault maps
 * 
 * @author dapil
 * @version 1.0.2
 * @last-edit 26. 4. 2015 10:56
 */

BBLog.handle("add.plugin", {
    id : "dapil-second-assault-map-names-correction",
    name : "Second Assault Map Names Correction",
    
    init : function(instance){
        instance.Remove2014(instance);
    },

    domchange : function(instance){
        instance.Remove2014(instance);
    },
    
    Remove2014: function (instance){
        $(".xpack-filter label[for^='maps-XP0']:not(.trimmed)").each(function(index){
            $(this).html($(this).html().slice(0,-6));
            $(this).addClass("trimmed");
        });
    },
});
