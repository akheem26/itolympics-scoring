<?php 

require("../lib/schools.php");

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
		<?php foreach ($arrContestants as $key => $value): ?>
				<h1><?php echo $value['0']?></h1>
				<img src="<?php echo "../images/".$value['1']?>">
		<?php endforeach ?>

	</body>
</html>