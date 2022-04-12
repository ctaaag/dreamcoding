//객체 리터럴 
//객체는 자신과 연관된 속성을 갖는다. 객체의 속성은 객체에 붙은 변수라고 설명할 수 있음.

// Object literal { key : value }
// new Object()
// Object.create();
//key - 문자, 숫자, 문자열, 심볼 
//value - 원시값, 객체(함수)

let apple = {
    name : 'apple',
    'hello-bye' : '✋',
    0:1,
    ['heloo-bye1'] : '✋',
} ; 

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // 마침표 표기법 
console.log(apple['heloo-bye1']); // 대괄호 표기법
apple['name'];

//속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']); // 대괄호 표기법은 꼭 ''를 꼭 같이 넣어야함.

//속성 삭제
delete apple.emoji;
console.log(apple);