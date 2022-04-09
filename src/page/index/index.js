require('../common/tailwind.css');
let $ = require('jquery');
let _util = require('util/util.js');


$(function () {

let _header = require('page/common/header.js');
    let images = $('#imgs>img');

    let i = 0;
   

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

   

})