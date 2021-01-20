'use strict';

// 오브젝트는 key:value의 집합체이다.
// key는 항상 String타입으로 전달해야 한다. (''를 사용해서)
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age : 4};
print(ellie); //ellie  4 출력
console.log(ellie); // {name : "ellie", age: 4} 출력





//자바스크립트는 동적으로 타입이 runtime때 결정되는 언어.
ellie.hasJob = true; //엘리 오브젝트에 값 추가(hasJob = key, true = value)
console.log(ellie.hasJob);
console.log(ellie);

delete ellie.hasJob; //엘리먼트 지우기
console.log(ellie.hasJob); //undefined




//Computed properties : 계산된 프로퍼티
//오브젝트의 프로퍼티에 접근하는 두 가지 방법
console.log(ellie.name);
//정말 그 key에 해당하는 값을 가져오고 싶을 때 사용하는 방식
console.log(ellie['name']);
//computed방식. []사용하고, 반드시 String타입으로 key를 써줘야 함.
//실시간으로 원하는 키 값을 가져오고 싶을 때 사용한다.
ellie['hasJob'] = true;
console.log(ellie.hasJob);

//구체적인 예로, key를 사용자에게 입력받아야 하는 함수일 경우
//그 key가 어떤 타입으로 들어올지 코딩하는 시점에서는 알 수 없을 수 있다.
//이 때 console.log(ojb.key)이렇게 호출하면 오브젝트에 key라는 프로퍼티가 없는데?
//하면서 undefined가 뜬다.
//이 때 console.log(obj['key]) 를 사용
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
//이렇게 동적으로 key에 관련된 val을 받아와야 할 때 유용하다.





//Property value shorthand :
const person = {name: 'bob', age:2};
const person2 = {name: 'stee', age:3};
const person3 = {name: 'dave', age:90};
//계속 반복되는 name: / age: 를 생략할 수 있도록 function을 만든다.
//이 function은 field + method 구성의 class와 같이 순수하게 오브젝트를 생성하는 용도로
//쓰이는데, 이런 function의 이름은 대문자로 시작하게 만든다.
//필드도 this. 를 붙여준다. 
//호출할 때도 new 연산자를 사용하면 자바스크립트 엔진이 알아서 오브젝트를 생성한다.


function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    // return this; 생략 가능
}

const person4 = new Person('gayeon', 30);
console.log(person4);




//in operator : 해당하는 오브젝트 안에 key가 있나 없나 확인해줌
console.log('name' in ellie); // ture



//for ..in vs for..of
//for (key in obj)
console.clear();
console.log(ellie);


// ellie가 가지고 있는 키들이 key라는 지역변수에 할당된다.
for(let key in ellie){
    console.log('key:' + key); //key만
    console.log(ellie[key]); //value만 출력
    //key값이 나옴. 이렇게 해당 오브젝트에 어떤 key들이 들어있는지 확인해 볼 수 있다.
}




// 배열이 담긴 값을 모두 출력하는 함수 두 가지 방법.
// array.lenght 또는 for..of 를 사용
const array = [1,2,3,4];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(let value of array){
    console.log(value);
}





//cloning
const user = {name : 'ellie', age: '20'};
console.log(user);
const user2 = user; //user2에 user를 복제
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for(let key in user){
    user3[key] = user[key];
}
console.log(user3);



//new way : Object.assign
//유의할 점
//const user4 = Object.assign(user);
//이런식으로 빈 객체를 dest로 설정하는게 아닌 assign()의 첫번째 매개변수로 user를 넣어주는 순간,
//Object.assign(user)의 결과값은 그냥 user와 똑같이 되어버림.
//따라서 const user4 = user; 이 되므로, 같은 레퍼런스를 가리키고 있으니
//user4.name='hi' 이런식으로 하면 user.name='hi' 가 되어버린다.
//따라서 꼭 assign()의 첫번째 매개변수로는 빈 객체를 만들어서 넣기.

//const user4 = {};
//Object.assign(user4, user);
const user4 = Object.assign({}, user); 
//위의 두 코드를 한 줄로 바꾼 것.
console.log(user4);

//여러개의 인자를 전달할 경우
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);   //blue만 출력
console.log(mixed.size);    //big만 출력
//blue만 출력되는 이유는 앞에 있는 인자와 뒤의 있는 인자의 key가 같으면
//뒤에 있는 것으로 덮어씌워지기 때문임.