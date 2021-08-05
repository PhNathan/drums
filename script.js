document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});


document.querySelector('.composer button').addEventListener('click', () => {
    let makeSong = document.querySelector('#input').value;


        if (makeSong !== '') {
            let songArray = makeSong.split('');
            

            playComposition(songArray);
        }
});



/*Funções*/ 

function playSound(sound){
     let audioElement = document.querySelector(`#s_${sound}`);

    let keyElement = document.querySelector(`div[data-key="${sound}"]`);


    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }


     if (keyElement) {
         keyElement.classList.add('active');



         setTimeout(()=>{
                keyElement.classList.remove('active');
         },100);
     }   
}


function playComposition(songArray){
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait); 
        
        wait += 250;
    }
}