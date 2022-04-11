let _util = require('util/util.js');

let _address_service = {
    _axios: null,
    init: function () {
        this._axios = _util.getAxiosInstance('/address');
        return this;
    },
    setToken: function (token) {
        this._axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    },
    rejectDefaule: function (res) {
        console.log(res);
    },
    getAllProvince: function (resolve, reject) {
        reject = reject || this.rejectDefaule;
        return this._axios.get('/provinces')
            .then(resolve).catch(reject);
    },
    getCitiesByProvinceId: function (province_id, resolve, reject) {
        reject = reject || this.rejectDefaule;
        return this._axios.get(`/province/${province_id}/cities`)
            .then(resolve).catch(reject);
    },
    getDistrictsByProvinceIdAndCityId: function (province_id, city_id, resolve, reject) {
        reject = reject || this.rejectDefaule;
        return this._axios.get(`/province/${province_id}/city/${city_id}/districts`)
            .then(resolve).catch(reject);
    },
    getFullNameByFullId: function (province_id, city_id, district_id, resolve, reject) {
        reject = reject || this.rejectDefaule;
        return this._axios.get(`/fullName/${province_id + city_id + district_id}`)
            .then(resolve).catch(reject);
    },
    addAddress: function (address, resolve, reject) {
        reject = reject || this.rejectDefaule;
        return this._axios.post('', address)
            .then(resolve).catch(reject);
    },
    getAddressList: function (resolve, reject) {
        reject = reject || this.rejectDefaule;
        return this._axios.get('')
            .then(resolve).catch(reject);
    }

}

module.exports = _address_service.init();