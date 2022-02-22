function solution(array, commands) {
  //commands 길이만큼 반복하기
  return commands.map((command) => {
    //i,j,k
    const [i, j, k] = command;
    //새로운 배열 만들기
    const newArray = array
      //배열 자르기
      .filter((value, idx) => idx >= i - 1 && idx <= j - 1)
      //배열 정렬하기
      .sort((a, b) => a - b);
    //k번째수 배열 반환
    return newArray[k - 1];
  });
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
