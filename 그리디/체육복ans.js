function solution(lost, reserve, n) {
  let answer = 0;

  //모든 학생들의 체격(idx)에 따른 체육복 개수에 대한 배열 생성
  //모든 학생들이 한개의 체육복을 가지고 있다고 가정
  let student = [];
  for (let i = 1; i <= n; i++) {
    student[i] = 1;
  }

  //lost에 있는 학생들은 체육복을 1개씩 빼줌
  lost.forEach((i) => (student[i] -= 1));
  //reserve에 있는 학생들은 체육복을 1개씩 더해줌
  reserve.forEach((i) => (student[i] += 1));

  //체육복을 빌려줄 수 있는지에 대한 여부 확인하기
  for (let i = 1; i <= n; i++) {
    //내가 체육복을 2개 가지고 있고 나보다 체격이 1 작은 친구가 체육복이 없다면 체육복 빌려주기
    if (student[i] == 2 && student[i - 1] == 0) {
      student[i]--;
      student[i - 1]++;
    }
    //내가 체육복을 2개 가지고 있고 나보다 체격이 1 큰 친구가 체육복이 없다면 체육복 빌려주기
    else if (student[i] == 2 && student[i + 1] == 0) {
      student[i]--;
      student[i + 1]++;
    }
  }

  //체육복이 1개 이상인 친구들은 체육 수업을 들을 수 있으므로 answer값 업데이트해주기
  for (let i in student) {
    if (student[i] >= 1) {
      answer += 1;
    }
  }
  return answer;
}

let n = 3;
let lost = [3];
let reserve = [1];

console.log(solution(lost, reserve, n));
