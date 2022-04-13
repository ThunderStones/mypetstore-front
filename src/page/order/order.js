let $ = require('jquery');
let _util = require('util/util.js');
let _header = require('page/common/header.js');
let _address_service = require('service/address_service.js');
let _cart_service = require('service/cart_service.js');
let _catalog_service = require('service/catalog_service.js');
let _order_service = require('service/order_service.js');
let address_info_template = require('page/common/address.template');
let cart_items_template = require('page/common/order_item.template');
let _order = {
    selected_address: null,
    address_list: null,
    address_list_rendered: false,
    cart_items: null,
    init: async function () {
        let token = window.localStorage.getItem('token');
        if (token) {
            _address_service.setToken(token);
        } else {
            _header.showLoginForm();
        }
        this.loadData();
        this.bindEvent();
        return this;
    },
    loadData: async function () {
        let res = await _address_service.getAddressList();
        if (res.data.status === 20) {
            this.address_list = res.data.data;
            this.selected_address = this.address_list[0];
            let rendered = _util.renderHtml(address_info_template, { address: this.selected_address });
            $('.selected_address_info').html(rendered);
        }

        // load cart items
        let total = 0;
        let item_res = await _cart_service.getCartInfo();
        if (item_res.data.status === 20) {
            this.cart_items = item_res.data.data;
            for (let index = 0; index < this.cart_items.length; index++) {
                const element = this.cart_items[index];
                let itemRes = await _catalog_service.getItemByItemId(element.itemId);
                element.imgPath = `/images/${itemRes.data.data.product.productId}.jpg`;
                let rendered = _util.renderHtml(cart_items_template, { cart_item: element });
                total += element.total;
                $('.item_list').append(rendered);
            }   
            $('.total span').text(total);
        }
    },
    bindEvent: function () {
        let _this = this;
        $('.selected_address_info').on('click', async function () {
            $('#address_shadow').show();
            $('#address_select_box').show();
            $('#address_shadow').on('click', function () {
                $('#address_shadow').hide();
                $('#address_select_box').hide();
            });
            if (_this.address_list_rendered) {
                return;
            }
            let address_list = _this.address_list;
            for (let index = 0; index < address_list.length; index++) {
                const element = address_list[index];
                let address_info_html = _util.renderHtml(address_info_template, {
                    address: element
                });
                let $address_info = $(address_info_html);
                $address_info.on('click', function () {
                    _this.selected_address = element;
                    let rendered = _util.renderHtml(address_info_template, { address: _this.selected_address });
                    $('.selected_address_info').html(rendered);
                    $('#address_shadow').hide();
                    $('#address_select_box').hide();
                })
                $('#address_select_box').append($address_info);
            }
            _this.address_list_rendered = true;

        });
        $('#submit_btn').on('click', async function () {
            let items = [];
            for (let index = 0; index < _this.cart_items.length; index++) {
                const element = _this.cart_items[index];
                items.push(element.id);
            }
            let res = await _order_service.placeOrder(_this.selected_address.id, items);
            if (res.data.status === 20) {
                _util.showErrorMsg("购买成功");
                window.location.href = '/view/view_order.html';
            } else {
                _util.showErrorMsg(res.data.msg);
            }
        })
    }
}


module.exports = _order.init();