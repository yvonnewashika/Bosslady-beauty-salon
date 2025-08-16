<?php
// Supabase PostgreSQL connection details
$host = "db.iawjybkimcfijucfyhry.supabase.co";
$port = "5432";
$dbname = "postgres"; // usually postgres, unless you explicitly created another db
$user = "postgres";
$password = "Lavine@washika34";

// Data Source Name (DSN)
$dsn = "pgsql:host=$host;port=$port;dbname=$dbname;";

// Create PDO connection
try {
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    // Create users table if it does not exist
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            auth_id UUID NOT NULL, -- links to Supabase Auth
            name VARCHAR(100) NOT NULL,
            role VARCHAR(50) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    ");

} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
