// date 함수들
// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
console.log(now);
now.setMonth(10); //0이 1월 즉, 0부터 시작함.
console.log(now);
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString('en-US'));