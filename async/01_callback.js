"use strict";

//JavaScript is synchromous.
//Execute the code block in order after hoisting.
//자바스크립트는 호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나 동기적으로 실행된다.
//hoisting : var, function declaration이 자동적으로 제일 위로 올라가는 것.

console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
console.log("3");
//우리가 지정한 시간이 지나면 콜백함수가 실행되는 메소드.
//우리가 전달해준 함수를 나중에 너가 불러줘. => 이게 콜백함수
//콜백함수는 어떤 작업이 끝난 뒤에 그 작업이 '야 내 작업 끝났으니까 이제 너 시작해' 하고 부르는 것.

//Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
  //declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;
}

printWithDelay(() => console.log("async callback"), 2000);

//Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    //onSuccess, onError은 콜백함수
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const user = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
user.loginUser(
  id,
  password,
  (userid) => {
    console.log("userid: " + userid);
    user.getRoles(
      userid,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
console.log(user);
//이런게 콜백지옥이라고 해서 콜백함수를 계속계속 쓰는 것인데
//가독성이 매우 안좋고, 유지보수도 힘들고 디버그도 어렵다.
