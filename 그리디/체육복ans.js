function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  //모든 학생들이 체육복을 하나씩 가지고 있다고 가정
  //학생들의 체격 크기를 인덱스로 잡아서 배열을 만듦
  for (let i = 1; i <= n; i++) {
    students[i] = 1;
  }
  //lost 배열에 있는 학생들은 체육복을 하나 잃어버린 것이므로 체육복 수에서 1을 빼줌
  lost.forEach((number) => (students[number] -= 1));
  //reserve 배열에 있는 학생들은 체육복을 무조건 하나 이상은 가지고 있는 것이므로 1을 더해줌
  reserve.forEach((number) => (students[number] += 1));

  for (let i = 1; i <= n; i++) {
    //내가 체육복을 2개 가지고 있고 나보다 체격-1 인 학생이 체육복을 가지고 있지 않다면
    if (students[i] === 2 && students[i - 1] === 0) {
      //친구에게 체육복을 하나 주고
      students[i - 1]++;
      //나는 체육복을 하나 빌려준 것에 대한 처리
      students[i]--;
      //내가 체육복을 2개 가지고 있고 나보다 체격+1 인 학생이 체육복을 가지고 있지 않다면
    } else if (students[i] === 2 && students[i + 1] === 0) {
      //친구에게 체육복을 하나 주고
      students[i + 1]++;
      //나는 체육복을 하나 빌려준 것에 대한 처리
      students[i]--;
    }
  }
  //배열의 요소를 하나씩 돌아가며 확인
  for (let key in students) {
    //체육복을 1개 이상 가지고 있다면
    if (students[key] >= 1) {
      //체육수업을 들을 수 있는 학생수
      answer++;
    }
  }
  return answer;
}
