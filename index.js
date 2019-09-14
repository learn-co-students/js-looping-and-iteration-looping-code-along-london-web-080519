// Code your solutions in this file

function writeCards(cards) {
    const thanks = [];
    for(let i=0; i<cards.length; i++) {
        thanks.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return thanks;
};


function countdown(myNum) {
    let i = myNum;
    while (myNum > -1) {
        console.log(myNum--);
    }
};
