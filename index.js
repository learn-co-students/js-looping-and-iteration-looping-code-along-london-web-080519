import { createReadStream } from "fs"

// Code your solutions in this file
function writeCards(names, event){
    let cardArray = [];
    for (let i = 0; i < names.length; i++) {
        cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return(cardArray);  
}

function countdown(num){
    while (num >=0){
        console.log(num--); 
    }
}