<?php
$output = date('Y');

// Array functions
$ids = [1, 22, 15, 488, 2, 3, 4 ];

$users = ['user1', 'user2', 'user3'];

sort($ids);

// count
count($ids);

// rsort(arr) in reverse

// array_push(array, newValue) 

// array_pop / takes last one off

// array_shift(array);  // remove first 

// array_unshift // ad to the beginning

// $ids2 = array_slice(array, indexStart, length of slice);

// array_splice($ids, 1,1, "New Item");  // returns a portion of an array and replaces it w/ something else
// replaces position one with "New Item"




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
print_r($ids);
?>
    
</body>
</html>