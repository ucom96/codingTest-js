function solution(n, lost, reserve) {
  let reservedStudents = n - lost.length;
  //lost에 체육복 받았음의 여부를 추가해주기
  lost = lost.map((item) => ({
    num: item,
    received: false,
  }));
  //reserve에 체육복을 줬음의 여부를 추가해주기
  reserve = reserve.map((item) => ({
    num: item,
    gave: false,
  }));

  //반복: reserve 수만큼 하나씩 돌아가며 체육복을 줄 수 있는지의 여부를 확인
  for (let i = 0; i < reserve.length; i++) {
    //1. lost에 체육복을 줄 수 있는 학생이 있는지 확인
    lost.forEach((lost) => {
      if (
        //1-1. lost에 체육복을 아직 받지 않았고 reserve에서 아직 주지 않았고 체격이 맞는 학생이 있다면
        lost.received === false &&
        reserve[i].gave === false &&
        lost.num === (reserve[i].num - 1 || reserve[i].num + 1)
      ) {
        //console.log(lost.num === (reserve[i].num - 1 || reserve[i].num + 1));
        //1-1-1. 체육복을 주고 체육복을 받은 학생을 1 증감시킨다
        reserve[i].gave = true;
        lost.received = true;
        reservedStudents += 1;
      }
    });
  }

  return reservedStudents;
}

let n = 3;
let lost = [3];
let reserve = [1];

console.log(solution(n, lost, reserve));
