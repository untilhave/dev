document.getElementById('myButton').onclick = myFunction;

function myFunction() {
  alert('Отправлено, ожидайте звонка!');
}

function inputFill(inputData) {
    var btn = document.getElementById('submitBtn');
    if (inputData.value.length > 0) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}

