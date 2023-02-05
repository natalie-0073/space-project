const hamburgers = document.querySelectorAll(".header-menu__btn");
const sidenavs = document.querySelectorAll(".sidenav");
const sideCloses = document.querySelectorAll(".sidenav-close");

function menuHandle() {
  hamburgers.forEach((hamburger) => {
    hamburger.addEventListener("click", () => {
      hamburger.style.visibility = "hidden";
      sidenavs.forEach((sidenav) => {
        sidenav.style.width = "200px";
      });
    });
  });
  sideCloses.forEach((sideClose) => {
    sideClose.addEventListener("click", () => {
      hamburgers.forEach((hamburger) => {
        hamburger.style.visibility = "visible";
      });

      sidenavs.forEach((sidenav) => {
        sidenav.style.width = "0px";
      });
    });
  });
}
menuHandle();
// hamburger.addEventListener('click', ()=>{
//     sidenav.style.width='200px';
// })
// sideClose.addEventListener('click', ()=>{
//     sidenav.style.width='0px';
// })
