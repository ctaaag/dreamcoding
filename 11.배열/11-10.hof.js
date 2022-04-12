const fruits = ['🍌', '🍓', '🍇', '🍓'];
for(let i = 0 ; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// 배열을 돌면서 원하는 것을 할 때
// 위의 for문을 간단하게 할 수 있는 고차함수가 있다.

fruits.forEach(function(value, index, array) {
    console.log('------------------');
    console.log(value);
    console.log(index);
    console.log(array);
})

console.log[fruits.forEach(function(a,b) {
    console.log(a)
    console.log(b);
})]

//forEach함수를 직접 만들면 아래와 같다.
// function forEach(array,action) {
//     for(let i = 0 ; i<array.length ; i++){
//         action(array[1]);
//     }
// }

fruits.forEach((value) => {console.log(value)})
//위와 같이 표기도 가능함. 함수 표기법 단축을 통해 할 수도 있음.

console.clear();

//조건에 맞는(콜백함수) 아이템을 찾을 때
//find는 제일 먼저 조건에 맞는 아이템을 반환

const item1 = { name: 'americano', price: 1};
const item2 = { name: 'latte', price: 2};
const item3 = { name: 'chocolet', price: 3};
const cafe = [item1, item2, item3, item2];
console.log(cafe);
let found = cafe.find(function(value){
    return value.name === 'latte';
})
console.log(found);

//findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환

found = cafe.findIndex(function(value){
    return value.name === 'latte';
})
console.log(found);

//배열의 아이템들이 하나라도 조건(콜백함수)에 맞으면 true, 틀리면 false 
let result = cafe.some((item) => item.name === 'chocolet');
console.log(result);

//배열의 아이템들이 전부 조건(콜백함수)에 맞으면 true, 틀리면 false
result = cafe.every((item) => item.name === 'chocolet');
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = cafe.filter((item) => item.name === 'latte');
console.log(result);

console.clear();

//Map 배열의 아이템들을 각각 다른 아이템으로 배열/생성하는 것.

const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item*2);
console.log(result);

result = nums.map(item => {
    if (item % 2 === 0){
        return item*2;}
        else {
            return item;
        }
    });
console.log(result);

//flatMap : 중첩된 배열을 쫘악 펴줌
result = nums.map((item)=>[1,2]);
console.log(result);

result = nums.flatMap((item)=>[1,2]);
console.log(result);

result = ['dream', 'coding'].map(text => text.split(''));
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);


//sort 배열의 아이템들을 정렬하기
//문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi','abc'];
texts.sort();
console.log(texts);

const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers); // 이렇게 되면 문자열로 인식해서 문자열 순서대로 진행되어서 숫자순서대로 안됨
numbers.sort((a, b) => a - b); // 순서대로 정렬하기
console.log(numbers);

//reduce 배열의 요소들을 접어서 값을 하나로!
result = [1,2,3,4,5].reduce((sum, value) => {
    sum += value; // sum = sum+value
    return sum;
}, 0);
console.log(result);

result = [1,2,3,4,5].reduce((sum, value) => (sum += value) , 0);
console.log(result);