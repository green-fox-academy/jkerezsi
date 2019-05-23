'use strict';


    let request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8080/titles")
    request.send();
    request.onload = (data) => {
        let parsed = JSON.parse(data.target.response);
        console.log(parsed);
        for (let i = 0; i < parsed.length; i++) {
            let body = document.querySelector("body")
            let newDiv = document.createElement("div")
            newDiv.innerHTML = parsed[i].book_name;
            body.appendChild(newDiv);
        }
    };

    request.onerror = function () {
        console.log('connection error');
    };

