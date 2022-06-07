function login(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

     const RegUsuarios = JSON.parse(localStorage.getItem("RegUsuarios"));
        

    for(let i = 0; i<RegUsuarios.length;i++){
        if(user === RegUsuarios[i].nombre && password === RegUsuarios[i].contraseña){
            alert("Ha iniciado sesion correctamente");

        }

        else{
            alert("usuario o contraseña incorrectos, por favor intente nuevamente!")
        }
    }
}

const iniciarsession = document.getElementById("login");

iniciarsession.addEventListener("click", () =>{
    event.preventDefault();
    login();
})
