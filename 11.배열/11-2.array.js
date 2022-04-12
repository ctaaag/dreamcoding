//배열 생성방법

let array = new Array(2);
console.log(array);

array = new Array(1,2,3);
console.log(array);

array = new Array(1,2,3);
console.log(array);

array = Array.of(1,2,3,4,5); //함수를 이용하기 
console.log(array);

const anotherArray = [1,2,3,4]; // 배열 리터럴을 이용해서 만드는 법
console.log(anotherArray);

array = Array.from(anotherArray); //배열 불러오기
console.log(anotherArray);

array = Array.from('text'); //입력 값을 배열로 만들기
console.log(array);

//일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
//하지만 자바스크립트에서는 배열이 연속적이지 않음
//오브젝트와 유사함!
//자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
//이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음. (typed collections)

array = Array.from({
    0: '안',
    1: '녕',
    length : 2,
});
console.log(array);