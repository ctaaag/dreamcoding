// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 
// 카운터를 만들기
// Counter 클래스 만들기

class Counter {
    constructor(valueFirst){
        if (valueFirst >= 0) {
            this.value = valueFirst;
        } else {this.value = 0} ;
    }
    Value(){
        return this.value;
    }
    add(){
        return this.value++;
    };
    minus(){
        return this.value--;
    };
}

const counter = new Counter(2)
counter.add();
counter.add();
counter.minus();
console.log(counter.Value());





    // class Counter {
    //     constructor(people) {
    //         if (people>0) {
    //             this.people = people;
    //         } else {this.people = 0};
    //     }
    //     menu (food) {
    //         console.log(`주문하신 음식은 ${food}입니다.`);
    //     }
    //     price (won) {
    //         console.log(`결제하실 금액은 ${won}입니다.`);
    //     }

    // }

    // const menu1 = '된장찌개'
    // const menu2 = '김치찌개'

    // class Table1 extends Counter {};
    // const table1 = new Table1(4);
    // console.log(table1);
    // table1.menu(menu1);