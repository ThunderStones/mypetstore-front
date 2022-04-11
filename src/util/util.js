const axios = require('axios'); 

const config = {
    serverHost : 'http://112.124.27.34',
};

let _util = {
    getAxiosInstance : function (prefix) {
        return axios.create({
            baseURL: this.getServerUrl(prefix),
            timeout: 10000,
        })
    },
    getServerUrl : function(path) {
        return config.serverHost + path;
    },
    getUrlParam : function(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let result = window.location.search.substring(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }
};

module.exports = _util;