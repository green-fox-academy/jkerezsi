'use strict';

window.onload = () => {
    let getReq = new XMLHttpRequest();
    getReq.open('GET', "http://localhost:3001/api/users", true)
    getReq.setRequestHeader('Content-Type', 'application/json');
    getReq.onload = (data) => {
        let parsed = JSON.parse(data.target.response)
        console.log(parsed)
        let regs = document.querySelector('.regs')
        let total = parsed.length - 5;
        console.log(total)
        for (let i = total; i < parsed.length-1; i++) {
            let div = document.createElement('div')
            let name = parsed[i].emai_address
            div.innerHTML = name;
            regs.appendChild(div)
    }
    }
    getReq.send()
};

let button = document.querySelector('#submit')

button.addEventListener('click', (event) => {
    event.preventDefault();
    let request = new XMLHttpRequest();
    request.open('POST', "http://localhost:3001/api/users", true)
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = (data) => {
        let notification = document.querySelector('.notification')
        if (data.target.status === 201) {
            notification.innerHTML = "You successfully registered"
        }
        if (data.target.status === 202) {
            notification.innerHTML = "Email address already exist"
        }
        if (data.target.status === 400) {
            notification.innerHTML = "Invalid coupon code"
        }

    }
    request.send(JSON.stringify({
        email: document.querySelector('input[name="email"]').value,
        password: document.querySelector('input[name="password"]').value,
        coupon: document.querySelector('input[name="coupon"]').value
    }))
    document.querySelector('input[name="email"]').value = ""
    document.querySelector('input[name="password"]').value = ""
    document.querySelector('input[name="coupon"]').value = ""
});
