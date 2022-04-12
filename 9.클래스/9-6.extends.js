// 클래스 확장

// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다!');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자!');
//     }
//     sleep() {
//         console.log('잔다!');
//     }
//     play() {
//         console.log('놀자아!');
//     }
// }


class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자!');
    }
    sleep() {
        console.log('잔다!');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
    constructor (color, ownerName) {
        super(color); // super를 이용하면 부모 생성자함수를 호출할 수 있음
        this.ownerName = ownerName;
    }
    play() {
        console.log('놀자아!');
    }
    eat() {
        super.eat();// super를 이용하면 부모 생성자함수를 호출할 수 있음
        console.log('강아지가 먹는다!');
    }
}

const dog = new Dog('빨강이','택택');
console.log(dog);
dog.play();
dog.eat()
