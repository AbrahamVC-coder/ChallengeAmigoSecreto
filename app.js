// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];


function agregarAmigo(){
  //Tomar el elemento HTML y asiganrlo a una variable
  let amigoNombre = document.getElementById('amigo').value;

 
  
  //Condicion que solicita al usuario agregar un nombre si estaa vacio el campo
  if(amigoNombre == ''){
    alert("PorFavor escriba un nombre");
  }else{
    //En caso de que si se agrega el elemento al arreglo y se muestra en la lista 
    alert("gracias por agregar un nombre");
    Amigos.push(amigoNombre);
    console.log(Amigos);

    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = "";

    for (let i = 0; i < Amigos.length; i++) {
        // Crear una etiqueta <li> por cada amigo
        const li = document.createElement("li");
        li.textContent = Amigos[i];

        // Agregar el <li> a la lista
        lista.appendChild(li);
      }

    //Limpiar el campo de texto despues de agregar a un amigo
    limpiarTexto();
  }

}

//funcion que muestra el resultado del sorteo 
function sortearAmigo(){
    amigoResultado = sorteo(Amigos);
    
    asignarElemento('listaAmigos', `El amigo secreto sorteado es: ${amigoResultado}`);
    //cambio de color al resltado
    let amigoTexto = document.getElementById('listaAmigos');
    amigoTexto.style.color = '#46F72D';
}

//funcion matematica para sortear a los amigos dentro del arreglo
function sorteo(datos){
  return datos[Math.floor(Math.random() * datos.length)];
}

//funcion para asiganar los elementos
function asignarElemento(elemento, texto){
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
  elementoHTML.style.color = '#F74B2D';
  elementoHTML.style.fontSize = '20px'

  return;

}


//funcion para limpiar el campo de texto
function limpiarTexto(){
  document.querySelector('#amigo').value = '';
}