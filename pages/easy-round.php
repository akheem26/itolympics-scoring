<?php 

require("../lib/questions.php");
require("../lib/schools.php");

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Scoreboard</title>

    <link rel="stylesheet" href="../css/fonts.css" />
    <link rel="stylesheet" href="../css/main.css" />

    <link href="../lib/css/bootstrap.css" rel="stylesheet">
    <script type="text/javascript" src="../js/jquery.js">
    </script>
    <script type="text/javascript" src="../js/main.js">
    </script>
  </head>
  <body>
    <header id="title">
      UMak 5th IT Skills Olympics
    </header>
    <div class="table-responsive" style="color:#fff;font-size:22px;">
      <table class="table">
        <thead>
          <tr>
            <th>LOGO</th>
            <th>School Name</th>
            <th>Q1</th>
            <th>Q2</th>
            <th>Q3</th>
            <th>Q4</th>
            <th>Q5</th>
            <th>Q6</th>
            <th>Q7</th>
            <th>Q8</th>
            <th>Q9</th>
            <th>Q10</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>

          <?php foreach ($arrContestants as $key => $value): ?>
            <tr>
            <td><img class="img-logo" src="<?php echo "../images/".$value['1']?>"></td>
            <td><?php echo $value['0']?></td>
            <td><center><input type="radio" name="Q1" value="option1"></td>
            <td><center><input type="radio" name="Q2" value="option2"></center></td>
            <td><center><input type="radio" name="Q3" value="option3"></center></td>
            <td><center><input type="radio" name="Q4" value="option4"></center></td>
            <td><center><input type="radio" name="Q5" value="option5"></center></td>
            <td><center><input type="radio" name="Q5" value="option6"></center></td>
            <td><center><input type="radio" name="Q7" value="option7"></center></td>
            <td><center><input type="radio" name="Q8" value="option8"></center></td>
            <td><center><input type="radio" name="Q9" value="option9"></center></td>
            <td><center><input type="radio" name="Q01" value="option10"></center></td>
            <th></th>
            </tr>
          <?php endforeach ?>
        </tbody>
      </table>
    </div>
  </body>
</html>