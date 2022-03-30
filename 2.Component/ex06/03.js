import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = Object.assign({}, state.order, {receive: "전라남도 광양시"});

updateOrder.payment.method = "mobile";

console.log(
    state.order, 
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment);
console.log('===============================================================');