function add(a, b){
    return a + b;
    // return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨.
    // undefined가 출력됨.
}

const result = add(1,2);
console.log(result);


function print(text) {
    console.log(text)
    //return undefined
}

console.log(print(1))

console.clear();

function print(num) {
    if(num<0) {
        return; // return undefined; 의 약자
    } console.log(num);
    // return undefined 여전히 숨겨져있음. 따라서 콘솔로그를 하면 undefined가 나옴
}
print(12);
print(-12);

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용 예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!