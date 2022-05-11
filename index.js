const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');
const btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then( data => {
      const id = data.slip.id
      const text = data.slip.advice;
  
      adviceNumber.innerHTML = id;
      adviceText.innerHTML = text;
    })
  })







