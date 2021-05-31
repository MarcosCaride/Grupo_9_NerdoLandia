window.addEventListener("load", function() {
    let formulario = document.querySelector ("form.Formu-Registro")
    
    formulario.addEventListener("submit", function(e){
        
        
        let errores = [];

        let campoNombre = document.getElementById ("inputNombre");
        let erroresNombre = document.getElementById("erorresNombre")

        if (campoNombre.value=" ") {
            erroresNombre.innerHTML= "El campo está vacío";
        }
        else if (campoNombre.value.length <2) {
            erroresNombre.innerHTML= "El nombre debe contener al menos dos carecteres"
        }   

        let campoApellido =document.getElementById ("apellido");
        let erroresApellido = document.getElementById("erroresApellido")

        if (campoApellido.value= " ") {
            erroresApellido.innerHTML= "El campo está vacío"
        }
        else if (campoApellido.value.length<2) {
            erroresApellido.innerHTML= "El apellido debe contener al menos dos caracteres"
        }

        let campoContraseña= document.getElementById("contraseña");
        let erroresContraseña = document.getElementById("erorresContraseña")
        
        if (campoContraseña.value= "") {
            erroresContraseña.innerHTML= "El campo está vacío";
        }
        else if (campoContraseña.value.length<8) {
            erroresContraseña.innerHTML= "La contraseña debe contener al menos ocho caracteres"
        }

        let campoMail= document.getElementById("mail");
        let erroresMail = document.getElementById('erorresMail')

        if (email.value.length < 1){
            erroresMail.innerHTML = "Debes completar el email"      
            } /* else if (!email.value.includes('@')) {
            alert ('El mail es inválido')
            } else if (!email.value.includes('.com')) {
            alert ('El mail es inválido')
            } */
        })

        let fotoPerfil = document.getElementById ("fotoPerfil");
           
        if (errores.length >0){
            
            let ulErrores = document.querySelector("div.errores ul");
            e.preventDefault()
            for (let i=0; i< errores.length; i ++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })

})