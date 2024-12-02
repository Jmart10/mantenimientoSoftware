
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soporte</title>
    <link rel="stylesheet" href="estilos.css">
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <script src="https://cdn.tiny.cloud/1/2svgzkoljrbblvthd51neex8f0acv3xehqi4ptmii13bc5fd/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>


    <!-- CENTRO EDUCATIVO EDAD FELIZ -->
    
</head>
<body>

    <nav>
        <div class="contenedor">
            <div class="perfil">
                <img src="src/logo-nusoft-blanco.png" alt="logo Nusoft">
                <div class="perfil2">
                    <h1>J</h1>
                </div>
            </div>
        </div>
    </nav>
    <section class="ver">
        <div class="opaco">
            <div class="nuevo">
                <h1>
                    Agregar una nueva solución
                </h1>
            </div>
            
            <form method="POST" class="formulario" id="formulario">
                <input type="text" name="titulo" id="titulo" placeholder=" Titulo" class="general titulo">
                <select name="modulo" id="modulo"  class="general estado">
                    <option value="Modulo">Elige el modulo</option>
                    <option value="Prematricula">Prematricula</option>
                    <option value="Matriculas">Matriculas</option>
                    <option value="Usuarios">Usuarios</option>
                    <option value="Informes">Informes</option>
                    <option value="Cartera">Cartera</option>
                    <option value="Plan de estudios">Plan de estudios</option>
                </select>
                <div class="descripcion">
                    <script>
                        tinymce.init({
                            selector: '#description-text',
                            width: '100%',
                            height: '100%',
                            plugins: [
                            // Core editing feature
                            ],
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                setup: function (editor) {
                                editor.on('init', function () {
                                    console.log('Editor inicializado');
                                });
                            }
                        });
                        </script>
                        <textarea id="description-text" placeholder="Describe aquí:">
                        
                        </textarea>
                </div>
                <input type="text" name="video" id="video" placeholder="Ingresa enlace a tutorial" class="general titulo">
                <input type="submit" class="general btn_form guardar" value="Guardar">
                <button type="button" class="general btn_form cerrar">Cancelar</button
            </form>
            
        </div>
            
    </section>
    <main class="table">
        <section class="table_header">
            <div class="filter">
                <div class="search">
                <div class="icono">
                            <input class="buscando" name="query" type="search" placeholder="Buscar por id, palabras clave" >
                            
                        </div>        

                        <div class="categories">
                            <select name="categories" id="categories" class="select">
                                <option value="0">--Selecciona Categoría--</option>
                                <option value="1">Prematriculas</option>
                                <option value="2">Matriculas</option>
                                <option value="3">Plan de estudios</option>
                                <option value="4">Usuarios</option>
                                <option value="5">Evaluación</option>
                            </select>
                            <box-icon name='search-alt-2' class="buscar"></box-icon>
                        </div>
                        
                        
                </div>
                <div class="contenedor-add">
                        <div class="add">
                             <button class="agregar">Agregar  <box-icon class="icon" name='plus-circle'></box-icon></button>
                            </div>
                        </div>
                </div>
            


        </section>
        <section class="table_body">
            <table id="tabla">
                <thead>
                    <tr class="titulo_tabla">
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody> 
                    <!-- Aquí debe ir el código que traemos de la base de datos -->


                    </div>
                </tbody>
            </table>
        </section>
    
    
    </main>
    <script src="app.js"></script>
</body>
</html>