// Code your solutions in this file

function writeCards(names, event){
    let newarray = [];
    for (let i = 0; i < names.length; i++){
        // console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        newarray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newarray;
}


function countdown(num){
    for (let i = num; i >= 0; i --){
        console.log(i);
    }
}