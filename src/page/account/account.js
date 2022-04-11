let $ = require('jquery');
let _header = require('page/common/header.js');
require('../common/tailwind.css');
let _address_service = require('service/address_service.js');
let _account_service = require('service/account_service.js');
let _edit_address = require('../common/edit_address.js');
let _account = {
    account: null,
    address: null,
    profile_panel: $('#profile_control'),
    address_panel: $('#address_control'),
    password_panel: $('#password_control'),
    profile_btn :$('#profile_btn'),
    address_btn :$('#address_btn'),
    password_btn :$('#password_btn'),
    init: function () {

        this.loadData();
        this.bindEvent();
    },
    loadData: function () {
        this.loadAccount();
        this.loadAddress();
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
        if (res.data.status === 20) {
            this.address = res.data.data;
        } else {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('userInfo');
            _header.showLoginForm();
        }


    },
    renderAddress: function () {
        let addressList = this.address;
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
        address_info_box.append(add_address);
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
        let edit_btn = $('.edit_btn');
        edit_btn.on('click', function () {
            let address_data = $(this).parents('.address_info').data('address');
        })
    },
    setButtonBlue: function(selected_btn) {
        let btn_array = [this.profile_btn, this.address_btn, this.password_btn];
        btn_array.forEach(function(btn) {
            btn.removeClass('bg-blue-600');
            btn.removeClass('text-white');
        })
        selected_btn.addClass('bg-blue-600');
        selected_btn.addClass('text-white');
        selected_btn.removeClass('hover:bg-gray-200');  
    }


}

module.exports = _account.init();
