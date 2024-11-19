function responsiveMenu(){
  let x = document.getElementById("nav");
  let mx1 = document.getElementById("imagin1");
  let mx2 = document.getElementById("imagin2");
  let mx3 = document.getElementById("imagin3");
  let mx4 = document.getElementById("imagin4");
  let mx5 = document.getElementById("imagin5");
  let mx6 = document.getElementById("imagin6");

  // Verificamos si el menú está cerrado
  if(x.className === ""){
      x.className = "responsive";

      // Solo creamos el 'span' si no existe
      if (!document.querySelector("#nav span")) {
          let span = document.createElement("span");
          span.innerHTML = "X";
          span.style.fontSize = "30px";
          span.style.color = "#9a59e6";
          span.style.cursor = "pointer";
          document.getElementById("nav").appendChild(span);

          // Añadimos la clase 'ocultar' a todos los elementos
          mx1.classList.add("ocultar");
          mx2.classList.add("ocultar");
          mx3.classList.add("ocultar");
          mx4.classList.add("ocultar");
          mx5.classList.add("ocultar");
          mx6.classList.add("ocultar");

          // Función de cierre del menú
          span.onclick = function(){
              x.className = "";
              mx1.classList.remove("ocultar");
              mx2.classList.remove("ocultar");
              mx3.classList.remove("ocultar");
              mx4.classList.remove("ocultar");
              mx5.classList.remove("ocultar");
              mx6.classList.remove("ocultar");
              // Eliminar el 'span' cuando se cierre el menú
              span.remove();
          }
      }
  } else {
      // Cuando el menú ya está cerrado, eliminamos la clase 'ocultar' de los elementos
      x.className = "";
      mx1.classList.remove("ocultar");
      mx2.classList.remove("ocultar");
      mx3.classList.remove("ocultar");
      mx4.classList.remove("ocultar");
      mx5.classList.remove("ocultar");
      mx6.classList.remove("ocultar");

      // Aseguramos de eliminar el 'span' cuando el menú se cierre
      let span = document.querySelector("#nav span");
      if (span) {
          span.remove();
      }
  }
}

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
function closeMenu(){
   
  var x = document.getElementById("nav");
  if(x.className==="responsive"){
      x.className = "";
  }
 
  
  //removemos el boton eliminar
  btnEliminar = document.querySelector("#nav span");
  btnEliminar.remove();
}



  
function sendMessageWithText() {
    // Obtener los valores de los inputs
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var mensaje = document.getElementById('mensaje').value;

    // Crear el mensaje
    var mensajeCompleto = 'Nombre: ' + nombre + '%0A' +
                          'Apellido: ' + apellido + '%0A' +
                          'Consulta: ' + mensaje;

    // Número de WhatsApp al que se enviará el mensaje (incluye el código de país)
    var numeroWhatsApp = 5492616074615;  // Reemplaza con tu número de WhatsApp

    // Crear la URL de WhatsApp
    var urlWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + mensajeCompleto;

    // Abrir la URL de WhatsApp
    window.open(urlWhatsApp, '_blank');
}