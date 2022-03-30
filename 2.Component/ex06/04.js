import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

// let updateOrder = Object.assign({}, state.order, {receive: "전라남도 광양시"});

let updateOrder = update(state.order, {
    // 해당 패스의 값 변경 1
    receive: {
        $set: '전라남도 광양시'
    },
    // 해당 패스의 값 변경 2
    payment: {
        method: {
            $set: 'mobile'
        }
    },
    products: {
        // 배열 요소 변경(Index로 찾아서 변경)
        0: {
            amount: {
                $set: 5
            }
        },
        // 배열 요소 추가
        $push: [{
            no: 'c002-003',
            name: '블루양말',
            price: 2000,
            amount: 1
        }]
    }
});

console.log(
    state.order, 
    updateOrder);
console.log('===============================================================');