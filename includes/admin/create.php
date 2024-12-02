<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    //Importamos la BD
    require '../config/database.php';
    $db = conectarDB();

    //Consultamos para obtener las opciones en modulo

    $consulta = "SELECT name_option FROM `options`";
    $resultado = mysqli_query($db, $consulta);

    //Array for errors
    $errores = [];

    
?>