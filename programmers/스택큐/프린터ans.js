function solution(priorities, location) {
  let answer = 0;

  let queue = priorities.map((priority, idx) => ({
    priority: priority,
    target: idx === location, //target: boolean 값
  }));

  let cnt = 0;

  while (true) {
    let doc = queue.splice(0, 1)[0];

    if (queue.some((rest) => doc.priority < rest.priority)) {
      queue.push(doc);
    } else {
      cnt++;
      if (doc.target) return cnt;
    }
  }
}

const priorities = [2, 1, 3, 2];
const location = 2;
console.log(solution(priorities, location));
