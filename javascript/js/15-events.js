/* --------------------------- EVENT --------------------------- */

/* 
En Js les événements (events) permettent d'interagir avec les actions de l'user sur une page 
web telles que le click, le scroll ....
*/ 

const  title = document.querySelector('#main-title')
title.addEventListener('click' , function(){
    // console.log('hello , world');
})

// cibler le premier h2
// changer la taille de sa police sur 50px

const titleText = document.querySelector('#title')
const titleText2 = document.getElementById('title')
titleText.addEventListener('click',function(){
    titleText2.style.fontSize = '15px'
} );

titleText.addEventListener('dblick',function(){
    titleText2.fontSize = '100px'
});

titleText.addEventListener('mouseout', function() {
    titleText2.fontSize = '20px'
});

// event quand souris survol