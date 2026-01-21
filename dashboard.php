<?php
include 'config.php';

/* If logout button clicked */
if (isset($_POST['logout'])) {
    session_destroy();
    header("Location: index.html");
    exit();
}

/* Protect dashboard */
if (!isset($_SESSION['engineer_email'])) {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Engineer Dashboard</title>
</head>
<body>

    <h2>Welcome Engineer</h2>
    <p>Email: <?php echo $_SESSION['engineer_email']; ?></p>

    <!-- LOGOUT BUTTON -->
    <form method="POST">
        <button type="submit" name="logout">Logout</button>
    </form>

</body>
</html>
