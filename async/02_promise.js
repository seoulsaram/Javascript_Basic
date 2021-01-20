"use strict";

//🌟Promise is a JavaScript object for asynchronous peration.
//비동기적인 것을 수행할때 콜백함수 대신 유용하게 쓸 수 있는 오브젝트다.
//state : pending(오퍼레이션 중인 상태) -> fulfilled (오퍼레이션이 완료된 상태) or rejected(오류나 예외 발생)
//제공자와 제공된 데이터를 쓰는 사람의 차이점을 이용하는 것이 중요하다.

//🌟Promise는 class이기 때문에 new연산자로 객체를 생성하고,
//생성자에게 executor라는 함수를 전달해 줘야 하는데,
//이 executor는 또 두가지 콜백함수를 전달받아야 한다. 함수가 정상적으로 처리됐을 때의 동작을 수행할 resolve와
//실패했을 때 수행할 reject라는 함수 두 가지를 받는다.
//여기서 함수가 성공했을 때 어떤 값을 resolve나 reject함수를 통해 전달해주지 않고
//그냥 return으로만 보내게 되면, promise의 상태는 완료되지 않은 pending에서 멈춰있게 되므로
//반드시 resolve, reject로 함수를 완결해줘야 한다.

//1.🌟 Producer (제공자)
//새로운 프로미즈가 만들어 질 때는 바로 실행이 된다.
//그래서 만약 바로 실행되지 않고 실행되기 전 어떤 작업이 필요한 경우(ex: 사용자가 클릭버튼을 눌러야 실행되어야 할 때)
//프로미즈를 좀 다르게 만들어야 한다. 이 점을 유의하기.
const promise = new Promise((resolve, reject) => {
  //보통은 좀 무거운 작업을 할 때 promise를 쓴다. 이런 작업을 동기적으로 작업하면 다음 코드를 수행하는데 시간이 너무 오래걸리기 때문에.
  //ex) network, read files
  console.log("doing something...");
  setTimeout(() => {
    //resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

//2.🌟 Consumers(데이터 사용자) : then, catch, finally
//then : promise가 잘 실행 되어서 최종적으로 resolve라는 콜백함수를 통해 전달한 값을 받아옴.
//catch : then을 통해 return된 결과에 catch를 호출하여 에러를 잡는 것. then을 통해 리턴된 것은 결국 promise이므로, promise.catch와 같다.
promise
  .then((value) => {
    console.log(value);
    //then은 이 함수가 잘 수행되었을 때 수행되는 resolve함수가 전달하는 값을 받아온다.
    //그래서 value에는 위의 Promise에서 resolve('ellie')의 ellie가 들어가게 된다.
  })
  .catch((error) => {
    console.log(error);
    //catch를 넣어주지 않아도 reject에 작성한 에러메세지가 출력되지만,
    //Uncaght error가 난다. 즉, 에러가 핸들링되지 않고 잡히지 않은 에러로 뜨는 것.
    //이렇게 catch를 넣어주면 파라미터error에
    //reject함수가 전달해주는 값인 "no network"가 들어간다.
  })
  .finally(() => {
    console.log("finally");
    //성공했든 실패했든 무조건 실행되는 함수가 finally
  });

//3.🌟 Promise chaining
const fatchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fatchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4.🌟 Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(`${hen} => 🥚`),
      reject(new Error(`${hen} => 🥚`)), 1000;
    });
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// const fatchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   });
//이렇게 만든것과 위의 것들의 차이는, fatchNumber는 바로 클래스를 선언한 것으로
//이걸 사용할 때는 인자를 넘기지 못한다.

//반면
// const getHen = () => new Promise((resolve, reject) =>{
//     setTimeout(() => resolve('🐓'),1000);
// });
//이것은 const getHen = function(){new Promise} 형태로 function이고,
//인자를 보내줄 수 있다.

getHen()
  //받아오는 값을 똑같이 다음 함수에 넘겨줄 때는 받고, 넘기는 부분을 생략해서
  //then에서 받아오는 함수를 바로 getEgg에 넣을 수 있다. => .then(getEgg)
  .then((hen) => getEgg(hen)) // => .then(getEgg)
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch((error) => console.log(error));

//에러를 더 잘 핸들링 해보자.
getHen()
  .then(getEgg) //getEgg에 문제가 생기면 아래를 리턴하자.
  .catch((error) => {
    return "🥔";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
//console.log부분도 마찬가지로 받아온 값을 바로 찍을땐
//받아온 값, 찍을 값을 생략할 수 있다. 그래서 console.log만 쓴 것.
