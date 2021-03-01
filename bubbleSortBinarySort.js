{
  const sortArr = [5, 8, 2, 9, 3, 10];
  // finding max
  // const temp; 여기에는 자리를 옮길 숫자를 넣을 임시 변수
  // arr[i] arr[i+1]

  function solution(arr) {
    // temp = biggestNumber;
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
      // 5랑 다른 숫자들을 비교하자
      // 5가 다음숫자보다 작으면, temp 를 더 큰 숫자로
      if (temp < arr[i]) {
        temp = arr[i];
      }
    }
    return temp;
  }

  // finding min
  function solution2(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (temp > arr[i]) {
        temp = arr[i];
      }
    }
    return temp;
  }

  const solution3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      //가장 큰 수 찾기
      let max = arr[i]; //5
      let max_location = i; //0

      for (let j = i; j < arr.length; j++) {
        if (max < arr[j]) {
          max = arr[j]; // 10
          max_location = j; // 5
        }
      }
      arr[max_location] = arr[i];
      arr[i] = max;
    }
    return arr;
  };
  console.log(solution3(sortArr));
}

{
  const sortArr = [5, 8, 2, 9, 3, 10];
  // 버블소트 1
  const solution4 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[j] < arr[j - 1]) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
        }
      }
    }
    return arr;
  };

  //버블 소트2
  //이 방법은 두번째 for문에서 arr.length -i 를 해줌으로써
  //검색을 더 짧게 만들어 줌.
  function SortNum(arr) {
    let now;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length - i; j++) {
        now = arr[j];
        if (arr[j] < arr[j - 1]) {
          arr[j] = arr[j - 1];
          arr[j - 1] = now;
        }
      }
    }
    return arr;
  }
  console.log(SortNum(sortArr));
  console.log(solution4(sortArr));
}

{
  // binary search
  const sortedArray = [2, 3, 5, 6, 8, 9, 16, 90, 120];

  const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    // floor : 내림 (== parseInt())
    // ceil : 올림
    while (start <= end) {
      let middleIndex = Math.floor((start + end) / 2);
      if (target === arr[middleIndex]) {
        return true;
      } else if (target > arr[middleIndex]) {
        start = middleIndex + 1;
      } else if (target < arr[middleIndex]) {
        end = middleIndex - 1;
      } else {
        return false;
      }
    }
    return "끝";
  };

  console.log(binarySearch(sortedArray, 9));

  const binary = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (target < arr[middle]) {
        end = middle - 1;
        console.log(`start : ${start}`);
        console.log(`end : ${end}`);
        console.log(`middle : ${middle}`);
      } else if (target === arr[middle]) {
        return true;
      } else if (target > arr[middle]) {
        start = middle + 1;
        console.log(`start : ${start}`);
        console.log(`end : ${end}`);
        console.log(`middle : ${middle}`);
      }
    }
  };

  binary(sortedArray, 3);
}
