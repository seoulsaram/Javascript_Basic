"use strict";

//async & await
//clear style of using promise

//1.🌟async
//function fetchUser(){ return 'ellie';} -> 이건 기존의 동기적으로 실행하는 함수
function fetchUser() {
  // 서버에서 데이터를 10초뒤에 받아온다고 가정해보자..리턴은 ellie다.
  return new Promise((resolve, reject) => {
    resolve("ellie");
  });
}
const user = fetchUser();
user.then(console.log);
console.log(user); //fulfilled

//1.1 promise를 더 간단하게 사용하는 방법이다.
//함수 앞에 async를 붙여주고, return에 new Promise 선언을 생략하고
//바로 resolve값을 넣어주면 된다.
//그러면 함수 안의 코드블럭이 자동으로 promise로 변환되어 실행된다.
async function fetchUser() {
  return "ellie";
}

const user2 = fetchUser();
user2.then(console.log);
console.log(user2);

//2. 🌟await : async가 붙은 function 안에서만 사용할 수 있다. (즉 promise function 안에서만)
//await은 promise가 fullfill되거나 reject될 때까지 async함수의 실행을 일시정지하고,
//promise가 fullfill되면 async함수를 일시 정지한 부분부터 실행한다.
//이때 await문의 반환값은 promise에서 fulfill된 값이 된다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
  //성공 시 delay를 부른 함수에서 전달한 밀리세컨드와, 나를 부른 함수가
  //잘 작동되어서 리턴한 값을(resolve)전달 받는다.
}

async function getApple() {
  await delay(2000);
  return "🍎";
  //위의 delay 함수를 불러서 3초를 전달하고, 3초 뒤에는 사과를 리턴.
}

async function getBanana() {
  await delay(2000);
  return "🍌";
}

//🌟 getBanana를 Promise 선언으로 만들어보면
function getBanana() {
  return delay(1000).then(() => "🍌");
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  //사과와 바나나 각각 다운받는데 서로 연관성이 없기 때문에
  //사과받아지고, 바나나받아지길 기다릴 필요가 없다.
  //그래서 바나나와 사과가 동시에 병렬적으로 받아지도록 하기 위해
  //위와같이 프로미스를 사용하면 바로 실행되는 속성을 이용해서 만들었다.
  //근데 코드가 넘 지저분하다.

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. 🌟useful Promise APIs
// Promise.all() : 프로미즈들을 배열로 보내면, 모든 프로미스들이 병렬적으로 다 받을 때까지 모아주는 아이임.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}

pickAllFruits().then(console.log);

//🌟 Promise.race() : 어떤 것이든 먼저 받아져온 것 하나를 보여주고싶을 때.
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

// 🌟async function에서 에러를 잡아보는 나의 시도
async function getBananaError() {
  try {
    await delay2(2000);
    return "🍌";
  } catch (error) {
    throw new Error("fail");
  }
}

function delay2(ms) {
  return new Promise((resolve) => setTimeout(reject, ms));
}

getBananaError().then(console.log).catch(console.log);
