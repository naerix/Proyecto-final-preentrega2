///////////////////////////////////clase constructora y array///////////////////////////////////////
class Usuarios{
    constructor(nombre,apellido,usuario,mail,contraseña){
        this.nombre=nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.mail=mail;
        this.contraseña=contraseña;
    }
}

const UsuariosRegistrados = [];


function registro(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let usuario = document.getElementById("usuario").value;
    let mail = document.getElementById("mail").value;
    let contraseña = document.getElementById("contraseña").value;

    const userReg = new Usuarios(nombre,apellido,usuario,mail,contraseña);

    UsuariosRegistrados.push(userReg);

    localStorage.setItem("RegUsuarios",JSON.stringify(UsuariosRegistrados));

    alert("registro exitoso, por favor inicie sesion");
    window.location="login.html"
}

const btnReg = document.getElementById("reg");



btnReg.addEventListener("click", () =>{
    event.preventDefault();
    registro();
})
