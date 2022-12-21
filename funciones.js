function print_message(event){
    event.preventDefault();
    var nombre = document.getElementById("nombre").value
    console.log(nombre)
}

function borrar(){
    document.getElementById("nombre").value = ''
}