let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function conversion() {
    return new Promise(function(resolve,reject) {
        let request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');

        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status == 200) {
                resolve()
            } else {
                reject()
            }
        }
        request.send(inputRub);
        
        })

        let data = JSON.parse(request.response);

        conversion(inputRub)
        .then(()=> inputUsd.value = inputRub.value / data.usd)
        .catch(()=> inputUsd.value = "Что-то пошло не так!")
    });
        
        
    /*
// some function and there is i create promise
let Promise = new Promise(function(resolve, reject) {// resolve - promise done, reject - promise didn't do
// some function
});

return promise;

// some function
    .then()*/