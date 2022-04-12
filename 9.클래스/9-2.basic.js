//객체를 손쉽게 만들 수 있는 템플릿
//1. 생성자 함수 (오래된 고전적인 방법)
//2. 클래스 (현재 가장 많이 사용되고 있음.)

// 생성자 함수 버전
// function Fruit(name, emoji) {
//     this.name = name;
//     this.emoji = emoji;
//     this.display = () => {
//         console.log(`${this.name}: ${this.emoji}`);
//     };
//     // return this; 생략가능
// }

// const apple = new Fruit('apple','🍎')
// const orange = new Fruit('orange','🍊')

// console.log(apple);
// console.log(orange);
// console.log(apple.name);
// console.log(apple.emoji);

//클래스로 전환하기

class Fruit {
    //constructor를 생성자라고 함. (new 키워드로 객체를 생성할 때 호출되는 함수)
    constructor(name,emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    };
}
// apple은 fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍎')
// orange는 fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','🍊')

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display()