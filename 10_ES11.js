/* Optional Chanining */
{
  const person1 = {
    name: 'Gayeon',
    job: {
      title: 'S/W Engineer',
      manager: {
        name: 'Bob',
      },
    },
  };
  const person2 = {
    name: 'Bob',
  };

  //💩💩💩
  {
    function printManager(person) {
      console.log(person.job && person.job.manager && person.job.manager.name);
    }
    printManager(person1);
    printManager(person2);
  }

  //✨✨✨
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }
    printManager(person1);
    printManager(person2);
  }
}

/* Nullish Coalescing Operator */

{
  //Logical OR operator (||) 💩💩💩 🐛🐛🐛Party~!!
  //이것을 사용하기 위해서는 어떤것들이 false로 취급되는지 잘 이해하고 있어야 한다.
  //false : false, '', 0, null, unefined
  {
    const name = 'Gayeon';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name = null;
    const userName = name || 'Guest';
    console.log(userName);
  }

  //💩💩💩
  //사용자가 이름을 입력하고 싶지 않아 빈칸으로 두었는데, Guest가 되어버릴 수 있는 상황
  {
    const name = '';
    const userName = name || 'Guest';
    console.log(userName); // => Guest
  }

  //💩💩💩💩💩💩💩💩💩💩💩💩
  //숫자 0을 입력한 것 뿐인데 false로 인식되어 undefined가 되어버림.
  {
    const num = 0;
    const message = num || 'undefined';
    console.log(message); // => undefined
  }

  //✨✨✨ Nullish Coalescing Operator
  //?? 는 해당 변수에 값이 있다면 그것을 쓰고, 없다면 뒤에값을 쓰자는 것으로
  //true or false로 값을 결정하는 것이 아니라, 값이 있냐, 없냐로 값을 결정하기 때문에
  //더 안전하다.
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName); // => '' (빈칸)

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message); // => 0
  }
}
