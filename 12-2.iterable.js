// Iterable 하다는 건! 순회가 가능하다는 거지!
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은
// 순회 가능한 객체다!라는 것을 의미한다
// 순회가 가능하면 무엇을 할 수 있나
// 빙글빙글 도는 반복문, 연산자들을 사용할 수 있음.

const array = [1,2,3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해보기!
for(let item of array.values()) {
    console.log(item);
}