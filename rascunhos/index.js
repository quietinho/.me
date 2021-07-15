const btnMobile = document.querySelector('#hamburguer');
btnMobile.addEventListener('click',()=>{
    const menu = document.querySelector('#menu-mobile-container');
    menu.style.display = menu.style.display == 'flex' ? 'none' : 'flex' 
})



