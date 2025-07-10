# Frontend Mentor - PayAPI multi-page website solution

This is a solution to the [PayAPI multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/payapi-multipage-website-FDLR1Y11e). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email Address` or `Message` fields are empty should show "This field can't be empty"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"

### Screenshot

![screenshot mobile-home](https://github.com/Lo-Deck/PayAPI-multi-page/blob/main/screenshot/PayAPI%20Website%20Challenge-mobile%20-Home.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/PayAPI-multi-page/blob/main/screenshot/PayAPI%20Website%20Challenge-mobile%20-Home-menu.png).
![screenshot tablet](https://github.com/Lo-Deck/PayAPI-multi-page/blob/main/screenshot/PayAPI%20Website%20Challenge-tablet%20-Pricing.png).
![screenshot desktop](https://github.com/Lo-Deck/PayAPI-multi-page/blob/main/screenshot/PayAPI%20Website%20Challenge-desktop-Home.png).
![screenshot desktop-contact](https://github.com/Lo-Deck/PayAPI-multi-page/blob/main/screenshot/PayAPI%20Website%20Challenge-desktop-Contact.png).

### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/PayAPI-multi-page).
- Live Site URL: [Website](https://lo-deck.github.io/PayAPI-multi-page/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to make a multi-page website, and validate a form

```js

    function validateInput(input, index){

        if (input.validity.valueMissing) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `This field is required`;
            return false;
        }

        if (input.type === 'email' && input.validity.typeMismatch) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Not a valid email address`;
            return false;
        }

        if (input.validity.tooShort) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Input too short`;
            return false;
        }

        if (input.validity.tooLong) {
            input.classList.add('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = `Input too long`;
            return false;
        }

        input.classList.remove('error-input');
        document.querySelectorAll('.container-input span.error')[index].textContent = '';
        return true;

    }    

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
