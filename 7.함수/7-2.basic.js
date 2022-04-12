function add(num1, num2) {
    const result = num1 + num2;
    return result
}

console.log(add(1,2));

let lastName = '김';
let firstName = '지수';

let lastName2 = '박';
let firstName2 = '철수';



function fullName(firstName,lastName) {
    return `${lastName} ${firstName} ✋`;
}
console.log(fullName(firstName,lastName))
console.log(fullName(firstName2,lastName2))
