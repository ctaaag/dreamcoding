// 함수 선언문 : function name() { }
// 함수 표현식 : const name = function () { }
// 함수표현식에 사용되는 이름 없는 함수를 무명함수라고 함.

let add = function (a, b) {
    return a+b ;
};
console.log(add(1,2));

// 화살표 함수 : const name = () => { }

add = (a, b) => {
    return a + b;
};
console.log(add(1,2));

add = (a,b) => a + b;
console.log(add(1,2));

// 생성자 함수 const object = new Function(); 뒤에 객체편에서 다룰 예정

//IIFE(Immedicately-Invoked Function Expressions, 즉각 반응 함수표현식)
function run() {
    console.log('😀');
};




// 만약 표현식으로 작성할 때 함수에 이름을 선언할 수는 있지만 해당 값이 정의가 안된
// 예를 들어보면

//let add = function sum(a, b) {
//    return a+b ;
//}
//console.log(sum(1,2))

// 위와 같이 선언하면 sum이라는 이름의 함수가 존재하지 않음.


//화살표함수