document.addEventListener("DOMContentLoaded", function () {


  //버튼이 클릭될 때 실행되는 함수를 작성

  //함수 내에서
  //텍스트 인풋의 값을 가져와서 변수에 저장함

  //메시지 엘리먼트를 만드는 과정
  //div 엘러먼트를 만들고,
  //span 엘러먼트를 만들고
  //span 엘러먼트 안에 저장한 텍스트 인풋 값을 넣어줌
  //div 엘러먼트 안에 span엘러먼트를 넣고
  //div 엘러먼트를 메시지가 표시되는 곳에 붙임

  //텍스트 인풋 값을 빈 값으로 만듦
  const buttonElement = document.querySelector("button");
  const textElement = document.querySelector("#textbox");


  buttonElement.onclick = function () {
    let result = textElement.value;

    if (result.length === 0) {
      return;
    }

    const div = document.createElement("div");
    div.className = "message";
    const span = document.createElement("span");

    span.innerHTML = result;

    div.appendChild(span);

    const body = document.querySelector("#body");
    body.appendChild(div);

    textElement.value = "";
  }

  // const div = document.createElement("div");
  // const span = document.createElement("span");
  // div.appendChild(span);

});