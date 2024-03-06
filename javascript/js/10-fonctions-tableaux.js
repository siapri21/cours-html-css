/* --------------------------- FONCTIONS SUR LES TABLEAUX --------------------------- */
// Créer un tableau d'animaux ('chat', 'chien', 'tigre', 'lion', 'requin','panda')

const animals = ['chat', 'chien', 'tigre', 'lion', 'requin', 'panda'];

// ? Attention la plupart des méthodes modifient le tableau de départ

// Ajouter un ou plusieurs éléments à la fin d'un tableau
// Renvoie la nouvelle longueur du tableau
let response = animals.push('dauphin', 'loup');
console.log(response);

// Supprimer le dernier élément du tableau
// Renvoie l'élément supprimé
response = animals.pop();
console.log(response);

// Ajouter un ou plusieurs éléments au début du tableau
// Renvoie la nouvelle longueur du tableau
response = animals.unshift('hiboux');
console.log(response);

// Supprimer le premier élément du tableau
// Renvoie l'élément supprimé
response = animals.shift();
console.log(response);

// Réorganiser le tableau de la fin vers le début
animals.reverse();
console.log(animals);

// Modifier ou Ajouter ou Supprimer un élément dans un tableau
// Ajouter
animals.splice(1, 0, 'raton laveur');
console.log(animals);
// Modifier
animals.splice(6, 1, 'aigle');
console.log(animals);
// Supprimer
animals.splice(2, 1);
console.log(animals);

// Declarer un tableau contenant (Paris, Berlin, Rome, Moscou, Londres, Madrid)
/*
    Créer une fonction qui prend en parametre un tableau:
        Retire Madrid
        Ajoute au debut Vienne
        Rome devient Alger
        Retourne la taille du tableau
*/


const capitalize = ['Paris','Berlin','Rome','Moscou', 'Londres', 'Madrid'];
console.log(capitalize);

//retire madrid

capitalize.pop('Madrid');
console.log(capitalize);
// ajoute Vienne

capitalize.unshift('Vienne');
console.log(capitalize);

// ajouter alger
capitalize.splice(3,1,'Alger');   /* 3 cest l'indice , 1  c'est le nombre d'élément qu'on supprime  ''alger  c'est l'élément qu'on a ajoute */ 
console.log(capitalize);

// taille du table
 console.log(capitalize.length)

//  la fonction 

const modifyArray = (Array)=>{
    Array.pop()
    Array.unshift('Vienne')
    Array.splice(3,1,'Alger')

    return Array.length
}

const tailleCapitalize = modifyArray(capitalize);


/*for(...of...) permet de parcourir les elements d'un objet itéralise 
ex: tableau string*/


/* sur le tableau animals faire une boucle for() pour afficher tous les elements du tableaiu
sur le tableau animals faire une boucle for   (of ) pour affiche tout les elements du tableau */ 


//array animals 

for(let i = 0 ; i<animals.length; i++){
    console.log(animals[i]);
}

for (let animal of animals)[
    console.log(animals)
]

// forearch c'est une lethode qui permet d'itérer les elements dans un tableau

animals.forEach(function (animal){
    console.log(animal)
})

