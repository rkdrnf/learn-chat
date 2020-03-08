//문제
//모든 문자열을 대문자로 바꿔서 돌려주는 함수를 작성하시오

function toUpper(str) {
  return str.toUpperCase();
}

console.log(toUpper('abcd'));
console.log('qwer'.toUpperCase());

//toUpperCase
//toLowerCase

function replace(str) {
  const result = str.replace('abc', 'qwe');
  return result;
}

console.log(replace('abcdefg'));

function find(str) {
  const index = str.indexOf('abcd');
  return index;
}

console.log(find('abcdefg'));
console.log(find('qweabcdefg'));
console.log(find('qweacdefg'));


//문제
//이름 리스트에서 특정 성씨인 사람만 가져오세요

const names = [
  "구 모정",
  "구 구콘",
  "구 구구",
  "안 준형",
  "안 준준",
  "안 안준"
];

function filter(names, familyName) {
  const result = [];

  for (let i = 0; i < names.length; i++) {
    const nameItem = names[i];

    if (nameItem.indexOf(familyName) === 0) {
      result.push(nameItem);
    } else {
      continue;
    }

    console.log(`${nameItem} has been found`);
  }

  return result;
}

console.log(filter(names, "구"));

function removeWhitespace(names) {
  const result = [];

  for (let i = 0; i < names.length; i++) {
    const nameItem = names[i];

    result.push(nameItem.replace(" ", ""));
  }

  return result;
}

console.log(removeWhitespace(names));