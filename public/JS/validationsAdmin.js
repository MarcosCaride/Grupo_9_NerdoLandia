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
            erroresNombre.innerHTML = "<strong>" + "Ingresale un nombre al producto" + "</strong>"
        }
        else if(nombreInput.value.length < 5){
            erroresNombre.innerHTML = "<strong>" + "El nombre debe tener al menos 5 caracteres" + "</strong>"
        }else{
            erroresNombre.innerHTML = ""
        }


        if(descripcionInput.value.length < 1 ){
            errorresDescripcion.innerHTML = "<strong>" + "Ingresale un descripcion al producto" + "</strong>"
        }
        else if(descripcionInput.value.length < 20){
            errorresDescripcion.innerHTML =  "<strong>" + "La descripcion debe tener al menos 20 caracteres" + "</strong>"
        }else{
            errorresDescripcion.innerHTML = ""
        }


        if(franchiseInput.value.length < 1 ){
            erorresFranchise.innerHTML = "<strong>" + "Selecciona una franquicia al producto" + "</strong>"
        }else{
            erorresFranchise.innerHTML = ""
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
        }else{
            erorresFile.innerHTML = ""
        }
        // else if(!fileValue.type.includes("jpeg") || !fileValue.type.includes("png") || !fileValue.type.includes("jpg") || !fileValue.type.includes("gif")){
        //         erorresFile.innerHTML = "El archivo ingresado no esta permititdo"
        // }
        // Intento de validarlo con JavaScript
        

        if(priceInput.value.length < 1 ){
            erorresPrice.innerHTML = "<strong>" + "Ingresale un precio al producto" + "</strong>"
        }else{
            erorresPrice.innerHTML = ""
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
            nombreInput.style.borderColor = "red"
        }else{
            erroresNombre.innerHTML = ""
            nombreInput.style.borderColor = "inherit"
        }
    }

    descripcionInput.onkeyup = () => {
        if(descripcionInput.value.length < 20 ) {
            descripcionInput.style.borderColor = "red"
            errorresDescripcion.innerHTML = "<strong>" + "Tienes que agregar " + (20 - descripcionInput.value.length) + " caracteres mas" + "</strong>"
        }else{
            errorresDescripcion.innerHTML = ""
            descripcionInput.style.borderColor = "inherit"
        }
    }
    
    franchiseInput.onblur = () => {
        if(franchiseInput.value < 1 ){
            erorresFranchise.innerHTML = "<strong>" + "Seleccionale una franquicia al producto" + "</strong>"
            franchiseInput.style.borderColor = "red"
        }else{
            erorresFranchise.innerHTML = ""
        }
    }

    fileInput.onmouseout = () => {
        if(!file.value){
            erorresFile.innerHTML = "<strong>" + "Debes incluirle una imagen" + "</strong>"
        }else{
            erorresFile.innerHTML = ""
        }
    }

    priceInput.onblur = () => {
        if(priceInput.value.length < 1 ){
            erorresPrice.innerHTML = "<strong>" + "Ingresale un precio al producto" + "</strong>"
            priceInput.style.borderColor = "red"
        }else{
            erorresPrice.innerHTML = ""
        }
    }
})