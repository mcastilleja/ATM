// Se recupera de localStorage el nombre y el balance
const userName = localStorage.getItem('name');
const userBalance = localStorage.getItem('balance');

const exitAtm = document.getElementById('exit');
const myBalance = document.getElementById('balance');
const insertName = document.getElementById('realName');

// Condicion para cargar pagina de usuario o regresar al login si no se encuentra datos en el localStorage
if ( userName != null ){
    insertName.innerHTML = userName;
    myBalance.innerHTML = `$${userBalance}`;

} else {
    window.location.href="index.html"
}

// Boton para salir y limpiar la sesión de localStorage
exitAtm.addEventListener('click', (e) => {
    // Limpia localStorage
    localStorage.clear();
    // Redirige al login
    window.location.href="index.html"
})

