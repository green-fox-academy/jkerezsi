'use strict';

document.querySelector('button').addEventListener('click', event => {
    event.preventDefault();
    let request = new XMLHttpRequest();
    let text = document.querySelector('.text')
    request.open('POST', "http://localhost:3005/api/links",true)
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = (data) => {
      if(data.target.status === 400){
        text.innerHTML = "Your alias is already in use";
      } else if (data.target.status === 200){
          let parsed = JSON.parse(data.target.response)[0];
          let code = parsed.secretCode;
          let alias = parsed.alias;
          text.innerHTML = `Your URL is aliased to <strong>${alias}</strong> and your secret code is <strong>${code}</strong>`;
            document.querySelector('.form').reset();
      }}
    request.send(JSON.stringify({
        url: document.querySelector('input[name="url"]').value,
        alias: document.querySelector('input[name="alias"]').value
      }));
});