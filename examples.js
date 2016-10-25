console.log(dog)

var improvedWord = dog.capitalizeFirst('bark')

console.log(improvedWord);

//Testing the padLeft (word, char, length)
// console.log(dog.padLeft('1','0',2)) // --> Expecting 01

// console.log(dog.padLeft('1','0',3)) // --> Expecting 001

// console.log(dog.makeItGreen())

console.log(dog.padLeft('1')) //===> Expecting 01

//Example of homework
console.log(dog.one('h1'))

//Example of jQuery
// $('.navbar')

var match = dog.one('.navbar')
// console.dir(match.getAttribute('class'))
console.dir(match.getProp('innerHTML')

var pizza = {
    cheese: 'cheddar',
    toppings: 'lettuce',
}
var property = 'toppings'
console.log(pizza[property])// --> Dynamic property names
