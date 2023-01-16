$(document).ready(function()
{ 
    $(".dws-form").on("click", ".tab", function()
    {
        $(".dws-form .tab").removeClass("active");
        $(".tab-form").toggleClass("del"); //добавляет или удаляет в зависимости от наличия

        $(this).addClass("active");
    })
})

function validate_entrance(form)
{
    if(typeof form.elements.mail.value != 'undefined' && typeof form.elements.password.value != 'undefined')
    {
        alert("Почта: " + (/^[a-z0-9\._]+\@(gmail|mail)\.(ru|com|by)$/i).test(form.elements.mail.value))

        alert("Пароль: " + (/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/).test(form.elements.password.value))
    }
}

function validate_login(form)
{
    if(
        typeof form.elements.mail.value != 'undefined' &&
        typeof form.elements.name.value != 'undefined' &&
        typeof form.elements.date.value != 'undefined' &&
        typeof form.elements.f_name.value != 'undefined'
        )
    {
        alert("Почта: " + (/^[a-z0-9\._]+\@(gmail|mail)\.(ru|com|by)$/i).test(form.elements.mail.value))

        alert("Имя: " + (/^([A-Z][a-z]+)|([А-Я][а-я]+)$/).test(form.elements.name.value))

        alert("Фамилия: " + (/^([A-Z][a-z]+)|([А-Я][а-я]+)$/).test(form.elements.f_name.value))
            
        alert("Дата: " + (/^(3[01]|[12][0-9]|0[1-9])[\.\-\/\\](0[1-9]|1[012])[\.\-\/\\](19[5-9][0-9]|20[0-2][0-9])$/).test(form.elements.date.value))
    }
    else alert('no')
}