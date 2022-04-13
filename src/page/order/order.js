let $ = require('jquery');
let _util = require('util/util.js');
let _header = require('page/common/header.js');
let _address_service = require('service/address_service.js');
let address_info_template = require('page/common/address.template');
let _order = {
    selected_address : null,
    init: async function () {
        this.loadData();
        this.bindEvent();
        return this;
    },
    loadData: function () { },
    bindEvent: function () {
        $('.select_address_info').on('click', async function () {
            $('#address_shadow').show();
            $('#address_select_box').show();
            $('#address_shadow').on('click', function () {
                $('#address_shadow').hide();
                $('#address_select_box').hide();
            });

            let res = await _address_service.getAddressList();
            let address_list = res.data.data;
            for (let index = 0; index < address_list.length; index++) {
                const element = address_list[index];
                let address_info_html = _util.renderHtml(address_info_template, {
                    address: address_list
                });
            }

        })
    }
}


module.exports = _order.init();