<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$conn = mysql_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysql_error());
}
$sql = 'SELECT * FROM questions';

mysql_select_db('itolympics');
$retval = mysql_query( $sql, $conn );
if(! $retval )
{
  die('Could not get data: ' . mysql_error());
}

$arrQuestions = array();
while($row = mysql_fetch_assoc($retval) )
{
    $arrQuestions[] = array($row['question_name'],$row['question_category'],$row['point']);
}
?>