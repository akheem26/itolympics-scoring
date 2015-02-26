<?php 

require("../lib/questions.php");

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Scoreboard</title>

		<link rel="stylesheet" href="css/fonts.css" />
		<link rel="stylesheet" href="css/main.css" />

		<script type="text/javascript" src="js/jquery.js">
		</script>
		<script type="text/javascript" src="js/main.js">
		</script>
	</head>
	<body>
		<header id="title">
			UMak 5th IT Skills Olympics
		</header>
		<?php 
			$counter = 1;

		?>
		<?php foreach ($arrQuestions as $key => $value): ?>
				<p><?php echo $value['0']?></p>
				<p><?php echo $value['1']?></p>
				<p><?php echo $value['2']?></p>
		<?php endforeach ?>


	</body>
</html>