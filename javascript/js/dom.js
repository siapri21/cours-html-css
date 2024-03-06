/*-------------------------------PANIPULATION DU DOM-------------*/

/* LE DOM (Document Objet Model) en js est une representatio en méoire d'unn doc
HTML chargé par le nav .
Le DOm represente chaque element du doc comme objet js qui peut etre
manipule et modifier a travers le code javascript */ 


const mainTitle = document.getElementById('main-title'); //permet de recupere l'element qui a un id = main-title
console.log(mainTitle);

mainTitle.style.color = '#AC7D88'

const paragraphes= document.getElementsByTagName('p')

// hmtl collection

// getElementsByTagName renvoi une htmlcollection
// sur laquelle on pourra itérer avec la boucle for()
for (let i = 0 ; i < paragraphes.length; i++){
    paragraphes[i].style.color= '#FFC107'
}

//  La methode getElementsByTagName

const elementTitle = document.getElementsByClassName('title');
console.log(elementTitle);

for (let i = 0 ; i < elementTitle.length; i++){
    elementTitle[i].style.backgroundColor = '#85586F'
}

/* 
? La methode querySelector()

*/ 

const paragraphe = document.querySelector('.title')
console.log(paragraphe);
paragraphe.style.fontSize = '40px'


/* La methode querySelectorAll()
*/ 

//recupere tous les paragraphes avec la methode querySelectorAll() souligne les paragraphes


const paragraph = document.querySelectorAll('p')
for (let para of paragraph){
    paragraph.style.textDecoration= 'underline'
}

