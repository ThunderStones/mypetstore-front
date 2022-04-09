const axios = require('axios'); 

const config = {
    serverHost : 'http://112.124.27.34',
};

let _util = {
    getAxiosIinstance : function (prefix) {
        return axios.create({
            baseURL: this.getServerUrl(prefix),
            timeout: 10000,
        })
    },
    getServerUrl : function(path) {
        return config.serverHost + path;
    }
};

module.exports = _util;