<?php
// string functions
$output = null;

$string = "Hi World!";

// string lenght
$output = strlen($string);

// str_word_count

// strpos
// string position, based on index
// two args: 1. string to search in. 2. string to search for
$output = strpos($string, 'World');



// str_replace
// substring, what replaces, string itself

// get spec char bz index
// $string[i]

// substrt(string, 6, 5 )

// strtolower, strtoupper, ucwords (capitalize)

// trim

// see ref.string 

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