const array = [12, 11, 13, 5, 6];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        console.log(`array[minIndex]: ${array[minIndex]}, array[j]: ${array[j]}`);
        minIndex = j;
        console.log(`minIndex: ${minIndex}`);
      }
    }
    let swap = array[minIndex];
    console.log(`swap : ${array[minIndex]}`);
    array[minIndex] = array[i];

    array[i] = swap;
  }
  return array;
}
console.log(selectionSort([5, 3, 1]));

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // 오른쪽 정열값
    let j = i - 1; // 왼쪽에 있는
    while (j > -1 && key < arr[j]) {
      //왼쪽값이 오른쪽 값보다 클 때
      arr[j + 1] = arr[j];
      //오른쪽값과 왼쪽값 바꾸기
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort(array));
