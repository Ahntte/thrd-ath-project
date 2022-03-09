/*
- 스크롤링 관련 -
섹션별로 페이지를 구분함
*/
let mHtml = $("html");
let page = 1;
mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 4) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  let posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
});

/*
- 텍스트 애니메이션 관련 -
글자 타이핑 효과(제이쿼리 사용)
*/
/*
솔루션-A
텍스트의 문자 하나하나가 나타나는 애니메이션 구현
절차: 1. 텍스트 문자를 미리 입력해서 변수에 저장 
*/
let isTyping = false;
let typingIndex = 0;
let typingTxt = "Hi, I'm Tae-Hyeon";
//console.log(isTyping);
typingTxt = typingTxt.split("");
//문자를 찍어주고 다시 초기화시킴
if (isTyping == false) {
  isTyping = true;
  setInterval(() => {
    if (typingIndex < typingTxt.length) {
      let typingCnt = $(".typing").append(typingTxt[typingIndex]);
      typingIndex++;
    } else {
      $(".typing").html("");
      typingIndex = 0;
    }
  }, 150);
}

/*
(모바일모드) 버튼을 클릭했을때 동작
모바일은 클릭이 아니라 호버했을때 동작함
*/

$(".hamburger-button").click((e) => {
  e.preventDefault();
  $(this).toggleClass("active");
  $(".menu-container").toggleClass("visible");
});

/*
  프로필 이미지 영역을 클릭할때 동작됨
  처음 동작 순서)
  이미지 컨테이너를 누른다(이벤트리스너 장착)
  업로드 창이 뜨면서 해당 이미지 파일에 대한 경로와 이름 크기를 받아온다
  (이미지 파일포맷이 아닌 경우, 특정 크기를 넘는 데이터는 받지 않는다)
  
*/
// 프로필 이미지 => 프로필 이미지를 구성하는 정보들로 분해
// 프로필이미지 = 이미지경로+이미지크기

let profileImg;
// 최종 프로필 이미지를 저장할 변수
let profileImgSrc;
// 프로필 이미지의 경로를 저장할 변수
let profileImgScale;
// 프로필 이미지의 크기
let imgInputButton = document.querySelector("#selectFile");
let profileImgContainer = document.querySelector(".profile-img-container");
// 프로필 이미지를 넣을 요소를 가지고옴

profileImgContainer.addEventListener("click", () => {
  imgInputButton.click();
});

// Bar animation
let secSection = document.querySelector(".sec-section");
let firstBar = document.querySelector(".first-bar");
let secBar = document.querySelector(".sec-bar");
let thirdBar = document.querySelector(".third-bar");

let spanCount = document.querySelector("#first-count"); // id가 count인 span요소에 출력시킬거라 해당 span요소를 변수에 담음
let spanSecCount = document.querySelector("#sec-count");
let spanThirdCount = document.querySelector("#third-count");

let eHtml = document.querySelector("html");
let barAnimation1 = null;
let barAnimation2 = null;
let barAnimation3 = null;

let firstResultCnt = 0;
let secResultCnt = 0;
let thirdResultCnt = 0;

// 특정 섹션페이지에서만 동작이 되도록 스크롤량이 다음 섹션페이지의 세로값이면 동작이되게
window.addEventListener("scroll", () => {
  clearInterval(barAnimation1);
  if (eHtml.scrollTop == 937) {
    barAnimation1 = setInterval(() => {
      firstBar.animate(
        [
          {
            width: "500px",
            easing: "ease-in",
          },
        ],
        21000
      );
    });
    const firstCntNumber = setInterval(() => {
      spanCount.innerText = firstResultCnt++;
      if (firstResultCnt > 100) {
        firstResultCnt = 100;
        clearInterval(firstCntNumber);
      }
    }, 10);
    clearInterval(barAnimation2);
    barAnimation2 = setInterval(() => {
      secBar.animate(
        [
          {
            width: "500px",
            easing: "ease-in",
          },
        ],
        21000
      );
    });
    const secCntNumber = setInterval(() => {
      spanSecCount.innerText = secResultCnt++;
      if (secResultCnt > 100) {
        secResultCnt = 100;
        clearInterval(secCntNumber);
      }
    }, 10);
    clearInterval(barAnimation3);
    barAnimation3 = setInterval(() => {
      thirdBar.animate(
        [
          {
            width: "500px",
            easing: "ease-in",
          },
        ],
        21000
      );
    });
    const thirdCntNumber = setInterval(() => {
      spanThirdCount.innerText = thirdResultCnt++;
      if (thirdResultCnt > 100) {
        thirdResultCnt = 100;
        clearInterval(thirdCntNumber);
      }
    }, 10);
  }
});
