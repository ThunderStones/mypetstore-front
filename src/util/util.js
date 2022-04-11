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
    },
    validation : function(value, type) {
        let reg = {
            'email' : /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
            'phone' : /^1[3|4|5|7|8][0-9]{9}$/,
            'password' : /^[a-zA-Z0-9]{6,16}$/,
            'username' : /^[a-zA-Z0-9]{4,16}$/,
            'country' : /^[a-zA-Z]{2,16}$/,
        }
        return reg[type].test(value);
    }

};

module.exports = _util;