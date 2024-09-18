const navLinks = document.querySelectorAll(".nav__opciones a");
const checkBox = document.getElementById("check");

navLinks.forEach(enlaces =>{
    enlaces.addEventListener('click', ()=>{
        checkBox.checked = false;
    });
});