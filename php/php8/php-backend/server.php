<?php
$data = "{data: 'data'}";

$dataA = "aaa";
// prettier-ignore
$dataChar = 'a';

$usersUrl = "dummydata/users.json";
$users = file_get_contents($usersUrl);

header("Content-Type: application/json; charset=utf-8");
echo json_encode($users);

?>
