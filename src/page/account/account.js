let $ = require('jquery');
let _header = require('page/common/header.js');
require('../common/tailwind.css');
let _address_service = require('service/address_service.js');
let _account_service = require('service/account_service.js');
let _edit_address = require('../common/edit_address.js');
const _util = require('../../util/util');
let _account = {
    account: null,
    address: null,
    profile_panel: $('#profile_control'),
    address_panel: $('#address_control'),
    password_panel: $('#password_control'),
    profile_btn: $('#profile_btn'),
    address_btn: $('#address_btn'),
    password_btn: $('#password_btn'),
    init: function () {

        this.loadData();
        this.bindEvent();
        this.setButtonBlue(this.profile_btn);
        return this;
    },
    loadData: function () {
        _account.loadAccount();
        _account.loadAddress();
    },
    loadAccount: async function () {
        let token = window.localStorage.getItem('token');
        if (token === null) {
            _header.showLoginForm();
            return;
        }
        _account_service.setToken(token);
        _address_service.setToken(token);

        let res = await _account_service.getUserInfo();
        console.log(res);
        if (res.data.status === 20) {
            this.account = res.data.data;
            $('#username_field').text(this.account.username);
            $('#E-mail_field').val(this.account.email);
            $('#phone_field').val(this.account.phone);
            $('#country_field').val(this.account.country);
            $('#first_name_field').val(this.account.firstName);
            $('#last_name_field').val(this.account.lastName);
        } else {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('userInfo');
            _header.showLoginForm();
        }
    },
    loadAddress: async function () {
        let token = window.localStorage.getItem('token');
        if (token === null) {
            _header.showLoginForm();
            return;
        }
        _account_service.setToken(token);
        _address_service.setToken(token);

        let res = await _address_service.getAddressList();
        console.log(res);
        if (res.data.status === 20) {
            this.address = res.data.data;
        } else {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('userInfo');
            _header.showLoginForm();
        }


    },
    renderAddress: async function () {
        await _account.loadAddress();
        let addressList = _account.address;
        let address_info_box = $('#address_info_box');
        let address_info = address_info_box.find('.address_info').eq(0);
        let add_address = address_info_box.find('.add_address').eq(0);
        address_info_box.empty();
        for (let i = 0; i < addressList.length; i++) {
            let address_info_copy = address_info.clone();
            address_info_copy.find('.address_name').text(addressList[i].addressName);
            address_info_copy.find('.phone').text(addressList[i].phone);
            address_info_copy.find('.address_detail').text(addressList[i].addressDetail);
            address_info_copy.find('.name').text(addressList[i].name);
            address_info_copy.data('address', addressList[i]);
            address_info_box.append(address_info_copy);
        }
        let edit_btn = $('.edit_btn');
        edit_btn.on('click', function () {
            let address_data = $(this).parents('.address_info').data('address');
            _edit_address.showEditAddressForm(address_data, _account.renderAddress);
        })
        address_info_box.append(add_address);
        add_address.on('click', function () {
            _edit_address.showNewAddressForm(_account.renderAddress);
        });
    },
    bindEvent: function () {
        let _this = this;
        this.profile_btn.on('click', function () {
            _this.setButtonBlue($(this));
            _this.password_panel.addClass('hidden');
            _this.profile_panel.removeClass('hidden');
            _this.address_panel.addClass('hidden');
        });
        this.address_btn.on('click', function () {
            _this.setButtonBlue($(this));
            _this.renderAddress();
            _this.password_panel.addClass('hidden');
            _this.profile_panel.addClass('hidden');
            _this.address_panel.removeClass('hidden');
        });
        this.password_btn.on('click', function () {
            _this.setButtonBlue($(this));
            _this.profile_panel.addClass('hidden');
            _this.address_panel.addClass('hidden');
            _this.password_panel.removeClass('hidden');
        });
        $('#submit_profile').on('click', async function () {

            let account = _header._account;
            $('#E-mail_field').removeClass('border-red-600');
            $('#phone_field').removeClass('border-red-600');
            $('#country_field').removeClass('border-red-600');
            $('#first_name_field').removeClass('border-red-600');
            $('#last_name_field').removeClass('border-red-600');
            let email = $('#E-mail_field').val();
            let phone = $('#phone_field').val();
            let country = $('#country_field').val();
            let firstName = $('#first_name_field').val();
            let lastName = $('#last_name_field').val();
            // validate not empty
            flag = false;
            if (_util.validation(email, 'require') === false) {
                flag = true;
                $('#E-mail_field').addClass('border-red-600');
            }
            if (_util.validation(phone, 'require') === false) {
                flag = true;
                $('#phone_field').addClass('border-red-600');
            }
            if (_util.validation(country, 'require') === false) {
                flag = true;
                $('#country_field').addClass('border-red-600');
            }
            if (_util.validation(firstName, 'require') === false) {
                flag = true;
                $('#first_name_field').addClass('border-red-600');
            }
            if (_util.validation(lastName, 'require') === false) {
                flag = true;
                $('#last_name_field').addClass('border-red-600');
            }
            if (flag) {
                return;
            }
            account.email = email;
            account.phone = phone;
            account.country = country;
            account.firstName = firstName;
            account.lastName = lastName;
            let res = await _account_service.modifyUserInfo(account);
            console.log(res);
            if (res.data.status === 20) {
                _util.showErrorMsg('修改成功');
            }
        });

        $('#submit_password').on('click', async function () {
            let oldPassword = $('#old_password').val();
            let newPassword = $('#new_password').val();
            let confirmPassword = $('#confirm_password').val();
            $('#old_password').removeClass('border-red-600');
            $('#new_password').removeClass('border-red-600');
            $('#confirm_password').removeClass('border-red-600');
            if (_util.validation(oldPassword, 'require') === false) {
                $('#old_password').addClass('border-red-600');
                return;
            }
            if (_util.validation(newPassword, 'require') === false) {
                $('#new_password').addClass('border-red-600');
                return;
            }
            if (_util.validation(confirmPassword, 'require') === false) {
                $('#confirm_password').addClass('border-red-600');
                return;
            }
            if (newPassword !== confirmPassword) {
                $('#new_password').addClass('border-red-600');
                $('#confirm_password').addClass('border-red-600');
                _util.showErrorMsg('两次输入的密码不一致');
                return;
            }
            let res = await _account_service.modifyPassword(oldPassword, newPassword);
            console.log(res);
            if (res.data.status === 20) {
                _util.showErrorMsg('修改成功');
            } else if(res.data.status === 43){
                _util.showErrorMsg('原密码错误');
            } else {
                _util.showErrorMsg('服务器内部错误');
            }
        })


    },
    setButtonBlue: function (selected_btn) {
        let btn_array = [this.profile_btn, this.address_btn, this.password_btn];
        btn_array.forEach(function (btn) {
            btn.removeClass('bg-blue-600');
            btn.removeClass('text-white');
            btn.addClass('hover:bg-gray-200');

        })
        selected_btn.addClass('bg-blue-600');
        selected_btn.addClass('text-white');
        selected_btn.removeClass('hover:bg-gray-200');
    }

}

module.exports = _account.init();
