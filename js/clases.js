//Creación de la clase Usuario. Parametros: id, mail y contraseña de los usuarios.
class Usuario{
    constructor(mail,contraseña){
        
        this.mail = mail;
        this.contraseña = contraseña;
    }
}


//Creación de la clase alfajores. El producto que se venderá en el sitio web. Parametros: id, nombre y precio de los alfajores.
class Alfajor{
    constructor(idAlfajor,nombreAlfajor,precio){
        this.idAlfajor = parseInt(idAlfajor);
        this.nombreAlfajor = nombreAlfajor;
        this.precio = parseFloat(precio);
    }
}
