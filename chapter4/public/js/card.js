var flowers = [
    {
      name: "개나리",
      thumbnail: "",
      color: "노란색",
      season: "봄",
      lifeCycle: 100,
      country: [
        "대한민국",
        "일본",
        "중국"
      ]
    },
    {
      name: "진달래",
      thumbnail: "",
      color: "분홍색",
      season: "봄",
      lifeCycle: 80,
      country: [
        "대한민국",
        "미국",
        "인도"
      ]
    },{
      name: "철쭉",
      thumbnail: "",
      color: "보라색",
      season: "봄",
      lifeCycle: 10,
      country: [
        "대한민국",
        "태국"
      ]
    },
  ]

// 서버로 부터 데이터를 가져와서 HTML을 그에 맞게 편집
// TODO: http://127.0.0.1:3000/flowers API를 통해 데이터 가져오기
fetch('http://127.0.0.1:3000/flowers', { method: 'GET' })
  .then((response) => response.json())
  .then((json) => {
    // 가져온데이터 (JSON)에 담긴 flowers Array 길이만큼 반복해서 카드 순서대로 데이터를 넣어준다.
    for (var i = 0; i < json.flowers.length; i++) {
      const pElement = document.querySelector('#card' + (i + 1) + '-text');
      pElement.innerHTML = flowers[i].name;
    }

    console.log(json);
  });

console.log(1);
console.log(2);
console.log(3);
console.log(4);