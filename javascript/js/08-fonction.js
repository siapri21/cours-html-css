console.log('siapri')

// une function n'est excutée que lorsqu'elle est appelée


// declare une fonction qui prend 3 parametres
// declare une variable tva    à 20% 


function siapri(x,y,z){
    const tva = 20/100;
    const result = x*y*z* tva ;
    return result
}

console.log(siapri(23 ,44, 55));

// l'addition

function addition(x,y){
    const res = x+y;
    return res
}

console.log(addition(2,9))

// arrow function (fonction fléché)

/* demander à l'utiliser de rentrer u nombre 
 creer une fct féchée qui prend en parametre un nombre
 et quia ffiche dans la console si le   nombre est pair ou imapaire
 appeler la fct en lui passant le nombre 5 en parametre
 ppeler la fonction en lui passant le nombre 256 en parametre*/


//  let message = prompt("entrer un nombre");

//  const pairImapaire =i=>{
//     if(  i%2 ==0){
//         console.log("pair");
//     }else {
//         console.log("impaire")
//     }
//  }
 
//  const messages = pairImapaire(message);
//  console.log(messages);


// fizz buzz

let  reponse = prompt("donnez-moi un nombre ");

const fizzBuzz = x=>{
    if(x %3 ==0 && x %5 ==0 ){
        console.log('Fizz');
    }else if (x % 5==0){
        console.log('Buzz');
    }else if (x % 3==0){
        console.log('fizzbuzz');
}else{
    console.log(x);
}

}

const message = fizzBuzz(reponse);
console.log(message);
