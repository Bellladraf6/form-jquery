$(document).ready(function () {
    let name = $('#full-name');
    let username = $('#your-username');
    let email = $('#e-mail');
    let password = $('#password');
    let repeat = $('#repeat-password');
    let checkbox = $('#checkbox');

    $(name).keypress ((event) => {
        let number = parseInt(event.key);
        if (isNaN(number)) {
            console.log(number);
        } else event.preventDefault();
    });


    $(username).keypress((event) => {
        if (event.key === ',' || event.key === '.') {
            event.preventDefault()
        }
    });


    $(checkbox).change(function (event) {
        if (event.target.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });

    let button = $('button')[0];
    $(button).click ((event) => {
        let valid = true;

        if (name.val() === '') {
            alert('Заполните поле Full Name');
            valid = false;
            event.preventDefault(event)
        }

        if (username.val() === '') {
            alert('Заполните поле Your username');
            valid = false;
            event.preventDefault(event)
        }

        if (email.val() === '') {
            alert('Заполните поле E-mail');
            valid = false;
            event.preventDefault(event)
        }

        if (password.val() === '') {
            alert('Заполните поле Password');
            valid = false;
            event.preventDefault(event)
        }

        if (repeat.val() === '') {
            alert('Заполните поле Repeat Password');
            valid = false;
            event.preventDefault(event)
        }

        if (password.val() !== repeat.val()) {
            alert('Пароли не совпадают');
            valid = false;
            event.preventDefault(event)
        }

        if (checkbox.prop('checked') !==true) {
            alert('Поставьте "галочку", если Вы согласны с пользовательским соглашением');
            valid = false;
            event.preventDefault(event)
        }

        if (valid === true) {
            alert('OKAY')
        }
    });


    let account = $('#account');
    $(account).on('click', () => {
        let boxTitle = $('#box-title');
        $(boxTitle).text('Log in to the system');

        let parent = $('#form');
        let child1 = $('.form-input')[0];
        let child2 = $('.form-input')[2];
        let child3 = $('.form-input')[4];
        let agreed = $('#agreed');
        $(child1).remove();
        $(child2).remove();
        $(child3).remove();
        $(agreed).remove();
        $(account).remove();

        let spanButton = $('#span-button');
        $(spanButton).text('Sign In');
    });
});

