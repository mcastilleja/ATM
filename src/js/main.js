
const form = document.getElementById('form');

const selectIdName = document.getElementById('validUser').classList;
const selectIdNip = document.getElementById('validNip').classList;

const invalidName = document.getElementById('validateUser');
const invalidNip = document.getElementById('validateNip');

// Evento al presionar submit en el formulario capturando el evento de los inputs
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let userInput = e.target.validUser.value;
    let passwInput = e.target.validNip.value;

    // Se valida si en el arreglo existe al menos un valor al escrito .some
    if( accounts.some( ( a ) => a.name == userInput && a.nip == passwInput ) ){

        // Se guarda en una variable el arreglo del usuario devuelto
        let currentUser = accounts.filter( (a) => a.name == userInput && a.nip == passwInput )[0]

        // Se cambian las clases de invalido a valido en el formulario
        selectIdName.remove('is-invalid')
        selectIdNip.remove('is-invalid')
        selectIdName.add('is-valid')
        selectIdNip.add('is-valid')

        // Se guarda el nombre y balance en localStorage para ser procesados en la siguiente pagina
        localStorage.setItem( 'name', currentUser.name );
        localStorage.setItem( 'balance', currentUser.balance );
        window.location.href="atm.html"

    // En caso de que unicamente el usuario coincida mandar mensajes de error en contraseña
    } else if( accounts.some( ( a ) => a.name == userInput && a.nip != passwInput ) ){

        // Se intercambian las clases removiendo las anteriores
        selectIdName.remove('is-invalid')
        selectIdNip.remove('is-valid')
        selectIdName.add('is-valid')
        selectIdNip.add('is-invalid')

        // Limpia y arroja el mensaje correspondiente de error en el formulario
        invalidNip.innerHTML = "";
        invalidNip.innerHTML = "Ingresa una contraseña valida";
    
    // En caso de que no coincida ningun campo mandar errores dentro del formulario 
    } else {

        // Se intercambian las clases removiendo las anteriores
        selectIdName.remove('is-valid')
        selectIdNip.remove('is-valid')
        selectIdName.add('is-invalid')
        selectIdNip.add('is-invalid')

        // Limpia y arroja los mensajes correspondiente de error en el formulario
        invalidName.innerHTML = "";
        invalidNip.innerHTML = "";
        invalidName.innerHTML = "Es necesario un nombre de usuario valido";
        invalidNip.innerHTML = "Ingresa una contraseña valida";
        
    }

});







