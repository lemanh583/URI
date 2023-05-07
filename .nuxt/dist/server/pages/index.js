exports.ids = [23];
exports.modules = {

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("09abcceb", content, true, context)
};

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43894e1e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43894e1e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43894e1e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43894e1e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_43894e1e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".num-img img[data-v-43894e1e]{filter:none}.discover[data-v-43894e1e],.num-item:nth-child(8) .num-wrap[data-v-43894e1e]{background-color:#641!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=43894e1e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<main class=\"main\" data-v-43894e1e><div class=\"home\" data-v-43894e1e><section class=\"banner mona-banner\" data-v-43894e1e><div class=\"banner-slider\" data-v-43894e1e><div class=\"swiper loop\" data-v-43894e1e><div class=\"swiper-wrapper\" data-v-43894e1e>" + _vm._ssrList(_vm.listSlide, function (slide) {
    return "<div class=\"swiper-slide\" data-v-43894e1e><div class=\"banner-wrap left\" data-v-43894e1e><div class=\"banner-img\" data-v-43894e1e><img width=\"1920\" height=\"1280\"" + _vm._ssrAttr("src", slide.url_image) + _vm._ssrAttr("alt", slide.descriptions) + " data-lazy-sizes=\"(max-width: 1920px) 100vw, 1920px\" class=\"attachment-full size-full\" data-v-43894e1e></div> <div class=\"banner-posi\" data-v-43894e1e><div class=\"container\" data-v-43894e1e><div class=\"banner-content\" data-v-43894e1e>" + (slide.title.length <= 1 ? "<h2 class=\"banner-title second\" data-v-43894e1e>" + _vm._ssrEscape(" " + _vm._s(slide.title)) + "</h2>" : "<h2 class=\"banner-title second\" data-v-43894e1e>" + _vm._ssrEscape(" " + _vm._s(_vm.getTitle(slide.title).first) + " ") + "<span class=\"c-third fw-7\" data-v-43894e1e>" + _vm._ssrEscape(" " + _vm._s(_vm.getTitle(slide.title).end) + " ") + "</span></h2>") + " <div class=\"banner-title-second\" data-v-43894e1e>" + _vm._ssrEscape(_vm._s(slide.descriptions)) + "</div> " + (slide.link ? "<div class=\"banner-btn\" data-v-43894e1e><a" + _vm._ssrAttr("href", slide.link) + " class=\"btn\" data-v-43894e1e><p class=\"text\" data-v-43894e1e>Tìm hiểu thêm</p> <i class=\"ti-angle-right icon-right\" data-v-43894e1e></i></a></div>" : "<!---->") + "</div></div></div></div></div>";
  }) + "</div></div> <div class=\"banner-control swiper-control\" data-v-43894e1e><div class=\"swiper-prev\" data-v-43894e1e><i class=\"ti-angle-left\" data-v-43894e1e></i></div> <div class=\"swiper-next\" data-v-43894e1e><i class=\"ti-angle-right\" data-v-43894e1e></i></div></div></div></section> <section class=\"ss-num\" data-v-43894e1e><div data-aos=\"fade-up-cus\" class=\"num ss-pd\" data-v-43894e1e><div class=\"container\" data-v-43894e1e><div class=\"num-list\" data-v-43894e1e><div class=\"num-item\" data-v-43894e1e><div class=\"num-wrap\" data-v-43894e1e><div class=\"num-img\" data-v-43894e1e><img width=\"1920\" height=\"1280\" src=\"/images/b4.jpg\" alt data-lazy-sizes=\"(max-width: 1920px) 100vw, 1920px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/10/TDH_3833-scaled.jpg\" class=\"img\" data-v-43894e1e></div> <h2 class=\"num-title t-title\" data-v-43894e1e><span style=\"font-size: 2vmax; color: black\" data-v-43894e1e>NHỮNG CON SỐ<br data-v-43894e1e>\n                      ẤN TƯỢNG</span></h2></div></div> <div class=\"num-item\" data-v-43894e1e><div class=\"num-wrap\" data-v-43894e1e><div class=\"num-content\" data-v-43894e1e><p class=\"number\" data-v-43894e1e>500</p> <p class=\"des\" data-v-43894e1e>Học viên đồng hành</p></div></div></div> <div class=\"num-item\" data-v-43894e1e><div class=\"num-wrap\" data-v-43894e1e><div class=\"num-img\" data-v-43894e1e><img width=\"1920\" height=\"1280\" src=\"/images/b1.jpg\" alt data-lazy-sizes=\"(max-width: 1920px) 100vw, 1920px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/10/TDH_2787-scaled.jpg\" class=\"img\" data-v-43894e1e></div></div></div> <div class=\"num-item\" data-v-43894e1e><div class=\"num-wrap\" data-v-43894e1e><div class=\"num-img\" data-v-43894e1e><img width=\"1920\" height=\"1280\" src=\"/images/b2.jpg\" alt data-lazy-sizes=\"(max-width: 1920px) 100vw, 1920px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-scaled.jpg\" class=\"img\" data-v-43894e1e></div></div></div> <div class=\"num-item\" data-v-43894e1e><div class=\"num-wrap\" data-v-43894e1e><div class=\"num-content\" data-v-43894e1e><p class=\"number\" data-v-43894e1e>97%</p> <p class=\"des\" data-v-43894e1e>Học viên đạt điểm khá, giỏi tại lớp</p></div></div></div> <div class=\"num-item\" data-v-43894e1e><div class=\"num-wrap\" data-v-43894e1e><div class=\"num-img\" data-v-43894e1e><img width=\"384\" height=\"384\" src=\"/images/b3.jpg\" alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2022/08/gallery_6.png 384w, https://ischool.vn/wp-content/uploads/2022/08/gallery_6-300x300.png 300w, https://ischool.vn/wp-content/uploads/2022/08/gallery_6-150x150.png 150w\" data-lazy-sizes=\"(max-width: 384px) 100vw, 384px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/gallery_6.png\" class=\"img\" data-v-43894e1e></div></div></div> <div class=\"num-item\" data-v-43894e1e><div class=\"num-wrap\" data-v-43894e1e><div class=\"num-content\" data-v-43894e1e><p class=\"number\" data-v-43894e1e>200</p> <p class=\"des\" data-v-43894e1e>Học viên đạt giải và huy chương tại các kỳ thi Toán quốc tế</p></div></div></div> <div class=\"num-item\" data-v-43894e1e><div class=\"num-wrap\" data-v-43894e1e><div class=\"num-content\" data-v-43894e1e><p class=\"number\" data-v-43894e1e>1.000</p> <p class=\"des\" data-v-43894e1e>Lượt học viên tham gia các kỳ thi Toán quốc tế như TIMO, KANGAROO, VTMO, SASMO, HKIMO, BIG BAY BIE, FMO, ASMO.....</p></div></div></div></div></div></div></section> <div class=\"discover ss-pd\" data-v-43894e1e><div class=\"container\" data-v-43894e1e><h2 data-aos=\"fade-down-cus\" class=\"t-title white mb-24\" data-v-43894e1e>\n            6 LÝ DO<br data-v-43894e1e>\n            CHỌN URI\n          </h2> <div class=\"discover-con\" data-v-43894e1e><div class=\"discover-con-wrapper\" data-v-43894e1e><div class=\"discover-main\" data-v-43894e1e><div data-aos=\"zoom-in\" data-aos-duration=\"1400\" class=\"discover-list\" data-v-43894e1e><div class=\"discover-item\" data-v-43894e1e><div class=\"discover-col\" data-v-43894e1e><div class=\"discover-wrap\" data-v-43894e1e><div class=\"discover-border\" data-v-43894e1e><img width=\"1394\" height=\"1394\" src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" data-v-43894e1e> <span class=\"discover-br\" data-v-43894e1e></span></div> <img width=\"49\" height=\"48\" src=\"https://ischool.vn/wp-content/uploads/2022/08/graduation-cap-4-1.svg\" alt data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/graduation-cap-4-1.svg\" class=\"icon\" data-v-43894e1e> <h3 class=\"discover-name\" data-v-43894e1e>\n                          CHƯƠNG TRÌNH<br data-v-43894e1e>\n                          GIÁO DỤC\n                        </h3> <p class=\"discover-des\" data-v-43894e1e>Chương trình học cá nhân hóa phù hợp với năng lực của từng học sinh trong độ tuổi Tiểu học và Tiền tiểu học</p></div></div> <div class=\"discover-col\" data-v-43894e1e><div class=\"discover-wrap\" data-v-43894e1e><div class=\"discover-border\" data-v-43894e1e><img width=\"1394\" height=\"1394\" src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" data-v-43894e1e> <span class=\"discover-br\" data-v-43894e1e></span></div> <img width=\"48\" height=\"48\" src=\"https://ischool.vn/wp-content/uploads/2022/08/icon-world.svg\" alt data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/icon-world.svg\" class=\"icon\" data-v-43894e1e> <h3 class=\"discover-name\" data-v-43894e1e>\n                          CHUYÊN MÔN<br data-v-43894e1e>\n                          CHUYÊN SÂU\n                        </h3> <p class=\"discover-des\" data-v-43894e1e>Tại URI Giáo viên được tuyển chọn khắt khe, với quy trình đào tạo bài bản, chuyên nghiệp.</p></div></div></div> <div class=\"discover-item\" data-v-43894e1e><div class=\"discover-col\" data-v-43894e1e><div class=\"discover-wrap\" data-v-43894e1e><div class=\"discover-border\" data-v-43894e1e><img width=\"1394\" height=\"1394\" src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" data-v-43894e1e> <span class=\"discover-br\" data-v-43894e1e></span></div> <img width=\"48\" height=\"48\" src=\"https://ischool.vn/wp-content/uploads/2022/08/computer-2-1.svg\" alt data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/computer-2-1.svg\" class=\"icon\" data-v-43894e1e> <h3 class=\"discover-name\" data-v-43894e1e>TÀI LIỆU</h3> <p class=\"discover-des\" data-v-43894e1e>Giáo trình độc quyền URI, được nghiên cứu bởi các chuyên gia hàng đầu, phù hợp với tâm sinh lý trẻ</p></div></div> <div class=\"discover-col\" data-v-43894e1e><div class=\"discover-wrap\" data-v-43894e1e><div class=\"discover-border\" data-v-43894e1e><img width=\"1394\" height=\"1394\" src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" data-v-43894e1e> <span class=\"discover-br\" data-v-43894e1e></span></div> <img width=\"49\" height=\"48\" src=\"https://ischool.vn/wp-content/uploads/2022/08/chart-histogram-1.svg\" alt data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/chart-histogram-1.svg\" class=\"icon\" data-v-43894e1e> <h3 class=\"discover-name\" data-v-43894e1e>KHÔNG GIAN</h3> <p class=\"discover-des\" data-v-43894e1e>Quy mô lớp học tinh gọn chỉ từ 6-8 học viên/lớp giúp cho việc trao đổi bài học cũng như tương tác tốt hơn</p></div></div></div> <div class=\"discover-item\" data-v-43894e1e><div class=\"discover-col\" data-v-43894e1e><div class=\"discover-wrap\" data-v-43894e1e><div class=\"discover-border\" data-v-43894e1e><img width=\"1394\" height=\"1394\" src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" data-v-43894e1e> <span class=\"discover-br\" data-v-43894e1e></span></div> <img width=\"50\" height=\"47\" src=\"https://ischool.vn/wp-content/uploads/2022/08/icon-swim.svg\" alt data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/icon-swim.svg\" class=\"icon\" data-v-43894e1e> <h3 class=\"discover-name\" data-v-43894e1e>\n                          HOẠT ĐỘNG<br data-v-43894e1e>\n                          NGOẠI KHÓA\n                        </h3> <p class=\"discover-des\" data-v-43894e1e>Chương trình ngoại khóa của nhà trường được xây dựng phong phú và linh hoạt</p></div></div> <div class=\"discover-col\" data-v-43894e1e><div class=\"discover-wrap\" data-v-43894e1e><div class=\"discover-border\" data-v-43894e1e><img width=\"1394\" height=\"1394\" src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/svnNguoc.png\" data-v-43894e1e> <span class=\"discover-br\" data-v-43894e1e></span></div> <img width=\"48\" height=\"50\" src=\"https://ischool.vn/wp-content/uploads/2022/08/Vector.svg\" alt data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/Vector.svg\" class=\"icon\" data-v-43894e1e> <h3 class=\"discover-name\" data-v-43894e1e>MÔI TRƯỜNG<br data-v-43894e1e></h3> <p class=\"discover-des\" data-v-43894e1e>Giáo trình độc quyền URI, được nghiên cứu bởi các chuyên gia hàng đầu, phù hợp với tâm sinh lý trẻ</p></div></div></div></div></div></div></div></div></div> <section class=\"ss-add ss-feedbacks-full\" data-v-43894e1e><div class=\"add\" data-v-43894e1e><div class=\"add-list\" data-v-43894e1e><div class=\"add-full\" data-v-43894e1e><div class=\"add-slider\" data-v-43894e1e><div class=\"swiper loop\" data-v-43894e1e><div class=\"swiper-wrapper\" data-v-43894e1e><div class=\"swiper-slide\" data-v-43894e1e><div class=\"add-wrap\" data-v-43894e1e><div class=\"add-content\" data-v-43894e1e><img width=\"40\" height=\"40\" src=\"https://ischool.vn/template/assets/images/icon-quote.svg\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-quote.svg\" class=\"icon\" data-v-43894e1e> <div class=\"add-text\" data-v-43894e1e>\n                            Nguyên Trung học tới nay cũng đã 2 năm tại URI rồi, con vẫn rất hào hứng và thích đi học URI như những ngày đầu, mẹ thấy con học tự giác và tiến bộ nhiều. Thích đi học\n                            tới nỗi đi học chậm còn bứt rứt và trách mẹ\n                          </div> <div class=\"add-user\" data-v-43894e1e><div class=\"add-user-ava\" data-v-43894e1e><img width=\"227\" height=\"250\" src=\"/images/rv-main-1.png\" alt=\"Chị Thoa\" data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2022/10/1-001-e1668409055428.jpg 227w, https://ischool.vn/wp-content/uploads/2022/10/1-001-e1668409055428-45x50.jpg 45w, https://ischool.vn/wp-content/uploads/2022/10/1-001-e1668409055428-163x180.jpg 163w\" data-lazy-sizes=\"(max-width: 227px) 100vw, 227px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/10/1-001-e1668409055428.jpg\" class=\"img\" data-v-43894e1e></div> <div class=\"add-user-info\" data-v-43894e1e><p class=\"add-user-name\" data-v-43894e1e>Chị Thoa</p></div></div></div></div></div> <div class=\"swiper-slide\" data-v-43894e1e><div class=\"add-wrap\" data-v-43894e1e><div class=\"add-content\" data-v-43894e1e><img width=\"40\" height=\"40\" src=\"https://ischool.vn/template/assets/images/icon-quote.svg\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-quote.svg\" class=\"icon\" data-v-43894e1e> <div class=\"add-text\" data-v-43894e1e>\n                            Hai con rất thích đi học ở URI, thích học toán. Các con theo học cũng đã lâu, mẹ thấy con học tiếng bộ, URI cũng có nhiều hoạt động bổ ích cho các con.\n                          </div> <div class=\"add-user\" data-v-43894e1e><div class=\"add-user-ava\" data-v-43894e1e><img width=\"600\" height=\"600\" src=\"/images/rv-main-2.png\" alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2022/11/dien-vien-le-phuong.jpg 600w, https://ischool.vn/wp-content/uploads/2022/11/dien-vien-le-phuong-300x300.jpg 300w, https://ischool.vn/wp-content/uploads/2022/11/dien-vien-le-phuong-150x150.jpg 150w, https://ischool.vn/wp-content/uploads/2022/11/dien-vien-le-phuong-560x560.jpg 560w, https://ischool.vn/wp-content/uploads/2022/11/dien-vien-le-phuong-50x50.jpg 50w, https://ischool.vn/wp-content/uploads/2022/11/dien-vien-le-phuong-180x180.jpg 180w\" data-lazy-sizes=\"(max-width: 600px) 100vw, 600px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/11/dien-vien-le-phuong.jpg\" class=\"img\" data-v-43894e1e></div> <div class=\"add-user-info\" data-v-43894e1e><p class=\"add-user-name\" data-v-43894e1e>Chị Bình</p></div></div></div></div></div> <div class=\"swiper-slide\" data-v-43894e1e><div class=\"add-wrap\" data-v-43894e1e><div class=\"add-content\" data-v-43894e1e><img width=\"40\" height=\"40\" src=\"https://ischool.vn/template/assets/images/icon-quote.svg\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-quote.svg\" class=\"icon\" data-v-43894e1e> <div class=\"add-text\" data-v-43894e1e>\n                            Mẹ rất thích cho con đi học ở URI, bởi tại đây các con không chỉ được nuôi dưỡng tình yêu toán học, mà URI còn góp phần tạo nên những chàng trai, cô gái của mẹ vô cùng ấm\n                            áp và ngọt ngào\n                          </div> <div class=\"add-user\" data-v-43894e1e><div class=\"add-user-ava\" data-v-43894e1e><img width=\"380\" height=\"390\" src=\"/images/rv-main-3.png\" alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2022/10/HO-VAN-CUONG-e1668409029913.jpg 380w, https://ischool.vn/wp-content/uploads/2022/10/HO-VAN-CUONG-e1668409029913-292x300.jpg 292w, https://ischool.vn/wp-content/uploads/2022/10/HO-VAN-CUONG-e1668409029913-50x50.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HO-VAN-CUONG-e1668409029913-175x180.jpg 175w\" data-lazy-sizes=\"(max-width: 380px) 100vw, 380px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/10/HO-VAN-CUONG-e1668409029913.jpg\" class=\"img\" data-v-43894e1e></div> <div class=\"add-user-info\" data-v-43894e1e><p class=\"add-user-name\" data-v-43894e1e>Chị Trang</p></div></div></div></div></div></div></div> <div class=\"add-img\" data-v-43894e1e><img width=\"2312\" height=\"891\" src=\"/images/new-image/24.jpg\" alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533.png 2312w, https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533-300x116.png 300w, https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533-1024x395.png 1024w, https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533-768x296.png 768w, https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533-1536x592.png 1536w, https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533-2048x789.png 2048w, https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533-960x370.png 960w, https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533-50x19.png 50w, https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533-280x108.png 280w\" data-lazy-sizes=\"(max-width: 2312px) 100vw, 2312px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/10/0487cbb8e3d37aa7fd7bb18374322533.png\" class=\"attachment-full size-full\" style=\"object-position: bottom\" data-v-43894e1e></div> <div class=\"add-slider-control swiper-control\" data-v-43894e1e><div class=\"swiper-prev\" data-v-43894e1e><i class=\"ti-angle-left\" data-v-43894e1e></i></div> <div class=\"swiper-next\" data-v-43894e1e><i class=\"ti-angle-right\" data-v-43894e1e></i></div></div></div></div></div></div></section> " + (_vm.list.length ? "<section class=\"ss-add\" data-v-43894e1e><div class=\"add\" data-v-43894e1e><div class=\"add-list\" data-v-43894e1e><div data-aos=\"fade-right-cus\" class=\"add-left\" data-v-43894e1e><div class=\"add-news ss-pd has-contactform\" data-v-43894e1e><div class=\"head mb-32\" data-v-43894e1e><h2 class=\"t-title black\" data-v-43894e1e>Tin tức</h2> <a href=\"/tin-tuc\" class=\"btn btn-more\" data-v-43894e1e><p class=\"text\" data-v-43894e1e>Xem tất cả tin tức</p></a></div> <div class=\"dsmall news-side\" data-v-43894e1e><div class=\"dsmall-item news-side-item\" data-v-43894e1e><div class=\"news-pri\" data-v-43894e1e><a" + _vm._ssrAttr("href", '/' + _vm.list[0].slug) + " class=\"news-pri-img\" data-v-43894e1e><img width=\"940\" height=\"788\"" + _vm._ssrAttr("src", _vm.list[0].url_image) + " alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2023/03/329006041_1262391194712769_6038906998014375858_n.jpg 940w, https://ischool.vn/wp-content/uploads/2023/03/329006041_1262391194712769_6038906998014375858_n-300x251.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/329006041_1262391194712769_6038906998014375858_n-768x644.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/329006041_1262391194712769_6038906998014375858_n-668x560.jpg 668w, https://ischool.vn/wp-content/uploads/2023/03/329006041_1262391194712769_6038906998014375858_n-50x42.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/329006041_1262391194712769_6038906998014375858_n-215x180.jpg 215w\" data-lazy-sizes=\"(max-width: 940px) 100vw, 940px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2023/03/329006041_1262391194712769_6038906998014375858_n.jpg\" class=\"img wp-post-image\" data-v-43894e1e></a> <div class=\"news-content\" data-v-43894e1e><a" + _vm._ssrAttr("href", '/' + _vm.list[0].slug) + " class=\"news-name\" data-v-43894e1e>" + _vm._ssrEscape("\n                          " + _vm._s(_vm.list[0].title) + "\n                        ") + "</a></div> <div class=\"news-content\" data-v-43894e1e><div class=\"news-excerpt\" data-v-43894e1e></div></div></div></div> <div class=\"dsmall-item news-side-item\" data-v-43894e1e><div class=\"dsmall news-list\" data-v-43894e1e><div class=\"dsmall-item news-item\" data-v-43894e1e><div class=\"news-wrap\" data-v-43894e1e><a" + _vm._ssrAttr("href", '/' + _vm.list[1].slug) + " class=\"news-img\" data-v-43894e1e><img width=\"270\" height=\"180\"" + _vm._ssrAttr("src", _vm.list[1].url_image) + " alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n-270x180.jpg 270w, https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n.jpg 1920w\" data-lazy-sizes=\"(max-width: 270px) 100vw, 270px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2023/03/330399585_506002741522625_3332630089131595017_n-270x180.jpg\" class=\"img wp-post-image\" data-v-43894e1e></a> <div class=\"news-content\" data-v-43894e1e><a" + _vm._ssrAttr("href", '/' + _vm.list[1].slug) + " class=\"news-name\" data-v-43894e1e>" + _vm._ssrEscape(" " + _vm._s(_vm.list[1].title) + " ") + "</a></div></div> <div class=\"news-content\" data-v-43894e1e><div class=\"news-excerpt\" data-v-43894e1e>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.list[1].descriptions) + "\n                          ") + "</div></div></div> <div class=\"dsmall-item news-item\" data-v-43894e1e><div class=\"news-wrap\" data-v-43894e1e><a" + _vm._ssrAttr("href", _vm.list[2].slug) + " class=\"news-img\" data-v-43894e1e><img width=\"253\" height=\"180\"" + _vm._ssrAttr("src", _vm.list[2].url_image) + " alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao-253x180.jpg 253w, https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao-300x214.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao-1024x729.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao-768x547.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao-1536x1094.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao-786x560.jpg 786w, https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao-50x36.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao.jpg 1919w\" data-lazy-sizes=\"(max-width: 253px) 100vw, 253px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2023/03/iSchool-ninh-thuan-ky-nang-gap-quan-ao-253x180.jpg\" class=\"img wp-post-image\" data-v-43894e1e></a> <div class=\"news-content\" data-v-43894e1e><a" + _vm._ssrAttr("href", '/' + _vm.list[2].slug) + " class=\"news-name\" data-v-43894e1e>" + _vm._ssrEscape(_vm._s(_vm.list[2].title) + " ") + "</a></div></div> <div class=\"news-content\" data-v-43894e1e><div class=\"news-excerpt\" data-v-43894e1e>" + _vm._ssrEscape("\n                            " + _vm._s(_vm.list[2].descriptions) + "\n                          ") + "</div></div></div></div></div></div></div></div> <div class=\"add-right\" data-v-43894e1e><div data-bg=\"https://ischool.vn/wp-content/uploads/2022/10/HI_08811-scaled.jpg\" id=\"register\" class=\"dki ss-pd rocket-lazyload\" data-v-43894e1e><div class=\"container\" data-v-43894e1e><div class=\"dki-width\" data-v-43894e1e><div id=\"wpcf7-f335-p19-o1\" lang=\"vi\" dir=\"ltr\" class=\"wpcf7 no-js\" data-v-43894e1e><div class=\"screen-reader-response\" data-v-43894e1e><p role=\"status\" aria-live=\"polite\" aria-atomic=\"true\" data-v-43894e1e></p> <ul data-v-43894e1e></ul></div> <form action method=\"post\" aria-label=\"Contact form\" novalidate=\"novalidate\" data-status=\"init\" class=\"wpcf7-form init\" data-v-43894e1e><div style=\"display: none\" data-v-43894e1e><input type=\"hidden\" name=\"_wpcf7\" value=\"335\" data-v-43894e1e> <input type=\"hidden\" name=\"_wpcf7_version\" value=\"5.7.3\" data-v-43894e1e> <input type=\"hidden\" name=\"_wpcf7_locale\" value=\"vi\" data-v-43894e1e> <input type=\"hidden\" name=\"_wpcf7_unit_tag\" value=\"wpcf7-f335-p19-o1\" data-v-43894e1e> <input type=\"hidden\" name=\"_wpcf7_container_post\" value=\"19\" data-v-43894e1e> <input type=\"hidden\" name=\"_wpcf7_posted_data_hash\" value data-v-43894e1e> <input type=\"hidden\" name=\"_wpcf7_recaptcha_response\" value data-v-43894e1e></div> <span class=\"wpcf7-form-control-wrap your-source\" data-v-43894e1e><input size=\"40\" aria-invalid=\"false\" value=\"Trang chủ\" type=\"hidden\" name=\"your-source\" class=\"wpcf7-form-control wpcf7dtx-dynamictext wpcf7-dynamichidden\" data-v-43894e1e></span> <div class=\"head dki-head t-center mb-56\" data-v-43894e1e><h2 data-aos=\"flip-right\" class=\"t-title white mb-24\" data-v-43894e1e>Đăng ký tư vấn</h2> <p data-aos=\"fade-up-cus\" class=\"text c-white\" data-v-43894e1e>Để nhận được hỗ trợ chi tiết nhất, Quý Phụ huynh vui lòng để lại thông tin bên dưới</p></div> <div data-aos=\"fade-up-cus\" class=\"dki-form\" data-v-43894e1e><div class=\"f-gr mb-24\" data-v-43894e1e><div class=\"f-list\" data-v-43894e1e><div class=\"f-item f-item-2\" data-v-43894e1e><span id=\"wpcf7-641e76642d2c7-wrapper\" class=\"wpcf7-form-control-wrap yourfullname-wrap\" style=\"display: none !important; visibility: hidden !important\" data-v-43894e1e><label for=\"wpcf7-641e76642d2c7-field\" class=\"hp-message\" data-v-43894e1e>Please leave this field empty.</label><input id=\"wpcf7-641e76642d2c7-field\" type=\"text\" name=\"yourfullname\" value size=\"40\" tabindex=\"-1\" autocomplete=\"new-password\" class=\"wpcf7-form-control wpcf7-text childrent-name\" data-v-43894e1e></span> <span data-name=\"your-name\" class=\"wpcf7-form-control-wrap\" data-v-43894e1e><input size=\"40\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Họ tên\" value type=\"text\" name=\"your-name\" class=\"wpcf7-form-control wpcf7-text wpcf7-validates-as-required re-input\" data-v-43894e1e></span> <span id=\"last-name-id\" class=\"wpcf7-form-control-wrap last-name-wrap\" data-v-43894e1e><label for=\"last-name\" class=\"hp-message\" data-v-43894e1e>Please leave this field empty.</label><input id=\"last-name\" type=\"text\" name=\"last-name\" value size=\"40\" tabindex=\"-1\" autocomplete=\"new-password\" class=\"wpcf7-form-control wpcf7-text last-name\" data-v-43894e1e></span></div> <div class=\"f-item f-item-2\" data-v-43894e1e><span data-name=\"your-tel\" class=\"wpcf7-form-control-wrap\" data-v-43894e1e><input size=\"40\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Số điện thoại\" value type=\"tel\" name=\"your-tel\" class=\"wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel re-input\" data-v-43894e1e></span></div> <div class=\"f-item f-item-2\" data-v-43894e1e><span data-name=\"your-email\" class=\"wpcf7-form-control-wrap\" data-v-43894e1e><input size=\"40\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Email\" value type=\"email\" name=\"your-email\" class=\"wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email re-input\" data-v-43894e1e></span></div> <div class=\"f-item f-item-2 f-item-select\" data-v-43894e1e><span class=\"wpcf7-form-control-wrap your-system\" data-v-43894e1e><select aria-required=\"true\" aria-invalid=\"false\" name=\"your-system\" class=\"wpcf7-form-control wpcf7-system wpcf7-validates-as-required\" data-v-43894e1e><option disabled=\"disabled\" selected=\"selected\" data-v-43894e1e>Quan tâm đến cơ sở nào</option></select></span></div> <div class=\"f-item f-item-2 f-item-select\" data-v-43894e1e><select aria-required=\"true\" aria-invalid=\"false\" name=\"your-categories-system\" class=\"wpcf7-form-control wpcf7-categories_system wpcf7-validates-as-required\" data-v-43894e1e><option disabled=\"disabled\" selected=\"selected\" data-v-43894e1e>Chương trình học quan tâm</option></select></div> <div class=\"f-item f-item-2\" data-v-43894e1e><span data-name=\"your-message\" class=\"wpcf7-form-control-wrap\" data-v-43894e1e><textarea cols=\"40\" rows=\"10\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Câu hỏi\" name=\"your-message\" class=\"wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required re-input\" data-v-43894e1e></textarea></span></div></div></div> <span data-name=\"recaptcha\" class=\"wpcf7-form-control-wrap recaptcha\" data-v-43894e1e><span data-sitekey=\"6LfBfngkAAAAAOtn9TaUClF4gN11Pvu9nWC0MnDV\" class=\"wpcf7-form-control g-recaptcha wpcf7-recaptcha\" data-v-43894e1e></span></span> <div class=\"f-gr grp-btn-mona\" data-v-43894e1e><button type=\"submit\" class=\"btn m-mid\" data-v-43894e1e><p class=\"text\" data-v-43894e1e>Đăng ký ngay</p></button> <input type=\"submit\" value=\"Send\" class=\"wpcf7-form-control has-spinner wpcf7-submit btn-hidden-submit\" data-v-43894e1e></div></div> <div aria-hidden=\"true\" class=\"wpcf7-response-output\" data-v-43894e1e></div></form></div></div></div></div></div></div></div></section>" : "<!---->") + "</div></main>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=43894e1e&scoped=true&

