// TODO: 함수 예제 추가
// console.log("javascript로 element 편집");

function nameChange() {
    var nameSelectElement = document.querySelector("#nameSelect");
    var nameElement = document.querySelector("#name");
    nameElement.innerHTML = nameSelectElement.value;
}

const updateNameButton = document.querySelector("#updateName");
updateNameButton.addEventListener("click", nameChange);