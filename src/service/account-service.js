
const _util = require('util/util.js');

let _account_service = {
    checkLogin: function(resolve, reject) {
        _util.request({
            url: _util.getServerUrl('account/getLoginAccountInfo'),
            method: 'POST',
            success: resolve,
            error: reject
        });
    },
    login: function(account, resolve, reject) {
        _util.request({
            url: _util.getServerUrl('account/login'),
            method: 'POST',
            data: account,
            success: resolve,
            error: reject
        });
    }
}

module.exports = _account_service;
