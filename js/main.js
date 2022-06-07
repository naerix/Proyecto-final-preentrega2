///////////////////////////////////REGISTRO DE USUARIOS///////////////////////////////////////
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


///////////////////////////////////LOGUEO DE USUARIO//////////////////////////////////////////

function login(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

     localStorage.getItem("RegUsuarios",JSON.parse(UsuariosRegistrados));

     console.log(UsuariosRegistrados)



    if(user === UsuariosRegistrados[0].nombre && password === UsuariosRegistrados[0].contraseña){
        alert("felicitaciones");
    }

    else{
        alert("mal ahi")
    }


}
 
const iniciarsession = document.getElementById("login");

iniciarsession.addEventListener("click", () =>{
    event.preventDefault();
    login();
})
