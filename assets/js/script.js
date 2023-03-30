 /*Cambiar color del menu al hacer Scroll*/

window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.querySelector("header");

    if (scroll > 100){
        header.classList.add('headerActive');
    }else if (scroll < 100){
        header.classList.remove('headerActive');
    }

}

/** Hacer que los enlaces del menú de navegación reaccionen y cambien dependiendo de la posición de la página*/

const containerScreen = document.querySelectorAll(".divOffset");
const barNavegation = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
  containerScreen.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 5) {
      current = section.getAttribute("id");
    }
  });

  barNavegation.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });

});