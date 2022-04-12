//글로벌 객체
// 자바스크립트에서 this는 보통 전역객체를 의미함.
// 웹브라우저에서 this를 검색하면 window가 나옴.

//console.log(globalThis);
//console.log(this);


eval('const num = 2; console.log(num)')
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); // 문자열안에 숫자가 있다면 숫자로 출력
console.log(parseInt('12.43')); // 정수로 변환

// URL (URI, Uniform Resource Identifier 하위개념)
// 아스키 문자로만 구성되어야 함.
// 한글이나 특수문자는 이스케이프 처리해야함

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

//전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));