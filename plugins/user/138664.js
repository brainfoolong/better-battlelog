/**
 * French Spelling Correction:
 *  - fixes spelling errors in the french Battlelog
 *
 * @author dapil
 * @version 1.0
 * @last-edit 26. 4. 2015 13:52
 */

BBLog.handle("add.plugin",
{
    id: "dapil-french-spelling-correction",
    name: "French Spelling Correction",

    init: function (instance)
    {
        if(BBLog.cache("mode") == "bf4"){
            instance.CorrectSpelling(instance);
        }
    },

    domchange: function (instance)
    {
        if(BBLog.cache("mode") == "bf4"){
            instance.CorrectSpelling(instance);
        }
    },

    CorrectSpelling: function (instance)
    {
        if(!$("html.fixed-fr-spelling").length)
        {
            $("html").addClass("fixed-fr-spelling");
            $(".lang-fr label[for='maps-MP_Damage']").html($(".lang-fr label[for='maps-MP_Damage']").html().slice(0,-15)+"Barrage De Lancang ");
            $(".lang-fr label[for='maps-MP_Prison']").html($(".lang-fr label[for='maps-MP_Prison']").html().slice(0,-13)+"Opération Verrous ");
            $(".lang-fr label[for='maps-MP_Siege']").html($(".lang-fr label[for='maps-MP_Siege']").html().slice(0,-16)+"Siège De Shanghai ");
            $(".lang-fr label[for='maps-MP_Naval']").html($(".lang-fr label[for='maps-MP_Naval']").html().slice(0,-17)+"Tempête Aux Paracels ");
            $(".lang-fr label[for='maps-MP_TheDish']").html($(".lang-fr label[for='maps-MP_TheDish']").html().slice(0,-11)+"Transmission Pirate ");
            $(".lang-fr label[for='maps-MP_Resort']").html($(".lang-fr label[for='maps-MP_Resort']").html().slice(0,-13)+"Tourisme À Hainan ");
            $(".lang-fr label[for='gamemodes-8']").html(" MAM Escouade ");
            $(".lang-fr label[for='gamemodes-32']").html(" MAM En Equipe ");
            $(".lang-fr label[for='gamemodes-67108864']").html(" Assaut Porte-Avions - Grand ");
            $(".lang-fr label[for='gamemodes-134217728']").html(" Assaut Porte-Avions ")
            $(".lang-fr label[for='slots-16']").html(" Vide ");
            $(".lang-fr label[for='slots-1']").html(" 1 - 5 ");
            $(".lang-fr label[for='slots-2']").html(" 5 - 10 ");
            $(".lang-fr label[for='serverTypes-4']").html($(".lang-fr label[for='serverTypes-4']").html().slice(0,-13)+"Non Classé ");
            $(".lang-fr label[for='regions-4'], .lang-fr label[for='regions-8'], .lang-fr label[for='regions-32'], .lang-fr label[for='regions-64']").parent().remove();
        }
    }
});