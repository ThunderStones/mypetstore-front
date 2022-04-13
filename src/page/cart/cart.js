let _util = require('util/util.js');
let $ = require('jquery');
let _header = require('../common/header.js')
let _cart_service = require('service/cart_service.js');
let _catalog_service = require('service/catalog_service.js');
let _cart = {
    item_template: $('.cart_item'),
    cart_items: {},
    total: 0,
    init: function () {
        $('.cart_items').empty();
        console.log(this.item_template);
        this.loadData();
        this.bindEvent();
        return this;
    },
    loadData: async function () {
        let res = await _cart_service.getCartInfo();
        if (res.data.status === 20) {
            item_list = res.data.data;
            let _this = this;
            if (item_list.length === 0) {
                $('.cart_submit').hide();
            } else {
                $('#tips').hide();
            }
            this.total = 0;
            for (let index = 0; index < item_list.length; index++) {
                const element = item_list[index];
                let $item = _this.item_template.clone();
                let item_info = (await _catalog_service.getItemByItemId(element.itemId)).data.data;
                console.log(item_info);
                $item.find('div.img>img').attr('src', `/images/${item_info.product.productId}.jpg`);
                $item.find('.category_name').text(item_info.product.categoryId);
                $item.find('.name .product').text(item_info.product.name);
                $item.find('.name .item').text(item_info.attribute1);
                $item.find('.product_desciption').text(item_info.product.description);
                $item.find('.item_number').text(element.quantity);
                $item.find('.sub_total').text(element.quantity * item_info.listPrice);
                this.total += element.quantity * item_info.listPrice;
                $item.data('item', element);
                _this.cart_items[element.itemId] = element.quantity;
                $('.cart_items').append($item);
                console.log(_this.cart_items);
            }

            $('.total').find('span').text(this.total);
            $('.cart-number-dec').on('click', function () {
                let item = $(this).parents('.cart_item').data('item');
                if (_this.cart_items[item.itemId] > 2) {
                    _this.cart_items[item.itemId]--;
                    $(this).next().find('span').text(_this.cart_items[item.itemId]);
                    $(this).parents('.cart_item').find('.sub_total').text(_this.cart_items[item.itemId] * item.unitPrice);
                    _this.total -= item.unitPrice;
                    $('.total span').text(_this.total);
                    _cart_service.updateCartItems([{ itemId: item.itemId, quantity: _this.cart_items[item.itemId] }]);
                }
            });
            $('.cart-number-inc').on('click', function () {
                let item = $(this).parents('.cart_item').data('item');
                _this.cart_items[item.itemId]++;
                $(this).prev().find('span').text(_this.cart_items[item.itemId]);
                $(this).parents('.cart_item').find('.sub_total').text(_this.cart_items[item.itemId] * item.unitPrice);
                _this.total += item.unitPrice;
                $('.total span').text(_this.total);
                _cart_service.updateCartItems([{ itemId: item.itemId, quantity: _this.cart_items[item.itemId] }]);
            });
            $('.delete_btn').on('click', function () {
                let item = $(this).parents('.cart_item').data('item');
                console.log([{ itemId: item.itemId }]);
                _this.total -= item.unitPrice * _this.cart_items[item.itemId];
                $('.total span').text(_this.total);
                _cart_service.deleteCartItem([{ itemId: item.itemId }]);
                // delete property itemId
                if (_this.total <= 0) {
                    $('.cart_submit').hide();

                }
                $(this).parents('.cart_item').remove();
            })


        }
    },
    bindEvent: function () {
        $('.cart_submit').on('click', function () {
            window.location.href = '/view/order.html';
        })
    }

}

module.exports = _cart.init();