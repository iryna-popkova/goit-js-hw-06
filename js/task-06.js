const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', function (event) {
    const target = event.currentTarget
    if (parseInt(target.getAttribute('data-length')) != target.value.trim().length) {
        target.classList.remove('valid');
        target.classList.add('invalid')
    } else {
        target.classList.remove('invalid');
        target.classList.add('valid')
    }
    
})



