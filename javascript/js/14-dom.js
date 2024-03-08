/* --------------------------- Manipulation du DOM --------------------------- */

/*
    Le DOM (Document Object Model) en Javascript
    est une representation en mémoire d'un document HTML chargé par le navigateur
    Le DOM represente chaque élément du document comme un objet Javascript
    qui peut être manipulé et modifié à travers le code Javascript
*/

/*
    -------------------------------------------
    Methodes de selecteurs JavaScript
    -------------------------------------------
*/

// ? La methode `getElementById()`
const mainTitle = document.getElementById('main-title');
mainTitle.style.fontFamily = 'Arial';
mainTitle.style.fontSize = '50px';

/*
    ? La methode `getElementsByTagName()`
    getElementsByTagName renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for(){}
*/
const paragraphes = document.getElementsByTagName('p');
for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].style.color = 'green';
}

/*
    ? La methode `getElementsByClassName()`
   ! getElementsByClassName() renvoi une HTMLCollection
    todo sur laquelle on pourra itérer avec la boucle for(){}
*/
const title = document.getElementsByClassName('title');
for (let i = 0; i < title.length; i++) {
    title[i].style.backgroundColor = 'purple';
    title[i].style.color = '#fff';
}

/*
    ? La methode `querySelector()`
*/
const cssProperties = document.querySelector('#title');
cssProperties.style.fontSize = '30px';

/*
    ? La methode `querySelectorAll()`
    querySelectorAll() renvoi une NodeList
    sur laquelle on pourra itérer avec la boucle `for()`, for(...of..) et la méthode `forEach()`

*/
const newParagraphes = document.querySelectorAll('p');
//* for( let paragraphe of newParagraphes){
//  !   paragraphe.style.textDecoration = 'underline'
// }

newParagraphes.forEach(function (paragraphe) {
    paragraphe.style.textDecoration = 'underline';
});

// todo selectionner tous les elements qui ont la class txt-uppercase
// tous les mettree en majuscule

const txtUppercases = document.querySelectorAll('.txt-uppercase')

for(let txtUppercase of txtUppercases){
    txtUppercase.style.textTransform  = 'uppercase';
}


// quelques propriétes liées aux éléments du DOM


// La prop 'style' permet de modifier le style

mainTitle.style.textTransform = 'uppercase'

// mainTitle ajouter la classe txt-green 

mainTitle.classList.add('txt-green','text')

// la methode classList.add() permet d'ajouter une class à un élément html.


// La methode classList.remove() permet d'ajouter une classe à un élément html.
// const paragrapheTest = document.querySelector('#paragraphe-text');
// paragrapheTest.classList.remove('txt-uppercase') ;

// cibles le p qui a la class txt-uppercase
// Enlever la class txt-uppercase

const userName = document.querySelector('#paragraphe')
userName.classList.remove('text-uppercase')


// const colorTitle = document.getElementsByClassName('color');
// colorTitle.style.color[0] = 'green';



// cibler le deuxieme h2
// verifier s'il contient la classe title

const  title2 = document.querySelector('#title-2')
const isTilte = title2.classList.contains('title')
console.log(isTilte);

// Modifier le text => c'est pa si dur avec de la pratique

title2.textContent = "c'est pas si dur avec la pratique"
// title2.innerText = "siapri"

// cibler le dernier paragraphe
// et lui ajouter l'attribut title avec la valeur , je suis une pop-up ajouté en javascript

const dernierParagraphe = document.querySelector('#dernier-paragraphe2')
dernierParagraphe.setAttribute('title',' Je suis une pop-up ajouté en jaavscript')



/*
    -------------------------------------------
                Créer des elements
    -------------------------------------------
*/

// Créer un element en Js
const newParagraphe = document.createElement('p')
newParagraphe.classList.add('new-paragraphe')
newParagraphe.textContent = 'Je suis un nouvel element créé en Js'

const paragrapheContainer = document.querySelector('#paragraphe-container')

// append() ajoute un element a la fin
// paragrapheContainer.append(newParagraphe)

// prepend() ajoute un element au debut
paragrapheContainer.prepend(newParagraphe)