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

const message = prompt("saisir un nombre entre 1 et 10");
if(message < 1 || message>10){
    let  messageNumber = "la reponse n'est pas comprise entre 1 et 10";
}

let etoile = '';

for(let etoiles =1 ;etoiles++; etoiles<=message){
    etoile = etoile + '*';
    console.log(etoile);
}