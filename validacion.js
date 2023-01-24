function validar_login(event){
    event.preventDefault()
    const usuario = document.getElementById("usuario").value
    if(usuario ==''){
        console.log(document.getElementById("usuario_validacion").value)
         document.getElementById("usuario_validacion").innerText = "El usuario no puede estar vacío"
         document.getElementById("usuario").style.border = "1px solid red"
    }else{
        document.getElementById("usuario_validacion").innerText = ""
    }

    event.preventDefault()
    const password = document.getElementById("password").value
    if(password ==''){
        console.log(document.getElementById("password_validacion").value)
         document.getElementById("password_validacion").innerText = "La contraseña no puede estar vacía"
         document.getElementById("password").style.border = "1px solid red"
    }else{
        document.getElementById("password_validacion").innerText = ""
    }
}

// Función ver contraseña
function mostrar_password(){
    const tipo = document.getElementById('password')

    if(tipo.type == 'password'){
        tipo.type = 'text'
    }else{
        tipo.type = 'password'
    }
}

// Función contador
const funcion_contador = (e) => {
    cont.innerHTML = e.target.value.length + '/10'
}
const pass = document.getElementById('password')
const cont = document.getElementById('cont')

pass.addEventListener('input',funcion_contador)
