// static 정적 프로퍼티, 메서드

class Fruit {
    //constructor를 생성자라고 함. (new 키워드로 객체를 생성할 때 호출되는 함수)
    constructor(name,emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    static makeRandomFruit(){
        return new Fruit('banana','🍌');
    }
    //인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    };
}

//클래스 레벨의 메서드
const banana = Fruit.makeRandomFruit();
console.log(banana);

//인스턴스 레벨의 메서드
// apple은 fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','🍎')
// orange는 fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange','🍊')

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);



