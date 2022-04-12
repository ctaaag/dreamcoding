// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할 때는 항상 맡은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign
// 이는 새로운 배열을 만드는 것이 아니라 기존 오브젝트의 주소값만 복사됨.


const pizza = { name:'🍕', price: 2};
const ramen = { name:'🍜', price: 3};
const sushi = { name:'🍣', price: 1};
const store1 = [pizza, ramen];
const store2 = Array.from(store1);

console.log('store1',store1);
console.log('store2',store2);

store2.push(sushi);
console.log('store1',store1);
console.log('store2',store2);


pizza.price = 4;

console.log('store1',store1);
console.log('store2',store2);
