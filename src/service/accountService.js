let _util = require('util/util.js');
let qs = require('qs');
let _account_service = {
    init: function () {
        this._axios = _util.getAxiosIinstance('/account');
        return this;
    },
    login: function (username, password, resolve, reject) {
        this._axios.post('token', 
        qs.stringify({
            username: username,
            password: password
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(resolve).catch(reject);

    }
}

module.exports = _account_service.init();