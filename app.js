const {frutas, dinero} = require('./frutas');
const cowsay = require('cowsay');   


console.log(cowsay.say({
    text: 'Holaaaa',
    e: 'oO',
    T: 'U '
}));



frutas.forEach(item => {
    console.count(item);
});

console.log(dinero);
console.log('');
console.log('Hola desde GitHub🤷‍♀️');
