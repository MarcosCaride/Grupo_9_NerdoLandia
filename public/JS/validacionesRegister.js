window.addEventListener("load", function() {
    let formulario = document.querySelector ("form.Formu-Registro")
    
    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoNombre = document.getElementById ("inputNombre");

        if (campoNombre.value= " ") {
            errores.push ("El campo está vacío");
        }
        else if (campoNombre.value.length <2) {
            errores.push ("El nombre debe contener al menos dos carecteres")
        }   

        let campoApellido =document.getElementById ("apellido");

        if (campoApellido.value= "") {
            errores.push ("El campo está vacío");
        }
        else if (campoApellido.value.length<2) {
            errores.push("El apellido debe contener al menos dos caracteres")
        }

        let campoContraseña= document.getElementById("contraseña");
        
        if (campoContraseña.value= " ") {
            errores.push ("El campo está vacío");
        }
        else if (campoContraseña.value.length<8) {
            errores.push("La contraseña debe contener al menos ocho caracteres")
        }

        let campoMail= document.queryElementById("mail");

        if (campoMail.value= " ") {
            errores.push ("El campo está vacío");
        }   

        let campoContraseña= document.queryElementById("contraseña");
        
        if (campoContraseña.value= " ") {
            errores.push ("El campo está vacío");
        }

        let fotoPerfil = documento.queryElementById ("fotoPerfil");
           
        if (errores.length >0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.errores ul");
            for (let i=0; i< errores.length; i ++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })

})