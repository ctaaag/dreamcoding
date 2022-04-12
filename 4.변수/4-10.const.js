// let 재할당이 가능함.
let a = 1;
a = 2;

//const 재할당이 불가능
//1 . 상수
//2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이렇게 하면 안됨!

console.log(text);



//1. 상수
//tip) 상수를 변수화 할 때는 항상 대문자로 하고 단어 사이에는 _로 구분을 표기해야함
const MAX_FRUITS = 5;

//2, 재할당 불가능한 상수변수 또는 변수
const apple = {
    name : 'apple',
    color : 'red',
    display : '🍎',
} ;

