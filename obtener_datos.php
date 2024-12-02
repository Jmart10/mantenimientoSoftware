<?php
require 'includes/config/database.php';
$db = conectarDB();

$query = "SELECT * FROM solutions";
$result = $db->query($query);

$datos = [];
while ($row = $result->fetch_assoc()) {
    $datos[] = $row;
}
echo json_encode($datos);
$db->close();
?>

