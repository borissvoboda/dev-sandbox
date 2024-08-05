<?php
$output = date('Y');

// Array - ordered coll, mixed data, useful for grouping, dynamic sizing

$output = array('Adam', 'Ben', 'Charlie');

$output = ['Adam', 'Ben', 'Charlie'];

// delete / unset(array(index)) / deletes also index



// reindex

$output = array_values($output);
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
echo $output[0]
?>
    
</body>
</html>