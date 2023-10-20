fetch('/api').then((response) => {
  return response.text();
}).then((data) => {
  var title = JSON.parse(data).title;
  document.getElementById('title').innerText = `${title}`;
})

document.getElementById('title').addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      var value = document.getElementById('title').innerText
      fetch('/api', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{"title": "${value}"}`,
      }).then((response) => {
        console.log(response);
      });
    }
});
