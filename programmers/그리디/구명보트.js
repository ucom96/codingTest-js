const people = [70, 80, 50, 50, 20, 10];
const limit = 100;
let boat = 0;
//로직
/*가장 무게가 큰 사람(A)를 찾아서 무게 제한을 넘지 않는 
선에서 같이 더했을때 값이 가장 커지는 사람(B)를 구한다*/

//1. 무게가 가장 큰 사람을 찾아야하므로 people을 내림차순 정렬하기
people.sort((a, b) => b - a);

//2. people 배열이 비어있지 않을때까지 큰 수부터 차례대로 B를 찾는다
while (people.length) {
  let a = people[0];
  //2-1. 두번째 인덱스부터 돌아가면서 제한을 넘지 않으면서 가장 큰 값 (B)를 찾는다
  for (let i = 1; i < people.length; i++) {
    let b = people[i];
    if (a + b <= limit) {
      //b를 people에서 빼준다
      people.splice(i, 1);
      //반복을 멈춘다
      break;
    }
  }
  //a를 people에서 빼준다
  people.shift();
  //보트 숫자를 증감시킨다
  boat++;
}

console.log(boat);
