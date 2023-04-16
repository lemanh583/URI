exports.ids = [30,1];
exports.modules = {

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test2.vue?vue&type=template&id=09cc905a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_c('ckeditor-nuxt', {
    model: {
      value: _vm.content,
      callback: function ($$v) {
        _vm.content = $$v;
      },
      expression: "content"
    }
  }), _vm._ssrNode(" <button>Save</button>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/test2.vue?vue&type=template&id=09cc905a&

// EXTERNAL MODULE: ./components/CkeditorNuxt.vue
var CkeditorNuxt = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test2.vue?vue&type=script&lang=js&

/* harmony default export */ var test2vue_type_script_lang_js_ = ({
  components: {
    CkeditorNuxt: CkeditorNuxt["default"]
  },
  data() {
    return {
      content: ''
    };
  },
  methods: {
    saveContent() {
      alert(this.content);
    }
  }
});
// CONCATENATED MODULE: ./pages/test2.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_test2vue_type_script_lang_js_ = (test2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/test2.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_test2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39da8c71"
  
)

/* harmony default export */ var test2 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CkeditorNuxt: __webpack_require__(91).default})


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a94cfc7"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=test2.js.map