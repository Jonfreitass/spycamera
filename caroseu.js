
//-------Passar clicando-------//
const controls = document.querySelectorAll('.controle') 
let currentItem = 0
const items = document.querySelectorAll ('.item')
const maxItems = items.length
const clicando = document.querySelector ('.arrow-right-control')


controls.forEach ((control) => {
    control.addEventListener ('click', () => {
        const isLeft = control.classList.contains ('arrow-left-control')
        if (isLeft) {
            currentItem -= 1
        } else {
            currentItem +=1
        }
            if (currentItem>= maxItems) {
            currentItem = 0
            } 
            if (currentItem < 0) {
                currentItem = maxItems -1
            }

            items.forEach(item => item.classList.remove ('current-item'))

            items [currentItem].scrollIntoView ({
                inline: 'center',
                behavior:"smooth"
            })
            items [ currentItem].classList.add ('current-item')


    })
}) 

//------Passar sozinho---------//

const box = document.querySelector ('.galeria')
const imagens = document.querySelectorAll ('.galeria img')
let contador = 0


function slide () {
    contador++
     
    if (contador > imagens.length -3 ) {
        contador = 0
    }



  box.style.transform = `translateX(${-contador*250}px)`


  
}



setInterval (slide, 3000); 



//-----clicar sozinho-------//

/*setInterval (()=>{
    clicando.click ();
    if (currentItem < 0) {
        controls.click }
        
},5000); 
*/


