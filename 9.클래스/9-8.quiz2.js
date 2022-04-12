// 정직원과 파트타임직원을 나타내는 클래스
// 직원들의 정보 : 이름, 부서이름, 한달 근무시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있음
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원


class Manager {
    constructor (name, part, time) {
        this.name = name ;
        this.part = part ;
        this.time = time ;
    }
}

class timeFull extends Manager {
    payMonth () {
        console.log(
            `${this.name}의 한 달 월급은 ${this.time*10000}원 입니다.`)
    }
}

class timePart extends Manager {
    payMonth () {
        console.log(
            `${this.name}의 한 달 월급은 ${this.time*8000}원 입니다.`)
    }
}

const Juhee = new timeFull('Juhee','marketing',60);
const Hansol = new timePart('Hansol','sales',20);
Juhee.payMonth();
Hansol.payMonth();


// class Manager {
//     constructor (name, part, time) {
//         this.name = name ;
//         this.part = part ;
//         this.time = time ;
//     }
//     payMonth () {
//         if (this.part='timeFull') {
//             console.log(this.time*10000*25)
//         } else if (this.part='timePart'){
//             console.log(this.time*8000*25)
//         }
//         else { console.log('다시 입력하세요')}
//     }

// }

// const hansol = new Manager('hansol','timeFull',8);
// const juhee = new Manager('juhee','timePart',4);

// hansol.payMonth()
// juhee.payMonth()