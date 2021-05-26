window.addEventListener("load", function() {
    
    let formulario = document.querySelector('.adminForm')
    
    formulario.addEventListener("submit", function(e){
    
        let nombreInput = document.getElementById('Nombre')
            let erroresNombre = document.getElementById('erorresNombre')
    
        let descripcionInput = document.getElementById('Descripcion')
            let errorresDescripcion = document.getElementById('erorresDescripcion')
    
        let franchiseInput = document.getElementById('franchise')
            let erorresFranchise = document.getElementById('erorresFranchise')

        let categoryInput = document.getElementById('category')
            let erorresCategory = document.getElementById('erorresCategory')

        let fileInput = document.getElementById('file')
            let erorresFile = document.getElementById('erorresFile')

        let priceInput = document.getElementById('price')
            let erorresPrice = document.getElementById('erorresPrice')

        

        if(nombreInput.value.length < 1 ){
            erroresNombre.innerHTML = "Ingresale un nombre al producto"
        }
        else if(nombreInput.value.length < 5){
                erroresNombre.innerHTML = "El nombre debe tener al menos 5 caracteres"
            
        }else{
            erroresNombre.innerHTML = ""
        }


        if(descripcionInput.value.length < 1 ){
            errorresDescripcion.innerHTML = "Ingresale un descripcion al producto"
        }
        else if(descripcionInput.value.length < 20){
            errorresDescripcion.innerHTML = "La descripcion debe tener al menos 20 caracteres"
        }else{
            errorresDescripcion.innerHTML = ""
        }


        if(franchiseInput.value.length < 1 ){
            erorresFranchise.innerHTML = "Selecciona una franquicia al producto"
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
            erorresFile.innerHTML = "Debes incluirle una imagen"
        }
        else if(!fileInput.value.includes("jpeg") || !fileInput.value.includes("png") || !fileInput.value.includes("jpg") || !fileInput.value.includes("gif")){
            erorresFile.innerHTML = "El archivo ingresado no esta permititdo"
        }else{
            erorresFile.innerHTML = ""
        }
        

        if(priceInput.value.length < 1 ){
            erorresPrice.innerHTML = "Ingresale un precio al producto"
        }else{
            erorresPrice.innerHTML = ""
        }

        if (erorresPrice.innerText || erorresFranchise.innerText  || errorresDescripcion.innerText || erroresNombre.innerText) {
            e.preventDefault();
        }else{
            errorresDescripcion.innerHTML = ""
        }


    })

    
})