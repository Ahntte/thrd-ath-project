"use strict";
// ES5에 추가가 됐으며 바닐라 자바스크립트 위해 사용이된다.

// 글로벌 스코프(글로벌한 애라 어디서든 접근이 가능함)
let globalName = "안태현";
let name = "글로벌toto";
{
  // 블록 안에서만 유효한 변수
  let name = "toto";
  console.log(name);
  name = "dodo";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var - 호이스팅, 노 블럭(어디에 있던 var로 선언한 변수에 접근이 가능함)
{
  a = 3;
  var a;
}
console.log(a);

// Constants
// 1. 보안
// 2. 스레드 안전(어떤 함수나 변수 혹은 객체에 여러 쓰레드가 동시에 접근을 해도 안전함)
// 3. 편의
// 자바스크립트에서 변수를 선언할때 Mutable타입의 let Immutable타입의 const 를 사용
const daysInWeek = 7;

// Variable Types
// primitive, single item: number, string, boolean, null, undefiend, symbol
// (primitive : 더이상 작은 단위로 나뉘지않는 단일 아이템을 말함)
// object, box container: function, first-class-function
// (object : 여러 싱글아이템들을 그룹핑하여 하나의 박스로 들고다니는 복합 아이템을 말함 )
const n = 1 / 0;
console.log(n);

const b = -1 / 0;
console.log(b);
//
