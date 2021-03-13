// Q1. make a string out of an array. 배열을 문자열로 만들어라.
{
  const fruits = ["apple", "banana", "orange"];
  const str = fruits.join("|");
  console.log(`value : ${str}, type : ${typeof str}`);
  console.log(`value : ${fruits}, type : ${typeof fruits}`);
}
// join : 배열에 있는 모든 애들을 더해서 String으로 만들어줌.
// 파라미터로는 구분자(,| 등)을 받음. 각각 구분자를 사이에 넣어서 스트링으로 만들어주는데
// 이 파라미터는 생략해도 됨.

// Q2. make an array out of a String. 문자열을 배열로 만들어라.
{
  const fruits = "banana, kiwi, apple, cherry";
  const str = fruits.split(",", 2);
  console.log(`value : ${str}, type : ${typeof str}`);
  console.log(`value: ${fruits}, type : ${typeof fruits}`);
}
// split : 두 가지의 파라미터 (구분자, limit)를 받음.
// 문자열을 여러개의 문자열로 나누어주는데, 구분자를 이용한다. limit은 몇개 까지 나눌것인지.

// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(`array : ${array}, result : ${result}`);
}
// reverse : 배열 순서를 거꾸로 해주기도 하지만, 거꾸로 만든 결과를 return하기도 함.
// 그래서 array, result 모두 순서가 바뀌게 됨.

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2);

  console.log(`before splice : ${array} after splice : ${result}`);

  const array2 = [1, 2, 3, 4, 5];
  const result2 = array2.slice(2, 5);
  console.log(`before slice : ${array2}, after slice : ${result2}`);
}
// 🌟splice(start[, deleteCount[, item1[, item2[, ...]]]])는
// 잘라낸 값을 리턴하고, 기존 배열엔 리턴된 값을 뺀 값이 남는다.
// start: 배열의 변경을 시작할 인덱스.

// 음수를 지정한 경우: 배열의 끝에서부터 요소를 센다.
// 배열의 길이보다 큰 수를 지정한 경우: 실제 시작 인덱스는 배열의 길이로 설정
// 절대값이 배열의 길이보다 큰 경우: 0으로 세팅

// deleteCount: 배열에서 제거할 요소의 수.

// 생략 / 값이 array.length - start보다 큰 경우: start부터의 모든 요소를 제거.
// 0 이하의 수를 지정: 어떤 요소도 제거되지 않는다.

// item1, item2, ... : 배열에 추가할 요소.

// 지정하지 않는 경우: splice()는 요소 제거만 수행한다.

// 반환값: 제거한 요소를 담은 배열.

// 아무 값도 제거하지 않았으면 빈 배열을 반환한다.

// 🌟그래서 '새로운 배열'을 만들 땐 사용할 수 없음. (오리지널 배열에 변화를 주니까)
// 배열 자체를 변화시키지 않고 원하는 값만 가져오고 싶을 때는 slice를 사용한다.

// 🌟slice(start[, end])는 기존 배열에서 추출한 배열값을 새로운 배열로 리턴한다.
// start: 추출 시작점에 대한 인덱스.
// undefined인 경우: 0부터 slice
// 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(-2)를 하면 배열의 마지막 2개의 요소를 추출한다.
// 배열의 길이와 같거나 큰 수를 지정한 경우: 빈 배열을 반환한다.

// end: 추출을 종료할 기준 인덱스. (end를 제외하고 그 전까지의 요소만 추출한다.)

// 지정하지 않을 경우: 배열의 끝까지 slice
// 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(2, -1)를 하면 세번째부터 끝에서 두번째 요소까지 추출
// 배열의 길이와 같거나 큰 수를 지정한 경우: 배열의 끝까지 추출.

// 반환값: 추출한 요소를 포함한 새로운 배열.

// 출처: https://im-developer.tistory.com/103 [Code Playground]

//----------------------------
// 문제 풀기 전 클래스 하나 만들자.
// 이름, 나이, 둥록여부, 점수를 가진 학생 객체를 만들자.
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 80
{
  const result = students.find((student) => student.score === 80);
  //const result = students.find(function(student, index){ return student.score === 90; });
  // arrow function은 function, return키워드와 대괄호, 세미콜론을 생략할 수 있다.

  console.log(result);
  // find : array안에서 첫번째로 찾아진 요소를 리턴하는데,
  // 각 배열 인덱스를 거치면서 만약 일치하는 값이 나오면 (true로 판명나면) 해당 값을 리턴한다.
  // (forEach처럼 값을 하나씩 가져와서 확인함.)
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  const re = students.filter((student) => {
    student.enrolled;
  }, this);
  console.log("re : ", re);
  console.log(result);
}
// filter : 요소들을 조건에 따라 걸러내줌. 콜백함수의 리턴은 boolean타입으로,
// 리턴이 true인 요소만 모아서 새로운 배열을 만든다. 만약
//filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
// value : 처리할 현재 요소
// index : 처리할 현재 요소의 인덱스
// array : 필터를 호출한 배열
// thisArg : callback을 실행할 때 this로 사용하는 값.
// 반환값 : 테스트를 통과한 요소(true들)로 이루어진 새로운 배열. true가 아무것도 없을 시 빈 배열 리턴
/**
//배열에 있는 각 요소마다 명시된 콜백함수를 부른다.
// 콜백함수의 리턴값은 축적된 결과이며 다음 콜백함수를 부를 때 아규먼트로써 제공된다.
* @param callbackfn 최대 4개의 인자를 받는 함수. 리듀스 매소드는 콜백함수 기능을 배열의 각 요소마다 한 번 씩 호출한다.

* @param initialValue 초기값을 지정하면, 이것은 축적을 시작하기 위해 초기값으로 사용된다. 
콜백함수의 첫번째 호출은 배열값 대신 아규먼트 값으로써 이 값을 제공한다.
*/

// Q7. make an array containing only the students' scores
// result sould be : [45, 80, 90, 66, 88]

{
  const result = students.map((student) => student.score);
  console.log(result);

  //map : 배열 안에 들어있는 요소 하나하나를 다른 것으로 변환해줌.
  //즉 배열을 다른 방식으로 만들고 싶다면 이걸 씀.
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result); //true
  //some : 배열의 요소 중 콜백함수가 리턴이 true가 되는 애가 있는지 없는지를 확인해주는 애.
  // 얘는 하나만 true여도 true가 리턴됨
  const result2 = students.every((student) => student.score < 50);
  console.log(result2); //false
  //every : 얘는 모든 값이 true여야 true가 리턴됨.
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result);
  //reduce : 콜백함수를 전달하거나 initial val을 전달한다. 배열안에 있는 모든 값마다 함수가 호출됨.
  //함께 누적된 결과값이 return된다.(배열에 있는 값을 누적함.)
  //위에서 0은 initial val로써, 0부터 연산을 시작하겠다는 것 같다.
  //prev값, 즉 앞쪽 파라미터는 함수에서 return되는 값이 전달됨.(재귀??)

  console.log(result / students.length);
  //누적된 값을 학생 수로 나누면 평균이 나오니까.
}

// Q10. filter, join
// result should be : '80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  //점수들만 있는 배열을 만들고
  //그 안에서 점수가 50점 이상인 애들만 찾아서
  //String타입으로 만들기
  console.log(result);
}

// Bonus! do scores sorted in ascending order
// result should be : '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
  //score만 찾아 배열로 만들고
  //정렬을 작은것에서 큰 순으로 만든 뒤
  //스트링 타입으로 만들기
}
