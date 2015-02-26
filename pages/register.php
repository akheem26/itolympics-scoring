<html>
<head>
	<title></title>
</head>
<body>	
<h1>Register</h1>
<?php
require_once("../lib/db_const.php");
if (!isset($_POST['submit'])) {
?>	<!-- The HTML registration form -->
	<form action="<?=$_SERVER['PHP_SELF']?>" method="post">
		School Name: <input type="text" name="school_name" /><br />
		School Logo:<input type="file" name="school_logo" id="fileToUpload">
 
		<input type="submit" name="submit" value="Register" />
	</form>
<?php
} else {
## connect mysql server
	$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
	# check connection
	if ($mysqli->connect_errno) {
		echo "<p>MySQL error no {$mysqli->connect_errno} : {$mysqli->connect_error}</p>";
		exit();
	}
## query database
	# prepare data for insertion
	$school_name	= $_POST['school_name'];
	$school_logo	= $_POST['school_logo'];
	# check if username and email exist else insert
	$exists = 0;
	$result = $mysqli->query("SELECT username from contestants WHERE username = '{$username}' LIMIT 1");
	if ($result->num_rows == 1) {
		$exists = 1;	
	}
 
	if ($exists == 1) echo "<p>School Name already exists!</p>";
	else {
		# insert data into mysql database
		$sql = "INSERT  INTO `contestants` (`school_id`, `school_name`, `school_logo`) 
				VALUES (NULL, '{$school_name}', '{$school_logo}')";
 
		if ($mysqli->query($sql)) {
			//echo "New Record has id ".$mysqli->insert_id;
			echo "<p>Registred successfully!</p>";
		} else {
			echo "<p>MySQL error no {$mysqli->errno} : {$mysqli->error}</p>";
			exit();
		}
	}
}
?>		
</body>
</html>