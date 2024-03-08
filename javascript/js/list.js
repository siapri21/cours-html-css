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
// const newElement = document.querySelector('#films')
// newElement.addEventListener('dblclick' , function(){
//     const newElements = document.createElement('h2')
//     newElements.textContent ="l'element de la liste sur lequel on double click"
//     const containers = document.querySelector('#container')
//     containers.prepend(newElements)
// });

// films.addEventListener('dblclick', function (e) {
//     const title = document.createElement('h2');
//     title.textContent = e.target.textContent;

//     const container = document.querySelector('#container');

//     container.prepend(title);
    
// });

// films.addEventListener('dblclick', function (e) {
//     // Créer un nouvel élément h2 avec le contenu de la cible double-cliquée
//     const title = document.createElement('h2');
//     title.textContent = e.target.textContent;

//     // Sélectionner le conteneur
//     const container = document.querySelector('#container');

//     // Récupérer l'élément h2 existant (s'il y en a un)
//     const existingTitle = container.querySelector('h2');

//     // Si un élément h2 existe, le supprimer
//     if (existingTitle) {
//         existingTitle.remove();
//     }

//     // Ajouter le nouvel élément h2 au début du conteneur
//     container.prepend(title);
// });


// remove () permet de supprimer un element 
films.addEventListener('dblclick', function (e) {
    // Récupérer l'élément h2 existant (s'il y en a un) et le supprimer
    document.querySelector('h2')?.remove();
    // Créer un nouvel élément h2 avec le contenu de la cible double-cliquée
    const title = document.createElement('h2');
    title.textContent = e.target.textContent;

    // Sélectionner le conteneur
    const container = document.querySelector('#container');


    // Ajouter le nouvel élément h2 au début du conteneur
    container.prepend(title);
});
