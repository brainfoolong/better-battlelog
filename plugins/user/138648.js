/**
 * Disable Dropdowns:
 *  - disables dropdowns in the menu
 * 
 * @author dapil
 * @version 1.1
 * @last-edit 25. 4. 2015 20:47
 */

BBLog.handle("add.plugin", {
    id : "dapil-disable-dropdowns",
    name : "Disable Dropdowns",
    
    init : function(instance){
        instance.DisableDropdowns(instance);
    },   

    domchange : function(instance){
        instance.DisableDropdowns(instance);
    },
    
    DisableDropdowns : function(instance){
        $(".main-nav li.has-dropdown").removeClass("has-dropdown");
        $(".main-nav li[data-bind-toggle='dropdown']").removeAttr("data-bind-toggle");
    },
});
