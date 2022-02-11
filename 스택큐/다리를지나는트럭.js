function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  //다리에 있는 트럭들의 총 무게
  let bridge_weight = 0;
  //다리를 건너는 트럭 배열
  let bridge = [];
  //대기트럭에서 나온 트럭
  let truck_weight = 0;

  do {
    //3. 다리를 다 건넌 트럭은 다리를 지났음을 표시해준다 && 다리 위 무게에서 무게를 빼준다
    bridge.forEach((truck) => {
      if (truck.idx === bridge_length - 1) {
        bridge.shift();
        bridge_weight -= truck.weight;
      }
    });

    if (truck_weights[0] === undefined) {
      truck_weight = 10000;
    } else {
      truck_weight = truck_weights[0];
    }

    //1. 다리에 있는 트럭 총 무게 + 대기트럭의 맨 앞 트럭 무게 <= 허용되는 다리 무게
    if (bridge_weight + truck_weight <= weight) {
      //1-1. 대기트럭에 있는 맨 앞 트럭은 대기트럭에서 빠지고 다리를 건넌다.
      truck_weight = truck_weights.shift();
      bridge.push({ weight: truck_weight, idx: -1, onBridge: true });
      //1-2. 다리 무게에 다리를 건너는 트럭 무게를 더해준다
      bridge_weight += truck_weight;
      //1-3. 다리를 건너는 트럭들은 모두 1 길이만큼 이동한다
      bridge.forEach((truck) => {
        if (truck.onBridge) truck.idx++;
      });
      //1-5. 시간을 증가시킨다
      time++;
    }
    //2. 다리에 있는 트럭 총 무게 + 대기트럭의 맨 앞 트럭 무게 > 허용되는 다리 무게
    else {
      //2-1. 다리를 건너는 트럭들은 모두 1 길이만큼 이동한다
      bridge.forEach((truck) => {
        if (truck.onBridge) truck.idx++;
      });
      //2-2. 시간을 증가시킨다.
      time++;
    }
  } while (bridge);
  return time;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];

console.log(solution(bridge_length, weight, truck_weights));
