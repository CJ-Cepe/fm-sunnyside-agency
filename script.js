const hamBtn = document.querySelector('.ham-menu-button');
const hamOpt = document.querySelector('.ham-menu-options');

hamBtn.addEventListener('click', ()=> {
    hamOpt.classList.toggle('active');
})


