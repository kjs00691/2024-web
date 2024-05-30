// Chapter 2
// 배열 (Array)
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var chars = ["a", "b", "c", "d", "e"];

// 반복문
// 1 ~ 100까지 더한 결과를 알려주는 함수
function sum() {
    // i++, i = i + 1, i += 1,
    var sum = 0;
    for (var i = 1; i <= 100; i++) {
        sum += i;
        console.log(sum);
    }
    console.log("1부터 100까지 더한 결과: ", sum);
}

// 배열과 반복문
function example() {
    for (var i = 0; i < chars.length; i++) {
        console.log(chars[i]);
    }
}

/*
var person = {
    age: 20,
    gender: "male",
    address: "경기도 군포시",
    tall: "175cm",
    name: "가렌",
    sayHello: function () {
        return "hello";
    }
    qSkill: function() {
        return setSilent();
    }
}
*/


// Chapter 1
function nameChange() {
    var nameSelectElement = document.querySelector("#nameSelect");
    var nameElement = document.querySelector("#name");
    nameElement.innerHTML = nameSelectElement.value;
}

const updateNameButton = document.querySelector("#updateName");
updateNameButton.addEventListener("click", nameChange);