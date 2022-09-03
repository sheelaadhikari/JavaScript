let menu= document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .nav');

menu.click=() =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}
