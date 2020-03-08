
//문제
//피보나치 수열의 n번째 수를 출력하는 함수를 작성하시오
//1 1 2 3 5 8 13 21 34 55 ...

// f(n) = f(n-1) + f(n-2)
// f(1) = 1
// f(2) = 1

// 3 : 3
// 4 : 5
// 5 : 9

// 2^(n-2) + 1

// 2^38 + 1;

// 1000^4
// 12

function fibo(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(1), fibo(1) === 1);
console.log(fibo(2), fibo(2) === 1);
console.log(fibo(3), fibo(3) === 2);
console.log(fibo(5), fibo(5) === 5);
console.log(fibo(40));