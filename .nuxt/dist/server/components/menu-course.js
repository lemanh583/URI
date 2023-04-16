exports.ids = [3];
exports.modules = {

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MenuCourse.vue?vue&type=template&id=75dee19e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "menu-static"
  }, [_vm._ssrNode("<div class=\"menu-page\"><div class=\"container\"><ul id=\"menu-theme-curriculum-menu\" class=\"menu-list\">" + _vm._ssrList(_vm.list, function (item) {
    return "<li" + _vm._ssrClass("menu-item menu-item-type-post_type menu-item-object-page menu-item-371", {
      current_page_item: _vm.keyActive == item.key
    }) + "><a" + _vm._ssrAttr("href", item.menu) + ">" + _vm._ssrEscape(_vm._s(item.title)) + "</a></li>";
  }) + "</ul></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/MenuCourse.vue?vue&type=template&id=75dee19e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MenuCourse.vue?vue&type=script&lang=js&
/* harmony default export */ var MenuCoursevue_type_script_lang_js_ = ({
  props: {
    keyActive: Number
  },
  data() {
    return {
      list: [{
        title: "Hành trang vào lớp 1",
        menu: "/lop-hanh-trang-vao-lop-1/",
        key: 1
      }, {
        title: "Lớp cơ bản",
        menu: "/co-ban/",
        key: 2
      }, {
        title: "Tư duy chuyên sâu",
        menu: "/chuyen-sau/",
        key: 3
      }, {
        title: "Luyện thi quốc tế",
        menu: "/luyen-thi-quoc-te/",
        key: 4
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/MenuCourse.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MenuCoursevue_type_script_lang_js_ = (MenuCoursevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/MenuCourse.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MenuCoursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59a26669"
  
)

/* harmony default export */ var MenuCourse = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=menu-course.js.map