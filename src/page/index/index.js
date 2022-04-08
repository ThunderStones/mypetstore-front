require('../common/tailwind.css');
let $ = require('jquery');
$(function () {


    let images = $('#imgs>img');

    let i = 0;
    let switch_signin_btn = $('#switch_sign_in');
    let switch_signon_btn = $('#switch_sign_on');
    let sign_in_form = $('#signin');
    let sign_on_form = $('#signon');

    function changeImg() {
        $(images[i]).removeClass('opacity-40').addClass('opacity-0');
        i = (i + 1) % images.length;
        $(images[i]).removeClass('opacity-0').addClass('opacity-40');
    }

    setInterval(changeImg, 6000);

    $('#down_arrow').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#start').offset().top
        }, 1000);
    });

    let shadow = $('#shadow');
    let form = $('#form');
    $('#sign_in_btn').on('click', function () {
        sign_in_form[0].style.transform = 'rotateY(0deg)';
        sign_on_form[0].style.transform = 'rotateY(-180deg)';
        shadow.show();
        form.show(400);
    })
    $('#sign_up_btn').on('click', function () {
        sign_in_form[0].style.transform = 'rotateY(180deg)';
        sign_on_form[0].style.transform = 'rotateY(0deg)';
        shadow.show();
        form.show(400);
    })

    shadow.on('click', function() {
        shadow.hide();
        form.hide(400)
    })
    

    sign_in_form[0].style.backfaceVisibility = 'hidden';
    sign_on_form[0].style.backfaceVisibility = 'hidden';
    switch_signon_btn.on('click', function () {
        console.log(1);
        sign_in_form[0].style.transform = 'rotateY(180deg)';
        sign_on_form[0].style.transform = 'rotateY(0deg)';
        sign_in_form.rotate
    })

    switch_signin_btn.on('click', function () {
        console.log(2);
        sign_in_form[0].style.transform = 'rotateY(0deg)';
        sign_on_form[0].style.transform = 'rotateY(-180deg)';
    })

    sign_on_form[0].style.transform = 'rotateY(-180deg)';

})