const fruits = ['π','π','π','π'];

// λ°°μ΄ μμ΄νμ μ°½μ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// const fruits = ['π','π','π','π'];
// μΆκ° λ° μ­μ  - μ’μ§ μμ λ°©μ
fruits[4] = 'π';
fruits[7] = 'π'; // μ΄λ κ² νλ©΄ λ°°μ΄μ κ³΅λ°±μ΄ μκΈ°κ² λ¨
fruits[fruits.length] = 'π' //μ΄λ κ² νλ©΄ μλμΌλ‘ κ°μ₯ λ§μ§λ§ λ°°μ΄μ λ€μ΄κ°κ² λ¨
console.log(fruits);

delete fruits[1]; // μ­μ λ μλ¦¬λ λΉμ΄μλ μλ¦¬κ° λ¨..
console.log(fruits);