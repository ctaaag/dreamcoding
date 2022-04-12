let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수

console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수는 0b~
let ocral = 0o173; // 8진수는 0o~
let hex = 0x7b; //16진수는 0x~ 

console.log(binary);
console.log(ocral);
console.log(hex);

console.log(0/123); // 0
console.log(123/0); // Infinity
console.log(123/-0); // Infinity
console.log(123/'text'); // NaN(Not a Number)

let bigInt = 123456890123456890123456890123456890123456890123456890n
console.log(bigInt); // 정말 큰 숫자를 나타낼 때는 이런식으로 bigInt를 사용할 수 있음

