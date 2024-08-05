<?php

// % modulo , reminder after division
 $output = 20 % 3;
 $randomNum = rand(1,2);
 $roundNum = round(4.2);

 // ceil - roud up.
 $output = ceil(4.2);

 // floor - round down
 $output = floor(4.9);

// sqrt - square root
 $output = sqrt(64); // 8

// pi
 $output = pi(); // pi

// absolute number
$output = abs(-4.7); // 

// max - highest val in an array of nums
$output = max(1, 3, 51, 115); // 

// min
$output = min(1, 3, 51, 115); // 

// number format - formats number in a group of thousands. def W/commas

$output = number_format(123456789.1234, 2, '.', ',');

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php echo $randomNum ?>
    <?php echo $roundNum ?>

    <p>output</p>
    <?php echo $output ?>


</body>
</html>