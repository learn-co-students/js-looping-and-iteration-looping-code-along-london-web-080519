// Code your solutions in this file

function writeCards(names, eventName) {
    let my_list = []
    for (let i = 0; i < names.length; i++) {
        let thanks = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
        my_list.push(thanks)
    }
    return my_list
}

function countdown(number) {
    let n = number
    while (n >= 0) {
        console.log(n)
        n--
    }
}