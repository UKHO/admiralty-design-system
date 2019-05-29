var textinputEl = document.getElementById('name-input');
var labelEl = document.getElementById('input-label');
if (textinputEl) textinputEl.addEventListener('input', toggleValueClass);

function toggleValueClass(event) {
    if (event.target.value !== "") {
        if (!labelEl.classList.contains('has-value')) {
            labelEl.classList.add('has-value');
        }
    } else {
        labelEl.classList.remove('has-value');
    }
}

var textinputEl3 = document.getElementById('name-input3');
var labelEl3 = document.getElementById('input-label3');
if (textinputEl3) {
    textinputEl3.addEventListener('input', toggleValueClass3)
    if (textinputEl3.value !== "") {
        labelEl3.classList.add('has-value');
    }
};

function toggleValueClass3(event) {
    if (event.target.value !== "") {
        if (!labelEl3.classList.contains('has-value')) {
            labelEl3.classList.add('has-value');
        }
    } else {
        labelEl3.classList.remove('has-value');
    }
}

var textinputEl4 = document.getElementById('name-input4');
var labelEl4 = document.getElementById('input-label4');
var invalidInputWrap = document.getElementById('invalid-input-wrap');
var invalidIcon = document.getElementById('invalid-icon');
var invalidText = document.getElementById('invalid-text');
if (textinputEl4) {
    textinputEl4.addEventListener('input', checkInvalidInput);
    if (textinputEl4.value !== "") {
        labelEl4.classList.add('has-value');
    }
}

function checkInvalidInput (event) {
    // toggle value
    if (event.target.value !== "") {
        if (!labelEl4.classList.contains('has-value')) {
            labelEl4.classList.add('has-value');
        }
    } else {
        labelEl4.classList.remove('has-value');
    }

    // check email validation
    if (validateEmail(event.target.value)) {
        invalidInputWrap.classList.remove('invalid');
        invalidIcon.classList.add('is-hidden');
        invalidText.classList.add('is-hidden');

    } else {
        invalidInputWrap.classList.add('invalid');
        invalidIcon.classList.remove('is-hidden');
        invalidText.classList.remove('is-hidden');
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
