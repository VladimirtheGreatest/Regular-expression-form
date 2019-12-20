// patterns
const patterns = {
        telephone: /^\d{11}$/,
        vladimir : /vladimir/,
        number : /[0-9]{11},
        username: /^[a-z\d]{5,12}$/i,
        password: /^[\d\w@-]{8,20}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        search: /^[A-Z][a-zA-Z]*$/ //first letter must be uppercase
};

const inputs = document.querySelectorAll('input');

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
              // console.log(patterns[e.target.attributes.name.value]);
             validate(e.target, patterns[e.target.attributes.name.value]);
    });
});
