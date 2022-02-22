var array = [1, 5, 2, 6, 3, 7, 4];
var commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

var answer = [];
//1. commands를 반복적으로 돌아가며 하나씩 확인
for (command of commands) {
  //2. i,j만큼 배열을 자른다
  let i = command[0],
    j = command[1],
    k = command[2];
  let sliceArray = array.slice(i - 1, j);
  //3. 잘라진 배열을 정렬한다
  let sortedArray = sliceArray.sort((a, b) => a - b);
  //4. 잘라진 배열의 k번째 수를 answer에 넣는다
  answer.push(sortedArray[k - 1]);
}

console.log(answer);
