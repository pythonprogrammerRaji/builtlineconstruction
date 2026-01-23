<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
session_start();

$conn = new mysqli(
    "localhost",
    "u996918262_builtline",
    "8884134013@Charan",
    "u996918262_Builtline"
);

if ($conn->connect_error) {
    die("DB FAILED: " . $conn->connect_error);
}

echo "LOGIN PAGE OK – DB CONNECTED";
exit;
