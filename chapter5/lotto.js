// 1부터 45까지 적힌 공이 담긴 바구니
var numbersArray = [];
for (var i = 0; i < 45; i++) {
    numbersArray[i] = i + 1;
}

var pickArray = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

// Random하게 숫자 6개 뽑아서 pickArray에 담기
// type1: Random하게 뽑은 숫자가 이미 뽑혔는지 비교
// type2: numbersArray의 바구니에서 뽑힌건 제거하고 나머지 중에 뽑기
for (var i = 0; i < 6; i++) {
    var pickIndex = getRandomInt(0, numbersArray.length);
    var pickNumber = numbersArray.splice(pickIndex, 1)[0];
    pickArray.push(pickNumber);
}

pickArray = pickArray.sort(function (a, b) {
    if (a - b > 0) {
        return 1;
    } 

    if (a - b < 0) {
        return -1;
    }

    return 0;
});
console.log(pickArray);
