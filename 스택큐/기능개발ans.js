function solution(progresses, speeds) {
  const answer = [0];

  //배포까지 걸리는 기간 (days)
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx])
  );

  //days 간의 비교를 위해 초기 비교값 세팅
  //스택에 남아있는 days 요소들 중 가장 큰 값을 지닌 day
  let maxDay = days[0];

  //배포기간 비교
  //k는 answer의 idx
  for (let i = 0, k = 0; i < days.length; i++) {
    if (maxDay >= days[i]) {
      answer[k] += 1;
    } else {
      answer[++k] = 1;
      maxDay = days[i];
    }
  }

  return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));
