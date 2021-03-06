const fruits = ['π', 'π', 'π', 'π'];
for(let i = 0 ; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// λ°°μ΄μ λλ©΄μ μνλ κ²μ ν  λ
// μμ forλ¬Έμ κ°λ¨νκ² ν  μ μλ κ³ μ°¨ν¨μκ° μλ€.

fruits.forEach(function(value, index, array) {
    console.log('------------------');
    console.log(value);
    console.log(index);
    console.log(array);
})

console.log[fruits.forEach(function(a,b) {
    console.log(a)
    console.log(b);
})]

//forEachν¨μλ₯Ό μ§μ  λ§λ€λ©΄ μλμ κ°λ€.
// function forEach(array,action) {
//     for(let i = 0 ; i<array.length ; i++){
//         action(array[1]);
//     }
// }

fruits.forEach((value) => {console.log(value)})
//μμ κ°μ΄ νκΈ°λ κ°λ₯ν¨. ν¨μ νκΈ°λ² λ¨μΆμ ν΅ν΄ ν  μλ μμ.

console.clear();

//μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμ λ
//findλ μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν

const item1 = { name: 'americano', price: 1};
const item2 = { name: 'latte', price: 2};
const item3 = { name: 'chocolet', price: 3};
const cafe = [item1, item2, item3, item2];
console.log(cafe);
let found = cafe.find(function(value){
    return value.name === 'latte';
})
console.log(found);

//findIndex : μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν

found = cafe.findIndex(function(value){
    return value.name === 'latte';
})
console.log(found);

//λ°°μ΄μ μμ΄νλ€μ΄ νλλΌλ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§μΌλ©΄ true, νλ¦¬λ©΄ false 
let result = cafe.some((item) => item.name === 'chocolet');
console.log(result);

//λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§μΌλ©΄ true, νλ¦¬λ©΄ false
result = cafe.every((item) => item.name === 'chocolet');
console.log(result);

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
result = cafe.filter((item) => item.name === 'latte');
console.log(result);

console.clear();

//Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ°°μ΄/μμ±νλ κ².

const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item*2);
console.log(result);

result = nums.map(item => {
    if (item % 2 === 0){
        return item*2;}
        else {
            return item;
        }
    });
console.log(result);

//flatMap : μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ€
result = nums.map((item)=>[1,2]);
console.log(result);

result = nums.flatMap((item)=>[1,2]);
console.log(result);

result = ['dream', 'coding'].map(text => text.split(''));
console.log(result);

result = ['dream', 'coding'].flatMap(text => text.split(''));
console.log(result);


//sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬νκΈ°
//λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi','abc'];
texts.sort();
console.log(texts);

const numbers = [0,5,4,2,1,10];
numbers.sort();
console.log(numbers); // μ΄λ κ² λλ©΄ λ¬Έμμ΄λ‘ μΈμν΄μ λ¬Έμμ΄ μμλλ‘ μ§νλμ΄μ μ«μμμλλ‘ μλ¨
numbers.sort((a, b) => a - b); // μμλλ‘ μ λ ¬νκΈ°
console.log(numbers);

//reduce λ°°μ΄μ μμλ€μ μ μ΄μ κ°μ νλλ‘!
result = [1,2,3,4,5].reduce((sum, value) => {
    sum += value; // sum = sum+value
    return sum;
}, 0);
console.log(result);

result = [1,2,3,4,5].reduce((sum, value) => (sum += value) , 0);
console.log(result);