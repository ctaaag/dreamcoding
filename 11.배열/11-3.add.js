const fruits = ['🍌','🍎','🍇','🍉'];

// 배열 아이템을 창조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// const fruits = ['🍌','🍎','🍇','🍉'];
// 추가 및 삭제 - 좋지 않은 방식
fruits[4] = '🍓';
fruits[7] = '🍓'; // 이렇게 하면 배열에 공백이 생기게 됨
fruits[fruits.length] = '🍓' //이렇게 하면 자동으로 가장 마지막 배열에 들어가게 됨
console.log(fruits);

delete fruits[1]; // 삭제된 자리는 비어있는 자리가 됨..
console.log(fruits);