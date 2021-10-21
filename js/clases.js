//Creación de la clase Usuario. Parametros: id, mail y contraseña de los usuarios.
class Usuario{
    constructor(mail,contrasena){
        
        this.mail = mail;
        this.contrasena = contrasena;
    }
}


//Creación de la clase alfajores. El producto que se venderá en el sitio web. Parametros: id, nombre y precio de los alfajores.
class Alfajor{
    constructor(idAlfajor,nombreAlfajor,precio,imagenAlfajor){
        this.idAlfajor = parseInt(idAlfajor);
        this.nombreAlfajor = nombreAlfajor;
        this.precio = parseFloat(precio);
        this.imagenAlfajor = imagenAlfajor;
    }
}
