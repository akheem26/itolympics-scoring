
var Teams = [
	{name: "Team 1", score: 0, $scoreElem: undefined},
	{name: "Team 2", score: 0, $scoreElem: undefined},
	{name: "Team 3", score: 0, $scoreElem: undefined},
	{name: "Team 4", score: 0, $scoreElem: undefined},
	{name: "Team 5", score: 0, $scoreElem: undefined},
	{name: "Team 6", score: 0, $scoreElem: undefined},
	{name: "Team 7", score: 0, $scoreElem: undefined},
	{name: "Team 8", score: 0, $scoreElem: undefined},
	{name: "Team 9", score: 0, $scoreElem: undefined},
	{name: "Team 10", score: 0, $scoreElem: undefined},
	{name: "Team 11", score: 0, $scoreElem: undefined}
];
var MaxScore = 999;

function UpdateScoreDisplay() {
	$(".teamname[data-teamIndex=0]").text(Teams[0].name);
	$(".teamname[data-teamIndex=1]").text(Teams[1].name);
	$(".teamname[data-teamIndex=2]").text(Teams[2].name);
	$(".teamname[data-teamIndex=3]").text(Teams[3].name);
	$(".teamname[data-teamIndex=4]").text(Teams[4].name);
	$(".teamname[data-teamIndex=5]").text(Teams[5].name);
	$(".teamname[data-teamIndex=6]").text(Teams[6].name);
	$(".teamname[data-teamIndex=7]").text(Teams[7].name);
	$(".teamname[data-teamIndex=8]").text(Teams[8].name);
	$(".teamname[data-teamIndex=9]").text(Teams[9].name);
	$(".teamname[data-teamIndex=10]").text(Teams[10].name);
	$("#score1").text(Teams[0].score);
	if (Teams[0].score < 0) {
		Teams[0].$scoreElem.addClass("scoreneg");
	} else {
		Teams[0].$scoreElem.removeClass("scoreneg");
	}
	$("#score2").text(Teams[1].score);
	if (Teams[1].score < 0) {
		Teams[1].$scoreElem.addClass("scoreneg");
	} else {
		Teams[1].$scoreElem.removeClass("scoreneg");
	}
	$("#score3").text(Teams[2].score);
	if (Teams[2].score < 0) {
		Teams[2].$scoreElem.addClass("scoreneg");
	} else {
		Teams[2].$scoreElem.removeClass("scoreneg");
	}
	$("#score4").text(Teams[3].score);
	if (Teams[3].score < 0) {
		Teams[3].$scoreElem.addClass("scoreneg");
	} else {
		Teams[4].$scoreElem.removeClass("scoreneg");
	}
	$("#score5").text(Teams[4].score);
	if (Teams[4].score < 0) {
		Teams[4].$scoreElem.addClass("scoreneg");
	} else {
		Teams[4].$scoreElem.removeClass("scoreneg");
	}
	$("#score6").text(Teams[5].score);
	if (Teams[5].score < 0) {
		Teams[5].$scoreElem.addClass("scoreneg");
	} else {
		Teams[5].$scoreElem.removeClass("scoreneg");
	}
	$("#score7").text(Teams[6].score);
	if (Teams[6].score < 0) {
		Teams[6].$scoreElem.addClass("scoreneg");
	} else {
		Teams[6].$scoreElem.removeClass("scoreneg");
	}
	$("#score8").text(Teams[7].score);
	if (Teams[7].score < 0) {
		Teams[7].$scoreElem.addClass("scoreneg");
	} else {
		Teams[7].$scoreElem.removeClass("scoreneg");
	}
	$("#score9").text(Teams[8].score);
	if (Teams[8].score < 0) {
		Teams[8].$scoreElem.addClass("scoreneg");
	} else {
		Teams[8].$scoreElem.removeClass("scoreneg");
	}
	$("#score10").text(Teams[9].score);
	if (Teams[9].score < 0) {
		Teams[9].$scoreElem.addClass("scoreneg");
	} else {
		Teams[9].$scoreElem.removeClass("scoreneg");
	}
}


$(document).ready(function() {
	Teams[0].$scoreElem = $("#score1");
	Teams[1].$scoreElem = $("#score2");
	Teams[2].$scoreElem = $("#score3");
	Teams[3].$scoreElem = $("#score4");
	Teams[4].$scoreElem = $("#score5");
	Teams[5].$scoreElem = $("#score6");
	Teams[6].$scoreElem = $("#score7");
	Teams[7].$scoreElem = $("#score8");
	Teams[8].$scoreElem = $("#score9");
	Teams[9].$scoreElem = $("#score10");

	$(".chgbtn").click(function() {
		var ti = parseInt($(this).attr("data-teamIndex"));
		var op = $(this).attr("data-operation");

		switch (op) {
			case "add":
				if (Teams[ti].score < MaxScore) {
					Teams[ti].score =Teams[ti].score+10;
				} else {
					Teams[ti].$scoreElem.addClass("scorefail");
					setTimeout(function() {
						Teams[ti].$scoreElem.removeClass("scorefail");
					}, 200);
				}
				break;
			case "sub":
				if (Teams[ti].score > (MaxScore) * -1) {
					Teams[ti].score =Teams[ti].score-10;			
				} else {
					Teams[ti].$scoreElem.addClass("scorefail");
					setTimeout(function() {
						Teams[ti].$scoreElem.removeClass("scorefail");
					}, 200);
				}
				break;
			default:
				break;
		}

		UpdateScoreDisplay();
	});
	$(".chgname").click(function() {
		var ti = parseInt($(this).attr("data-teamIndex"));
		var curname = Teams[ti].name;
		var newName = prompt("Enter new name for team #" + (ti + 1) + " ('" + curname + "'').", curname);

		Teams[ti].name = newName;
		UpdateScoreDisplay();
	});
});