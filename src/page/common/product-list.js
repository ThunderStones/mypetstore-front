const $ = require('jquery');
const _catalog_service = require('service/catalog-service.js');
let _product_list = {
    list_template: $.parseHTML(`<div id="product_list" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm shadow-md contrast-125 w-3/4 h-3/4 z-40 flex"><div class="img w-1/3 h-full xl:hidden"><img src="" alt="dogs" class="object-cover w-full h-full"></div></div>`),
    list_item_template: $.parseHTML(`<div class="w-2/3 xl:w-full overflow-y-auto space-y-6 pt-4"><div class="w-4/5 h-96 my-2 mx-auto flex bg-white bg-opacity-50 rounded-3xl overflow-hidden" id=""><div class="product_detail_img inline-block w-1/2 h-full"><img class="object-cover w-full h-full" alt=""></div><div class="product_detail_desciption w-1/2 h-full flex flex-col px-4 py-8 items-center"><p class="name text-3xl">Lorem.</p><p class="category text-gray-400">Lorem.</p><p class="description mt-24 text-lg text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div></div></div>`),

    catalog_box: $('.catalog_boxes>div'),

    init: function () {
        console.log(this.catalog_box);
        return this;
    },
    bindEvent: function () {
        this.catalog_box.on('click', function () {

        })
    }
};

module.exports = _product_list.init();