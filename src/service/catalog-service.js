const _util = require('util/util.js');

let _catalog_service = {
    _axios: _util.getAxiosInstance('/catalog'),
    rejectDefaule: function (res) {
        console.log(res);
    },
    getProductList: function (product_id, resolve, reject) {
        reject = reject || this.rejectDefaule;
        return this._axios.get(`/categories/${product_id}/products`)
            .then(resolve)
            .catch(reject);
    },

    test: function () {
        console.log('test');
        this.getProductList('DOGS',
            (res) => {
                console.log(res.data);
            })
        return this;
    }

}

module.exports = _catalog_service;