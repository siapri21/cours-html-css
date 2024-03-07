// const filmAvengers = document.querySelector('ul');
const filmAvengers = document.querySelector('#films');
console.log(filmAvengers);

filmAvengers.addEventListener('click',function(events){
    if(events.target.fontSize == '' || events.target.style.fontSize == '16px'){
        events.target.style.fontSize = '50px';
    }else {
        events.target.style.fontSize = '16px';
    }

    console.log(events.target.style.fontSize);
    
});

/*si la taille du texte est égale à 16px
On change la taille du texte à 50px
sinon
On change la taille du texte à 16px */ 


