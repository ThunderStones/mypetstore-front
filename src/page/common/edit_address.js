let $ = require('jquery');
let _address_service = require('service/address_service.js');
let _edit_address = {
    currentProvinceId: null,
    currentCityId: null,
    currentDistrictId: null,
    provinceSelect: $('#province_select'),
    citySelect: $('#city_select'),
    districtSelect: $('#district_select'),
    init: function () {
        this.bindEvent();
        return this;
    },
    bindEvent: function () {
        $('.edit_address_shadow').on('click', function () {
            $('.edit_address_shadow').hide();
            $('.edit_address').hide();
        })
    },
    loadData: async function (address_id) {
        this.currentProvinceId = address_id.subStrings(0, 2);
        this.currentCityId = address_id.subStrings(2, 4);
        this.currentDistrictId = address_id.subStrings(4, 6);
        //TO-DO: load province, city, district and render select's options
        //TO-DO: render address info 
    },
    showEditAddressForm: function (address) {
        this.loadData();
    },
    submitAddress: function () {}
}


module.exports = _edit_address.init();