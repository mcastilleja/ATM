// Se recupera de localStorage el nombre y el balance
const userName = localStorage.getItem('name');
const userBalance = localStorage.getItem('balance');

const exitAtm = document.getElementById('exit');
const myBalance = document.getElementById('balance');
const insertName = document.getElementById('realName');


if ( userName != null ){
    insertName.innerHTML = userName;
    myBalance.innerHTML = `$${userBalance}`;

} else {
    window.location.href="index.html"
}


exitAtm.addEventListener('click', (e) => {
    localStorage.clear();
    window.location.href="index.html"
})

