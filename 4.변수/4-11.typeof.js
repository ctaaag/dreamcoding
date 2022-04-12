// 동적타입 = weakly type
// 변수를 선언하는 선언문이 동일하고 데이터가 문자열,숫자,boolean에 따라서 타입이 결정됨
// 그러나 정적타입은 문자열을 선언하는 변수 int가 있으면 다른 타입의 데이터가 올 수 없음

variable = {}
console.log(typeof variable);

variable = function () {} ;
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');