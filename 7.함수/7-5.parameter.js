//매개변수(인자)의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguements 객체에 저장됨
//매개변수 기본값 Default Parameters a=1, b=1
//만약 매개변수에 새로운 값을 대입하면 기본값은 무시하고 새로운 값을 대입하여 계산됨.
function add(a,b) {
    console.log(a);
    console.log(b);
    console.log(arguments[0]);
    return a+b;
}
add(1,2); 

// Rest 매개변수는 몇 개의 인자를 전달받을지 모를 때 모든 것을 배열로 받고 싶을 때 사용가능

function sum(a,b,...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}
sum(1,2,3,4,5,6,7,8);


