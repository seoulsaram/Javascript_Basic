

//JSON : JavaScript Object Notation

//1. Object to JSON : 객체를 제이슨으로 바꾸기
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color: 'white',
    size : null,
    birthDate: new Date(),
    jump : () => {
        console.log(`${name} can jump`);
    }
};
rabbit.jump();

json = JSON.stringify(rabbit);
console.log(json);
//위의 rabbit을 Json타입으로 바꿔보면, jumb라는 함수만 빼고 변환이 된 걸 확인할 수 있다.
//제이슨 타입에 함수는 포함되지 않기 때문이다.

//console.clear();
json = JSON.stringify(rabbit,["name"]);
console.log(json);
//내가 원하는 property만 json으로 변환 가능(배열 형태로 지정)

json = JSON.stringify(rabbit,['name', 'color']);
console.log(json);




console.clear();
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return value;
});
/*
key : , value : [object Object] -> 제일 처음에는 rabbit을 감싸고 있는 제일 최상의 val이 출력됨
key : name, value : tori
key : color, value : white
key : size, value : null
key : birthDate, value : 2020-12-23T14:22:47.998Z
key : jump, value : () => {
    console.log(name + "can jump");
}
*/
console.log(json);




//2. JSON to Object
// parse(json) : json을 object로 만듦
//console.clear();
json = JSON.stringify(rabbit);
console.log(json); //json타입일 때의 출력 결과
//{"name":"tori","color":"white","size":null,"birthDate":"2020-12-23T14:30:36.236Z"}

const obj = JSON.parse(json);
console.log(obj); //obj타입일 때 출력결과
//{name: "tori", color: "white", size: null, birthDate: "2020-12-23T14:30:36.236Z"}
//birthDate: "2020-12-23T14:30:36.236Z"
//color: "white"
//name: "tori"
//size: null
rabbit.jump();
//rabbit객체가 Json객체가 될 때 함수는 제외되고 변환이 되었다.(json)
//이렇게 함수가 제외된 상태의 데이터를 다시 object로 변환을 하니 해당 함수가 사라져서
//jump함수를 실행하려고 하면 오류가 난다. obj.jump()

//근데 jump가 오브젝트에 있는 key를 못 인식한다.. 왜그러니???


console.log(rabbit.birthDate.getDate());
//rabbit 안에 birthDate의 value로는 new Date객체가 들어있어서,
//Date안에 있는 메소드들을 사용할 수 있지만 rabbit을 json으로 변환해서
//birthDate의 value값으로는 new Date의 리턴값이 String으로 들어가 있게 되고,
//이 상태를 obj로 다시 변환을 한다 해도 해당 String값이 다시 Date형태의 오브젝트가 되는 것이 아니라
//그냥 String이기 때문에 밑에처럼 출력할 경우 오류가 난다.
//console.log(obj.birthDate.getDate());
console.log(rabbit.birthDate);


//parse라는 메소드로 reviver이라는 콜백함수를 전달할 수 있다.
//String타입이 되어버린 것을 원래의 obj타입으로 바꿔보자.
obj2 = JSON.parse(json,(key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key == 'birthDate' ? new Date(value) : value;
}); 
//key로 birthDate가 들어요면 new Date객체를 넣는데, 이 때 birthDate가 key인 놈의 value를 집어넣어주자.

console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate());
//이제 다 잘 실행되는 것을 볼 수 있다.

