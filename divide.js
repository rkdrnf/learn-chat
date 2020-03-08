

//문제

//두 수를 인자로 받고, 앞의 수를 뒷 수로 나누어서 완전히 나누어 떨어지는지 확인해주는 함수를 구현하시오
function dividedBy(a, b) {

  return a % b === 0;

  // const result = (a % b === 0);
  // let result;

  // if (a % b === 0) {
  //   result = true;
  // } else {
  //   result = false;
  // }

  // return result;
}

console.log(dividedBy(10, 5), dividedBy(10, 5) === true);
console.log(dividedBy(10, 3), dividedBy(10, 3) === false);