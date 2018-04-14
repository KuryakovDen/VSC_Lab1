//Поверка на совпадение паролей и капчи при регистрации
window.onload  = function () {

    var idSubmit=this.document.getElementById('submit');

    idSubmit.onclick = function() {
        var fieldPassword1=document.getElementById('password1').value;
        var fieldPassword2=document.getElementById('password2').value;
        var fieldLogin=document.getElementById('login').value;
        var fieldCaptchaExample=document.getElementById('random-text').value;
        var fieldCaptchaAnswer=document.getElementById('captcha-text').value;
        

        if (fieldPassword1!='' && fieldPassword2!='' && fieldCaptchaAnswer!='' && fieldPassword1==fieldPassword2 && fieldCaptchaExample==fieldCaptchaAnswer) {
            $('#modal-window-true').css("display", "block");
        } else if (fieldPassword1==''|| fieldPassword2=='' || fieldLogin=='' || fieldCaptchaExample=='' || fieldCaptchaAnswer=='') {
            $('#modal-window-empty').css("display", "block");
        } else {
            $('#modal-window-false').css("display", "block");
        }
    }
}

//Массив "Советов дня"
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





/* Вывод случайного "Совета дня"
window.onload  = function () {
    var randomIndex = Math.floor(Math.random() * tipOfDay.length);
    alert(tipOfDay[randomIndex]);
}*/


//Модальное окно "Совет дня"
var modalWindowFirst=$(document).ready(function () {
    $('#button-advice').click(function () {
        $('#modal-window-advice').css("display", "block");
        var randomIndex = Math.floor(Math.random() * tipOfDay.length);
        $('.span-advice').innerHTML=tipOfDay[randomIndex];
    });

    $('.close').click(function () {
        $('#modal-window-advice').css("display", "none");
    });
});


//Модальное окно "Правда"
var modalWindowSecond=$(document).ready(function () {
    $('#button-true').click(function () {
        $('#modal-window-true').css("display", "block");
    });

    $('.close').click(function () {
        $('#modal-window-true').css("display", "none");
    });
});

//Модальное окно "Ложь"
var modalWindowThird=$(document).ready(function () {
    $('#button-false').click(function () {
        $('#modal-window-empty').css("display", "block");
    });

    $('.close').click(function () {
        $('#modal-window-empty').css("display", "none");
    });
});

//Модальное окно "Ложь"
$(document).ready(function () {
    $('#button-false').click(function () {
        $('#modal-window-false').css("display", "block");
    });

    $('.close').click(function () {
        $('#modal-window-false').css("display", "none");
    });
});


//Капча
function GenerateCaptcha () {
    var captchaArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
    for (var i=0;i<captchaArray.length;i++) {
        
        var a = captchaArray[Math.floor(Math.random()*captchaArray.length)];
        var b = captchaArray[Math.floor(Math.random()*captchaArray.length)];
        var c = captchaArray[Math.floor(Math.random()*captchaArray.length)];
        var d = captchaArray[Math.floor(Math.random()*captchaArray.length)];
        var e = captchaArray[Math.floor(Math.random()*captchaArray.length)];
        var f = captchaArray[Math.floor(Math.random()*captchaArray.length)];
        var g = captchaArray[Math.floor(Math.random()*captchaArray.length)];
        
    };

    var result = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;

    document.getElementById("random-text").value = result;
    /*
        var symbolsArray = [a, b, c, d, e, f, g];

        for (var j=0;j<symbolsArray.length;j++) {
            var result=symbolsArray[j]+' ';
        }
    */


        /*
        $('#refresh-button').click(function () {
            $('#random-text').value = result;
        });
        */
       
    /*
    var symbolsArray = [a, b, c, d, e, f, g];

    for (var j=0;j<symbolsArray.length;j++) {
        var result=symbolsArray[j]+' ';
    }
    return result;
    $(document).ready(function () {
        ('#random-text').value = result;
    });*/
};
//Реализация кнопки "Наверх"
$(document).ready(function(){
    /**
     * При прокрутке страницы, показываем или скрываем кнопку
     */
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

/*
$(document).ready(function () {
    alert('Ваша версия JQuery'+jQuery.fn.jquery) //Проверка версии jQuery
});
*/
