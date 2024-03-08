/*
?cibler  le button et verifier ce que je recupère

!ajouter un ecouteur d'evenement =>click

*/
// verifier si au click on affiche un message en console 
// creer un li 
// cible le input
// le texte li sera le texte de l'input (pas de textecontent)
// ajouter dans le ul


const todoList = document.querySelector('.btn');
// console.log(todoList);

todoList.addEventListener('click' , function (){
    const todoListInput = document.querySelector('#container')
    
    if( todoListInput.value != ''){
    const title = document.createElement('li');
    title.textContent = todoListInput.value;
    const todoListUl = document.querySelector('#todo-list');
    todoListUl.prepend(title);
    }
    
});

// ajouter un ecouteur sur l'ul =>click
// la cible changera sur l'ul => double click
//supprime l'element

todoList.addEventListener('click' ,function(e){
    e.target.style.textDecoration = 'line-through'
});


todoList.addEventListener('click', function(e){
    e.target.remove();
});