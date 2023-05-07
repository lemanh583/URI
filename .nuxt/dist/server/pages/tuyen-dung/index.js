exports.ids = [32];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("203cf546", content, true, context)
};

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_519e2414_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_519e2414_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_519e2414_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_519e2414_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_519e2414_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table[data-v-519e2414]{width:100%}table tr[data-v-519e2414]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}table th[data-v-519e2414]{background-color:#641;color:#fff;font-weight:700;padding:8px 16px}table td div[data-v-519e2414]{height:80px;padding:8px 16px}table td[data-v-519e2414],table td div[data-v-519e2414]{align-items:center;display:flex}.odd div[data-v-519e2414],.odd td[data-v-519e2414]{background-color:#f3f4f6}.even div[data-v-519e2414],.even td[data-v-519e2414]{background-color:#d1d5db}.name[data-v-519e2414]{color:#000;font-weight:700}.footer-table[data-v-519e2414]{display:flex;justify-content:space-between;padding:12px 24px}.footer-table .list-button[data-v-519e2414]{display:flex}.footer-table .list-button button[data-v-519e2414]{display:flex;justify-content:center;width:75px}.syschool-wrap[data-v-519e2414]{border:1px solid #641}.header-table-title[data-v-519e2414]{background-color:#d1d5db;padding:16px}@media screen and (max-width:550px){table tr[data-v-519e2414]{grid-template-columns:repeat(2,minmax(0,1fr))}.footer-table[data-v-519e2414]{gap:10px;padding:12px 0}}@media screen and (max-width:768px){.syschool-item-3[data-v-519e2414]{width:100%}.syschool-content[data-v-519e2414]{margin:auto}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tuyen-dung/index.vue?vue&type=template&id=519e2414&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<main class=\"main\" data-v-519e2414><section class=\"ss-syschool\" data-v-519e2414><div class=\"syschool ss-pd\" data-v-519e2414><div class=\"container\" data-v-519e2414><div class=\"head mb-32 t-center\" data-v-519e2414><h2 data-aos=\"flip-right\" class=\"t-title mb-32\" data-v-519e2414>Tuyển dụng nổi bật</h2></div> <div class=\"dsmall syschool-list ss-pd-b\" data-v-519e2414>" + _vm._ssrList(3, function (i) {
    return "<div class=\"dsmall-item syschool-item syschool-item-3\" data-v-519e2414><div class=\"syschool-wrap\" data-v-519e2414><div class=\"syschool-content\" data-v-519e2414><h3 class=\"syschool-name\" data-v-519e2414><a href=\"#\" data-v-519e2414> Giáo viên toán</a></h3> <div class=\"syschool-info\" data-v-519e2414><div class=\"syschool-info-item\" data-v-519e2414><img width=\"16\" height=\"15\" src=\"https://ischool.vn/wp-content/uploads/2022/08/syschool-icon-1.svg\" alt data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/syschool-icon-1.svg\" class=\"icon\" data-v-519e2414> <div class=\"info-detail-mona\" data-v-519e2414><p class=\"text\" data-v-519e2414>\n                          Trung tâm URI Vinh\n                        </p></div></div> <div class=\"syschool-info-item\" data-v-519e2414><img width=\"16\" height=\"15\" src=\"https://ischool.vn/wp-content/uploads/2022/08/syschool-icon-3.svg\" alt data-lazy-src=\"https://ischool.vn/wp-content/uploads/2022/08/syschool-icon-3.svg\" class=\"icon\" data-v-519e2414> <div class=\"info-detail-mona\" data-v-519e2414><p class=\"text\" data-v-519e2414>31/2/2023</p></div></div></div> <a href=\"/tuyen-dung/1\" class=\"btn\" style=\"margin-top: 10px;\" data-v-519e2414>\n                      Xem thêm\n                  </a></div></div></div>";
  }) + "</div> <div data-v-519e2414><div class=\"header-table-title\" data-v-519e2414>THÔNG TIN TUYỂN DỤNG THÁNG 3/2023 <span style=\"color: red;\" data-v-519e2414>TỔNG CỘNG 2 VỊ TRÍ</span></div> <div data-v-519e2414><table data-v-519e2414><tr data-v-519e2414><th data-v-519e2414>#</th> <th data-v-519e2414>Vị trí</th> <th data-v-519e2414>Nơi làm việc</th> <th data-v-519e2414>Ngày hết hạn</th></tr> <tr class=\"odd\" data-v-519e2414><td data-v-519e2414><div data-v-519e2414>1</div></td> <td data-v-519e2414><a href=\"/tuyen-dung/1\" class=\"name\" data-v-519e2414>Giáo viên dạy toán</a></td> <td data-v-519e2414><div data-v-519e2414>Trung tâm URI</div></td> <td data-v-519e2414><div data-v-519e2414>31/3/2023</div></td></tr> <tr class=\"even\" data-v-519e2414><td data-v-519e2414><div data-v-519e2414>2</div></td> <td data-v-519e2414><a href=\"/tuyen-dung/1\" class=\"name\" data-v-519e2414>Kế toán</a></td> <td data-v-519e2414><div data-v-519e2414>Trung tâm URI</div></td> <td data-v-519e2414><div data-v-519e2414>31/3/2023</div></td></tr></table> <div class=\"footer-table\" data-v-519e2414><div data-v-519e2414>\n                      Đang xem 1 đến 2 trong tổng số 2\n                  </div> <div class=\"list-button\" data-v-519e2414><button class=\"btn\" style=\"margin-right: 20px;\" data-v-519e2414>\n                          Trước \n                     </button> <button class=\"btn\" data-v-519e2414>\n                          Sau\n                     </button></div></div></div></div></div></div></section></main>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/tuyen-dung/index.vue?vue&type=template&id=519e2414&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tuyen-dung/index.vue?vue&type=script&lang=js&
/* harmony default export */ var tuyen_dungvue_type_script_lang_js_ = ({
  layout: "Main"
});
// CONCATENATED MODULE: ./pages/tuyen-dung/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tuyen_dungvue_type_script_lang_js_ = (tuyen_dungvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/tuyen-dung/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_tuyen_dungvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "519e2414",
  "129ef674"
  
)

/* harmony default export */ var tuyen_dung = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map