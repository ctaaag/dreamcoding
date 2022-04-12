// 객체 축약버전

const x = 0;
const y = 0;
//const coordinate = { x: x, y: y}; 밑의 결과값과 동일
//console.log(coordinate);

const coordinate = { x, y }; // 키이름과 참조하고 있는 변수의 이름이 동일한 경우 이렇게 가능함
console.log(coordinate);


const name = 'hbt';
const age = 30;

function makeObj(name, age) {
    return {
        name, //(name:name)
        age, //(age:age)
    };
};

console.log(makeObj(name,age));