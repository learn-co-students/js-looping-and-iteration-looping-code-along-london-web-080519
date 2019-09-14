// Code your solutions in this file
function writeCards(array, celebration) {
    let thankYouCards = [];
    for (let i = 0; i < array.length; i++) {
    thankYouCards.push( `Thank you, ${array[i]}, for the wonderful ${celebration} gift!` );
  }
  return thankYouCards;

}

function countdown(number) {
    while(number >= 0) {
        console.log(number);
        number -= 1;
    }
}