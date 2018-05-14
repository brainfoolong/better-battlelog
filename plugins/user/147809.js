/**
 * Battlelog update page
 * 
 * @author daniluk4000
 * @version 1.1
 * @last-edit 16 . 01 . 14 14:47
 */

BBLog.handle("add.plugin", {

    id   : "bl-update-page",
    name : "Update page",
    
    init : function(instance){
    var g = document.getElementById('viewport');
    var gg = document.createElement('DIV');
    gg.className = "update-dk4000-general";
    var ggg = document.createElement('STYLE');
    var gggg = document.createTextNode('.update-dk4000-general {display: inline-block;position: fixed;top: 49px; left:0px; z-index: 555555;}.update-dk4000-general .update-dk4000 {display: none; background: rgba(0,0,0,0.5);padding: 15px 10px;color:#fff;} .update-dk4000-general .update-dk4000:last-child {display: block;}')
    g.appendChild(gg);
    gg.appendChild(ggg);
    ggg.appendChild(gggg);
    },

    domchange : function(instance){
    var g = document.getElementsByClassName('update-dk4000-general')[0];
    var f = document.createElement('a');
    f.className = "update-dk4000";
    f.href = window.location.href;
    
    var m = document.createTextNode('Update page');
    f.appendChild(m);
    g.appendChild(f);
    }
    

 });