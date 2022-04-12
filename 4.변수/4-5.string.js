//문자열 타입
let string = '안녕하세요';
console.log(string);
string = "'안녕'";
console.log(string);

string = '안녕!\n엘리야!\t\t내 이름은\\'
console.log(string);

//이스케이프 표현 : 특수 문자 표현에 대한 것. 아래 링크에 정보가 있음



//템플릿 리터럴 : 백틱(꺽쇠) 이용해서 편하게 써보기
let id = '엘리';
let greetings = "'안녕!," + id + "✋\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕!, ${id} ✋
즐거운 하루 보내요!'`;
console.log(greetings);