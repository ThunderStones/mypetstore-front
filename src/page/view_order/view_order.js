let $ = require('jquery');
let _util = require('util/util.js');
let _header = require('page/common/header.js');
let _address_service = require('service/address_service.js');
let _cart_service = require('service/cart_service.js');
let _catalog_service = require('service/catalog_service.js');
let _order_service = require('service/order_service.js');
let view_order_item_template = require('page/common/view_order_item.template');
let order_detail_template = require('page/common/order_detail.template');
let _view_order = {
    order_list: null,
    init: function () {
        _address_service.setToken(window.localStorage.getItem('token'));
        this.loadData();
        return this;
    },
    loadData: async function () {
        let res = await _order_service.getAllOrder();
        this.order_list = res.data.data;
        for (let index = 0; index < this.order_list.length; index++) {
            const element = this.order_list[index];
            let address_id = element.addressDataId;
            let res = await _address_service.getFullNameByFullId(
                address_id.substring(0, 2),
                address_id.substring(2, 4),
                address_id.substring(4, 6)
            );
            console.log(res);
            element.addressName = res.data.data.name;
            let $rendered = $(_util.renderHtml(view_order_item_template, { item: element }));
            $('.order_list').append($rendered);
            $rendered.on('click', async function () {
                console.log(1);
                let res = await _order_service.getOrderDetail(element.orderId);
                let data = res.data.data;
                let addressFullName = (await _address_service.getFullNameByFullId(data.addressDataId)).data.data.name;
                data.addressName = addressFullName;
                console.log(addressFullName);
                for (let index = 0; index < data.lineItems.length; index++) {
                    const item = data.lineItems[index];
                    // console.log(item);
                    item.imgPath = `/images/${item.item.productId}.jpg`;
                }
                let $rendered = $(_util.renderHtml(order_detail_template, {
                    order: data,
                }));
                $('#detail_container').html($rendered);

                $('#detail_shadow').show();
                $('#detail_container').show(400);
                $('#detail_shadow').on('click', function () {
                    $('#detail_shadow').hide();
                    $('#detail_container').hide(400);
                })
            })

        }
    }
}

module.exports = _view_order.init();