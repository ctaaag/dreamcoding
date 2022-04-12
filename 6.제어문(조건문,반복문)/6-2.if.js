// 조건문 Conditional Statement
// if(조건) { }
// if(조건) { } else { }
// if(조건1) { } else if (조건 2) { } else {}

let fruit = 'orange';
if (fruit === 'apple') {
    console.log('🍎');
} else if (fruit === 'orange') {
    console.log('🍊');
} else {
    console.log('none')
}

// if (true or false) { -- } 조건문 안에 불리안으로 값을 평가해서 중괄호 안의 값을 출력

if ('??') {
    console.log('출력되면 안됨!');
} // 출력하면 안됨!이 출력됨.

if (2 > 1) {
    console.log('출력!')
}