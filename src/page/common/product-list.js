const $ = require('jquery');
const _catalog_service = require('service/catalog-service.js');
let _product_list = {
    catalog_box: $('.catalog_boxes>div'),
    list_shadow: $('#product_list_shadow'),
    list_box: $('#product_list'),

    init: function () {
        this.bindEvent();
        console.log(this.catalog_box);
        return this;
    },
    bindEvent: function () {
        this.catalog_box.on('click', function () {
            let category_id = $(this).attr('id');
            _catalog_service.getProductList(category_id,
                (res) => {
                    if (res.data.status === 20) {
                        _product_list.renderAndShow($(this), res.data.data);
                    } else {
                        console.log(res.msg);
                    }
                });
        });

        this.list_shadow.on('click', function () {
            _product_list.list_box.addClass('hidden');
            _product_list.list_shadow.addClass('hidden');
        })
    },
    renderAndShow: function (_this, data) {
        console.log(this.list_shadow, this.list_box);
        //render
        this.list_box.find('.img img').attr('src', _this.find('img').attr('src'));
        let list_items = this.list_box.find('.list_items');
        
        let list_item = list_items.find('.list_item').eq(0);
        list_items.empty();
        if (0 < data.length) {
            for (let i = 0; i < data.length; i++) {
                let list_item_copy = list_item.clone();
                list_item_copy.find('img').attr('src', `../images/${data[i].productId}.jpg`);
                detail = list_item_copy.find('.product_detail_desciption');
                detail.find('p').eq(0).text(data[i].name);
                detail.find('p').eq(1).text(data[i].categoryId);
                detail.find('p').eq(2).text(data[i].description);
                list_items.append(list_item_copy);
            }
        }

        //show

        this.list_shadow.removeClass('hidden');
        this.list_box.removeClass('hidden');

    }
};

module.exports = _product_list.init();