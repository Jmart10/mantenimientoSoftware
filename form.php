<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <div class="login">
            <h1>
                SOPORTE NUSOFT
            </h1>
        <div class="contenedor-login">
            <div class="imagen-login">
                <img src="src/vertical degradado.png" alt="logo nusoft">
            </div>
            <div class="formulario-login">
                <form action="login.php" method="POST" class="formulario-login">
                    <input class="user" type="number" name="user" id="user" placeholder="Usuario">
                    <input type="password" name="password" id="password" placeholder="Contraseña">
                    <button class="submit" type="submit">Iniciar Sesión</button>
                </form>
                
            </div>
        </div>
    </div>
    <script src="login.js"></script>
</body>
</html>