let $ = require('jquery');
let _address_service = require('service/address_service.js');
let _edit_address = {
    currentProvinceId: null,
    currentCityId: null,
    currentDistrictId: null,
    provinceSelect: $('#province_select'),
    citySelect: $('#city_select'),
    distinctSelect: $('#distinct_select'),
    init: function () {
        this.bindEvent();
        return this;
    },
    bindEvent: function () {
        let _this = this;
        $('.edit_address_shadow').on('click', function () {
            $('.edit_address_shadow').hide();
            $('.edit_address').hide();
        }),
        this.provinceSelect.on('change', async function () {
            _this.currentProvinceId = $(this).find('option:selected').val();
            let res = await _address_service.getCitiesByProvinceId(_this.currentProvinceId);
            _this.citySelect.children(':not(.default)').remove();
            _this.addDataToSelect(_this.citySelect, res.data, 2);
        })
        this.citySelect.on('change', async function () {
            _this.currentCityId = $(this).find('option:selected').val();
            let res = await _address_service.getDistrictsByProvinceIdAndCityId(_this.currentProvinceId, _this.currentCityId);
            _this.distinctSelect.children(':not(.default)').remove();
            _this.addDataToSelect(_this.distinctSelect, res.data, 3);
        })
        this.distinctSelect.on('change', function () {
            _this.currentDistrictId = $(this).find('option:selected').val();

        })
    },
    addDataToSelect: function (select, data, typeId) {
        // integer type: 1 for province, 2 for city, 3 for distinct 
        let end = typeId * 2;
        let start = end - 2;
        let option = select.find('.default').eq(0).clone().removeAttr('selected').removeClass('default');
        data.forEach(element => {
            let option_copy = option.clone();
            option_copy.val(element.addressId.substring(start, end));
            option_copy.text(element.name);
            select.append(option_copy);
        })
    },
    loadData: async function (address_id) {

        this.currentProvinceId = address_id.substring(0, 2);
        this.currentCityId = address_id.substring(2, 4);
        this.currentDistrictId = address_id.substring(4, 6);
        //TO-DO: load province, city, district and render select's options
        let provinceRes = await _address_service.getAllProvince();
        let provinceList = provinceRes.data;
        let cityRes = await _address_service.getCitiesByProvinceId(this.currentProvinceId);
        let cityList = cityRes.data;
        let districtRes = await _address_service.getDistrictsByProvinceIdAndCityId(this.currentProvinceId, this.currentCityId)
        let districtList = districtRes.data;

        this.provinceSelect.find(':not(.default)').remove();
        let option = this.provinceSelect.find('option').eq(0).clone().removeClass('default');
        provinceList.forEach(element => {
            let option_copy = option.clone();
            option_copy.val(element.addressId.substring(0, 2));
            option_copy.text(element.name);
            if (this.currentProvinceId === element.addressId.substring(0, 2)) {
                option_copy.attr('selected', true);
            }
            this.provinceSelect.append(option_copy);
        });
        cityList.forEach(element => {
            let option_copy = option.clone();
            option_copy.val(element.addressId.substring(2, 4));
            option_copy.text(element.name)
            if (this.currentCityId === element.addressId.substring(2, 4)) {
                option_copy.attr('selected', true);
            }
            this.citySelect.append(option_copy);
        });
        districtList.forEach(element => {
            let option_copy = option.clone();
            option_copy.val(element.addressId.substring(4, 6));
            option_copy.text(element.name)
            if (this.currentDistrictId === element.addressId.substring(4, 6)) {
                option_copy.attr('selected', true);
            }
            this.districtSelect.append(option_copy);
        });

    },
    showEditAddressForm: async function (address) {
        if (address === undefined) {
            this.showNewAddressForm();
            return;
        }
        await this.loadData(address.addressId);
        //TO-DO: render address info 
        let edit_address_form = $('.edit_address');
        edit_address_form.find('#edit_name').val(address.name);
        edit_address_form.find('#edit_phone').val(address.phone);
        edit_address_form.find('#edit_detail_address').val(address.addressDetail)
        $('.edit_address_shadow').show();
        edit_address_form.show();
    },
    showNewAddressForm: async function () {
        let edit_address_form = $('.edit_address');
        edit_address_form.find('#edit_name').val('');
        edit_address_form.find('#edit_phone').val('');
        edit_address_form.find('#edit_detail_address').val('')
        this.provinceSelect.children(':not(.default)').removeAttr('selected');
        this.provinceSelect.children('.default').eq(0).attr('selected', true);
        if (this.provinceSelect.children().length === 1) {
            let provinceRes = await _address_service.getAllProvince();
            let provinceList = provinceRes.data;
            let option = this.provinceSelect.children('.default').eq(0).removeClass('default').removeAttr('selected');
            provinceList.forEach(element => {
                let option_copy = option.clone();
                option_copy.val(element.addressId.substring(0, 2));
                option_copy.text(element.name);
                this.provinceSelect.append(option_copy);
            })
        }
        this.citySelect.children(':not(.default)').remove();
        this.distinctSelect.children(':not(.default)').remove();
        $('.edit_address_shadow').show();
        edit_address_form.show();
    },
    submitAddress: function () { }
}


module.exports = _edit_address.init();