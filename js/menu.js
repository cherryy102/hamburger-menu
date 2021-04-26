const btnHam = document.querySelector('.btnHamburger');
const on = document.querySelectorAll('.on');

btnHam.addEventListener('click', function() {
    for (let i = 0; i < on.length; i++) {
        on[i].classList.toggle('show');

    }
})
document.querySelector('.art').addEventListener('click', function() {
    for (let i = 0; i < on.length; i++) {
        on[i].classList.remove('show');

    }
})