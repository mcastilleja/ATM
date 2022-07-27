// Se recupera de localStorage el nombre y el balance
const userName = localStorage.getItem('name');
const userBalance = localStorage.getItem('balance');

const exitAtm = document.getElementById('exit');
const myBalance = document.getElementById('balance');
const insertName = document.getElementById('realName');

const formWerehouse = document.getElementById('formWerehouse');
const formWithdrawal = document.getElementById('formWithdrawal')
const alertMessage = document.getElementById('alertText')

// Condicion para cargar pagina de usuario o regresar al login si no se encuentra datos en el localStorage
if ( userName != null ){
    insertName.innerHTML = userName;
    myBalance.innerHTML = `$${userBalance}`;
    document.title = `ATM - ${userName}, tu saldo: $${userBalance}`

} else {
    window.location.href="index.html"
}

// Obtiene la información de depositos
formWerehouse.addEventListener('submit', (e) => {
    e.preventDefault();
    let amount = e.target.amountWerehouse.value;
    add( amount )
    
    setTimeout (function() {
        location.reload(true);
      }, 3000);

});

// Obtiene la información de los retiros
formWithdrawal.addEventListener('submit', (e) => {
    e.preventDefault();
    let amount = e.target.amountWithdrawal.value;
    subtract( amount );
    
    setTimeout (function() {
        location.reload(true);
      }, 3000);

});


// Validar logica de agregar
const add = ( value ) => {

    // Se parsea el valor de userBalance a un numero
    let numberBalance = parseInt(userBalance);
    let addBalance = parseInt(value) + numberBalance;

    console.log( typeof(value))

    if( addBalance <= 990  && Math.sign(value) != -1 && value != "" ){

        let newBalance = addBalance;

        alertMessage.classList.add('alert-success')
        localStorage.setItem('balance',  newBalance)
        alertMessage.innerHTML = `Se ha echo un anexo a su cuenta de $${ value }, dajando un total de: $${ newBalance }`

    } else if( Math.sign(value) == -1 || value == "" ){
        
        alertMessage.classList.add('alert-danger')
        alertMessage.innerHTML = `Lo sentimos el numero ingresado no es un valor valido`
    
    } else {

        alertMessage.classList.add('alert-danger')
        alertMessage.innerHTML = `Lo sentimos la cantidad de $${ value }, no puede ser agregada a su cuenta porque excede el limite de su cuenta ($990)`
    
    }
}

// Validar Logica de restar
const subtract = ( value ) => {
    
    // Se parsea el valor de userBalance a un numero
    let numberBalance = parseInt(userBalance);
    let substracBalance = numberBalance - parseInt(value);

    if ( substracBalance >= 10 && Math.sign(value) != -1 && value != "" ) {

        let newBalance = substracBalance;

        alertMessage.classList.add('alert-success')
        localStorage.setItem('balance',  newBalance)
        alertMessage.innerHTML = `Se ha un retiro satisfactorio de $${ value }, dajando un total de: $${ newBalance }`

    } else if( Math.sign(value) == -1 || value == "" ){
        
        alertMessage.classList.add('alert-danger')
        alertMessage.innerHTML = `Lo sentimos el numero ingresado no es un valor valido`
    
    }  else {

        alertMessage.classList.add('alert-danger')
        alertMessage.innerHTML = `Lo sentimos la cantidad de $${ value }, no puede ser retirada de su cuenta pues el monto minimo son ($10)`
    
    }
}

// Boton para salir y limpiar la sesión de localStorage
exitAtm.addEventListener('click', (e) => {
    // Limpia localStorage
    localStorage.clear();
    // Redirige al login
    window.location.href="index.html"
})

