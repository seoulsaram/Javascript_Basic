const sortArr = [5, 8, 2, 9, 3, 10];
// finding max

// sort();

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

// sort function

// [10, 8, 3, 9. 4. 5];

// [8, 3, 9, 4, 5];

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

// 다른 방식 (귣~)
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

console.log(solution4(sortArr));
