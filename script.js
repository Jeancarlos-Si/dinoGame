const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const scoreContainer = document.querySelector('#score');


let isJumping = false;
let position = 0;



function handleKeyUp(event) {
    if(event.keyCode === 32 || event.keyCode === 38 || event.keyCode === 87 ) {
        if(!isJumping) {
            jump();
        }
    }/*event enviado pra função toda vez que alguem tecla algo no computador, key code é o codigo da tecla que a pessoa acionou*/
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {  //codigo Tudo que estiver dentro ficara 
        if (position >= 170){             //sendo executado no periodo de tempo pre-determinado
            clearInterval(upInterval);
            console.log("entrei")
        //Descendo

        
            let downInterval = setInterval(() => {
            if(position <= 0){
                clearInterval(downInterval);
                isJumping = false;
                }else{
                position -= 15;
                dino.style.bottom = position + "px";
            }
            
        }, 50);
            //Subindo
        }else{
            position += 20;
            dino.style.bottom = position + 'px';   
            console.log("aqui oh")
        }  
    }, 20);
}

function createCactus() {
    
    const cactus = document.createElement('div'); //Cria uma div
    let cactusPosition = 750;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus'); //Adiciona uma classe a div
    
    background.appendChild(cactus); //Afirma que a div vai está alocada dentro de background

    let leftInterval = setInterval(() => {
        if (cactusPosition <= 0){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 80 && position < 60){
            //Game Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Perdeu feio</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);
    setTimeout(createCactus, randomTime);
}

function createScore() {
    /*html*/
    scoreContainer.insertAdjacentHTML('afterbegin',
    `<div class="scoreText">
        Score
    </div>
    <div class="scorePoints">
        
    </div>
    `
    )
}

function calcScore() {
    const scoreClass = document.querySelector('.scorePoints');

    scoreClass.insertAdjacentHTML('afterbegin',
      `
      $
      `);

      

}
createScore();
calcScore();

createCactus();
document.addEventListener('keyup', handleKeyUp); 
/*Quando eu clicar em qualquer tecla a função handleKyUp 
vai ser ativada, passando um event por parâmetro, que registra
qual foi a tecla digitada  */