<?php
$host = "localhost";
$user = "u996918262_builtline";
$pass = "8884134013@Charan";
$db   = "u996918262_Builtline";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Database connection failed");
}

session_start();
?>
