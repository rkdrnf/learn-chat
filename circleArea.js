

//문제
//반지름이 r인 원의 넓이를 구하세요
// 1/2 * r^2 * pi

// a ^ b

function cArea(r) {
  return 0.5 * Math.pow(r, 2) * Math.PI;
}

function pow(a, b) {
  let result = 1;

  for (let i = 0; i < b; i++) {
    result = result * a;
  }

  return result;
}

console.log(cArea(1));
console.log(cArea(2));
