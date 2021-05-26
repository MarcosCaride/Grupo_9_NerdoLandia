window.addEventListener('load', function (){
    
    let formulario = document.getElementById('login')


    formulario.addEventListener('submit', function (e){

        let email = document.getElementById('email')
            let erroresEmail = document.getElementById('erroresEmail')
        if (email.value.length < 1){
                erroresEmail.innerHTML = "Debes completar el email"      
        } /* else if (!email.value.includes('@')) {
            alert ('El mail es inválido')
        } else if (!email.value.includes('.com')) {
            alert ('El mail es inválido')
        } */

        let contraseña = document.getElementById('password')
            let erroresContraseña = document.getElementById('erroresContraseña')
        if (contraseña.value.length < 1){
            erroresContraseña.innerHTML = "Debes completar la contraseña"      
        }

        if (errores.Email.innerText || errores.Contraseña.innerText) {
            e.preventDefault();
        }
    
    })


})