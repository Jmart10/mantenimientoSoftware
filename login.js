username = document.querySelector(".user");
password = document.querySelector("#password");

iniciarSesion = document.querySelector(".submit");

iniciarSesion.addEventListener('click', (e) =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    
    if(usernameValue === "" || passwordValue === ""){
        alert("Por favor, completa los campos");
        
        e.preventDefault();
    }

        
})