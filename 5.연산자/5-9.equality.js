// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2'); // 코딩은 정교해야하므로 타입도 함께 확인해주는 것이 좋음
console.log(2 == '1'+1);
console.log(2 == 1+1);
console.log(true == 1);
console.log(true === 1);

console.clear();

const obj1 = {
    name : 'js',
};

const obj2 = {
    name : 'js'
};

console.log(obj1 == obj2); // 객체는 다른 메모리주소를 갖고 있기 때문에 false
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);