
const _account_service = require('service/account-service.js');
let header = {
    init: function() {
        this.bindEvents();
        this.loadAccountInfo();
        return this;
    },
    bindEvents: function() {},
    loadAccountInfo: function() {
        _account_service.checkLogin(function(res) {
            console.log('success');
        },
        function(errMsg) {
            console.log('error');
        })
    }
}

module.exports = header.init();