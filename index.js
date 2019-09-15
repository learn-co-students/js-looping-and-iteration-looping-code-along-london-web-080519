// Code your solutions in this file

function writeCards(people, celebration) {
    const returnArray = []
    for (let i = 0; i < people.length; i++) {
        returnArray.push(`Thank you, ${people[i]}, for the wonderful ${celebration} gift!`)
    }
    return returnArray;
}

let countdown = (num) => {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}