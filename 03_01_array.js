'use strict';

// 1. 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍇', '🥥'];
console.log(fruits);
console.log(fruits.length); //2
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
console.clear();
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// a. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// b. forEach
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
//forEach는 callback함수를 지정할 수 있고, 이 함수는 1~3개까지의 인자를 받을 수 있는데,
// 첫번째는 value, 두번째는 index, 세번째는 array 자체를 받는다.
// argument가 없을 경우는 void. (thisArg? 이렇게 ?물음표가 있으면 이 인자는 생략이 가능하다는 뜻.)
fruits.forEach(function (fruit, index, array) {
  console.log('forEach', fruit, index, array);
});

fruits.forEach((fruit, index) => console.log(fruit, index));
//위의 익명함수(콜백)를 function키워드를 생략한 뒤 arrow로 바꾼 모습.

// 4. Addtion, deletion, coby
// push : add an item to the end -> 아이템을 배열 맨 뒤에 추가.
fruits.push('🍓', '🍅');
console.log(fruits);

// pop : remove an item from the end -> 맨 뒤에서부터 아이템을 지움.
// 또 poped된 것이 return되기 때문에 변수에 할당하면 맨 뒤의 값만 받아올 수 있음.
// ex) const poped = fruits.pop();
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning -> 아이템을 맨앞에 추가.
fruits.unshift('🌶', '🥬');
console.log(fruits);

// shift : remove an item from the beginning -> 아이템을 맨 앞부터 삭제.
fruits.shift();
let shi = fruits.shift();
console.log(shi);
console.log(fruits);

// node !!! shift, unshift are slower then pop, push
// pop, push는 뒤에서부터 붙이고 빼기 때문에 앞의 아이템들을 움직일 필요 없음.
// shift, unshift는 아이템을 앞에서 지운 뒤, 뒤에것들을 앞으로 당겨와줘야 하기 때문에
// extra 작업이 수행 됨. 배열의 길이가 길 수록 이 작업이 더 오래걸림.
// 중간에 데이터를 넣고 빼는 것도 index를 활용해서 하면 됨. 그러나 전체 데이터가
// shifted 되어야 하는 작업은 느릴 수 밖에 없다.

// splice : remove an item by index position -> 인덱스값으로 아이템 지움.
fruits.push('🍆', '🥔', '🍇');
console.log(fruits);
fruits.splice(1, 1);
// index번호, 지울 갯수를 파라미터로 써줌.
// 만약 index번호만 입력하고 지울 갯수를 명시하지 않으면, 해당 인덱스부터 그 뒤의 모든 데이터를 다 지워버림.
console.log('splice : ', fruits);

fruits.splice(1, 1, '🌟', '🍙');
// 해당 인덱스를 지우고 지워진 자리에 새로운 데이터를 추가하고 싶을 땐 이렇게.
console.log(fruits);

// combine two arrays : 두 개의 배열 합치기
const fruits2 = ['🍝', '🍞'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);
console.log(fruits2);

// 5. Searching
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍆')); // 해당하는게 없으면 -1 리턴
console.log(fruits.indexOf('🍇'));

// includes : 해당 값이 존재하는지 안 하는지 true or false로 return
console.log(fruits.includes('🍇'));
console.log(fruits.includes('🍚'));

// lastIndexOf : 마지막 인덱스 값 찾기.
// 똑같은 값이 2개 들어있는 경우
// indexOf는 그 중 첫번째 것의 index값을 리턴,
// lastIndexOf는 그 중 마지막에 있는 것의 index값을 리턴한다.
console.clear();
fruits.push('🌰');
console.log(fruits);
console.log(fruits.indexOf('🍇'));
console.log(fruits.lastIndexOf('🍇'));

{
  const fruits = ['🍇', '🥥'];
  console.log(fruits);
  console.log(fruits.length); //2
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[fruits.length]);
}
