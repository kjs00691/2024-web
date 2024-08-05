const express = require("express");
const {createHmac} = require("node:crypto");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json()) 

app.post("/login", (req, res) => {
  console.log(req.body);
  // const email = req.body.email;
  // const password = req.body.password;

  const { email, password} = req.body;

  const secret = '123';
  const hash = createHmac('sha256', secret)
    .update(password)
    .digest('hex');

  console.log(hash);


  if(email === 'aaa@aaa.com' && hash === 'c1771ad95972ef1ab887140489863ede4faad7458441a3a8a4781454e368b52d'){
    res.json({result: 'success'});
  }else{
    res.json({result: 'fail'});
  }
});

app.get("/lotto-numbers", (req, res) => {
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
  res.json( { result: pickArray })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
