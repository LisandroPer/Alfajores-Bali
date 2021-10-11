



//-------------------------------------------------------------------------------------------------------------------------------------------------



//Creación de los objetos + introducción de sus datos en el arrayd "alfajores";
alfajores.push(new Alfajor(1,"Alfajor de dulce de leche",30));
alfajores.push(new Alfajor(2,"Alfajor de mantequilla de maní",40));
alfajores.push(new Alfajor(3,"Alfajor de frutilla",30));
alfajores.push(new Alfajor(4,"Alfajor de chocolate blanco",35));

alfajoresUI(alfajores, "contenedorDeProductos");

//Comprobación de que los objetos se necuentran dentro de la arrayd.
console.log(alfajores);

//Llamado al método creador de los objetos alfajor en el HTML.
//creadorDeAlfajoresHTML();

//llamado al método del botón de compra.
botonDeComprar();

console.log($("#contenedorDeProductos"));
//Animación para el main del index.
animacionAparecerMain();

//Función que sirve para almacenar los datos de los usuarios
registrarUsuarios();

//Esta función sirve para que cuando el usuario haga click en contact, se vaya directo al footer de la página index.
scroller();


