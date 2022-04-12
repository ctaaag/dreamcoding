//래퍼객체 (Wrapper Object)
//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.

const number = 123; // number 원시 타입
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐
// 즉 넘버+자바스크립트 내장함수를 감싸는 객체로 변환된다는 것.
console.log(number.toString());

const text = 'text'
console.log(text) // 원시타입 호출
console.log(text.length) // string 객체로 변환
text.trim()