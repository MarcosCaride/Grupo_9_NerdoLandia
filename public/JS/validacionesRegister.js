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

        let campoApellido =document.getElementById ("Apellido");

        if (campoApellido.value= "") {
            errores.push ("El campo está vacío");
        }
        else if (campoApellido.value.length<2) {
            errores.push("El apellido debe contener al menos dos caracteres")
        }
        if (errores.length >0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.errores ul");
            for (let i=0; i< errores.length; i ++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })

})