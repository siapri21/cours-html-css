// const filmAvengers = document.querySelector('ul');
const filmAvengers = document.querySelector('#films');
console.log(filmAvengers);



/*si la taille du texte est égale à 16px
On change la taille du texte à 50px
sinon
On change la taille du texte à 16px */ 


filmAvengers.addEventListener('click',function(events){
    if(events.target.fontSize == '' || events.target.style.fontSize == '16px'){
        events.target.style.fontSize = '50px';
    }else {
        events.target.style.fontSize = '16px';
    }

    console.log(events.target.style.fontSize);
    
});

// creer un element
const newElement = document.querySelector('#films')
newElement.addEventListener('dblclick' , function(){
    const newElements = document.createElement('h2')
    newElements.textContent ="l'element de la liste sur lequel on double click"
    const containers = document.querySelector('#container')
    containers.prepend(newElements)
});

