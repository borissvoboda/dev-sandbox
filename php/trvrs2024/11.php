<body>
<?php
// 11. Type Casting and Juggling

// implicit conversion

// string + int => int
$result = 5 + 10;
$result = 5 + '10'; // int
$result = 5 . 5; // string, since we used concatenation

// string that is not made of numbers + int -> error !!!

//bools
$result = 5 + true; // true is converted into a 1
// false into ZERO

// number 5 + null => 5, null is converted into 0


// Explicit conversion

$result = (string) 5;  // => string
$result = (int) "5";  // => int
$result = (bool) "0";  // => false
$result = (bool) "1";  // => true
$result = (bool) "2";  // => true ; any number other than 0








var_dump($result);

?>

</body>