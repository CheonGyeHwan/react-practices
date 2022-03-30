import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProduct1 = state.order.products;
updateProduct1.push({
    "no": "c002-003",
    "name": "블루양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProduct1, state.order.products === updateProduct1);
console.log('===============================================================');

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProduct2 = state.order.products.concat({
    "no": "c002-003",
    "name": "블루양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProduct2, state.order.products === updateProduct2);
console.log('===============================================================');

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProduct3 = [...state.order.products, {
    "no": "c002-003",
    "name": "블루양말",
    "price": 2000,
    "amount": 1
}];

console.log(state.order.products, updateProduct3, state.order.products === updateProduct3);
console.log('===============================================================');