const btnSubmit = document.querySelector("#btnSubmit");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");

const cat = localStorage.getItem("email");
inputEmail.value = cat
// inputPassword.addEventListener('input', function(e){
//     if(e.keyCode === ){
//         //에러
//     }
// })
btnSubmit.addEventListener('click', function(){

    console.log(inputEmail.value, inputPassword.value);

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email: inputEmail.value,
            password: inputPassword.value
        }),
    })
    .then(res => res.json())
    .then((json) =>{
        const result = json.result;
        if(result === 'success'){
            alert('로그인에 성공했습니다.');
            localStorage.setItem("email", inputEmail.value);
        }else{
            alert('로그인 실패.');
            localStorage.removeItem("email")
        }
    });
});