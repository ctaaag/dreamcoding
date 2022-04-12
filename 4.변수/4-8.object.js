//객체란 연관있는 스트링. 즉 여러가지 데이터를 묶은 상태 혹은 행동을 객체라고 함
//따라서 객체는 복합데이터이다. {key:value}

let name = 'apple';
let color = 'red';
let display = '🍎'
let orangeName = 'orange';

let apple = {
    name: 'apple',
    color : 'red',
    display : '🍎',
};

console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

console.clear();


let orange = {
    name : 'orange',
    color : 'yellow',
    display : '🍊',
};

console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);