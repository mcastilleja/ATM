// Se recupera de localStorage el nombre y el balance
const userName = localStorage.getItem('name');
const userBalance = localStorage.getItem('balance');

const exitAtm = document.getElementById('exit');
const myBalance = document.getElementById('balance');
const insertName = document.getElementById('realName');

const formWerehouse = document.getElementById('formWerehouse');
const formWithdrawal = document.getElementById('formWithdrawal');
const alertMessage = document.getElementById('alertText');

const containerWh = document.getElementById('werehouse');
const containerWd = document.getElementById('withdrawal');

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
    update();
});


// Obtiene la información de los retiros
formWithdrawal.addEventListener('submit', (e) => {
    e.preventDefault();
    let amount = e.target.amountWithdrawal.value;
    subtract( amount );
    update();
});


// Validar logica de agregar
const add = ( value ) => {

    // Se parsea el valor de userBalance a un numero
    let numberBalance = parseInt(userBalance);
    let addBalance;
    
    // Si el valor es un numero se suma al balance actual en caso contrario se pasa el NaN para validarse
    if ( !isNaN(parseInt(value)) ) {
        addBalance = parseInt(value) + numberBalance;
    } else {
        addBalance = parseInt(value);
    }

    // Se valida que la suma del balance sea un numero, sea menor o igual a 990, que no se ingrese un numero negativo, que el valor no sea vacio y que sea diferente de 0
    if( !isNaN(addBalance) && addBalance <= 990  && Math.sign(value) != -1 && value != "" && value != 0 ){
        
        // Se actualiza el balance y se agrega la alerta 
        let newBalance = addBalance;
        alertMessage.classList.add('alert-success');
        // Se actualiza el balance en el localStorage
        localStorage.setItem('balance',  newBalance);
        preventClick();
        alertMessage.innerHTML = `Se ha echo un anexo a su cuenta de $${ value }, dajando un total de: $${ newBalance }`;

    } else if( isNaN(addBalance) || Math.sign(value) == -1 || value == "" || value == 0){
        
        alertMessage.classList.add('alert-danger');
        alertMessage.innerHTML = `Lo sentimos el numero ingresado no es un valor valido`;
    
    } else {

        alertMessage.classList.add('alert-danger');
        alertMessage.innerHTML = `Lo sentimos la cantidad de $${ value }, no puede ser agregada a su cuenta porque excede el limite de su cuenta ($990)`;
    
    }
}



// Validar Logica de restar
const subtract = ( value ) => {
    
    // Se parsea el valor de userBalance a un numero
    let numberBalance = parseInt(userBalance);
    let substracBalance;

    // Si el valor es un numero se suma al balance actual en caso contrario se pasa el NaN para validarse
    if ( !isNaN(parseInt(value)) ) {
        substracBalance = numberBalance - parseInt(value);
    } else {
        substracBalance = parseInt(value);
    }

    // Se valida que la suma del balance sea un numero, sea mayor igual a 10, no sea un numero negativo, que el valor agregado no este vacio y que sea diferente de 0
    if ( !isNaN(substracBalance) && substracBalance >= 10 && Math.sign(value) != -1 && value != "" && value != 0 ) {
        
        // Se actualiza el balance y se agrega la alerta 
        let newBalance = substracBalance;

        alertMessage.classList.add('alert-success');
        // Se actualiza el balance en el localStorage
        localStorage.setItem('balance',  newBalance);
        preventClick();
        alertMessage.innerHTML = `Se ha un retiro satisfactorio de $${ value }, dajando un total de: $${ newBalance }`;

    } else if( isNaN(substracBalance) || Math.sign(value) == -1 || value == "" || value == 0 ){
        
        alertMessage.classList.add('alert-danger');
        alertMessage.innerHTML = `Lo sentimos el numero ingresado no es un valor valido`;
    
    }  else {

        alertMessage.classList.add('alert-danger');
        alertMessage.innerHTML = `Lo sentimos la cantidad de $${ value }, no puede ser retirada de su cuenta pues el monto minimo son ($10)`;
    
    }
}

// Boton para salir y limpiar la sesión de localStorage
exitAtm.addEventListener('click', (e) => {
    // Limpia localStorage
    localStorage.clear();
    // Redirige al login
    window.location.href="index.html"
})



let update = () => {
    setTimeout (function() {
        location.reload(true);
      }, 2300);
}


let preventClick = () => {
    containerWd.removeAttribute('data-bs-toggle');
    containerWh.removeAttribute('data-bs-toggle');
}
