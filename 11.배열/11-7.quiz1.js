// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

function replace(replaced) {
    for(i=0; i<replaced.length; i++) {
        if (replaced[i]==='🍓') {
            replaced[i]==='🥝'
        }
    } return replaced
}

array = ['🍌', '🍓', '🍇', '🍓']
const replaced = Array.from(array)
console.log(replace(replaced));
console.clear();

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(array) {
    let counter = 0;
    for (i=0; i<array.length; i++) {
        if (array[i] === '🥝') {
            counter++;
        }
    } 
    return counter;
};

const arr2 = [ '🍌', '🥝', '🍇', '🥝' ];
console.log(count(arr2)); // [키위 2개]


// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
console.clear();

function checkItem (input, search) {
    const result = [];
    for (let i=0; i<input.length; i++) {
        if(search.includes(input[i])) {
            result.push(input[i]);
        }
    } return result;
}

array1 = ['🍌', '🥝', '🍇'];
array2 = ['🍌', '🍓', '🍇', '🍓'];
console.log(checkItem(array1,array2))

