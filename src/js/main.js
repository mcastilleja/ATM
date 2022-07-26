// Cajero Automático
// Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.
// Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas:
// Persona 1
// Persona 2
// Persona 3
// Para esto, puedes trabajar con un arreglo de objetos como el siguiente:
// 1
// 2
// 3
// 4
// 5
// var cuentas = [
//   { nombre: “Mali”, saldo: 200 }
//   { nombre: “Gera”, saldo: 290 }
//   { nombre: “Maui”, saldo: 67 }
// ];
// Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
// Consultar saldo
// Ingresar monto
// Retirar Monto
// Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
// Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
// Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10. Es necesario hacer las validaciones pertinentes para que no se rompa esta regla de negocio.

// window.location.href
// window.location.replace('a donde dirige')

// Example starter JavaScript for disabling form submissions if there are invalid fields


let accounts = [
    { 
        name: 'Mali',
        nip: '9856',
        balance: 200 
    },
    { 
        name: 'Gera', 
        nip: '1234',
        balance: 290 
    },
    { 
        name: 'Maui', 
        nip: '2446',
        balance: 67 
    }
];




const userInput = document.getElementById('user');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    Object.keys(accounts).forEach( key => {

        if ( e.target.user.value == accounts[key].name && e.target.nip.value == accounts[key].nip ) {
            console.log("El usuario y la contraseña coinciden!!")
        } else {
            console.log("El usuario es inexistente =(")
        }

    })

})







/* FUNCION PARA ALERTAS */
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()