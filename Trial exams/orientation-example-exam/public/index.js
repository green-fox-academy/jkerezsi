'use strict';

let request = new XMLHttpRequest();
    request.open('GET', "http://localhost:3005/api/links",true)
    request.send();
    request.onload = (data) => {
        let allLinks = JSON.parse(data.target.response);
        console.log(allLinks)
    }