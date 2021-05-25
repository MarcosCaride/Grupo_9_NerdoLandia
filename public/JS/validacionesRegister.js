window.addEventListener("load", function() {
    let formulario = document.querySelector ("form.???")
    
    formulario.addEventListener("submit", function(e){
        let errores = [];

        let campoNombre = document.querySelector ("input.name");

        if (campoNombre.value= " ") {
            errores.push ("El campo está vacío");
        }
    })
})