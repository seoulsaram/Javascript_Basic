//function
// - 가장 기본적인 빌딩블럭. 서브 프로그램이라고도 불리며 여러번 재사용이 가능

// 1. Function 선언 방법
// function name(param1, param2) { body --- return;}
// 중요! 하나의 함수는 한가지 일만 하도록 만들어야 한다.
// 함수의 이름을 작성할 땐 (변수이름은 명사로) 동작을 이름으로 지정해야 함(동사형태로)
// 만약 이름을 정하기 어려울 땐 함수안에 너무 많은 기능을 넣은건 아닌지 봐야 한다.
// 그럴 경우 함수를 세분화해서 만들어볼 고민을 해야 함.
// 함수는 JS에서 오브젝트이다.

//그래서 함수를 변수에 할당할 수도, 파라미터로 전달도 되고, 함수를 리턴할 수도 있게 된다.

function printHello(){
    console.log('Hello');
}
printHello();


function log(message){
    console.log(message);
}

log('Hello!');
log(1234);
//자바스크립틑에서는 인자로 받을 값의 타입을 분명하게 명시하지 않는다.
//타입이 동적으로 바인딩되는 언어이기 때문에.
//하지만 규모있는 프로젝트를 할 때는 이런게 문제가 될 수 있으므로
//파라미터의 타입을 지정해줘야만 하고, 분명하지 않은 코드는 에러가 나는 타입스크립트가
//더 좋다. 그러니 자바스크립트 공부를 하고 난 뒤 꼭 타입스크립트도 공부할 것.




//2. Parameters
// premitive parameters : passed by value 메모리에 value가 그대로 전달되어있기
// 때문에 값이 그대로 전달됨
// object parameters : passed by reference 오브젝트의 경우 메모리에 주소값이
// 저장돼 있기 때문에 주소값이 전달됨.

function changeName(obj){
    obj.name = 'coder';
    //전달된 오브젝트의 name을 무조건 coder로 바꾸는 코드.
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);





// 3. Default parameters (added in ES6)
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
//파라미터를 2개 받는 함수에 1개의 파람만 보내면 'Hi by undefined'라고 출력.
//이렇게 파라미터 중 하나가 undefined일 경우르 대비해 위와 같은 함수를
function showMessage2(message, from){
    if(from === undefined){
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
//이렇게 작성했다.
//하지만 es6에서는 파라미터 자리에 바로 적어줄 수 있게 되었다.
function showMessage3(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
} 
showMessage3('Bye!');




// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    //배열을 출력하는 간단한 방법1

    args.forEach((arg) => console.log(arg));
    //배열을 출력하는 간단한 방법 2
}
printAll('dream', 'coding', 'ellie');
// 파라미터를 ... 하고 전달하게 되면 값이 배열형태로 전달되게 된다.





// 5. Local scope 
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
console.clear();
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello'; //local variable
    console.log(message); 
    console.log(globalMessage);
    //console.log(childMessage);
    printAnother();
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();







// 6. Returnr a value
// 모든 함수는 return값이 들어있는데, 만약 우리가 return을 생략하면
// 내부적으론 return undefined; 가 생략되어 있는 것이다.
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum : ${sum(1,2)}`);






// 7. Early return, early exit
// 밑의 upgradeUser라는 함수의 기능이 user의 point가 10보다 클 때에만
// 업그레이드를 진행하는 것이라고 할 때, 밑의 코드는
// ~~일때에 ~~를 진행한다 와 같은 로직, 즉 블럭 안에 로직을 많이 작성하는 것은
// 가독성이 떨어진다.
// bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic..
    }
}

//good : 조건이 맞지 않을 때는 빨리 리턴을 해서 함수를 종료하고
// 조건이 맞을 때만 필요한 로직들을 실행하는 것이 좋다.
function upgradeUserGood(user){
    if(user.point <= 10){
        return;
    }
    //upgrade logic..
}







// First-class function
// functions are treated like any other variable : 함수는 값과 동일하게 처리된다.
// can be assigned as a value to variable : 변수에 값으로 할당할 수 있다.
// can be passed as an argument to other functions. : 다른 함수의 파라미터로 전달될 수 있다.
// can be returned by another function : 다른 함수에 의해 리턴될 수 있다.

//1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// : 함수 선언은 선언된 곳 보다 위에서도 호출할 수 있다. (호이스팅 된다.)
// 그러나 const 또는 let 변수에 할당된 함수는 호이스팅 안 됨. 함수 자체만 호이스팅이 됨.
// a function expression is created when the execution reaches it.
const print = function() { //익명함수를 변수에 할당
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));





// 2. Callback function using function expression
// : 함수표현식을 사용한 콜백함수
// 콜백함수 : 함수에서 함수를 부르는 것이다. 본체 함수가 어떤 작업이 완료되면 그 때 실행하려고
// 부르는 함수를 콜백함수라고 한다.
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function() {
    console.log('yes!');
};

//함수 키워드 옆에 이름을 지정한 것을 named funciton이라고 하는데
//이건 디버깅을 할 때 함수의 이름이 찍히도록 하기 위함이다.
//또는 함수 내부에서 자신을 부를 때(재귀)를 위해 이름을 지정하기도 함.
const printNo = function print(){
    console.log('No!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);





// Arrow function
// always anonymous
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
// function, return, {} 생략 가능
//const add = function(a,b){ return a + b; }

//한줄짜리 arrow func는 {}가 생략 가능하나, 여러줄일 경우 {}, return을 작성해야 한다.
const simpleMultiply = (a,b) => {
    //do something more
    return a * b;
};




// IIFE : Immediately Invoked Function Expression
// 바로 실행 함수. function블록을 ()로 감싼 뒤, 뒤에 함수 호출하듯 ();를 덧붙여주면 된다.
(function hello(){
    console.log('IIFE');
})();




//숙제 퀴즈!
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remainder
//입력받은 커맨드에 따라 a와 b의 값을 더하고, 빼고 곱하고 나누고 하기. 만약 다른 커맨드가 들어오면
//어떻게 처리할지 고민해보기



