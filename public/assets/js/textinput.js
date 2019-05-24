var textinputEl = document.getElementById('name-input');
var labelEl = document.getElementById('input-label');
textinputEl.addEventListener('input', toggleValueClass);

function toggleValueClass(event) {
    console.log('change event', event.target.value);
    if (event.target.value !== "") {
        if (!labelEl.classList.contains('has-value')) {
            labelEl.classList.add('has-value');
        }
    } else {
        labelEl.classList.remove('has-value');
    }
}