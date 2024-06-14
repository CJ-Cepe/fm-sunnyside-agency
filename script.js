const hamBtn = document.querySelector('.ham-btn');
const hamOpt = document.querySelector('.ham-opt');
const media = window.matchMedia('(width <= 700px)');

media.addEventListener('change', (e) => {
    if (e.matches) {
        /* hamOpt.setAttribute('inert', ''); */
    } else {
        /* hamOpt.removeAttribute('inert'); */
        hamBtn.setAttribute('aria-expanded', false);
    }
})

hamBtn.addEventListener('click', () => {
    const btnState = hamBtn.getAttribute('aria-expanded') === 'true'
    hamBtn.setAttribute('aria-expanded', !btnState);
    hamBtn.focus();
    hamOpt.removeAttribute('inert');
})
