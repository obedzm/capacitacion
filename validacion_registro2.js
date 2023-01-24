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


/*let id_validacion = ['web_validacion','usuario_validacion','pass_validacion',
                         'correo_validacion','tel_validacion']
    
    let ids = ['web','usuario','password','email','telefono']
    
    //let id = id.forEach(i => (id[i]));*/


function limpiar(){

    /*document.getElementById("web_validacion").innerText = ""
    document.getElementById("usuario_validacion").innerText = ""
    document.getElementById("pass_validacion").innerText = ""
    document.getElementById("correo_validacion").innerText = ""
    document.getElementById("tel_validacion").innerText = ""

    document.getElementById("web").style.border = "1px solid gray"
    document.getElementById("usuario").style.border = "1px solid gray"
    document.getElementById("password").style.border = "1px solid gray"
    document.getElementById("email").style.border = "1px solid gray"
    document.getElementById("telefono").style.border = "1px solid gray"
    document.getElementById('ch').innerHTML = '0/100'*/
    
}

//id_validacion.forEach(i => limpiar(idElemento[i]));
//id_validacion.forEach(i => colocar_texto(id_validacion[i],''));
//ids.forEach(j => limpiar(id[j]));

function colocar_texto(idElemento, texto){
    document.getElementById(idElemento).innerText = texto
    
}

function valida_registro(event){

    // Usuario
    event.preventDefault()
    const usuario = document.getElementById("usuario").value
    if(usuario ==''){
        input_vacio('usuario_validacion','Usuario no puede estar vacío')
        input_error('usuario')
    }
    else if(usuario.length < 3){
        input_invalido('usuario_validacion','Usuario demasiado corto')
        input_error('usuario')
    }else{
        document.getElementById("usuario_validacion").innerText = ""
        document.getElementById("usuario").style.border = "1px solid gray"
    }

    // Contraseña
    const password = document.getElementById("password").value
    if(password ==''){
        input_vacio('pass_validacion','Contraseña no puede estar vacío')
        input_error('password')
    }
    else if(password.length < 10){
        input_invalido('pass_validacion','Contraseña demasiada corta')
        input_error('password')
    }else{
        document.getElementById("pass_validacion").innerText = ""
        document.getElementById("password").style.border = "1px solid gray"
    }

    // Email
    const email = document.getElementById("email").value
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var regex2 = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$");
    if(email ==''){
        input_vacio('correo_validacion','Correo no puede estar vacío')
        input_error('email')
    }
    else if(!regex2.test(email)){
        input_invalido('correo_validacion','Correo inválido')
        input_error('email')
    }else{
        document.getElementById("correo_validacion").innerText = ""
        document.getElementById("email").style.border = "1px solid gray"
    }

    // Teléfono
    const telefono = document.getElementById("telefono").value
    var rgx = /^\+?\d{2}(\s\d{3}){2}\s\d{4}$/;
    /*//^ inicio de linea
   // \+? Que tenga o no el caracter de +
   // \d{2} seguido de 2 digitos
   // (\s\d{3}){2} repetir el patron 2 veces de un espacio en blanco, seguido de 3 digitos.
   // \s un espacio en blanco
   // \d{4} seguido de 4 digitos
   // $ fin de la línea.*/
    console.log(telefono)
    if(telefono ==''){
        input_vacio('tel_validacion','Teléfono no puede estar vacío')
        input_error('telefono')
    }
    else if(!rgx.test(telefono)){
        input_invalido('tel_validacion','Teléfono inválido')
        input_error('telefono')
    }else{
        document.getElementById("tel_validacion").innerText = ""
        document.getElementById("telefono").style.border = "1px solid gray"
    }

    // Sitio web
    const web = document.getElementById("web").value
    if(web ==''){
        input_invalido('web_validacion','Sitio Web inválido')
        input_error('web')
    }
    else if(!web.includes("http://") && !web.includes("https://")){
        input_invalido('web_validacion','Teléfono inválido')
        input_error('web')
    }else{
        document.getElementById("web_validacion").innerText = ""
        document.getElementById("web").style.border = "1px solid gray"
    }
}

//TextArea
const funcion_prueba = (e) => {
    cont.innerHTML = e.target.value.length + '/100'
}

const funcion_prueba2 = (e) => ch.innerHTML = `${e.target.value.length} /100`

/*function pintar_contador(e){
    ch.innerHTML = e.target.value.length 
}*/

const ta = document.getElementById('txtA')
const pass = document.getElementById('password')

const ch = document.getElementById('ch')
const cont = document.getElementById('cont')
//ta.addEventListener('input',(e)=>pintar_contador(e))
ta.addEventListener('input',funcion_prueba2)
pass.addEventListener('input',funcion_prueba)
