
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
                            document.body.appendChild(divAlfajor);
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
      
      //console.log("El alfajor seleccionado es: " + seleccion.nombreAlfajor + "y su precio es de: " + seleccion.precio);
      
      //Se agrega al arrayd "carritoCompras" el nombre del alfajor seleccionado. 
      carritoCompras.push(seleccion);
          //___________________________________________________
       //Guardo la información de carrito de compras en el localStorage.
     
       localStorage.setItem("alfajoresEnCarrito",JSON.stringify(carritoCompras));

       let consoleCarrito = JSON.parse(localStorage.getItem("alfajoresEnCarrito"));
       console.log(consoleCarrito);
     //_______________________________________________-__
     

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
  
  //traigo la info del if del html de carritoCantidad. Le agrego la información de la array carritoCompras.
  //El método html () en jQuery se utiliza para establecer o devolver el contenido innerHTML del elemento seleccionado. 
   $("#carritoCantidad").html(carritoCompras.length);
   //Borro los elementos anteriores para que no se repita la arrayd entera de nombre y que se vean solo los alfajores seleccionados.
   $("#carritoDeProductos").empty();
   
   
   //Introduzco los nobmres y el precio de los productos seleccionados en el carrito del HTML.
  for (const alfajor of carritoCompras) {
     const alfajoresHTMLcarrito = `<div class="producto-carrito"><p>${alfajor.nombreAlfajor} - ${alfajor.precio} $</p> <button id="eliminar${alfajor.idAlfajor}" class="btnEliminar1 btn btn-danger">Delete purchase</button> <div>`;
     $("#carritoDeProductos").append(alfajoresHTMLcarrito);
       //ELIMINAR PRODUCTO DEL CARRITO

   
       let botonEliminar = document.getElementById(`eliminar${alfajor.idAlfajor}`);
       console.log(botonEliminar.parentElement);

       botonEliminar.addEventListener("click", function(){
        
       botonEliminar.parentElement.remove();
     
       //carritoCompras = carritoCompras.filter(ele => ele.idAlfajor =! seleccion.idAlfajor);
     })
       
       
       
     
       
  }
  //agrego el botón cofirmar compra que me permitirá enviar una solicitud al back end.
  $("#carritoDeProductos").append(`<button id="btnConfirmar" class="btn btn-success">Confirm purchase</button>`);
  //llamo a la función que enviará la compra.
  $("#btnConfirmar").on("click",enviarCompra);
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
//A TRAVÉS DE ESTA FUNCIÓN ENVIÓ LOS DATOS DE LOS USUARIOS AL SERVIDOR.
function registrarUsuarios(){
  //llamo al id del boton en el index.html
  $("#btnRegistrarse").click(function(e){
    //prevengo fallas.
    e.preventDefault();
    
    //guardo la contraseña y el nombre de usuario en una variable
    let nombreUsuario = $("#exampleInputEmail1").val();
    let contrasenaUsuario = $("#exampleInputPassword1").val();

    //El siguiente if es para que el usuario no deje los inputs en blanco.
    if(nombreUsuario == "" || contrasenaUsuario == ""){
       console.log("Lo siento, debe completar ambos campos para continuar")
    }else{
      console.log("Datos completados...")
       //pusheo los datos de las variables a la Arrayd de usuarios.
       usuarios.push(new Usuario(nombreUsuario,contrasenaUsuario));
       console.log(usuarios);
    
       //llamo al método para subir los datos al servidor.
       enviarInformacionDeUsuario();
    }
   })
}


//MÉTODOS PARA SUBIR LOS DATOS AL SERVIDOR.
function enviarInformacionDeUsuario(){
  //método post + página vinculada + transformo la información a formato JSON con el método stringy + llamo a una función de estadoi y respuesta.
  $.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(usuarios),function(respuesta,estado){
    console.log(estado);
    console.log(respuesta);
  })
}



