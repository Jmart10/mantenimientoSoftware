<?php

function conectarDB()  : mysqli {
    $db = mysqli_connect('localhost', 'root', 'root', 'problemario');

    if(!$db){
        echo "Error, no se pudo conectar con la Base de datos";
        exit;
    }
    return $db;
}

?>