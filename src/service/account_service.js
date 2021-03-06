let _util = require('util/util.js');
let qs = require('qs');
let _account_service = {
    _axio: null,
    init: function () {
        this._axios = _util.getAxiosInstance('/account');
        return this;
    },
    login: function (username, password, resolve, reject) {
        return this._axios.post('token',
            qs.stringify({
                username: username,
                password: password
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(resolve).catch(reject);

    },
    setToken: function (token) {
        // this._axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    },
    getUserInfo: function (resolve, reject) {
        return this._axios.get('info')
            .then(resolve).catch(reject);
    },
    modifyUserInfo: function (userInfo, resolve, reject) {
        return this._axios.put('user', userInfo)
            .then(resolve).catch(reject);
    },
    modifyPassword: async function (oldPassword, newPassword, resolve, reject) {
        return this._axios.put('/user/password', { oldPassword: oldPassword, password: newPassword })
            .then(resolve).catch(reject);

    },
    register: function (username, password, resolve, reject) {
        return this._axios.post('/user', { username: username, password: password })
            .then(resolve).catch(reject);
    }
}

module.exports = _account_service.init();