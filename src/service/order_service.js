const _util = require('util/util.js');
const _header = require('page/common/header.js');
let _order_service = {
    _axios: _util.getAxiosInstance('/order'),
    rejectDefaule: function (res) {
        console.log(res);
    },
    init: function () {
        let token = window.localStorage.getItem('token');
        if (token) {
            this._axios.defaults.headers.common['Authorization'] = token;
        }
        return this;
    },
    placeOrder: function (address_id, cart_items) {
        return this._axios.post('', cart_items, {
            params: {
                addressId: address_id
            }
        });
    },
    getAllOrder: function () {
        return this._axios.get('/list');
    },
    getOrderDetail: function (order_id) {
        return this._axios.get('/detail', {
            params: {
                orderId: order_id
            }
        });
    }
}

module.exports = _order_service.init();