
const usuarioBD = [
    {
       nombre: " Marlon Bernal",
        email: "marlon.bernal.riveros@gmail.com",
        cuenta:1 ,
        password:"1234",
        saldo:1000,
        log: []
    },
    {
        nombre: " Maria Fernanda Garzon Carvajal",
        email: "maria.garzon.carvajal@gmail.com",
        cuenta: 2 ,
        password:"1234",
        saldo:2000,
        log: []
    }
]

const error = document.querySelector("#error_login");
const input = document.querySelector('input');
const form = document.querySelector("#login");

input.addEventListener('focus',function(){
    if(!error.classList.contains('hidden')){
        error.classList.add("hidden");
        form.reset();
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form)
    const { loginEmail, loginPassword} = Object.fromEntries(data)
    console.log({loginEmail,loginPassword})

    if(loginEmail.length === 0){
        error.classList.remove('hidden')
        error.innerHTML='El campo de usuario es obligatorio'
    }
    if (loginPassword.length === 0) {
        error.classList.remove('hidden')
        error.innerHTML='se te olvido el password'
        return
    }

    const loginAttempt = usuarioBD.find(user => user.email === loginEmail && user.password === loginPassword)
    console.log(loginAttempt)

    if (loginAttempt === undefined){
        error.classList.remove('hidden')
        error.classList.remove('alert-danger')
        error.innerHTML = 'Error en los datos del login'
    } else {
        error.classList.remove('hidden')
        error.classList.remove('alert-info')
        error.innerHTML = 'Error en los datos del login'
        window.sessionStorage.setItem('currentUser', JSON.stringify(loginAttempt))
        window.location.href ='./atm.html'
    }
})