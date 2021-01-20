'use strict';

const value1 = true;
const value2 = 4 < 2;

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('🦹🏻‍♀️');
    }
    return true;
}



// ||, && 연산 시 주의사항
console.log(`or: ${value1 || value2 || check()}`);
// or연산은 하나만 true여도 true 리턴. 비교값이 가벼운 순서로 배치해야 한다.
// 앞에가 false, 두번째도 false일 시, 마지막에 check함수를 호출하는 것이 제일 좋다.
// 그래서 expression이나, 함수를 가장 뒤에 위치. 연산 과정이 가볍고 빨라짐.


console.log(`and: ${value1 && value2 && check()}`);
// and연산은 모든 값이 true일 때만 true를 리턴한다.
// 즉, 앞에 값 하나만 false여도 false이기 때문에 뒤의 연산을 안 해버리므로
// 무거운 것을 뒤로 배치. (앞에가 false면 굳이 무거운 연산 안 해도 되게.)






/* null값 체크 시 유용한 함수 : null오브젝트가 아닐 때만 해당 오브젝트의 값 가져오기 함수.

if(nullableObject != null){
    nullableObject.somthing;
}

*/





// ! (not) : 값을 반대로 바꿔줌
console.log(!value1); //true였는데 false가 됐다!





//object equality by reference : 참조값 비교하기
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false (주소값 다름)
console.log(ellie1 === ellie2); //false (주소값 다름)
console.log(ellie1 === ellie3) //true (같은 주소값을 가지니까)

console.log(0 == false); //ture
console.log(0 === false); //0은 boolean타입이 아니므로 false
console.log('' == false); //true
console.log('' === false); //''은 boolean타입이 아니므로 false
console.log(null == undefined); //true
console.log(null === undefined); //false





for(let i = 1; i <=10; i ++){
    if(i%2 === 0){
        console.log(`for : ${i}`);
    }
}

for(let i = 0; i < 10; i++){
    console.log(`i : ${i}`);
    if(i > 8){
        break;
    }
}
