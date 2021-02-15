//자연수 n으로 받은 것을 배열로 만들어서, 각 값을 모두 더하기
// ex) n= 123 이라면 답은 6 (1+2+3)
function solution(n) {
  var answer = 0;
  let str = Array.from(n.toString()).map(Number);
  for (let i = 0; i < str.length; i++) {
    answer += str[i];
    console.log(answer);
  }
  return answer;
}
//console.log(solution(123));

//자연수를 받아서 배열로 만든 뒤, 큰 숫자 순으로 정렬하기
//ex) n=12345 답) [5,4,3,2,1]
function solution2(n) {
  var answer = [];
  const arr = Array.from(n.toString())
    .map(Number)
    .sort((a, b) => b - a);
  answer = arr;
  return answer;
}

function solution3(n) {
  //n이 어떤 수의 제곱인지 알아내기
  //제곱 수를 찾아서 해당 숫자 + 1의 제곱 리턴
  //만약 어떤 수의 제곱도 아니라면 -1 리턴
  var num = Math.sqrt(n);
  //Math.sqrt() 는 어떤 숫자의 제곱근을 구해줌.
  if (num % 1 != 0) {
    return -1;
  }
  var answer = num + 1;
  answer *= answer;

  return answer;
}

console.log(solution3(121));

function solution3_2(n) {
  var arr = n.toString().split("");
  var answer = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    answer.push(Number(arr[i]));
  }

  return answer;
}
