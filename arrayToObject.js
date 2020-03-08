

// const obj = {
//   abcd: 1,
//   qwer: 2,
//   mv: "qzzzz"
// };

// obj.abcd === 1;
// obj.mv === "qzzzz";

// obj["qq"] = 5;
// obj["abcd"] = 100;

// console.log(obj);

// const obj2 = {};
// obj2["q"] = 5;

//문제
//어레이를 파라미터로 받아서 어레이 아이템의 값을 키로 가지고 해당 아이템의 인덱스를 값으로 가지는 오브젝트를 반환하는 함수를 작성하시오

// const arr = ['a', 'b', 'c', 'd'];
// arr.length === 4
// arr[0] arr[1] arr[2] arr[3]

function convert(arr) {
  const result = {};

  for (let n = 0; n < arr.length; n++) {
    const index = n;
    const item = arr[index];

    result[item] = index;
  }

  return result;
}

const result1 = convert(["a", "b", "c", "d"]);
console.log(result1, result1.a === 0 && result1.b === 1 && result1.c === 2 && result1.d === 3);
// {
//   a: 0,
//   b: 1,
//   c: 2,
//   d: 3
// }
