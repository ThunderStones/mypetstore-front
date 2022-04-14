const $ = require('jquery');
const _catalog_service = require('service/catalog_service.js');
const _util = require('util/util.js');
const _cart_service = require('service/cart_service.js');
let _product_list = {
    select_item_id: '',
    catalog_box: $('.catalog_boxes>div'),
    list_shadow: $('#product_list_shadow'),
    list_box: $('#product_list'),
    list_detail_shadow: $('#product_detail_shadow'),
    list_detail_box: $('#product_detail'),
    init: function () {
        this.bindEvent();
        return this;
    },
    bindEvent: function () {
        this.catalog_box.on('click', function () {
            let category_id = $(this).attr('id');
            _catalog_service.getProductList(category_id,
                (res) => {
                    if (res.data.status === 20) {
                        _product_list.renderAndShow($(this), res.data.data);
                    } else {
                        console.log(res.msg);
                    }
                });
        });

        this.list_detail_shadow.on('click', function () {
            _product_list.list_detail_shadow.hide();
            _product_list.list_detail_box.hide();
        });
        this.list_shadow.on('click', function () {
            _product_list.list_box.addClass('hidden');
            _product_list.list_shadow.addClass('hidden');
        })
        this.list_detail_box.find('#add_to_cart_btn').on('click', async function () {
            console.log(_product_list.select_item_id);
            if (window.localStorage.getItem('token') === null) {
                _util.showErrorMsg('请先登录');
                return;
            }
            let data = {itemId: _product_list.select_item_id, quantity: 1};
            let res = await _cart_service.updateCartItems([data]);
            if (res.data.status === 20) {
                _util.showErrorMsg('加入购物车成功');
            } else {
                _util.showErrorMsg(res.msg);
            }
        })
    },
    renderAndShow: function (_this, data) {
        console.log(this.list_shadow, this.list_box);
        //render
        this.list_box.find('.img img').attr('src', _this.find('img').attr('src'));
        let list_items = this.list_box.find('.list_items');

        let list_item = list_items.find('.list_item').eq(0);
        list_items.empty();
        if (0 < data.length) {
            for (let i = 0; i < data.length; i++) {
                let list_item_copy = list_item.clone();
                list_item_copy.data('product_id', data[i].productId);
                list_item_copy.find('img').attr('src', `../images/${data[i].productId}.jpg`);
                detail = list_item_copy.find('.product_detail_desciption');
                detail.find('p').eq(0).text(data[i].name);
                detail.find('p').eq(1).text(data[i].categoryId);
                detail.find('p').eq(2).text(data[i].description);
                list_items.append(list_item_copy);
                list_item_copy.on('click', async function () {
                    _product_list.list_detail_box.find('.product_detail_img img').attr('src', $(this).find('img').attr('src'));
                    _product_list.list_detail_box.find('.product_detail_desciption p').eq(0).text($(this).find('.product_detail_desciption p').eq(0).text());
                    _product_list.list_detail_box.find('.product_detail_desciption p').eq(1).text($(this).find('.product_detail_desciption p').eq(1).text());
                    _product_list.list_detail_box.find('.product_detail_desciption p').eq(2).text($(this).find('.product_detail_desciption p').eq(2).text());

                    let res = await _catalog_service.getItemsByProductId($(this).data('product_id'));
                    if (res.data.status === 20) {
                        let item_btns = $('#item_btns');
                        let item_btn = item_btns.find('.item_btn').eq(0);
                        item_btns.empty();
                        for (let i = 0; i < res.data.data.length; i++) {
                            item_btn_copy = item_btn.clone();
                            item_btn_copy.data('item_id', res.data.data[i].itemId);
                            item_btn_copy.data('listPrice', res.data.data[i].listPrice);
                            item_btn_copy.text(res.data.data[i].attribute1);
                            item_btn_copy.removeClass('ring-blue-400 ring-gray-400');
                            if (i === 0) {
                                item_btn_copy.addClass('ring-blue-400');
                            } else {
                                item_btn_copy.addClass('ring-gray-400');
                            }
                            item_btn_copy.on('click', function () {
                                $('#price').text('Price: $ ' + $(this).data('listPrice'));
                                item_btns.find('.item_btn').removeClass('ring-blue-400').addClass('ring-gray-400');
                                $(this).addClass('ring-blue-400').removeClass('ring-gray-400');
                                _product_list.select_item_id = $(this).data('item_id');
                            })
                            item_btns.append(item_btn_copy);
                        }

                        $('#price').text('Price: $ ' + res.data.data[0].listPrice);
                        _product_list.select_item_id = res.data.data[0].itemId;
                    }

                    _product_list.list_detail_shadow.show();
                    _product_list.list_detail_box.show();
                })
            }
        }

        //show

        this.list_shadow.removeClass('hidden');
        this.list_box.removeClass('hidden');

    },

    showDetail: function () {

    }
};

module.exports = _product_list.init();