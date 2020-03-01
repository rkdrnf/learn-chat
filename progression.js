
// 등차 1인 수열의 순서를 parameter로 받고
// 그 순서까지 모두 더한 결과를 반환하는 함수를 작성하시오


// Not a Number (NaN)
// 0 + undefined
// 0 + null
// 0 + { a: 1, b: 2};



function abc(order) {
  let result = 0;
  for (let n = 1; n <= order; n++) {
    result = result + n;
  }
  return result;


}


const result = abc(3);
console.log(result, result === (1 + 2 + 3));

const result2 = abc(5);
console.log(result2, result2 === (1 + 2 + 3 + 4 + 5));

const result3 = abc(100);
console.log(result3)