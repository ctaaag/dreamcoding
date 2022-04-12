//class는 생성자함수를 대신해서 간단하게 사용해 객체를 만들어낼 수 있음.
//class안에 있는 construct는 생성자함수의 new 처럼 함수를 만들어내는 생성자 역할을 함
//class의 구조는
class name {
    constructor(a,b) {
        this.key1 = a;
        this.key2 = b;
    }
    values = () => {
        return `${this.key1}:${this.key2}`
    }
    //함수를 만들려면 여기다가 
}

const case1 = new name('value1','value2');

console.log(case1.values());

console.clear();

class bread {
    constructor(name,emoji,price) {
        this.name = name;
        this.emoji = emoji
        this.price = price;
    }
    information () {
        return `${this.name}은 ${this.emoji}모양이며 가격은${this.price}입니다.`
    }
}

const baguette = new bread('baguette','🥖','3000원');
const bagle = new bread('bagle','🥯','2500원');
console.log(baguette.information());
console.log(bagle.information());

//인스턴스 레벨의 메서드와 클래스 레벨의 메서드는 다른 개념이다.
//인스턴스 레벨의 메서드는 각 인스턴스에 추가되는 속성으로 추가가되지만, 클래스 레벨은 각 인스턴스에 추가가 되지 않고
//클래스 자체의 메서드로 호출할 수 있음

// 따라서 클래스 레벨의 메서드를 만드는 것은 전체 클래스에 해당되는 정보를 표기할 때 적절함.
// 인스턴스레벨의 메서드는 각 인스턴스에 해당되는 동적인 메서드로 접근하는 것이 필요할 때 적용함.

class weather {
    constructor (weather, emoji, move) {
        this.weather=weather;
        this.emoji=emoji;
        this.move=move;
    }
    static maxWeather(n){
        return `날씨의 최대 경우의 수는 ${n}개 입니다`;
    } 
    allInformation = () => {
        return `오늘은 날씨가 ${this.emoji} 이기 때문에, ${this.move}로 이동합시다`
    }
}

const rainy = new weather ('rainy','🌧','🚕')
const sunny = new weather ('sunny','🌤','🚶‍♂️')

console.log(rainy);
console.log(rainy.allInformation()); 
console.log(weather.maxWeather(4))

//field란? 인스턴스의 프로퍼티?와 같다.
//생성자를 통해서 외부로부터 데이터를 받아서 객체를 만들 수 있는데
//접근제어자를 통해 캡슐화 하는 것. 

//다른 프로그래밍 언어는
//private(외부 접근 불가능)
//public(외부 접근 가능)
//protected(외부 접근 불가 자식상속자에서만 접근 가능)

// 자바스크립트에서는 기본적으로 public상태이고
// #을 통해서 private이 가능함. 단, #은 무조건 따로 필드를 만들어서 진행을 해야함. 

console.clear()

//접근자 프로퍼티 : 함수는 함수인데, 간단한 함수는 프로퍼티처럼 호출하고 싶을 때 접근자 프로퍼티 사용

class meal {
    constructor(food,emoji,taste) {
        this.food = food;
        this.emoji = emoji;
        this.taste = taste;
    }
    get review () {
        return`${this.emoji}의 맛은 ${this.taste}`
    };

    set won(value) {
        console.log('밥의 가격은'+value+'입니다.')
    }; // 함수가 원시데이터로 전환됨.
}

const breakfast = new meal('bread','🍞','soso');
const lunch = new meal('rice','🍚','good');
const dinner = new meal('pork','🥓','great');

console.log(breakfast.review);
breakfast.won='3500원'; // 원시데이터에 콘솔로그를 씌우면 입력된 원시데이터만 나옴.





console.clear();

class shopping {
    constructor(day,product,pricetag,count) {
        this.day = day;
        this.product = product;
        this.pricetag = pricetag;
        this.count = count;
    }
    point(emoticon) {
        console.log(`오늘의 소비는 ${emoticon}이다`);
    };
};

class Mon extends shopping {}
const mon = new Mon('Mon','fish','5000원','2개');
console.log(mon);
mon.point('👍');

class Tue extends shopping {
    constructor(day,product,pricetag,count,special) {
        super(day,product,pricetag,count);
        this.special=special;
    }
    issue(){
        console.log(`오늘은 돈을 너무 많이 썼어ㅠ`);
    }
    point(emoticon) {
        super.point(emoticon);
        console.log('우왕 굳!')
    }
};
const tue = new Tue('Tue','meat','20000원','4개','요거트');
console.log(tue);
console.log(tue.day);
tue.point('👎');
tue.issue();