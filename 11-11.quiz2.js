// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const arr=['🍌', '🍓', '🍇', '🍓']
const before='🍓'
const after='🥝'


const replace = arr.map((item) => {
    if (item === before) {
        return item = after;
    } else {
        return item ;
    }
});

console.log(replace);


// const replace = fruits.forEach(function(a){
//     const replace=[a];
//     console.log(replace);}) 

//딸기를 키위로 바꾸기
//나온 값들을 배열화



// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

fruits = [ '🍌', '🥝', '🍇', '🥝' ]
let Item = '🥝'

const result = fruits.filter(function(fruit){
    return fruit === Item});
console.log(result.length);


// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function match(input,search) {
    return input.filter(item=>search.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']));

//배열 2개를 합쳐서 바나나와 딸기를 추출.
// 각각의 배열에 바나나와,딸기가 들어있는지 체크하고 있다면 


// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums.filter(function(num){
    if(num>5) {
        return num
    }
})
console.log(result2);

const result3 = result2.reduce(function(calculate,value){
    calculate += value 
    return calculate
},0)

console.log(result3/result2.length);