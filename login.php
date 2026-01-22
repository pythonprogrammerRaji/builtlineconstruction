<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

$conn = new mysqli("localhost", "DB_USER", "DB_PASSWORD", "DB_NAME");

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

echo "Database connected successfully";
exit();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();

// $conn = new mysqli("localhost", "DB_USER", "DB_PASS", "DB_NAME");
// if ($conn->connect_error) {
//     die("DB connection failed");
// }

// if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {

//     $email = trim($_POST['email']);
//     $password = trim($_POST['password']);

//     $stmt = $conn->prepare("SELECT email, password FROM engineers WHERE email = ?");
//     $stmt->bind_param("s", $email);
//     $stmt->execute();
//     $result = $stmt->get_result();

//     if ($result && $result->num_rows === 1) {
//         $row = $result->fetch_assoc();

//         if ($password === $row['password']) {
//             $_SESSION['engineer'] = $row['email'];
//             header("Location: dashboard.php");
//             exit();
//         }
//     }

//     echo "Invalid email or password";
// }
?>



<!DOCTYPE html>
<html>
<head>
    <title>Engineer Login</title>
    <link rel="stylesheet" href="static/css/style.css">
    <link rel="stylesheet" href="static/css/media.css">
</head>
<body>

<div class="login-container">
    <h2>Site Engineer Login</h2>

    <?php if($error): ?>
        <p class="error"><?php echo $error; ?></p>
    <?php endif; ?>

    <form method="POST" action="login.php">
        <input type="email" name="email" placeholder="Email" required>
        <br>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit" name="login">Login</button>
    </form>
</div>

</body>
</html>
