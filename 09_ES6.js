/* Shorthand property names */

//아래의 값들을 오브젝트에 넣고 싶을 때
{
  const name = 'Ellie';
  const age = 18;

  //💩💩💩
  const ellie1 = {
    name: name,
    age: age,
  };

  //✨✨✨ key:val 이름이 서로 같다면 value는 생략 가능
  const ellie2 = {
    name,
    age,
  };
}

/* Destructuring Assignment */

//object 버전
const student = {
  name: 'Anna',
  level: 1,
};

//💩💩💩
{
  const name = student.name;
  const level = student.level;
  console.log(name, level);
}

//✨✨✨
{
  const {name, level} = student;
  console.log(name, level);

  //destructuring을 하면서 새로운 이름을 부여하고 싶다면?
  const {name: studentName, level: studentLevel} = student;
  console.log(studentName, studentLevel);
}

//array 버전
const animals = ['dog', 'cat'];

//💩💩💩
{
  const first = animals[0];
  const second = animals[1];
  console.log(first, second);
}

//✨✨✨
{
  const [first, second] = animals;
  console.log(first, second);
}

/* Spread Syntax */
/* ‼️ Spread Syntax사용 시 주의사항!
Spread Syntax는 오브젝트를 복사할 때, 해당 오브젝트의 값이 아닌 주소값을 복사해오는 것이므로,
원본 오브젝트를 변경하면 복사한 모든 객체들의 값이 변경된다는 점을 주의하자.
ex) array를 Spread Syntax를 이용해서 여러번 복사하여 arrayCopy1, arrayCopy2를 만들었다.
그리고 obj1의 값을 {key: 'key111'};로 변경하면,array, arrayCopy1, arrayCopy2 안에 들어있는
obj1의 값이 모두 변경된다. */

{
  const obj1 = {key: 'key1'};
  const obj2 = {key: 'key2'};
  const array = [obj1, obj2];

  //array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);
  const arrayCopy2 = [...array, {key: 'key3'}];
  console.log(arrayCopy2); /* => [{key: 'key1'},{key: 'key2'},{key: 'key3'}] */
  obj1.key =
    'newKey'; /* => array, arrayCopy, arrayCopy2안의 obj1의 값이 모두 'newKey'로 바뀜 */

  //object copy
  const obj3 = {...obj1};
  console.log(obj3);

  //array concatenation
  const fruits1 = ['🍅', '🍑'];
  const fruits2 = ['🥥', '🍋'];
  const allFruits = [...fruits1, ...fruits2];
  console.log(allFruits); /* => ["🍅", "🍑", "🥥", "🍋"] */

  //object merge
  const dog1 = {dog1: '🐶'};
  const dog2 = {dog2: '🐩'};
  const dog = {...dog1, ...dog2};
  console.log(dog); /* => {dog1: "🐶", dog2: "🐩"} */

  //object merge 주의사항!
  //concat하는 오브젝트들의 key가 동일할 경우, 뒤에오는 애가 앞의 것을 덮어씌운다.
  const cat1 = {cat: '🐱'};
  const cat2 = {cat: '🐈'};
  const cat = {...cat1, ...cat2};
  console.log(cat); /* => {cat: "🐈"} */
}

/* Default parameters */
{
  //💩💩💩
  {
    function printMesasge(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }
    printMesasge('hello');
    printMesasge();
  }
  //✨✨✨
  {
    function printMesasge(message = 'default message') {
      console.log(message);
    }
    printMesasge('hello');
    printMesasge();
  }
}

/* Ternary Operator */
{
  const isCat = true;

  //💩💩💩
  {
    let component;
    if (isCat) {
      component = '🐱';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  //✨✨✨
  {
    const component = isCat ? '🐱' : '🐶';
    console.log(component);
  }
}
