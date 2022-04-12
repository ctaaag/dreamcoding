// 접근자 프로퍼티 (Accessor Property)

// get은 클래스안에 있는 인스턴스 레벨의 메서드에 접근을 할 때, 단순한 메서드라서
// 함수처럼 접근 안하고 프로퍼티처럼 접근을 할 수 있다.
// 메서드 앞에 get만 붙여주면 이를 프로퍼티로 접근한다는 의미를 갖고 있음.

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    } 
    // 함수로 접근해야 student.fullname() 두 프로퍼티의 합을 실시간으로 반영한 값을 알 수 있다.
    // 그런데 함수는 본래 계산을 해야하지만 위와 같은 것은 계산이라기보단 단순 프로퍼티들의 합이기 때문에
    // 프로퍼티 속성처럼 인식하는 것이 좋겠다고 판단되면
    // 메서드 앞에 get을 붙여주면서 가능함. 따라서 프로퍼티로 접근을 할 수 있어서 접근자 프로퍼티라고 함.

    set fullName(value){
        return ('set'+value);
    }
    // set의 경우에는 함수를 프로퍼티처럼 만들고, 특정 값을 할당하고자 할 때 사용할 수 있음.
}

const student = new Student('수지', '김')
console.log(student.fullName);
console.log(student.fullName = '안 철 수');

function add(num1,num2){
    return `${num1+num2},text`
}

console.log(add(1,2))