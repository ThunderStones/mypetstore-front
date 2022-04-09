
let $ = require('jquery');
let _account_service = require('service/accountService.js');

let header = {
    init: function () {
        this.onLoad();
        this.bindEvent();
        return this;
    },
    onLoad: function () {
        console.log(_account_service);
        _account_service.login('j2ee', '123456', function (res) {
            console.log(res);
        })
    },
    bindEvent: function () {
        $(function () {
            let switch_signin_btn = $('#switch_sign_in');
            let switch_signon_btn = $('#switch_sign_on');
            let sign_in_form = $('#signin');
            let sign_on_form = $('#signon');
            console.log(sign_on_form);
            let shadow = $('#shadow');
            let form = $('#form');
            $('#sign_in_btn').on('click', function () {
                console.log(1);
                sign_in_form[0].style.transform = 'rotateY(0deg)';
                sign_on_form[0].style.transform = 'rotateY(-180deg)';
                shadow.show();
                form.show(400);
            })
            $('#sign_up_btn').on('click', function () {
                console.log(2);
                sign_in_form[0].style.transform = 'rotateY(180deg)';
                sign_on_form[0].style.transform = 'rotateY(0deg)';
                shadow.show();
                form.show(400);
            })

            shadow.on('click', function () {
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
    }
}

module.exports = header.init();