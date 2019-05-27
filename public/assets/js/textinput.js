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
if (textinputEl3) textinputEl3.addEventListener('input', toggleValueClass3);

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
if (textinputEl4) textinputEl4.addEventListener('input', toggleValueClass4);

function toggleValueClass4(event) {
    if (event.target.value !== "") {
        if (!labelEl4.classList.contains('has-value')) {
            labelEl4.classList.add('has-value');
        }
    } else {
        labelEl4.classList.remove('has-value');
    }
}
