//객체란 서로 연관되어 있는 데이터를 묶어주는 것.
//객체에는 속성들이 존재함. 속성은 객체의 변수라고 생각하면 쉬움
//객체에는 프로퍼티(속성)과 메소드(행동)이 있음. 메소드는 객체 내의 함수를 이야기함
//순수 데이터 객체는 프로퍼티만 있는 객체를 이야기하고
//복합데이터(상태와 행동 객체 즉 메소드가 포함된 객체를 이야기함)
//비슷한 종류의 데이터를 다루는 여러 객체를 하나로 묶을 수 있는데 이를 생성자함수를 통해 간단하게 진행할 수 있음.
//생성자 함수

//객체의 기본 형태는 왼쪽에 있는 key값, value 값이 존재함
//value에 있는 값들은 모두 값으로 문자,숫자,함수등이 가능한데 모두 각각의 표현식으로 표기를 해줘야함

let apple = {
    name : 'apple',
    taste : 'sweet',
    shape : 'circle',
}

console.log(apple);

//객체 내의 속성에 접근하기 위해서는 세가지 방법이 있음.

console.log(apple.name); // 점 표기법
console.log(apple['taste']); // 대괄호 표기법

//속성을 추가하는 방법
apple.emoji='🍎'
console.log(apple);
console.log(apple.emoji);

//속성을 삭제하는 방법
delete apple.emoji;
console.log(apple);

//객체 내에서 동적으로 접근하는 방법 

const obj = {
    name : 'obj',
    hobby : 'tennis'
}

function getValue(obj, key) {
    return obj[key];
};
console.log(getValue(obj,'name'));

function addKey(obj,key,value) {
    return obj[key]=value;
};

console.log(addKey(obj,'job','teacher'))



// 객체의 축약버전
revel1 = 'revel1'
revel2 = 'revel2'
revel3 = 'revel3'

const revel = {
    revel1,
    revel2,
    revel3,
};

console.log(revel);

// 동적으로 접근하기

function revelName (revels, result) {
    return {
        revel1,
        revel2,
        revel3,
    };
};

console.log(revelName(revel1,revel1))

// 객체 내의 함수

const news = {
    good1 : 'great',
    good2 : 'soso',
    bad : '👎',
    todayFeeling : function() {
        console.log(`${this.good1}:😀 ${this.good2}:😀`)
    },
};

news.todayFeeling();

//생성자 함수

function newsTotal(feel,emoji) {
    this.feel = feel;
    this.emoji = emoji;
    this.display = function(){
        console.log(`${this.feel}: ${this.emoji}`)
    };
    return this;
}

const good = new newsTotal('great','😀')
console.log(good);
good.display();