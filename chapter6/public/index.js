// ECMAScript 2015, ES6 부터 지원되는 것들
// 함수선언 ES5
function xxx() {
    // console.log(this);
}
// ES6
const xxx = () => {
    // console.log(this);
}
// Context의 차이가 존재

// 변수선언
var aaa;
// ES6
const aaaa = 1;
// 변하지않는 상수 형태가 필요했다.
let aaaaa;
// 지역변수
function aaa() {
    let abc;
}

// Promise 패턴 (ES5 Callback Hell 패턴을 극복하기 위함)
// setTimeout(function () {
//     if () {
//         var ab = 0;

//     }
//     setTimeout(function () {
//         setTimeout(function () {
//             setTimeout(function () {
//                 var ab
//                 setTimeout(function () {
//                     setTimeout(function () {
//                         setTimeout(function () {
//                             setTimeout(function () {
//                                 setTimeout(function () {

//                                 }, 100)
//                             }, 100)
//                         }, 100)
//                     }, 100)
//                 }, 100)
//             }, 100)
//         }, 100)
//     }, 100)
// }, 100)

fetch()
    .then(function () {

    })
    .then(function () {

    })
    .then()
    .then()
    .then()
