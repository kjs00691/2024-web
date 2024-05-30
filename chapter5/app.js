const express = require("express");
const qs = require("qs");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("query parser", function (str) {
  return qs.parse(str, {
    /* custom options */
  });
});

app.use(express.static("public"));

const champions = ["가렌", "그레이브즈", "나서스", "마스터이", "볼리베어"];

var flowers = [
  {
    name: "개나리",
    thumbnail: "",
    color: "노란색",
    season: "봄",
    lifeCycle: 100,
    country: ["대한민국", "일본", "중국"],
  },
  {
    name: "진달래",
    thumbnail: "",
    color: "분홍색",
    season: "봄",
    lifeCycle: 80,
    country: ["대한민국", "미국", "인도"],
  },
  {
    name: "철쭉",
    thumbnail: "",
    color: "보라색",
    season: "봄",
    lifeCycle: 10,
    country: ["대한민국", "태국"],
  },
];

app.get("/data", function (req, res) {
  // 인증 된 사용자인지 체크
  // 요청에 대한 유효성 확인
  // DB에서 데이터를 찾고 가져온다
  // 가져온 데이터를 JSON으로 변환한다.
  res.json({ name: "이재명", age: 50, address: "경기도 군포시" });
});

app.get("/champions", function (req, res) {
  res.json({ champions: champions });
});

app.get("/champions/:championIndex", (req, res) => {
  res.json({ champion: champions[req.params.championIndex] });
});

app.get("/flowers", (req, res) => {
  // console.log(req.query);
  // query에서 color 값이 있을 경우, 가져와서 Flowers 목록에서 일치하는 color를 가진 항목만 반환한다.
  if (req.query.color !== undefined) {
    const filteredFlowers = flowers.filter(
      (flower) => flower.color === req.query.color
    );
    res.json({ flowers: filteredFlowers.map((flower) => flower.name) });
  } else {
    // var list = flowers.map(flower => flower.name);
    // flowers.map(function (flower) {
    //   return flower.name;
    // });

    res.json({ flowers: flowers.map((flower) => flower.name) });
  }

  // var list = [];
  // for (var i = 0; i < flowers.length; i++) {
  //   list.push(flowers[i].name);
  // }
});

app.get("/flowers/:flowerIndex", (req, res) => {
  res.json({ flowers: flowers[req.params.flowerIndex] });
});

app.get("/example1", (req, res) => {
  res.render("index", { name: "&#x2764;" });
});

app.get("/example2", (req, res) => {
  res.render("index", { name: "이재명" });
});

app.get("/example3", (req, res) => {
  res.render("index", { name: "한동훈" });
});

app.get("/lotto", (req, res) => {
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
  res.json(pickArray);
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/2', (req, res) => {
//     res.send('안녕!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
