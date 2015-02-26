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

$arrContestants = array();
while($row = mysql_fetch_assoc($retval) )
{
    $arrContestants[] = array($row['school_name'],$row['school_logo']);
}
?>