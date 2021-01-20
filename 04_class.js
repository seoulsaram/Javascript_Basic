'use strict';

//class : template 정의한 것(메모리에 올라가지 않음)
//object : instance of a class 클래스에 데이터를 넣어 생성한 객체 (메모리에 올라감)

// 1. Class 선언 : class안에 필드와 메소드, 게터/세터를 모두 넣는다.
class Person{
    //constructor
    constructor(name, age){
        //field
        this.name = name;
        this.age = age;
    }

    //method
    speak(){
        console.log(`${this.name} : hello!`);
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
        //age가 0이하의 값이 들어올 경우 0으로 세팅해주는 것.
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

const user1 = new Person('Steve', -1);
console.log(user1.age); //나이가 0보다 작은 값이 들어왔기 때문에 0출력




// 도형 그리기 클래스
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    //method
    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

// 같은 클래스를 확장해서 사용해야 할 경우(오버라이드)
class Rectangle extends Shape{}

//다형성 : 상속한 클래스의 메소드만 오버라이딩 해서 메소드를 수정한다.
class Triangle extends Shape{
    draw(){
        super.draw(); 
        // super로 부모의 메소드를 그대로 상속받으면 부모의 것도 실행되고, 여기서 재정의한 것도 실행할 수 있다.
        console.log('^_^'); 
    }
    getArea(){
        return(this.width * this.height)/2;
    }

    toString(){
        return `Triangle : color : ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
console.log(triangle.toString());

// instanceOf : 왼쪽에 있는 오브젝트가 오른쪽의 클래스를 이용해서 만들어진 오브젝트인지 아닌지
// true, false로 리턴해주는 메소드
console.log(rectangle instanceof Rectangle);    //true
console.log(triangle instanceof Rectangle);     //false
console.log(triangle instanceof Triangle);      //true
console.log(triangle instanceof Shape);         //true (Triangle이 Shape를 상속받았으니까)
console.log(triangle instanceof Object);        //true (자바스크립트의 모든 오브젝트는 오브젝트를 상속받으니까)



