function input_vacio(idElemento, mensaje){
    const elemento = document.getElementById(idElemento,mensaje)
    elemento.innerText = mensaje
}
function input_invalido(idElemento, mensaje){
    const elemento = document.getElementById(idElemento, mensaje)
    elemento.innerText = mensaje
}
function input_error(idElemento){
    const elemento = document.getElementById(idElemento)
    elemento.style.border = "1px solid red"
}

function limpiar(){
    let id_validacion = ['web_validacion','usuario_validacion','pass_validacion','correo_validacion','tel_validacion']
    let ids = ['web','usuario','password','email','telefono']

    for (let i=0; i<id_validacion.length; i++){colocar_texto(id_validacion[i],'')}

    for (let i=0; i<ids.length; i++){colocar_color(ids[i],'1px solid gray')}
    document.getElementById('ch').innerHTML = '0/100'
}

function colocar_texto(idElemento, texto){
    document.getElementById(idElemento).innerText = texto
}
function colocar_color(id, color){
    document.getElementById(id).style.border = color
}

function valida_registro(event){
    let validacionn = true

    // Usuario
    event.preventDefault()
    const usuario = document.getElementById("usuario").value
    if(usuario ==''){
        input_vacio('usuario_validacion','Usuario no puede estar vacío')
        input_error('usuario')
        validacionn = false
    }
    else if(usuario.length < 3){
        input_invalido('usuario_validacion','Usuario demasiado corto')
        input_error('usuario')
        validacionn = false
    }else{
        document.getElementById("usuario_validacion").innerText = ""
        document.getElementById("usuario").style.border = "1px solid gray"
    }

    // Contraseña
    const password = document.getElementById("password").value
    if(password ==''){
        input_vacio('pass_validacion','Contraseña no puede estar vacío')
        input_error('password')
        validacionn = false
    }
    else if(password.length < 10){
        input_invalido('pass_validacion','Contraseña demasiada corta')
        input_error('password')
        validacionn = false
    }else{
        document.getElementById("pass_validacion").innerText = ""
        document.getElementById("password").style.border = "1px solid gray"
    }

    // Email
    const email = document.getElementById("email").value
    var regex2 = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$");
    if(email ==''){
        input_vacio('correo_validacion','Correo no puede estar vacío')
        input_error('email')
        validacionn = false
    }
    else if(!regex2.test(email)){
        input_invalido('correo_validacion','Correo inválido')
        input_error('email')
        validacionn = false
    }else{
        document.getElementById("correo_validacion").innerText = ""
        document.getElementById("email").style.border = "1px solid gray"
    }

    // Teléfono
    const telefono = document.getElementById("telefono").value
    var rgx = /^\+?\d{2}(\s\d{3}){2}\s\d{4}$/;
    console.log(telefono)
    if(telefono ==''){
        input_vacio('tel_validacion','Teléfono no puede estar vacío')
        input_error('telefono')
        validacionn = false
    }
    else if(!rgx.test(telefono)){
        input_invalido('tel_validacion','Teléfono inválido')
        input_error('telefono')
        validacionn = false
    }else{
        document.getElementById("tel_validacion").innerText = ""
        document.getElementById("telefono").style.border = "1px solid gray"
    }

    // Sitio web
    const web = document.getElementById("web").value
    if(web ==''){
        input_invalido('web_validacion','Sitio Web inválido')
        input_error('web')
        validacionn = false
    }
    else if(!web.includes("http://") && !web.includes("https://")){
        input_invalido('web_validacion','Teléfono inválido')
        input_error('web')
        validacionn = false
    }else{
        document.getElementById("web_validacion").innerText = ""
        document.getElementById("web").style.border = "1px solid gray"
    }

    if (validacionn){
        const btnAbrirModal = document.getElementById("btn-abrir-modal");
        const modal = document.getElementById("modal");
        modal.showModal();
    }
}

//TextArea
const funcion_prueba2 = (e) => ch.innerHTML = `${e.target.value.length} /100`

const ta = document.getElementById('txtA')
const ch = document.getElementById('ch')
ta.addEventListener('input',funcion_prueba2)

// Modal
const btnCerrarModal = document.getElementById("btn-cerrar-modal");
const modal = document.getElementById("modal");
btnCerrarModal.addEventListener('click',()=>{modal.close();})
