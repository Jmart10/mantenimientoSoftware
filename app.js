
// CODIGO PARA ABRIR MODAL PARA AGREGAR NUEVO REGISTRO
const btnAdd = document.querySelector(".agregar"); //Capturamos botón agregar.
const ver = document.querySelector(".ver"); //capturamos div con la clase ver para abrir el modal
btnAdd.addEventListener('click', (e) =>{  // Agregamos evento para abrir el modal al dar click
    e.preventDefault(); //prevenimos que se recargue la página al presionar sobre el botón agregar
    ver.style.display = "block"; // cambiamos 
})


//CODIGO PARA CERRAR MODAL CON EL BOTON CANCELAR
const cerrarModal = document.querySelector(".cerrar");
cerrarModal.addEventListener('click', (e)=>{
    ver.style.display = "none";
})


document.querySelector('input[type="submit"].guardar').addEventListener('click', async function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    
    const form = document.getElementById('formulario'); // Selecciona el formulario
    const titulo = document.getElementById('titulo').value;
    const modulo = document.getElementById('modulo').value;
    const editorContent = tinymce.get('description-text').getContent();
    const video = document.getElementById('video').value;
    const guardar = document.getElementsByClassName('guardar');

    console.log(titulo);
    console.log(modulo);
    console.log(editorContent);
    console.log(video);
    // Validar que los campos obligatorios estén llenos
    if (!titulo || !modulo || !editorContent || !video) {
        alert('Por favor, llena todos los campos.');
        return;
    }

    // Extraer imágenes en base64
    const images = editorContent.match(/<img[^>]+src="data:image\/[^">]+"/g) || [];
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('modulo', modulo);
    formData.append('contenido', editorContent);
    formData.append('video', video);

    // Procesar imágenes base64
    for (let i = 0; i < images.length; i++) {
        const base64 = images[i].match(/src="([^"]+)"/)[1];
        const blob = await fetch(base64).then(res => res.blob());
        formData.append(`imagen_${i}`, blob, `imagen_${i}.png`);
    }

    // Enviar datos al servidor
    fetch('guardar_datos.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        form.reset(); // limpia el formulario después de guardar
        //tinymce.get('description-text').setContent(''); // Limpia el editor TinyMCE
        guardar.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar que se recargue la página
            console.log('hay que eliminar');
        });
    })
    /*                                      
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al guardar los datos.');
    });
    */
});

/*
// Función para enviar los datos
function enviarDatos() {
    // Capturar los valores de los inputs
    const titulo = document.querySelector("#titulo").value;
    //const modulo = document.querySelector("#modulo").value;
    const descripcion = document.querySelector("#descripcion").value;

    // Crear el objeto con los datos
    const datos = { titulo: titulo,  descripcion: descripcion };
    if(!titulo == ""){
        // Enviar los datos a PHP con fetch
        fetch('guardar_datos.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Datos guardados con éxito');
                ver.style.display = "none"; // Oculta el modal después de guardar
            } else {
                alert('Error al guardar los datos');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
}

// Agregar evento al botón Guardar
btnGuardar.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que se recargue la página
    enviarDatos();
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const tablaBody = document.querySelector("#tabla tbody");

    fetch('obtener_datos.php')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.description}</td>
                    <td>${item.id}</td>
                    <td class="botones">
                    <button class="editar-btn">Editar</button>
                    <button class="eliminar-btn">Eliminar</button>                    
                    </td>
                `;
                tablaBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});

/*document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('inputField');
    
    if (inputField) {
        inputField.addEventListener('paste', (event) => {
            const clipboardData = event.clipboardData || window.clipboardData;
            
            if (!clipboardData) {
                console.error("clipboardData no está disponible.");
                return;
            }

            const items = clipboardData.items;
            for (const item of items) {
                if (item.type.includes('image')) {
                    const file = item.getAsFile();
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.style.minWidth = '200px';
                        img.style.maxHeight = '300px';
                        inputField.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                    event.preventDefault();
                }
            }
        });
    } else {
        console.error("El elemento con el ID 'inputField' no se encontró en el DOM.");
    }
});


/*
// CODIGO PARA ELIMINAR UNA FILA
const eliminar = document.querySelector(".eliminar");
eliminar.addEventListener('click', () => {
    // Seleccionar todas las filas de la tabla
    const filas = tabla.querySelectorAll("tr");

    // Iterar sobre las filas y eliminar las que tienen el checkbox marcado
    filas.forEach(fila => {
        const checkbox = fila.querySelector(".check");
        if (checkbox && checkbox.checked) {
            tabla.removeChild(fila);
        }
    });
});

// Seleccionar el botón de editar y la tabla
const btnEditar = document.querySelector(".editar");

//CODIGO PARA EDITAR UNA FILA DESDE EL MODAL
btnEditar.addEventListener('click', () => {
    const filas = Array.from(tabla.querySelectorAll("tr"));
    let seleccionadas = 0;
    let filaEditada = null;

    // Recorremos las filas y contamos cuántas están seleccionadas
    filas.forEach(fila => {
        const checkbox = fila.querySelector(".check");
        if (checkbox && checkbox.checked) {
            seleccionadas++;
            filaEditada = fila;
        }
    });

    // Verificamos si hay más de una fila seleccionada
    if (seleccionadas > 1) {
        alert("Por favor, selecciona solo una fila para editar.");
        return;  // Detenemos la ejecución para que no se abra el modal
    }

    // Verificamos si no se ha seleccionado ninguna fila
    if (seleccionadas === 0) {
        alert("Por favor, selecciona una fila para editar.");
        return;  // Detenemos la ejecución para que no se abra el modal
    }

    // Si solo hay una fila seleccionada, continuamos y abrimos el modal
    if (filaEditada) {
        const celdas = filaEditada.querySelectorAll("td");

        if (celdas.length >= 1) {
            document.querySelector("#customer").value = celdas[2].textContent.trim();
            document.querySelector("#titulo").value = celdas[3].textContent.trim();
            const fechaTexto = celdas[4].textContent.trim();
            document.querySelector("#fecha").value = fechaTexto;
            document.querySelector("#estado").value = celdas[5].textContent.trim();
            document.querySelector("#descripcion").value = celdas[6].textContent.trim();

            ver.style.display = "block";
        } else {
            alert("La fila seleccionada no contiene todos los datos esperados.");
        }
    }
});*/