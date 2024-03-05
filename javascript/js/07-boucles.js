/* ------------------BOUCLES-----------------*/


// les boucles sont des structures permettent d'executer plusieurs fois des instructions

// ecrire u programme qui demande à l'utilisateur de saisir de sinstruction
// compris entre 1 et 10
// si la reponse n'est pas comprsi entre 1 et 10 , affiche les message
// devait etre compris entre 1 et 10
// le programme doit ensuite dessiner un sapin de noel composé d'etoile(*)

// *
// **
// ***
// ****
// *****

// const message = prompt("entrez un nombre compris entre 1 et 10");
// while(message >= 1 || message <= 10);
//     // console.log("la reponse devrait etre comprise entre 1 et 10 ");


// let etoile = '';
// for(let sapin = 1 ;sapin <etoile ; sapin++){
//       etoile = etoile + '*';    
//       console.log(etoile);
// }

// console.log("siapri")


// boucle for qui affiche les nombresde 10,à 20
// for (let i=10 ; i<=20 ; i++){
//     console.log(i)
// }

//nombre paire 10 à 20

// for( let y = 10 ; y <=20 ;y=y+2){
//     // y = y%2;
//     console.log(y)
// }

// boucle while
// nombre de 10 à 20 paire

let sia = 10;
while(sia <=20){
    console.log(sia);
    sia = sia+2;
}

// demandez un nombre à l'utilisateur tant que ce nombre n'est pas le bon dites 
// le nombre est plus grand ou le nombre est plus petit

let  message = prompt("entrez un nombre");
const magiNumber = 99 ;

while(message != magiNumber){
    if(message < magiNumber){
        message = prompt("plus grand nombre");
    }else{
        message = prompt("plus petit")
    }
}

console.log("le nombre magique est " + magiNumber);



// const nombreCorrect = Math.floor(Math.random() * 100) + 1;

