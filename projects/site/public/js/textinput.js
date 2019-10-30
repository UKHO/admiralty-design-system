var textinputEl4 = document.getElementById('name-input4');
var labelEl4 = document.getElementById('input-label4');
var invalidInputWrap = document.getElementById('invalid-input-wrap');
var invalidIcon = document.getElementById('invalid-icon');
var invalidText = document.getElementById('invalid-text');
if (textinputEl4) {
  textinputEl4.addEventListener('input', checkInvalidInput);
}

function checkInvalidInput(event) {
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

// Checks content in text inputs on Cards page
var textInputs = document.getElementsByClassName('text-input-wrap');
for (var i = 0; i < textInputs.length; i++) {
  var textInput = new textInputElement(
    textInputs[i].getElementsByTagName('input')[0],
    textInputs[i].getElementsByClassName('input-wrap')[0],
  );
}

function textInputElement(input, label) {
  this.inputElem = input;
  this.labelElem = label;
  this.checkValue = function() {
    if (this.inputElem.value !== '') {
      if (!this.labelElem.classList.contains('has-value')) {
        this.labelElem.classList.add('has-value');
      }
    } else {
      this.labelElem.classList.remove('has-value');
    }
  };

  // Initialise event handler
  this.inputElem.addEventListener('input', this.checkValue.bind(this));

  // Check initial input value
  this.checkValue();
}
