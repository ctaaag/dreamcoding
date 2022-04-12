// 숫자 함수 (Number.)

const num1 = 123;
const num2 = new Number(123);
console.log(num1);
console.log(num2);
console.log(typeof num1);

//사용 예시. 입력된 값이 숫자인지 확인할 때

if (num1 === Number.NaN){} // num1이 숫자인지
if (Number.isNaN(num1)){} // num1이 숫자인지
if (num1 < Number.MAX_VALUE){} // num1이 숫자인지


//지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
//e+2 = 10의 2제곱이다. 따라서 1.02*(e+2)와 같이 지수로 표기할 때 사용함
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());

//숫자를 그냥 문자열로 전환
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));//해당 지역에 맞게 숫자를 표기

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));//5자리까지 보고 싶어
console.log(num4.toPrecision(4));//4자리까지 보고 싶어
console.log(num4.toPrecision(2));//2자리까지 보고 싶어. 만약 전체자릿수가 표기가 안된다면 지수표기법으로 표기됨

console.log(Number.EPSILON); // 0과 1사이에 가장 작은 숫자