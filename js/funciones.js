
//------------------------------------------------------------FUNBCIONES PARA ALFAJORES----------------------------------------------------------//

function alfajoresUI(alfajores, idAlfajor){
    for(const alfajor of alfajores){
        //forma de crear el div con los objetos alfajor a través de JQuerry.
        $("#contenedorDeProductos").append(`<div class="col justify content center align items center">
                                            <div class="card text-white bg-dark" style="width: 18rem;">
                                             <img src="${alfajor.imagenAlfajor}" class="card-img-top claseImagenesCarrito" alt="...">
                                             <div class="card-body">
                                                 <h5 class="card-title">${alfajor.nombreAlfajor}</h5>
                                                 <p class="card-text">Precio: ${alfajor.precio}</p>
                                                 <button id="${alfajor.idAlfajor}" class = "btn btn-primary btn-compra">Buy</button>
                                              </div>
                                            </div>
                                            </div>`);
        
        //LA DE ABAJO ES LA FORMA DE HACERLO SIN JQUERRY.
        //document.getElementById(idAlfajor).appendChild(creadorDeAlfajoresHTML(alfajor));
    }
}

/* FORMA DE CREAR EL DIV CON LOS OBJETOS SIN UTILIZAR JQUERRY.
function creadorDeAlfajoresHTML(){
    for(const alfajor of alfajores){
        let divAlfajor = document.createElement("div");
        //Crea los elementos div que contendran la información de los alfajores. 
        divAlfajor.innerHTML = `<div class="card text-white bg-dark" style="width: 18rem;">
                                 <img src="/Imagenes/alfajorbali.jpg" class="card-img-top" alt="...">
                                 <div class="card-body">
                                    <h5 class="card-title">${alfajor.nombreAlfajor}</h5>
                                    <p class="card-text">Precio: ${alfajor.precio}</p>
                                    <button id="${alfajor.idAlfajor}" class = "btn btn-primary">Buy</button>
                                 </div>
                                </div>`
        
                                //Agrega el hijo, en este caso el div, al cuerpo del HTML.
                                //document.body.appendChild(divAlfajor);
            return divAlfajor;
    }
}
*/

//Agrega los productos al carrito.
function botonDeComprar(){
    //Obtención de los elementos de la clase btnCompra
   let botones = document.getElementsByClassName("btn btn-primary btn-compra");
   //Comprobación de su obtención mediante el console.log.
   console.log(botones);
   for(const boton of botones){
      //Se escuchará el evento "click" y saldrá por consola el id del alfajor seleccionado.
     boton.addEventListener("click",function(){
         let seleccion = alfajores.find(alfajor => alfajor.idAlfajor == this.id);
         //Saldia por consola del nombre del alfajor seleccionado.
         console.log("El alfajor seleccionado es: " + seleccion.nombreAlfajor + "y su precio es de: " + seleccion.precio);
         //Se agrega al arrayd "carritoCompras" el nombre del alfajor seleccionado. 
         carritoCompras.push(seleccion);
         //Guardo la información de carrito de compras en el localStorage.
         localStorage.setItem("alfajoresEnCarrito",JSON.stringify(carritoCompras));

        let consoleCarrito = JSON.parse(localStorage.getItem("alfajoresEnCarrito"));
        console.log(consoleCarrito);
        
        //llamo a la función que añade la información de los objetos del arrayd compras al HTML.
        carritoUI(carritoCompras);
      })
    }

  //Comprobación de los nombres guardados en la arrayd.
  console.log(carritoCompras);
}
//-----------------------------


//Función encargada de añadir los productos seleccionados por el usuario al carrito de comrpas del HTML.
function carritoUI(carritoCompras){
  //traigo la info del if del html de carritoCantidad. Le agrego la información de la arrayd carritoCompras.
   $("#carritoCantidad").html(carritoCompras.length);
   //Borro los elementos anteriores para que no se repita la arrayd entera de nombre y que se vean solo los alfajores seleccionados.
   $("#carritoDeProductos").empty();
   
   //Introduzco los nobmres y el precio de los productos seleccionados en el carrito del HTML.
  for (const alfajor of carritoCompras) {
     $("#carritoDeProductos").append(`<p>${alfajor.nombreAlfajor} - ${alfajor.precio} $</p> <button id="btnEliminar" class="btn btn-danger">Delete purchase</button>`);
  }
  //agrego el botón cofirmar compra que me permitirá enviar una solicitud al back end.
  $("#carritoDeProductos").append(`<button id="btnConfirmar" class="btn btn-success">Confirm purchase</button>`);
  //llamo a la función que enviará la compra.
  $("#btnConfirmar").on("click",enviarCompra);
}


// BOTON BTNELIMINAR: FUNCIÓN ELIMINAR PRODUCTO DEL CARRITO.
function eliminarProductoDelCarrito(){
  $("#btnEliminar").click(function(){
    for (const alfajorElminado of carritoCompras) {
      $("#carritoDeProductos").remove(alfajorElminado);
    }
    //$("#carritoDeProductos").remove(`<p>${alfajor.nombreAlfajor} - ${alfajor.precio} $</p> <button id="btnEliminar" class="btn btn-danger">Delete purchase</button>`);
  })
}


//función para enviar la información de la compra al servidor.
function enviarCompra(){
  //llamo al servidor donde enviaré la información. Transformo la información del carritoCompras a formato JSON.
  $.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(carritoCompras),function(respuesta,estado){
    console.log(estado);
    console.log(respuesta);
  })
}

//-----------------------------------------------------------FUNCIONES DE ANIMACIONES----------------------------------------------------------

//Función para hacer aparecer el cuadro de registro hubicado en la sección main del index.
function animacionAparecerMain(){
  $("#mainDelIndex").show(1500);
}


function scroller(){
  $("#irAlFooter").click(function(e){
    //Llamo a la función prevent default para prevenir posibles errores. 
    e.preventDefault();
    //indico que la animación se generará dentro del body del HTML.
    $("html, body").animate({
      scrollTop: $("#footerId").offset().top
    })
  })
}

//----------------------------------------------------FUNCIONES PARA REGISTRAR USUARIOS-----------------------------------------------------------//


function cargarEvento(){
  $("#fomularioRegistrarse").on("submit",function(event){
    event.preventDefault();
    nuevoUsuario();
  })
}



function nuevoUsuario(){
  

 let nombreDelUsuario = $("#exampleInputEmail1");
 let contrasenaDeUsuario = $("#exampleInputPassword1");
  
  
  usuarios.push(new Usuario(nombreDelUsuario.value,contrasenaDeUsuario.value));
  console.log(usuarios);
}  







