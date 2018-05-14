/**
 * Move BBLog Button:
 *  - adds an option to move the BBLog button
 * 
 * @author dapil
 * @version 1.1
 * @last-edit 5. 4. 2015 19:53
 */

BBLog.handle("add.plugin", {
    id : "dapil-move-bblog-button",
    name : "Move BBLog Button",
        
    translations : {
        "en" : {
          "button.text" : "How much to move?"
        }
    },

    configFlags : [
        ["button.text", 1, function(instance){instance.MoveBBLogButtonPopup(instance);}]
    ],
    init : function(instance){
        instance.MoveBBLogButton(instance);
    },   

    domchange : function(instance){
        instance.MoveBBLogButton(instance);
    },
    
    MoveBBLogButton : function(instance){
        var pixels = +instance.storage("amountofpixels"); //unary plus (convert to int)
        var ts_pixels = pixels + 160; // 160 = 170 [default top value] - 10px [default space above the bblog button]
        $('#bblog-icon').css('top', pixels + 'px');
        $('#bblog-teamspeak').css('top', ts_pixels + 'px');
    },
    MoveBBLogButtonPopup : function(instance){
        var amountofpixels = prompt("Please enter the amount of pixels you want to move the button (without \"px\").");
        if (amountofpixels!=null)
        {
          instance.storage("amountofpixels", amountofpixels);
        }
    },
});