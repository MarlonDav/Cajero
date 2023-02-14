const saludo = document.querySelector('#saludo_usuario')
const modal = document.querySelector('#modal')
const backdrop = document.querySelector('#backdrop')
const closeButtonModal = document.querySelector("#modal span")
const closeBackdrop = document.querySelector('#backdrop')

const abrirModal = () => {
    modal.classList.remove('hidden')
    backdrop.classList.remove('hidden')
}
const cerrarModal = () => {
    modal.classList.add('hidden')
    backdrop.classList.add('hidden')
}

closeButtonModal.addEventListener('click', function(){
    modal.classList.add('hidden')
    backdrop.classList.add('hidden')
})
closeBackdrop.addEventListener('click', function(){
    modal.classList.add('hidden')
    backdrop.classList.add('hidden')
})

document.addEventListener('DOMContentLoaded', function(){

    const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser')) 
    console.log( currentUser.nombre)
    saludo.innerHTML = `Bienvenido, ${currentUser.nombre}`
})


const consultaSaldo = document.querySelector('#saldo')
consultaSaldo.addEventListener('click', function(){
   abrirModal()
    const {saldo} = JSON.parse(window.sessionStorage.getItem('currentUser')) 
    const tituloModal = document.querySelector("#modal h5")
    const bodyModal = document.querySelector("#modal div")
    bodyModal.innerHTML = `<h1 style="font-size: 5rem">$ ${saldo} </h1>`
    tituloModal.innerHTML =  'consulta de saldo'


})
const botonDepositos = document.querySelector("#depositos")
botonDepositos.addEventListener('click',function(){
    abrirModal()
    
    const tituloModal = document.querySelector("#modal h5")
    const bodyModal = document.querySelector("#modal div")
    bodyModal.innerHTML = `
   
    <input id="nuevoDeposito" placeholder="monto" type="number" />
    <button id="sumbitDeposito" type="sumbit" class="button-master"> Confirmar </button>
    `
    
    tituloModal.innerHTML =  'Deposito a cuenta'

const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser'))
const {saldo} = JSON.parse(window.sessionStorage.getItem('currentUser')) 
const saldoActual = Number(saldo)

const nuevoDeposito = document.querySelector('#nuevoDeposito')
const sumbitDeposito = document.querySelector('#sumbitDeposito')

sumbitDeposito.addEventListener('click',function(){
    const updateCurrentUser = {
        ... currentUser,
        saldo: saldoActual + Number(nuevoDeposito.value),
    }
    window.sessionStorage.setItem('currentUser', JSON.stringify(updateCurrentUser))
    
    cerrarModal()

})

})
