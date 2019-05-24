var textinputEl = document.getElementById('name-input');
var labelEl = document.getElementById('input-label');
textinputEl.addEventListener('input', toggleValueClass);

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
textinputEl3.addEventListener('input', toggleValueClass3);

function toggleValueClass3(event) {
    if (event.target.value !== "") {
        if (!labelEl3.classList.contains('has-value')) {
            labelEl3.classList.add('has-value');
        }
    } else {
        labelEl3.classList.remove('has-value');
    }
}