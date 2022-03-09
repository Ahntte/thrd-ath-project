"use strict";
// 메뉴에 마우스 커서를 올리면 바가 보이게함
let horizontalUnderline = document.getElementById("horizontal-underline");
// 밑줄에 해당하는 요소를 가지고옴
let horizontalMenus = document.querySelectorAll("nav:first-child a");
// 동일한 태그에 대해서 동작이 이루어지는거임
// 개별로 요소들을 핸들링 하는것보다 동일 엘리먼트들을 배열로 다루어서 작업하는게 효율적임
// querySelectorAll()메소드는 동일 선택자에 대한 모든 엘리먼트들을 컬렉션 형태의 배열로 저장함

console.log(horizontalMenus);

//클릭하면 밑줄이 생김
//horizontalMenus에 대해서 처음부터 끝까지 루프를 돌려 순회함
//0번지서 부터 차례대로 menu라는 변수에 아이템들이 담김 단, 그냥 담아도 되는데 콜백함수를 호출해서
//담는게 중요한게 아니라 콜백함수를 호출하여 그것을 실행하고 난 결과들을 다시 집어넣음
horizontalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => horizontalIndicator(e))
);

function horizontalIndicator(e) {
  horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  // 밑줄의 시작 x좌표값
  horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  // 밑줄의 크기가 되는 width값
  console.log(e.currentTarget);
}

let verticalUnderLine = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2)");
