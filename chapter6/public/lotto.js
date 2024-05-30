function fetchLottoNumbers(){
    fetch('http://localhost:3000/lotto-numbers')
    .then(response => response.json())
    .then((json) => {
        const ul = document.querySelector('#lottoNumbers');
        ul.innerHTML = '';
        for(let i = 0; i < json.result.length; i++){
            //ul.innerHTML += '<li>' + json.result[i] + '</li>';
            ul.innerHTML += `<li>${json.result[i]}</li>`;
        }
        console.log(json)
    });
}

    const btn = document.querySelector('#btnGenLottoNumbers');
    btn.addEventListener('click', ()=>{
        fetchLottoNumbers();
    });