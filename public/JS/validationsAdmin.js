window.addEventListener("load", () => {
    
    let formulario = document.querySelector('.adminForm')
    let nombreInput = document.getElementById('Nombre')
        let erroresNombre = document.getElementById('erorresNombre')

    let descripcionInput = document.getElementById('Descripcion')
        let errorresDescripcion = document.getElementById('erorresDescripcion')

    let franchiseInput = document.getElementById('franchise')
        let erorresFranchise = document.getElementById('erorresFranchise')

    // let categoryInput = document.getElementById('category')
    //     let erorresCategory = document.getElementById('erorresCategory')

    let fileInput = document.getElementById('file')
    // let fileValue = fileInput.files[0]
        let erorresFile = document.getElementById('erorresFile')

    let priceInput = document.getElementById('price')
        let erorresPrice = document.getElementById('erorresPrice')
    
    formulario.addEventListener("submit", function(e){
        if(nombreInput.value.length < 1 ){
            erroresNombre.innerHTML = "<strong>" + "Ingresale un nombre al producto" + "</strong>";
            erroresNombre.style.display = "block"
        }
        else if(nombreInput.value.length < 5){
            erroresNombre.innerHTML = "<strong>" + "El nombre debe tener al menos 5 caracteres" + "</strong>"
            erroresNombre.style.display = "block"
        }else{
            erroresNombre.style.display = "none"
            erroresNombre.innerHTML = ""
        }


        if(descripcionInput.value.length < 1 ){
            errorresDescripcion.innerHTML = "<strong>" + "Ingresale un descripcion al producto" + "</strong>"
            errorresDescripcion.style.display = "block"
        }
        else if(descripcionInput.value.length < 20){
            errorresDescripcion.innerHTML =  "<strong>" + "La descripcion debe tener al menos 20 caracteres" + "</strong>"
            errorresDescripcion.style.display = "block"
        }else{
            errorresDescripcion.innerHTML = ""
            errorresDescripcion.style.display = "none"
        }


        if(franchiseInput.value.length < 1 ){
            erorresFranchise.innerHTML = "<strong>" + "Selecciona una franquicia al producto" + "</strong>"
            erorresFranchise.style.display = "block"
        }else{
            erorresFranchise.innerHTML = ""
            erorresFranchise.style.display = "none"
        }
        // else if(franchiseInput.value.length < 20){
        //     erorresFranchise.innerHTML = "La descripcion debe tener al menos 20 caracteres"
            
        // }
        

        // if(categoryInput.value.length < 1 ){
        //     erorresCategory.innerHTML = "Ingresale un descripcion al producto"
        // }
        // else if(categoryInput.value.length < 20){
        //     erorresCategory.innerHTML = "La descripcion debe tener al menos 20 caracteres"
            
        // }

        if (!fileInput.value) {
            erorresFile.innerHTML = "<strong>" + "Debes incluirle una imagen" + "</strong>"
            erorresFile.style.display = "block"
        }else{
            erorresFile.innerHTML = ""
            erorresFile.style.display = "none"
        }
        // else if(!fileValue.type.includes("jpeg") || !fileValue.type.includes("png") || !fileValue.type.includes("jpg") || !fileValue.type.includes("gif")){
        //         erorresFile.innerHTML = "El archivo ingresado no esta permititdo"
        // }
        // Intento de validarlo con JavaScript
        // Pasar las extensiones en una variable
        

        if(priceInput.value.length < 1 ){
            erorresPrice.innerHTML = "<strong>" + "Ingresale un precio al producto" + "</strong>"
            erorresPrice.style.display = "block"
        }else{
            erorresPrice.innerHTML = ""
            erorresPrice.style.display = "none"
        }

        if (erorresPrice.innerText || erorresFranchise.innerText  || errorresDescripcion.innerText || erroresNombre.innerText) {
            e.preventDefault();
        }else{
            errorresDescripcion.innerHTML = ""
        }
    });


    
    
    nombreInput.onkeyup = () => {
        if(nombreInput.value.length < 5 ) {
            erroresNombre.innerHTML = "<strong>" + "Tienes que agregar " + (5 - nombreInput.value.length) + " caracteres mas" + "</strong>"
            erroresNombre.style.display = "block"
            nombreInput.style.borderColor = "red"
        }else{
            erroresNombre.innerHTML = ""
            nombreInput.style.borderColor = "inherit"
            erroresNombre.style.display = "none"
        }
    }

    descripcionInput.onkeyup = () => {
        if(descripcionInput.value.length < 20 ) {
            descripcionInput.style.borderColor = "red"
            errorresDescripcion.innerHTML = "<strong>" + "Tienes que agregar " + (20 - descripcionInput.value.length) + " caracteres mas" + "</strong>"
            errorresDescripcion.style.display = "block"
        }else{
            errorresDescripcion.innerHTML = ""
            descripcionInput.style.borderColor = "inherit"
            errorresDescripcion.style.display = "none"
        }
    }
    
    franchiseInput.onblur = () => {
        if(franchiseInput.value < 1 ){
            erorresFranchise.innerHTML = "<strong>" + "Seleccionale una franquicia al producto" + "</strong>"
            franchiseInput.style.borderColor = "red"
            erorresFranchise.style.display = "block"
        }else{
            erorresFranchise.innerHTML = ""
            erorresFranchise.style.display = "none"
        }
    }

    fileInput.onblur = () => {
        if(!file.value){
            erorresFile.innerHTML = "<strong>" + "Debes incluirle una imagen" + "</strong>"
            erorresFile.style.display = "block"
        }else{
            erorresFile.innerHTML = ""
            erorresFile.style.display = "none"
        }
    }

    priceInput.onblur = () => {
        if(priceInput.value.length < 1 ){
            erorresPrice.innerHTML = "<strong>" + "Ingresale un precio al producto" + "</strong>"
            priceInput.style.borderColor = "red"
            erorresPrice.style.display = "block"
        }else{
            erorresPrice.innerHTML = ""
            erorresPrice.style.display = "none"
        }
    }
})