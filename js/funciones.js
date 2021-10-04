function registrarUsuarios(){
    //Obtención del mail/nombre del usuario
    let ingresoNombreUsuario = document.getElementById("exampleInputEmail1");
    //guado el nombre de usuario en una variable.
    ingresoNombreUsuario.onchange = () => {
      let entradaNombre = ingresoNombreUsuario.value;
      console.log(entradaNombre);
    }
    //obtención de la contraseña del usuario
    let ingresarContraseñaUsuario = document.getElementById("exampleInputPassword1");
    //guardo la contraseña en una variable.
    ingresarContraseñaUsuario.onchange = () =>{
       let entradaContraseña = ingresarContraseñaUsuario.value;
       console.log(entradaContraseña);
    }

   //Añado la información de los usuarios a la arrayd "usuarios".
   usuarios.push(new Usuario(ingresoNombreUsuario, ingresarContraseñaUsuario));

   //Obtengo y almaceno mi formulario desde el DOM.
   let formularioDeUsuarios = document.getElementById("registroUsuarios");

   //Creo un evento a través de una función arrow.
   formularioDeUsuarios.onsubmit = (event) => {
      //El event.preventDefault() evita que se refresque la página.
      event.preventDefault();
      //Se indica a la función flecha que debe bajar el ambito a lo local.
      //Que se quede con el evento de ese momento.
      event.target;
    
     const inputs = formularioDeUsuarios.children;
     usuarios.push(new Usuario(inputs[0].value,inputs[1].value));
     console.log(usuarios);
    }
}



function creadorDeAlfajoresHTML(){
    for(const alfajor of alfajores){
        let divAlfajor = document.createElement("div");
        //Crea los elementos div que contendran la información de los alfajores. 
        divAlfajor.innerHTML = `<h3>${alfajor.nombreAlfajor}</h3>
                                <h4>"Precio: "${alfajor.precio}</h4>
                                <button id="${alfajor.idAlfajor}" class = "btnCompra">Buy</button>`
        
                                //Agrega el hijo, en este caso el div, al cuerpo del HTML.
                                document.body.appendChild(divAlfajor);
    }
}

function botonDeComprar(){
    //Obtención de los elementos de la clase btnCompra
let botones = document.getElementsByClassName("btnCompra");
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
   })
}

//Comprobación de los nombres guardados en la arrayd.
console.log(carritoCompras);
}