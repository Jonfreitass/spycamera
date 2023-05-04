const boxbnr = document.querySelector ('.banner')
const imagensbnr = document.querySelectorAll ('.bannerimg')
let contadorbnr = 0


function slidebnr () {
    contadorbnr++
     
    if (contadorbnr > imagensbnr.length -1 ) {
        contadorbnr = 0
    }



  boxbnr.style.transform = `translateX(${-contadorbnr*320}px)`


  
}
setInterval (slidebnr, 2000); 