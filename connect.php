<?php
// Supabase PostgreSQL connection details
$host = "db.iawjybkimcfijucfyhry.supabase.co";
$port = "5432";
$dbname = "YVONNE WASHIKA";
$user = "postgres";
$password = "Lavine@washika34";

// Data Source Name (DSN)
$dsn = "pgsql:host=$host;port=$port;dbname=$dbname;";

// Create PDO connection
try {
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
