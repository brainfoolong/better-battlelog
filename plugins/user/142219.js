/**
* Like2Hooah:
*   -   replace the 'Like' button with 'Hooah' buttons

* @author The_HydroX
* @version 1.1
* @url https://1337-server.eu
*/

BBLog.handle("add.plugin", {
  id : "like2hooah",
  name : "Like2Hooah",
  init : function(instance){
    instance.custom_the_hydrox_like2hooah(instance);
  },
  domchange : function(instance){
    instance.custom_the_hydrox_like2hooah(instance);
  },
  custom_the_hydrox_like2hooah : function(instance){
    if($('.hooah').length != 0){
      $('.hooah').parent('a').html($('.hooah').parent('a').html().replace('Like','Hooah'));
    }
  },
});
