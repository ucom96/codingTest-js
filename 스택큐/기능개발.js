function solution(progresses, speeds) {
  let answer = [0];

  //배포까지 걸리는 기간
  let first = 100; //기간끼리의 비교를 하기 위해 설정

  //answer의 idx
  let k = 0;

  for (let i = 0; i < progresses.length; i++) {
    let next = (100 - progresses[i]) / speeds[i];
    if ((100 - progresses[i]) % speeds[i] !== 0) {
      next++;
    }
    //배포기간 비교
    if (first >= next) {
      answer[k]++;
    } else {
      answer.push(1);
      k++;
    }

    first = next;
  }

  return answer;
}

const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses, speeds));
