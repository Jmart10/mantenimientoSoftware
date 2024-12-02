<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'includes/config/database.php';
$db = conectarDB();

// Iniciar sesión si las credenciales son correctas
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $username = $_POST['user'];
    $password = $_POST['password'];

    // Preparar y ejecutar la consulta
    $stmt = $conn->prepare("SELECT * FROM users WHERE user_s = ? LIMIT 1");
    $stmt->bind_param("i", $username);
    $stmt->execute();
    $resultado = $stmt->get_result();

    // Verificar si el usuario existe
    if ($resultado->num_rows === 1) {
        $user = $resultado->fetch_assoc();

        // Verificar la contraseña (usa password_verify si está hasheada)
        if (password_verify($password, $users['passw'])) {
            // Las credenciales son correctas
            $_SESSION['usuario'] = $user_s['username'];
            header("Location: index.php"); // Redirige a la página del programa
            exit();
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Usuario no encontrado.";
    }
}

?>