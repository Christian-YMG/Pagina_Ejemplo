
window.addEventListener("scroll", function(){

    let animacion = document.getElementById('informacion-texto');
    let posicionObj = animacion.getBoundingClientRect().top;
    let tamañoPantalla = window.innerHeight / 1.5;

    if (posicionObj < tamañoPantalla) {
        
        animacion.style.animation = 'mostrar 1s'
        animacion.style.transform = 'scale(1,1)'
    }
});