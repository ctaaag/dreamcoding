//불리안 타입

let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예! 변수명에 is형용사or명사 이런식으로 오면 -한 것에 대한 결과값이 궁금하다는 것
let isFree = true ; 
let isActivated = false ;
let isHappy = true ;
console.log(isActivated);

// 이런식으로 클리어 하면 터미널에는 터미널 창을 깨끗히 만든 상태에서 아래부터 출력함
console.clear();

//Falsy 거짓인 값, 변수명에 !!를 붙이게 되면 해당 값의 true of false 여부를 확인해줌
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

//Truty 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);

