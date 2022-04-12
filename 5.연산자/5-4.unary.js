//단항 연산자(unary operators)
// + (양)
// - (음)
// ! (부정)

let a = 5;
a = -a; // -1 * 5
console.log(a);
console.log(-a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// + 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인할 수 있음.
// ! 한번만 부정하면 부정연산자가 되고, !! 두번 부정하면 불리안타입으로 변환됨.

console.clear();
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text');
console.log(+undefined);