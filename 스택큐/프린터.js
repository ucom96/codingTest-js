function solution(priorities, location) {
  let answer = 0;

  //priorities와 idx를 함께 객체 요소로 가지는 배열
  let queue = priorities.map((priority, idx) => ({
    priority: priority,
    idx: idx,
  }));

  //몇번째로 출력되는지에 대한 정보
  let cnt = 0;
  //큐에 값이 하나라도 있을동안 계속 반복
  while (queue.length) {
    //1. 가장 앞에 있는 문서를 꺼낸다
    let doc = queue.shift();

    //2-1. 가장 앞 문서의 중요도가 나머지 인쇄 문서 중요도보다 낮다면
    if (queue.some((info) => doc.priority < info.priority)) {
      //앞에 있는 문서를 가장 뒤로 보낸다
      queue.push(doc);
    } else {
      //앞에 있는 문서를 인쇄한다 (카운트 증가)
      cnt++;
      //인쇄 시 doc의 idx와 location이 같다면 answer에 몇번째로 출력되었는지를 넣어준다
      if (doc.idx == location) {
        answer = cnt;
        break;
      }
    }
  }

  return answer;
}

const priorities = [2, 1, 3, 2];
const location = 2;
console.log(solution(priorities, location));
