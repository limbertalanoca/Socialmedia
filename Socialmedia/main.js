const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('darck');
    btnSwitch.classList.toggle('active');
});
