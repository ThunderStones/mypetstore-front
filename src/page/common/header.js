
let $ = require('jquery');
let _account_service = require('service/account_service.js');
const _util = require('../../util/util');
let _product_list = require('./product-list.js');
let header = {
    _account: null,
    _this: this,
    init: function () {
        this.onLoad();
        this.bindEvent();
        return this;
    },
    onLoad: function () {
        console.log(window.localStorage.getItem('token'))
        window.localStorage.getItem('token') === null ? this.showLogin() : this.showUserInfo();
    },
    showLogin: function () {
        $('div.login').show();
        $('div.userinfo').hide();

    },
    showLoginForm: function () {
        sign_in_form[0].style.transform = 'rotateY(0deg)';
        sign_on_form[0].style.transform = 'rotateY(-180deg)';
        shadow.show();
        form.show(400);
    },
    showUserInfo: function () {
        console.log('show userinfo');
        let token = window.localStorage.getItem('token');
        _account_service.setToken(token);
        _account_service.getUserInfo(
            (res) => {
                console.log(res);
                if (res.data.status === 20) {
                    this._account = res.data.data;
                    window.localStorage.setItem('userInfo', JSON.stringify(res.data.data));
                    $('div.userinfo span').text(res.data.data.username.substr(0, 1).toUpperCase());
                    $('#descn-username').text(res.data.data.username);
                    $('div.login').hide();
                    $('div.userinfo').show();
                } else {
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('userInfo');
                    header.showLogin();
                }
            })
    },
    login: function () {
        username = $('#username').val();
        password = $('#password').val();
        if (username === '' || password === '') {
            $('.errorMsg').text('Username or password cannot be empty');
            return;
        }
        _account_service.login(username, password,
            (res) => {
                if (res.data.status === 20) {
                    window.localStorage.setItem('token', res.data.data.token);
                    header.showUserInfo();
                    $('#errorMsg').html('');
                    $('#rerrorMsg').html('');
                    $('#shadow').hide();
                    $('#form').hide(400)
                } else if (res.data.status === 10) {
                    $('errorMsg').text(res.data.msg);
                }
            },
            (err) => {
                console.log(err);
            }
        )
    },

    bindEvent: function () {
        $(() => {
            let switch_signin_btn = $('#switch_sign_in');
            let switch_signon_btn = $('#switch_sign_on');
            let sign_in_form = $('#signin');
            let sign_on_form = $('#signon');
            let shadow = $('#shadow');
            let form = $('#form');
            let errorMsg = $('#errorMsg');
            let rerrorMsg = $('#rerrorMsg');
            let detail_action_panel = $('#detail-action-panel');
            $('#do_sign_in').on('click', this.login);
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

            shadow.on('click', function () {
                errorMsg.html('');
                rerrorMsg.html('');
                shadow.hide();
                form.hide(400)
            })


            sign_in_form[0].style.backfaceVisibility = 'hidden';
            sign_on_form[0].style.backfaceVisibility = 'hidden';
            switch_signon_btn.on('click', function () {
                sign_in_form[0].style.transform = 'rotateY(180deg)';
                sign_on_form[0].style.transform = 'rotateY(0deg)';
                sign_in_form.rotate
            })

            switch_signin_btn.on('click', function () {
                sign_in_form[0].style.transform = 'rotateY(0deg)';
                sign_on_form[0].style.transform = 'rotateY(-180deg)';
            })

            sign_on_form[0].style.transform = 'rotateY(-180deg)';

            $('div.userinfo').on('mouseover', function () {
                detail_action_panel.show();
            })
            $('div.userinfo').on('mouseout', function () {
                detail_action_panel.hide();
            })

        })
        $('#sign-out-btn').on('click', function () {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('userInfo');
            header.showLogin();
            window.location.href = '/view/index.html';
        });

        $('#do_sign_up').on('click', async function () {
            let username = $('#r_username').val();
            let password = $('#r_password').val();
            let confirmPassword = $('#r_repeat').val();
            if (username === '' || password === '' || confirmPassword === '') {
                _util.showErrorMsg('Username or password cannot be empty');
                return;
            }
            if (password !== confirmPassword) {
                _util.showErrorMsg('Password and confirm password do not match');
                return;
            }
            let res = await _account_service.register(username, password);
            if (res.data.status === 20) {
                _util.showErrorMsg('Register successfully');
                shadow.hide();
                form.hide(400);
            } else {
                _util.showErrorMsg(res.data.msg);
            }
            let loginRes = await _account_service.login(username, password);
            if (loginRes.data.status === 20) {
                window.localStorage.setItem('token', loginRes.data.data.token);
                window.localStorage.setItem('userInfo', JSON.stringify(loginRes.data.data));
                header.showUserInfo();
            }
        });
        $('#searchInput').on('focus', function () {
            $('#search').hide(400);
        })
    },

}

module.exports = header.init();