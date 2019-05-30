// var textinputEl = document.getElementById('name-input');
// var labelEl = document.getElementById('input-label');
// if (textinputEl) {
//     textinputEl.addEventListener('input', toggleValueClass)
//     setHasValue(textinputEl.value, labelEl);
// };

// function toggleValueClass(event) {
//     setHasValue(event.target.value, labelEl);
// }

// var textinputEl3 = document.getElementById('name-input3');
// var labelEl3 = document.getElementById('input-label3');
// if (textinputEl3) {
//     textinputEl3.addEventListener('input', toggleValueClass3);
//     setHasValue(textinputEl3.value, labelEl3);
// }

// function toggleValueClass3(event) {
//     setHasValue(event.target.value, labelEl3);
// }

// var textinputEl4 = document.getElementById('name-input4');
// var labelEl4 = document.getElementById('input-label4');
// var invalidInputWrap = document.getElementById('invalid-input-wrap');
// var invalidIcon = document.getElementById('invalid-icon');
// var invalidText = document.getElementById('invalid-text');
// if (textinputEl4) {
//     textinputEl4.addEventListener('input', checkInvalidInput);
//     setHasValue(textinputEl4.value, labelEl4);
// }

// function checkInvalidInput (event) {
//     // toggle value
//     setHasValue(event.target.value, labelEl4);

//     // check email validation
//     if (validateEmail(event.target.value)) {
//         invalidInputWrap.classList.remove('invalid');
//         invalidIcon.classList.add('is-hidden');
//         invalidText.classList.add('is-hidden');

//     } else {
//         invalidInputWrap.classList.add('invalid');
//         invalidIcon.classList.remove('is-hidden');
//         invalidText.classList.remove('is-hidden');
//     }
// }

// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// function setHasValue(value, element) {
//     if (value !== "") {
//         if (!element.classList.contains('has-value')) {
//             element.classList.add('has-value');
//         }
//     } else {
//         element.classList.remove('has-value');
//     }
// }


// Checks content in text inputs on Cards page
var textInputs = document.getElementsByClassName('text-input-wrap');
console.log('textInputs', textInputs);
for (var i = 0; i < textInputs.length; i++) {
    var textInput = new textInputElement(
        textInputs[i].getElementsByTagName('input')[0],
        textInputs[i].getElementsByClassName('input-wrap')[0]
    )
}

function textInputElement(input, label) {
    console.log('textInputElement created with input and label: ', input, label);
    this.inputElem = input;
    this.labelElem = label;
    this.eventFunction = function(event) {
        console.log('input event fired', event);
        if (event.target.value !== "") {
            if (!this.labelElem.classList.contains('has-value')) {
                this.labelElem.classList.add('has-value');
            }
        } else {
            this.labelElem.classList.remove('has-value');
        }
    }

    this.inputElem.addEventListener('input',
        this.eventFunction.bind(this)
    )
}
