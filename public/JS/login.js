window.addEventListener('load', function (){

    let inputEmail = document.querySelector('#email')
    
/*     inputEmail.addEventListener ('focus', function () {
        console.log('El email debe contener 8 caracteres')
    }) */

    let formulario = document.getElementById('login')

    formulario.addEventListener('submit', function (e){

        let email = document.getElementById('email')
            let erroresEmail = document.getElementById('erroresEmail')
        let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            let erroresEmailFormat = document.getElementById('erroresEmailFormat')
        if (email.value.length < 1){
                erroresEmail.innerHTML = "Debes completar el email"      
        } ;

        if (!email.value.match(emailFormat)) {
            erroresEmailFormat.innerHTML = "El email no es válido"
        }
        

        /* else if (!email.value.includes('@')) {
            alert ('El mail es inválido')
        } else if (!email.value.includes('.com')) {
            alert ('El mail es inválido')
        } */

        let contraseña = document.getElementById('password')
            let erroresContraseña = document.getElementById('erroresContraseña')
        if (contraseña.value.length < 1){
            erroresContraseña.innerHTML = "Debes completar la contraseña"      
        }

        if (errores.Email.innerText || errores.erroresEmailFormat.innerText || errores.Contraseña.innerText  ) {
            e.preventDefault();
        }
    
    })

    //let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //if(!email.value.match(mailFormat))

    //var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//if(inputText.value.match(mailformat))
})