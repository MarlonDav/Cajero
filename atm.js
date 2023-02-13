const saludo = document.querySelector('#saludo_usuario')
const modal = document.querySelector('#modal')

document.addEventListener('DOMContentLoaded', function(){

    const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser')) 
    console.log( currentUser.nombre)
    saludo.innerHTML = `Bienvenido, ${currentUser.nombre}`
})


const consultaSaldo = document.querySelector('#saldo')
consultaSaldo.addEventListener('click', function(){
    modal.classList.remove('hidden')
})