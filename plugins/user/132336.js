/**
 * progressbar to max level:
 * 
 * @author t9c5f
 * @version 0.3
 * @last-edit 19 . 04 . 15 14:26
 */


BBLog.handle("add.plugin", {
    id : "highest-rank-progress-bar",
    name : "Progressbar To Rank 140",

    translations : {
        "en" : {
            "progress.enabled" : "Progressbar to max level enabled",
        },
        "de" : {
            "progress.enabled" : "Fortschrittsleiste aktiviert",
        }
    },

    configFlags : [
        {"key" : "progress.enabled", "init" : 1},
    ],

    domchange : function(instance){
        if($( "#maxLevelProgressBar" ).length == 0 && $("#stat-score").length != 0 && instance.storage("progress.enabled")){

	console.log(" progress-bar-to-max-level started:");

       //var totalScore = $("#stat-score").html();
       //totalScore = parseInt(totalScore.replace(/,/g,'').replace(/\./g ,''));

	levelScore = new Array(0,3000,11000,22000,35000,52000,70000,91000,115000,140000,168000,197000,229000,262000,297000,334000,373000,413000,455000,499000,545000,592000,640000,691000,742000,796000,851000,907000,965000,1023000,1081000,1150000,1215000,1280000,1345000,1410000,1480000,1550000,1620000,1690000,1770000,1850000,1925000,2000000,2080000,2160000,2240000,2330000,2410000,2500000,2590000,2670000,2760000,2860000,2960000,3050000,3140000,3230000,3330000,3430000,3520000,3630000,3730000,3830000,3940000,4050000,4140000,4250000,4360000,4480000,4590000,4700000,4810000,4920000,5030000,5150000,5270000,5390000,5510000,5630000,5750000,5880000,6000000,6120000,6250000,6380000,6510000,6640000,6760000,6890000,7020000,7160000,7290000,7430000,7560000,7700000,7850000,7990000,8130000,8260000,8400000,8600000,8800000,9000000,9200000,9400000,9600000,9800000,10000000,10200000,10400000,10700000,11170000,11650000,12150000,12660000,13190000,13740000,14300000,14890000,15490000,16110000,16750000,17410000,18090000,18790000,19520000,20260000,21030000,21820000,22630000,23470000,24330000,25220000,26130000,27070000,28030000,29020000,30040000,31090000,32160000);
	
	var currentLevel = parseInt($("div.bf4-rank.rank.medium").attr( "data-rank" ));
	console.log(" |- rank = " + currentLevel);

	var currentLevelScore = parseInt($("#replay-rank-score").html().replace(/,/g ,'').replace(/\./g ,'').replace(/ /g ,''));
	console.log(" |- score of this level = " + currentLevelScore);

	var maxLevelScore = 32160000;

	if(currentLevelScore != 32160000){

	var totalLevelScore = levelScore[currentLevel] + currentLevelScore;
	console.log(" |- score for level "+ currentLevel +" + this level = " + totalLevelScore);

	
	var missingScore = maxLevelScore - totalLevelScore;
	console.log(" |- missing score = " + missingScore);

	var spm = $("#stat-spm").html().replace(/,/g,'').replace(/\./g ,'').replace(/ /g ,'');
	console.log(" |- spm = " + spm);

	var timeLeft = Math.round((missingScore / spm) / 60);
	console.log(" |- timeLeft = " + timeLeft);

	var missingScoreMio = Math.round(( missingScore ) / 1000000);

	var percent = Math.round((totalLevelScore / maxLevelScore) * 100 * 10) / 10;
	console.log(" |- percent = " + percent);

	}else{
	var missingScore = 0;
	console.log(" |- missing score = " + missingScore);

	var timeLeft = 0;
	console.log(" |- timeLeft = " + timeLeft);

	var missingScoreMio = 0;
	var percent = 100;
	console.log(" |- percent = " + percent);
	}

       $("#overview-info").append("<div id='maxLevelProgressBar' style='width:100%;margin-top:0px;margin-bottom:50px;height:20px;float:left;'><div class='rank-progress'><div class='progress-bar thicker total-rank-progress-bar'><div class='warning progress-bar-inner' style='width: " + percent + "%;'></div></div></div><div id='maxLevelProgressInfo' style='color:white;text-align:center; height:30px;margin-top:5px;width:100%;float:left;position:relative;'><strong>" + percent + "% </strong>  &#126;" + timeLeft + "h</div></div>");
	
	var drawedLevels = [50,80,100,115,120,125,130,135];
	drawedLevels.forEach(function(level) {
  	  $(".total-rank-progress-bar").append("<div style='position:absolute;z-index:999;left:" + (levelScore[level]/maxLevelScore)*100 + "%;'>|" + level + "</div>");
	});
	
	}
    }
});