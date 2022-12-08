const navLinks=document.querySelectorAll(".crew-nav__link");

navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', ()=>{
        navLink.classList.toggle('active');
    })
})