// EXTERNAL MODULE: ./static/template/js/module/SwiperModule.js
var SwiperModule = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: "Main",
  // async asyncData({ $axios, $config }) {
  //   let listSlide = []
  //   await $axios
  //       .get($config.baseURL + "/slide/list")
  //       .then((response) => {
  //         listSlide = response.data.list;
  //       })
  //       .catch((error) => console.error(error));
  //       return {
  //         listSlide
  //       }
  // },
  data() {
    return {
      listV1: [{
        title: "CHIẾN BINH URI KẾT THÚC CHẶNG ĐUA CHUNG KẾT QUỐC TẾ TIMO 2023 VỚI KẾT QUẢ ẤN TƯỢNG",
        des: "Với tinh thần quyết tâm cao và sau những cố gắng rèn luyện, các chiến binh URI đã kết thúc hành trình chinh phục cuộc thi CHUNG KẾT QUỐC TẾ TIMO 2023 với kết quả ấn tượng",
        link: "/chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te",
        img: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/341161805_766349888424437_9213074952146074807_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=QZ4JQVbkAY0AX9jSQpf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfD74czxnavcDDi1K3MQbw2rw2tDSx_6aPh8ZoEWYPc2Pg&oe=6440234D"
      }, {
        title: "DANH SÁCH CÁC “CHIẾN BINH NHÍ” URI LỌT VÀO VÒNG CHUNG KẾT CUỘC GIA KÌ THI TOÁN HỌC QUỐC TẾ HKIMO",
        des: "Kỳ thi Olympic Toán học quốc tế HKIMO (Hongkong International Mathematical Olympiad) là kỳ thi được tổ chức hàng năm nhằm mục đích tạo ra một sân chơi bổ ích dành cho tất cả học sinh yêu thích bộ môn Toán học",
        link: "/danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo",
        img: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/336173625_236705368806080_1232643124292024209_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=dk8VNrROnFgAX9CwuPv&_nc_ht=scontent.fhan5-2.fna&oh=00_AfAy2VRdkbUud_e3zb1jn0wcaaF7c4XM-w_jXDdJ9o7Yfw&oe=64415699"
      }, {
        title: "🎉🎉 'CƠN MƯA HUY CHƯƠNG' TẠI #VÒNG_CHUNG_KẾT_QUỐC_GIA KỲ THI TOÁN QUỐC TẾ BIG BAY BEI 2022",
        des: "Trải qua vòng Chung kết Quốc gia,10 Chiến binh nhí nhà URI đã vượt qua hàng nghìn thí sinh xuất sắc khác, tự tin bản lĩnh giành chiến thắng tại Vòng Chung Kết Quốc Gia kỳ thi Toán Quốc Tế Big Bay Bei, mang về các thành tích đáng tự hào",
        link: "/#",
        img: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/341161805_766349888424437_9213074952146074807_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=QZ4JQVbkAY0AX9jSQpf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfD74czxnavcDDi1K3MQbw2rw2tDSx_6aPh8ZoEWYPc2Pg&oe=6440234D"
      }],
      list: [],
      listSlide: []
    };
  },
  methods: {
    getPost() {
      this.$axios.post(this.$config.baseURL + "/post/list", {
        page: 1,
        limit: 3,
        filter: {
          slug_category: "tin-tuc"
        }
      }).then(response => {
        this.list = response.data.list;
      }).catch(error => console.error(error));
    },
    async getSlide() {
      await this.$axios.get(this.$config.baseURL + "/slide/list").then(response => {
        this.listSlide = response.data.list;
      }).catch(error => console.error(error));
    },
    getTitle(title) {
      let split = title.split(" ");
      split = split.filter(x => x);
      let end = split.splice(split.length - 1, split.length - 1);
      return {
        first: split.join(" "),
        end: end[0]
      };
    }
  },
  async mounted() {
    await this.getSlide();
    Object(SwiperModule["a" /* default */])(true);
    this.getPost();
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "43894e1e",
  "eec5eef0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperModule; });
function SwiperModule(load) {
  let route = document.location.pathname.replace(/\//g, '');
  let pass = ['su-kien', 'tin-tuc', 'hinh-anh', '', 'co-so-vat-chat', 'hinh-anh-hoat-dong'];
  console.log('____a____', pass.includes(route));
  if (pass.includes(route) && !load) return;
  const bannerSlider = document.querySelectorAll('.banner-slider');
  if (bannerSlider) {
    bannerSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');
      const pagi = item.querySelector('.swiper-pagination');
      const next = item.querySelector('.swiper-next');
      const prev = item.querySelector('.swiper-prev');
      let isLoop = true;
      if (swiper.classList.contains('loop-none')) {
        isLoop = false;
        item.querySelector(".swiper-next").style = "display: none";
        item.querySelector(".swiper-prev").style = "display: none";
      }
      // console.log('swiper', swiper)
      var slider = new Swiper(swiper, {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: pagi,
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
        // slidesPerGroup: 2,
        loop: isLoop,
        spaceBetween: 0,
        effect: "fade",
        slidesPerView: 1,
        fadeEffect: {
          crossFade: true
        }
      });
    });
  }
  const hdsSlider = document.querySelectorAll('.hds-slider');
  if (hdsSlider) {
    hdsSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');
      const pagi = item.querySelector('.swiper-pagination');
      const next = item.querySelector('.swiper-next');
      const prev = item.querySelector('.swiper-prev');
      var sliders = new Swiper(swiper, {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        // autoplay: {
        //     delay: 5000
        // },
        pagination: {
          el: pagi,
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 0,
        effect: "slide",
        slidesPerView: 1,
        fadeEffect: {
          crossFade: true
        }
      });
    });
  }
  const gvSlider = document.querySelectorAll('.gv-slider');
  console.log('gvSlider', gvSlider);
  if (gvSlider) {
    gvSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');
      const pagi = item.querySelector('.swiper-pagination');
      const next = item.querySelector('.swiper-next');
      const prev = item.querySelector('.swiper-prev');
      let isLoop = true;
      if (swiper.classList.contains('loop-none')) {
        isLoop = false;
        item.querySelector(".swiper-next").style = "display: none";
        item.querySelector(".swiper-prev").style = "display: none";
      }
      var slider = new Swiper(swiper, {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: pagi,
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
        // slidesPerGroup: 2,
        loop: isLoop,
        spaceBetween: 24,
        effect: "slide",
        slidesPerView: 3,
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: false
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.5
          },
          1200: {
            slidesPerView: 3
          }
        }
      });
    });
  }
  const progSlider = document.querySelectorAll('.prog-slider');
  if (progSlider) {
    progSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');
      const pagi = item.querySelector('.swiper-pagination');
      const next = item.querySelector('.swiper-next');
      const prev = item.querySelector('.swiper-prev');
      let isLoop = true;
      if (swiper.classList.contains('loop-none')) {
        isLoop = false;
        item.querySelector(".swiper-next").style = "display: none";
        item.querySelector(".swiper-prev").style = "display: none";
      }
      var slider = new Swiper(swiper, {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: pagi,
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
        // slidesPerGroup: 2,
        loop: isLoop,
        spaceBetween: 0,
        effect: "fade",
        slidesPerView: 1,
        fadeEffect: {
          crossFade: true
        }
      });
    });
  }
  const addSlider = document.querySelectorAll('.add-slider');
  if (addSlider) {
    addSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');
      const pagi = item.querySelector('.swiper-pagination');
      const next = item.querySelector('.swiper-next');
      const prev = item.querySelector('.swiper-prev');
      let isLoop = true;
      if (swiper.classList.contains('loop-none')) {
        isLoop = false;
        item.querySelector(".swiper-next").style = "display: none";
        item.querySelector(".swiper-prev").style = "display: none";
      }
      var slider = new Swiper(swiper, {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: pagi,
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
        // slidesPerGroup: 2,
        loop: isLoop,
        spaceBetween: 0,
        effect: "slide",
        slidesPerView: 1,
        fadeEffect: {
          crossFade: true
        }
      });
    });
  }
  const proSlider = document.querySelectorAll('.pro-slider');
  if (proSlider) {
    proSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');
      const pagi = item.querySelector('.swiper-pagination');
      const next = item.querySelector('.swiper-next');
      const prev = item.querySelector('.swiper-prev');
      var slider = new Swiper(swiper, {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: pagi,
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 24,
        effect: "slide",
        slidesPerView: 4,
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: false
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.8
          },
          1200: {
            slidesPerView: 4
          }
        }
      });
    });
  }
  const hbSlider = document.querySelectorAll('.hb-slider');
  if (hbSlider) {
    hbSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');
      const pagi = item.querySelector('.swiper-pagination');
      const next = item.querySelector('.swiper-next');
      const prev = item.querySelector('.swiper-prev');
      var slider = new Swiper(swiper, {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: pagi,
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 24,
        effect: "slide",
        slidesPerView: 3,
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: false
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.8
          },
          1200: {
            slidesPerView: 3
          }
        }
      });
    });
  }
  const valueSlider = document.querySelectorAll('.value-slider');
  if (valueSlider) {
    valueSlider.forEach(item => {
      const swiper = item.querySelector('.swiper');
      const pagi = item.querySelector('.swiper-pagination');
      const next = item.querySelector('.swiper-next');
      const prev = item.querySelector('.swiper-prev');
      var slider = new Swiper(swiper, {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: pagi,
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: next,
          prevEl: prev
        },
        // slidesPerGroup: 2,
        loop: false,
        spaceBetween: 24,
        effect: "slide",
        slidesPerView: 6,
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            centeredSlides: false
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2.8
          },
          1200: {
            slidesPerView: 6
          }
        }
      });
    });
  }
}

/***/ })

};;
//# sourceMappingURL=index.js.map