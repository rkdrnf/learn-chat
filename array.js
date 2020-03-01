

// const a = [1, 2, 3];
// console.log(a);


// const a = [1, 2, 3, 4]
// const b = ["asd", "qwer", "axz"];

// a[1] === 2
// b[2] === "axz"

// [1,2,3,4][3] === 4


// a.push(5);
// console.log(a);

// const b = [];

//+ - * / %

// function
// let 
// const
// var
// return

// function qwer(q, w, e, r) {
//   //asfdklanflkasd  
// }

// qwer(1, 2, 3, 4);
// qwer("a", "b", "c", "d")


//문제
//임의의 어레이를 파라미터로 받고 짝수번째 아이템들만 
//모아서 새로운 어레이로 반환하는 함수를 작성하시오

function even(arr) {
  const result = [];

  for (let n = 0; n < arr.length; n++) {
    const even = (n % 2) === 1; //0: false, 1: true, 2: false, 3: true
    if (even) {
      result.push(arr[n]);
    }
  }

  return result;
}


const result1 = even([1, 2, 3, 4]);
console.log(result1, result1.length === 2 && result1[0] === 2, result1[1] === 4);

const result2 = even(["q", "w", "e", "r"]);
console.log(result2, result2.length === 2 && result2[0] === "w", result2[1] === "r");

console.log(even(true));

console.log(0 < undefined);

// even([1, 2, 3, 4]);
// even([1, 2, 3, 4, 5, 6, 7, 8]);


