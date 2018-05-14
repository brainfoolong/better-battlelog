/**
 * Battlelog some removes
 * 
 * @author daniluk4000
 * @version 1.1.3
 * @last-edit 09 . 02 . 16 23:38
 */

BBLog.handle("add.plugin", {

    id   : "bl-some-removes",
    name : "BL Some Improvements/Removes",
    
    init : function(remove) {
    var c = document.getElementById('viewport');
    var d = document.createElement('STYLE');
    var t = document.createTextNode('.app-promotion #comcenter-tab-friends-content, .app-promotion #comcenter-tab-chats, .app-promotion #comcenter-tab-search {bottom: 42px;}#comcenter-friends .app-promotion.box {display: none;}#cookie-preferences { display: none;}.base-header-unsupportedbrowser {display: none;}.hide-dk4000 {position: fixed; color: #fff; bottom: 0px;background: rgba(0,0,0,0.7);padding: 10px;border: 1px solid rgba(255,255,255,0.15); border-top-right-radius: 5px;border-left: 0px;border-bottom: 0px;}.span2.tiles .challenges {display: none;}.span2.tiles #recommended-server { display: none;}.span2.tiles .premium {display: none;}#top-tiles .suggestions.box {display: none;}.main-header .persona {height: 352px;margin-bottom: 1px;}.base-middle .span4.main-side-column {display: none;}.main-loggedin-middle .span8 {width: 992px;}.get-bfh-tile {display: none;}    #clubs .span4 {    width: 350px;}#clubs .sync-width {    width: 350px;}.emblembox .club-emblem {    width: 320px;    height: 320px;}#clubs .cretbersbox ul.new-row li.club-cretber {margin-right: 15px;    width: 21.4%;}#clubs .span8 {    margin: 0px;    width: 642px;    padding-left: 15px;}#clubs .stats .club-span50:last-child {    margin-left: 1px;    width: 297px;}#clubs .stats .club-span1 {width: 98.3px;}#clubs .wall-message-right {    float: left;width: 510px;}#clubs .wall-post-comment-form textarea {    width: 510px;    max-width: 510px;    font-size: 12px;    margin-top: 10px;}#clubs .wall-likes .box-content {background: #21262D;}.main-header .playbar { display: none;}'+i++);
    d.appendChild(t);
    c.appendChild(d);
    var g = document.getElementById('viewport');
    var f = document.createElement('DIV');
    f.className = "hide-dk4000";
    f.onclick = function() { var get = document.getElementById('viewport'); var cret = document.createElement('STYLE'); var styl = document.createTextNode('html:not(.is-touch) body:not(.no-comcenter) #comcenter_container {display: none;}#base-header {right: 0px !important;}#viewport {padding-right: 0px !important;}html:not(.is-touch) body:not(.no-comcenter) #base-background {margin-left: 0px;}'); cret.appendChild(styl); get.appendChild(cret); }
    var m = document.createTextNode('Hide ComCenter');
    f.appendChild(m);
    g.appendChild(f);
    }

 });