let senha = document.getElementById('senha');
let senhaCorreta = 1234;
var sec=0;
let audio = document.getElementById('audio');

function confirmar(){
    if(senha.value == senhaCorreta){
    amor();
    start();
    } else{
        alert('Você não é o meu amor');
    }
};

function start(){
    setInterval(number,100)
}

function number(){
    sec++
    document.getElementById('number').innerText=sec
}

function amor (){
    document.getElementById('container').innerHTML = 
    `<p id="text1"> Eu Te Amo </p>
    <p id="number"> 0 </p>
    <p id="text2"> Vezes </p> 
    <p id="text3">Eu não criei um botão para pausar. <br>Agora você vai saber que meu amor por você é infinito.</p>
    `;
    remove()
    audio.play()
}

function remove(){
    var header = document.getElementById('header');
    var carta = document.getElementById('carta');
    header.removeChild(carta);
    var form = document.getElementById('form');
    var btn = document.getElementById('btn');
    form.removeChild(senha);
    form.removeChild(btn);
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
      btn.click();
    }
});
