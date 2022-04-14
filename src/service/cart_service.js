let _util = require('util/util.js');


let _cart_service = {
    _axios: null,
    init: function () {
        this._axios = _util.getAxiosInstance('/cart');
        this.setToken();
        return this;
    },
    setToken: function (token) {
        if (token === undefined) {
            token = window.localStorage.getItem('token');
        }
        this._axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    },
    updateCartItems: function (cartInfo, resolve, reject) {
        this.setToken();
        return this._axios.put('/items', cartInfo)
            .then(resolve).catch(reject);
    },
    deleteCartItem: function (product_id_list, resolve, reject) {
        this.setToken();
        
        return this._axios.delete('/items', {
            data: product_id_list,
            
        })
            .then(resolve).catch(reject);
    },
    getCartInfo: function (resolve, reject) {
        this.setToken();
        return this._axios.get('/items')
            .then(resolve).catch(reject);
    }
}

module.exports = _cart_service.init();