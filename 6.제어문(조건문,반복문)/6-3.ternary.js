// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우

let fruit = 'apple';
if (fruit === 'apple') {
    console.log('🍎');
} else if (fruit === 'orange') {
    console.log('🍊');
} else {
    console.log('none')
}

fruit === 'apple' ? console.log('🍎') : console.log('none')

let emoji = fruit === 'apple' ? '🍎' : 'none';
console.log(emoji);