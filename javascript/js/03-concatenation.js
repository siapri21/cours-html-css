/*------------------CONCATENATION---------------*/


// CONCATENATIONN : afficher du texte et des variables
//declarer des variables
// age , prenom , nom de famille , adresse ,  formation , organisme de formation

// recuperer dans une variable le message 
// Je m'appelle NOM PRENOM , j'ai Age ans et je suis en formation FROMATION à ORGANISME


const firstName = 'SIAPRI'
const lastName = 'OUATTARA'
const old = '23'
const thridName = 'developpeur web et mobile'
const forName = 'Doranco'
const fiveName = '149 av Gallinie 93200 Bagnolet'

console.log("Je m'appelle " + firstName + " "+ lastName  + " , j'ai " + old + "ans  et je suis en formation " +thridName + " " + "à " + forName  +" .");

// template js permet d'intepoler 

information = ` je m'appelle  ${firstName} ${lastName}  j'ai  ${old} ans et je suis en formation ${thridName}  à ${forName} `;

console.log(information);

message = 'Je m\'appelle'  +  firstName  + lastName  + 'j\ai' + old + 'ans  et je suis en formation ' + thridName   + ' ' + 'à' + forName  ;

console.log(message);

