// 자바스크립트는 매우 flexible한 언어이기 때문에 동시에 위험하기도 하다.
// 'use strict'를 선언하면 그러한 flexible한 요소를 제거해서 위험요소를 줄여준다.
// 반드시 사용!
'use strict';




// Dynamic typing : 선언할 때 어떤 타입인지 선언하지 않고 runtime(프로그램이 동작할 때)
// 할당된 값에 따라 타입이 변경될 수 있음을 뜻함. (타입스크립트에서는 선언 시 타입도 결정해야 함.)

// variable
// let (added in ES6) (Read and Write)
// premitive (기본)타입
// let : 블록으로 잡아주면 바깥에선 읽어들일 수 없음. (Block scope)
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name); //block scope 안에 있는 값에 접근하려 하니 아무것도 안 나옴.

let globalName = 'global name'; 
//Block scope 밖에서 잡아주는 변수는 어디서든 접근 가능한 global scope
//global scope 변수들은 프로그램 실행~종료까지 메모리에 적재되기 때문에 메모리를 많이 먹음.
//그래서 꼭 필요한 만큼만 선언할 필요가 있음.

// 반면 var는 블록을 철저히 무시. var로 선언하지 않고도 변수에 값을 넣는 것이 가능하고
// 값을 할당하기 전에도 출력할 수 있다. 밑에처럼. (출력 결과는 undefined가 나오긴 하지만 사실 오류가 나야 정상이다.)
console.log(age);
age = 4;
var age;
// 그래서 let을 사용한다. let은 블럭 안에서만 사용하며, {}블록 밖에 선언할 경우 전역변수가 된다.





// constant (read only)
// object type
// 값을 한 번 할당하면 절대 바꿀 수 없음. (immutable)
// immutable 데이터의 장점 : 보안성 (외부에서 값 변경을 시도할 수 없다.)
const dayInWeek = 7;
const maxNumber = 5;
//하지만 json형태로 값을 넣은 오브젝트는 그 안의 val을 바꿀 수 있음.
const ellie = {name: 'ellie', age: 29};
ellie.age = 21;





//특수한 number형
const infinity = 1 / 0;
//숫자를 0으로 나누면 무한이 나오기 때문에 결과는 Infinity
const negativeInfinity = -1 / 0;
//마이너스 숫자를 0으로 나누면 - Infinity
const nAn = 'not a number' / 2;
//숫자가 아닌 것을 나누려고 하면 NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);





// bigInt (fairly new, don't use it yet) 새로 추가된 숫자형으로
// 기존에 자바스크립트가 표현할 수 있었던 숫자(-2의 53승부터 2의 53승까지)보다 큰 숫자 가능.
// 숫자 마지막에 n만 붙여주면 bigInt가 됨. 
const bigInt = 123456789098765432123456789098765432123345677n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)





// template literals(`` 표현방법)
const brendan = 'brendan';
const greeting = 'hello' + brendan; //String + 변수도 가능.
console.log(`value:${greeting}, type: ${typeof greeting}`);





// boolean
// false : 0, null, undefined, NaN, '' 이런 것들 모두 false로 간주
// true : any other value (숫자 1,2,3,4,5, String 등등)
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);





// null : 너는 텅텅 빈거야~ 하고 선언해준 것. null이라는 값 할당.
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);





// undefined : 선언만 하고 값을 할당하지 않은 것.
let x;
console.log(`value: ${x}, type: ${typeof x}`)





// symbol : 같은 값을 줘도 고유한 식별자로 만들어 줌.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// 똑같은 값이라면 같은 식별자를 만들고 싶다면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(`${gSymbol1 === gSymbol2}, type: ${typeof gSymbol1}`);//true
// symbol타입의 값은 스트링으로 변환해줘야 (.description) 출력할 수 있음.
console.log(`value: ${symbol1.description}`);



