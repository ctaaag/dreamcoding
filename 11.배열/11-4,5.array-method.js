// 배열의 함수들
// 배열 자체를 변경하는지,새로운 배열을 반환하는지 check!!
// 해당 함수가 인자를 전달안하는지, 하는지(한다면 어떤식으로 하는지 체크)

const fruits = ['🍌','🍎','🍇'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

//특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎'));

//추가 - 제일 뒤
let length = fruits.push('🥝'); // 배열자체를 수정
console.log(fruits);
console.log(length);//리턴값은 길이이다.

//추가 - 제일 앞
length = fruits.unshift('🍋');
console.log(fruits);
console.log(length);

//제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

//제거 - 제일 앞
lastItem = fruits.shift();
console.log(fruits);
console.log(lastItem);

//중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // (해당 숫자부터, 해당 숫자개수만큼 삭제, 추가하고 싶은 것)
console.log(fruits); // 배열자체 수정
console.log(deleted); // 삭제된 사과 출력
fruits.splice(1, 0, '🍐','🍍');//배열 추가하기
console.log(fruits);

//잘라진 새로운 배열을 만듬

let newArr = fruits.slice(0,2);
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(); //아무것도 입력안하면 전체 잘라냄
console.log(newArr);
newArr = fruits.slice(-1); // -1부터 슬라이스하면 제일 마지막에 있는 것 잘라냄
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

//중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1,2,3],
    [4,[5,6]],
];

console.log(arr);
console.log(arr.flat(1)); //1단계까지만 플랫을 해줌.
console.log(arr.flat(2)); //2단계까지 플랫을 해줌.

//특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr);

arr.fill('s',1,3);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);