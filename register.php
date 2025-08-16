<?php
require 'connect.php'; // Include the database connection

if (isset($_POST['register'])) {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash password

    // Insert into database
    $sql = "INSERT INTO Login  (name, email, password) VALUES (:name, :email, :password)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':password' => $password
    ]);

    echo "Registration successful!";
}

if (isset($_POST['login'])) {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Fetch user from DB
    $sql = "SELECT * FROM users WHERE email = :email";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':email' => $email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        echo "Login successful!";
    } else {
        echo "Invalid credentials!";
    }
}
?>





