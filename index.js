function moverPosicionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
} 

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSetso = document.getElementsByClassName("modo_setso")[0];

btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e) {
    alert("Sabía que dirias que SÍ. Casemonos y tengamos hijos, Te amo!!! ❤");
    divModoSetso.style.display = 'block'
    const cancion = new Audio('images\\modo setso.mp3');
    cancion.play();
    //block muestra el archivo
    //none desaparece el elemento
    //hidden esconde el elemento
});