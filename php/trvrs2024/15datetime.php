<?php
$output = date('Y');

$dateTime = date('Y');

$output = date('Y', 936345600);  // 1999

$output = date('Y-m-d', strtotime('1999-09-01'));  // 1999

$output = date('m');  // current month

//  D - :Wed"
// l - "Wednesday"

// h - hour

// i min, s second, a am,

// altogether
$output = date('Y-m-d h:i:s a');



?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php 
echo $output
?>
    
</body>
</html>