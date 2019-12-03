// patterns
const patterns = {
        telephone: /^\d{11}$/,
        vladimir : /vladimir/,
        number : /[0-9]{11},
        username: /^[a-z\d]{5,12}$/i,
        password: /^[\d\w@-]{8,20}$/i
};

const inputs = document.querySelectorAll('input');

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
             console.log(patterns[e.target.attributes.name.value]);
    });
});
