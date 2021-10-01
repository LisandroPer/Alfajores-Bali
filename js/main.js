//Creación de variables para registrar las entradas de los usuarios.



//Creación de la clase Usuario. Parametros: id, mail y contraseña de los usuarios.
class Usuario{
    constructor(mail,contraseña){
        
        this.mail = mail;
        this.contraseña = contraseña;
    }
}

//Inicialización de la arrayd donde se guardarán los objetos, en este caso la información de los usuarios.
const usuarios = [];



//Obtención del mail/nombre del usuario
let ingresoNombreUsuario = document.getElementById("exampleInputEmail1");
ingresoNombreUsuario.onchange = () => {
    let entradaNombre = ingresoNombreUsuario.value;
    console.log(entradaNombre);
}
//obtención de la contraseña del usuario
let ingresarContraseñaUsuario = document.getElementById("exampleInputPassword1");
ingresarContraseñaUsuario.onchange = () =>{
    let entradaContraseña = ingresarContraseñaUsuario.value;
    console.log(entradaContraseña);
}


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



//-------------------------------------------------------------------------------------------------------------------------------------------------

//Creación de la clase alfajores. El producto que se venderá en el sitio web. Parametros: id, nombre y precio de los alfajores.
class Alfajor{
    constructor(idAlfajor,nombreAlfajor,precio){
        this.idAlfajor = parseInt(idAlfajor);
        this.nombreAlfajor = nombreAlfajor;
        this.precio = parseFloat(precio);
    }
}

//Inicialización de la arrayd donde se guardarán los objetos, en este caso la información de los alfajores.
const alfajores = [];

//Creación de los objetos + introducción de sus datos en el arrayd "alfajores";
alfajores.push(new Alfajor(1,"Alfajor de dulce de leche",30));
alfajores.push(new Alfajor(2,"Alfajor de mantequilla de maní",40));
alfajores.push(new Alfajor(3,"Alfajor de frutilla",30));
alfajores.push(new Alfajor(4,"Alfajor de chocolate blanco",35));

//Comprobación de que los objetos se necuentran dentro de la arrayd.
console.log(alfajores);


for(const alfajor of alfajores){
    let divAlfajor = document.createElement("div");
    //Crea los elementos div que contendran la información de los alfajores. 
    divAlfajor.innerHTML = `<h3>${alfajor.nombreAlfajor}</h3>
                            <h4>"Precio: "${alfajor.precio}</h4>
                            <button id="${alfajor.idAlfajor}" class = "btnCompra">Buy</button>`
    
                            //Agrega el hijo, en este caso el div, al cuerpo del HTML.
                            document.body.appendChild(divAlfajor);
}


//Obtención de los elementos de la clase btnCompra
let botones = document.getElementsByClassName("btnCompra");
//Comprobación de su obtención mediante el console.log.
console.log(botones);

//Creación de arrayd carritoCompras. Almacenará los productos seleccionados por el usuario.
const carritoCompras = [];

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
