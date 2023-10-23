import { choice, remove } from './helpers.js';
import fruits from './foods';

let randomFruit = choice(fruits)
let allFruits = fruits
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log('Delicious! May I have another?');
allFruits = remove(allFruits, randomFruit);
console.log(`I'm sorry, we're all out. We have ${allFruits.length} left.`)