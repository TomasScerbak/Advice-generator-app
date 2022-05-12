# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [https://github.com/TomasScerbak/Advice-generator-app.git]
- Live Site URL: [https://tomasscerbak.github.io/Advice-generator-app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JS
- API

### What I learned

This is my first API project where I learned how to fetch remote API and how to work with data.

To see how you can add code snippets, see below:

```js
const adviceNumber = document.querySelector('.advice-number');
const adviceText = document.querySelector('.advice-text');
const btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then( data => {
      const id = data.slip.id
      const text = data.slip.advice;
  
      adviceNumber.innerHTML = `advice # ${id}`;
      adviceText.innerHTML = `"${text}"`;
    })
  })
}
```

### Continued development

I will continue to learn more about APIs, ASYNC JS and how to work with API data

## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)

