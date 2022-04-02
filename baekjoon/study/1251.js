//fail
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const word = fs.readFileSync(filePath).toString().trim();
const len = word.length;

//경계 찾기 함수
function findBorder(startIdx, endIdx) {
  let minAsciiIdx = startIdx;
  let minAscii = word.charCodeAt(minAsciiIdx);
  for (let i = startIdx + 1; i <= endIdx; i++) {
    //가장 작은 아스키코드값을 가진 알파벳 찾기
    let compareAsciiIdx = i;
    let compareAscii = word.charCodeAt(compareAsciiIdx);
    if (compareAscii < minAscii) {
      //가장 작은 아스키코드값을 가진 알파벳의 인덱스와 알파벳을 업데이트한다
      minAsciiIdx = compareAsciiIdx;
      minAscii = compareAscii;
    }
    //가장 작은 아스키코드값을 가진 알파벳이 또 있는 경우
    else if (compareAscii === minAscii) {
      let j = 1;
      while (minAsciiIdx - j >= 0) {
        if (
          word.charCodeAt(minAsciiIdx - j) >
          word.charCodeAt(compareAsciiIdx - j)
        ) {
          minAsciiIdx = compareAsciiIdx;
        }
        j++;
      }
    }
  }
  //가장 작은 아스키코드값을 가지는 알파벳의 인덱스를 반환한다
  return minAsciiIdx;
}
//첫번째 경계 찾기
const firstBorder = findBorder(0, len - 3);
//두번째 경계 찾기
const secondBorder = findBorder(firstBorder + 1, len - 2);

//문자열 뒤집기 함수
function reverseAlp(word) {
  return word.split("").reverse().join("");
}
//경계에 따라 문자열을 나누고 알파벳을 뒤집는다
let firstWord = word.slice(0, firstBorder + 1);
firstWord = reverseAlp(firstWord);
let secondWord = word.slice(firstBorder + 1, secondBorder + 1);
secondWord = reverseAlp(secondWord);
let thirdWord = word.slice(secondBorder + 1, len);
thirdWord = reverseAlp(thirdWord);

//세개로 나누어진 단어들을 합친다
const finalWord = firstWord.concat(secondWord, thirdWord);
console.log(finalWord);
