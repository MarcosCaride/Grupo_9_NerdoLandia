window.addEventListener("load", function() {
    let formulario = document.querySelector (".adminForm")
    
    formulario.addEventListener("submit", function(e){
    
        
        let errores = [];

        let campoNombre = document.getElementById ("inputNombre");
        let erroresNombre = document.getElementById("a")

        if (campoNombre.value <1) {
            erroresNombre.innerHTML= "El campo está vacío";
            erroresNombre.style.display= "inline-block"
        }
        else if (campoNombre.value.length <2) {
            erroresNombre.innerHTML= "El nombre debe contener al menos dos carecteres"
            erroresNombre.style.display= "inline-block"
        }   

        let campoApellido =document.getElementById ("apellido");
        let erroresApellido = document.getElementById("erroresApellido")

        if (campoApellido.value <1) {
            erroresApellido.innerHTML= "El campo está vacío"
            erroresApellido.style.display= "inline-block"
        }
        else if (campoApellido.value.length<2) {
            erroresApellido.innerHTML= "El apellido debe contener al menos dos caracteres"
            erroresApellido.style.display= "inline-block"
        }

        let campoContraseña= document.getElementById("contraseña");
        let erroresContraseña = document.getElementById("erorresContraseña")
        
        if (campoContraseña.value <1) {
            erroresContraseña.innerHTML= "El campo está vacío";
            erroresContraseña.style.display= "inline-block"
        }
        else if (campoContraseña.value.length<8) {
            erroresContraseña.innerHTML= "La contraseña debe contener al menos ocho caracteres"
            erroresContraseña.style.display= "inline-block"
        }

        let campoMail= document.getElementById("mail");
        let erroresMail = document.getElementById('erorresMail')

        let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                
        if (campoMail.value.length < 1){
                erroresMail.innerHTML = "Debes completar el mail" 
                erroresMail.style.display= "inline-block"     
        } 
        
        if ((campoMail.value.length > 0) && (!campoMail.value.match(emailFormat))) {
            erroresMail.innerHTML = "El email no es válido"
            erroresMail.style.display= "inline-block"
        }
                       
        if (erroresMail.innerText || erroresContraseña.innerText || erroresNombre.innerText || erroresApellido.innerText) {
            e.preventDefault();
        }
        
    })

})