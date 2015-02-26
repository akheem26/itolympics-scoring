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
    echo "School Name:{$row[0]}  <br/> ";
  
    $img= $row[1];
	echo "School Logo:".$img;
	echo "<br/>";
}
mysql_free_result($retval);
echo "Fetched data successfully\n";
mysql_close($conn);
?>