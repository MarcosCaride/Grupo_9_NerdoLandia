window.addEventListener("load", function() {
    let formulario = document.querySelector ("form.???")
    
    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoNombre = document.querySelector ("input.name");

        if (campoNombre.value= " ") {
            errores.push ("El campo está vacío");
        }
        else if (campoNombre.value.length <8) {
            errores.push ("error")
        }
        if (errores.length >0){
            e.preventDefault();
            let ulErrores = document.querySelector("div.errores ul");
            for (let i=0; i< errores.lengt; i ++) {
                ulErrores.innerHTML += "<li>" + errores [i] + "</li>"
            }
        }
    })

})