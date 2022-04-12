// 1. 문자열의 모든 캐릭터를 하나씩 출력하라!
const text = 'Hello World!'

function Fulltext (text) {
    for(i=0; i<=text.length; i++) {
        console.log(text.charAt(i));
    } return
}

Fulltext(text)

// 2. 사용자의 아이디를 잘라내어 각각의 id를 배열로 보관

const ids = 'user1, user2, user3, user4';
console.log(ids.split(','));


// 3. 1초에 한 번씩 시계를(날짜포함) 출력
// setInterval api 사용하기

