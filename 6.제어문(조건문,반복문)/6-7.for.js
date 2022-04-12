// 반복문 Loop Statement
// for(변수선언문 ; 조건식; 증감식) {}
// 실행순서 :
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 떄까지 2번과 3번을 반복함



for(let i = 0; i < 5; i++) {
    console.log(i);
}

// for 반복문에서는 i라는 변수명을 자주 사용함.
// for 안에 for를 중첩해서 사용할 수 있음



for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        console.log(i,j)
    }
}

// 무한루프는 안좋음. 루프가 언젠가 종료가 될 수 있도록 설정할 것.
// 반복문 제어 : continue, break;


console.clear();

for(let i = 0; i < 20; i++) {
    if(i === 10) {
        continue;
        console.log('i가 드디어 10이 되었다!');
        break;
    }
    console.log(i);
}
