
<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = 'SELECT school_name, school_logo FROM contestants';

mysql_select_db('itolympics');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}
while($row = mysql_fetch_array($retval, MYSQL_NUM))
{
  	$data = array($row['school_name']).
}
mysql_free_result($retval);
echo "Fetched data successfully\n";
mysql_close($conn);
?>

var data = <?php echo json_encode($data); ?>;


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
var LevelRnd = 

function UpdateScoreDisplay() {
	$(".teamname[data-teamIndex=0]").text(data[0]);
	$(".teamname[data-teamIndex=1]").text(data[1]);
	$(".teamname[data-teamIndex=2]").text(data[2]);
	$(".teamname[data-teamIndex=3]").text(data[3]);
	$(".teamname[data-teamIndex=4]").text(data[4]);
	$(".teamname[data-teamIndex=5]").text(data[5]);
	$(".teamname[data-teamIndex=6]").text(data[6]);
	$(".teamname[data-teamIndex=7]").text(data[7]);
	$(".teamname[data-teamIndex=8]").text(data[8]);
	$(".teamname[data-teamIndex=9]").text(data[9]);
	$(".teamname[data-teamIndex=10]").text(data[10]);
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