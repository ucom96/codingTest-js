function solution(numbers) {
  var answer = "";
  //numbers의 숫자요소들을 문자열로 바꿈
  let strings = numbers.map((number) => number + "");
  //strings의 요소들을 앞뒤로 묶어서 내림차순으로 정렬후 전체를 문자열로 만들기
  answer = strings.sort((a, b) => b + a - (a + b)).join("");

  return answer[0] === "0" ? "0" : answer;
}

const numbers = [0, 0, 0, 0];
console.log(solution(numbers));
