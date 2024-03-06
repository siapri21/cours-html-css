/* ------------------------OBJECTS----------------------------*/ 

/* les objects sont des stuctures de données complexes qui permettent
de stocker des valeurs et des fonctions ensemebles*/

const person = {
    firstName : 'siapri',
    lastName :'Ouattara',
    age : 23,
    formation : ['algo', 'html', 'css', 'javascript'],
    job :{
        name : 'formateur',
        hour : 35,
    },
    getIdentify : function(){
        return ` je m'appelle SIAPRI OUATTARA `
    }

}

console.log(person.lastName);

// pour acceder à la propriete d'un objet

console.log(person.job.hour);

/* creer un objet  car 
model => audi
annee => 2010
couleur => red
option => tableau => siege chauffant , vitre electrique
moteur => objet => cylindre , nombre de chevaux
description => function => 'je suis une audo sortie en 2010*/ 


/* afficher le model
affiche la premier option 
affiche la description*/


const car ={
    model: 'audi',
    annee : 2010,
    couleur : 'violet',
    option : ['siege chauffant', 'vitre electrique'],
    moteur :{
        cylindre: 'cercle',
        nombre_de_chevaux : 5,
    },
    description : function(){
        return 'je suis une audo sortie en 2010'
    }
}

console.log(car.model);
console.log(car.option[0]);
console.log(car.description());