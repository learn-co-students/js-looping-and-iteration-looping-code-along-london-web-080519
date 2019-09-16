const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log('Wrapped ${gifts[i]} and added a bow!')}
  return gifts
}

const names = ["Ada", "Brendan", "Ali"]

// "Thank you, Ada, for the wonderful birthday gift!",
function writeCards(name, birthday) {
  let cards = [];
  for (let i = 0; i < name.length; i++) {
    cards.push(`Thank you, ${name[i]}, for the wonderful ${birthday} gift!`)};
  return cards
}

function countdown(num) {
  while (num >= 0) {console.log(num--)};
  return num;
}

countdown(10)
