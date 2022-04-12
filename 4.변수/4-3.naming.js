// 주석을 달면 됨

/**
 * 변수 규칙!
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분함
 * 추천 : camelCase 이런식으로 하나 이상의 단어 조합은 단어가 바뀔 때마다 대문자로 시작하기
 * 예약어는 사용할 수 없음.
 * 숫자로 시작하는 것도 안되고, 특수문자도 안됨 (그러난 _,$ 두 가지는 예외)
 * 여러개의 변수를 1,2,3 숫자로 구분 x -> 최대한 의미있게 구체적으로 작성할 것.
 */

let apple ;
let redApple ; 

//나쁜 예제
let num = 20;
let audio1 ;
let audio2 ;

//좋은 예제 
let myAge = 20 ;
let backgroundAudio;
let windAudio;

//꿀팁! 아래처럼 하면 코드를 다시 사용할 때 편하고 가독성도 높아진다.
let audioBackground;
let audioWind;
