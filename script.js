
/* OPEN CLOSE MENU */

const btnMenu = document.querySelector('.button-menu');

let isMenuClicked = false;

btnMenu.addEventListener('click', () => {

    isMenuClicked = !isMenuClicked;

    if(isMenuClicked){
        document.querySelector('.menu').style.display = 'block';
        document.querySelector('.background').style.display = 'block';
        document.querySelector('.button-menu img').src = './assets/shared/mobile/close.svg';
    }
    else{

        document.querySelector('.menu').style.display = 'none';
        document.querySelector('.background').style.display = 'none';
        document.querySelector('.button-menu img').src = './assets/shared/mobile/menu.svg';
    }

});


/* FORM */

if(document.querySelector('.contact')){

    const myForm = document.querySelector('#myForm');
    const formInputs = myForm.querySelectorAll('.input, textarea'); 

    formInputs.forEach( (input, index) => {

        input.addEventListener('input', () => {
            input.classList.remove('error-input');
            document.querySelectorAll('.container-input span.error')[index].textContent = '';

        });

    });


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


    myForm.addEventListener('submit', (event) => {

        formInputs.forEach( (input, index) => {

            if (!validateInput(input, index)) {
                event.preventDefault(); 
            }
            else{
                console.log('form submit');
                event.preventDefault(); 
            }

        });

    });
    
}


document.querySelectorAll('.demo-form').forEach( (item) => {

    item.addEventListener('submit', (event) => {

        event.preventDefault(); 

    });

});
