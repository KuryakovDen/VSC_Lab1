
window.onload  = function () {

    var idSubmit=this.document.getElementById('submit');

    idSubmit.onclick = function() {
        var fieldPassword1=document.getElementById('password1').value;
        var fieldPassword2=document.getElementById('password2').value;
        if (fieldPassword1==fieldPassword2) {
            alert('Поздравляем! Все успешно зарегистрировались:)');
            window.location = 'Registration.html';
        } else {
            alert('Ваши пароли не совпадают!');
        }
    }
}

/*
var tipOfDay = [
    '1 совет',
    '2 совет',
    '3 совет',
    '4 совет',
    '5 совет',
    '6 совет',
    '7 совет',
    '8 совет',
    '9 совет',
    '10 совет'
];

window.onload  = function () {
    var randomIndex = Math.floor(Math.random() * tipOfDay.length);
    alert(tipOfDay[randomIndex]);
}
*/



/*
var mathExampleOne = {
    key: 5+3,
    value:8
}


var mathExampleTwo = {
    key: 12/6,
    value:2
}


var mathExampleThree = {
    key: 5*10,
    value:50
}

*/

/*
$(document).ready(function () {
    alert('Ваша версия JQuery'+jQuery.fn.jquery) //Проверка версии jQuery
});
*/

/*
$(document).ready(function () {
    var fieldPassword1=document.getElementsByName('password1').value;
    var fieldPassword2=document.getElementsByName('password2').value;
    if (fieldPassword1==fieldPassword2) {
        alert('Поздравляем, вы успешно зарегистрированы!');
    } else {
        alert('Ваши пароли не совпадают!');
    }
    return alert;
});
*/