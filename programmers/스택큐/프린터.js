function solution(priorities, location) {
  let answer = 0;

  let queue = priorities.map((priority, idx) => ({
    priority: priority,
    idx: idx,
  }));

  let cnt = 0;

  while (queue.length) {
    let doc = queue.shift();

    if (queue.some((info) => doc.priority < info.priority)) {
      queue.push(doc);
    } else {
      cnt++;
      if (doc.idx == location) {
        answer = cnt;
        break;
      }
    }
  }

  return answer;
}

/*
const priorities = [2, 1, 3, 2];
const location = 2;
console.log(solution(priorities, location));
*/
