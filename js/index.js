let headerNav = document.querySelector('.navbar');
let hiddenNav = document.querySelector('.header-nav');
let closeBtn  = document.querySelector('.close-btn');
let body      = document.querySelector('.header-main-content');  

headerNav.addEventListener('click', (e) => {
    hiddenNav.style.display = 'flex';
    hiddenNav.style.width = '100%';
    hiddenNav.style.height = '100vh';
})

closeBtn.addEventListener('click', (e) => {
    hiddenNav.style.width = '0%';
    hiddenNav.style.height = '0vh';
});