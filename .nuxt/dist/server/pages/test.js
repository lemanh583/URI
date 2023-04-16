exports.ids = [29,1];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(2).default
module.exports.__inject__ = function (context) {
  add("f8bc2e44", content, true, context)
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_5d53c7e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_5d53c7e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_5d53c7e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_5d53c7e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_test_vue_vue_type_style_index_0_id_5d53c7e8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(1);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "[data-v-5d53c7e8]:root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-mention-background:rgba(153,0,48,.1);--ck-color-mention-text:#990030;--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-highlight-marker-blue:#72ccfd;--ck-highlight-marker-green:#62f962;--ck-highlight-marker-pink:#fc7899;--ck-highlight-marker-yellow:#fdfd77;--ck-highlight-pen-green:#128a00;--ck-highlight-pen-red:#e71313;--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2);--ck-todo-list-checkmark-size:16px}.ck-content code[data-v-5d53c7e8]{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck-content blockquote[data-v-5d53c7e8]{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote[data-v-5d53c7e8]{border-left:0;border-right:5px solid #ccc}.ck-content .text-tiny[data-v-5d53c7e8]{font-size:.7em}.ck-content .text-small[data-v-5d53c7e8]{font-size:.85em}.ck-content .text-big[data-v-5d53c7e8]{font-size:1.4em}.ck-content .text-huge[data-v-5d53c7e8]{font-size:1.8em}.ck-content .marker-yellow[data-v-5d53c7e8]{background-color:#fdfd77;background-color:var(--ck-highlight-marker-yellow)}.ck-content .marker-green[data-v-5d53c7e8]{background-color:#62f962;background-color:var(--ck-highlight-marker-green)}.ck-content .marker-pink[data-v-5d53c7e8]{background-color:#fc7899;background-color:var(--ck-highlight-marker-pink)}.ck-content .marker-blue[data-v-5d53c7e8]{background-color:#72ccfd;background-color:var(--ck-highlight-marker-blue)}.ck-content .pen-red[data-v-5d53c7e8]{background-color:transparent;color:#e71313;color:var(--ck-highlight-pen-red)}.ck-content .pen-green[data-v-5d53c7e8]{background-color:transparent;color:#128a00;color:var(--ck-highlight-pen-green)}.ck-content .image.image_resized[data-v-5d53c7e8]{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img[data-v-5d53c7e8]{width:100%}.ck-content .image.image_resized>figcaption[data-v-5d53c7e8]{display:block}.ck-content .image-style-block-align-left[data-v-5d53c7e8],.ck-content .image-style-block-align-right[data-v-5d53c7e8]{max-width:calc(100% - 1.5em);max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left[data-v-5d53c7e8],.ck-content .image-style-align-right[data-v-5d53c7e8]{clear:none}.ck-content .image-style-side[data-v-5d53c7e8]{float:right;margin-left:1.5em;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left[data-v-5d53c7e8]{float:left;margin-right:1.5em;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center[data-v-5d53c7e8]{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right[data-v-5d53c7e8]{float:right;margin-left:1.5em;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right[data-v-5d53c7e8]{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left[data-v-5d53c7e8]{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left[data-v-5d53c7e8],.ck-content p+.image-style-align-right[data-v-5d53c7e8],.ck-content p+.image-style-side[data-v-5d53c7e8]{margin-top:0}.ck-content .image-inline.image-style-align-left[data-v-5d53c7e8],.ck-content .image-inline.image-style-align-right[data-v-5d53c7e8]{margin-bottom:.75em;margin-bottom:var(--ck-inline-image-style-spacing);margin-top:.75em;margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left[data-v-5d53c7e8]{margin-right:.75em;margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right[data-v-5d53c7e8]{margin-left:.75em;margin-left:var(--ck-inline-image-style-spacing)}.ck-content .image[data-v-5d53c7e8]{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img[data-v-5d53c7e8]{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline[data-v-5d53c7e8]{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture[data-v-5d53c7e8]{display:flex}.ck-content .image-inline img[data-v-5d53c7e8],.ck-content .image-inline picture[data-v-5d53c7e8]{flex-grow:1;flex-shrink:1;max-width:100%}.ck-content .image>figcaption[data-v-5d53c7e8]{background-color:#f7f7f7;background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:#333;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck-content span[lang][data-v-5d53c7e8]{font-style:italic}.ck-content .todo-list[data-v-5d53c7e8]{list-style:none}.ck-content .todo-list li[data-v-5d53c7e8]{margin-bottom:5px}.ck-content .todo-list li .todo-list[data-v-5d53c7e8]{margin-top:5px}.ck-content .todo-list .todo-list__label>input[data-v-5d53c7e8]{-webkit-appearance:none;border:0;display:inline-block;height:16px;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:16px;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input[data-v-5d53c7e8]:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:\"\";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input[data-v-5d53c7e8]:after{border-color:transparent;border-style:solid;border-width:0 2px 2px 0;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:\"\";display:block;height:6.15385px;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:5.33333px;left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:3.01887px;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:3.01887px;width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked][data-v-5d53c7e8]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked][data-v-5d53c7e8]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description[data-v-5d53c7e8]{vertical-align:middle}.ck-content ol[data-v-5d53c7e8]{list-style-type:decimal}.ck-content ol ol[data-v-5d53c7e8]{list-style-type:lower-latin}.ck-content ol ol ol[data-v-5d53c7e8]{list-style-type:lower-roman}.ck-content ol ol ol ol[data-v-5d53c7e8]{list-style-type:upper-latin}.ck-content ol ol ol ol ol[data-v-5d53c7e8]{list-style-type:upper-roman}.ck-content ul[data-v-5d53c7e8]{list-style-type:disc}.ck-content ul ul[data-v-5d53c7e8]{list-style-type:circle}.ck-content ul ul ul[data-v-5d53c7e8],.ck-content ul ul ul ul[data-v-5d53c7e8]{list-style-type:square}.ck-content .media[data-v-5d53c7e8]{clear:both;display:block;margin:.9em 0;min-width:15em}.ck-content .page-break[data-v-5d53c7e8]{align-items:center;clear:both;display:flex;justify-content:center;padding:5px 0;position:relative}.ck-content .page-break[data-v-5d53c7e8]:after{border-bottom:2px dashed #c4c4c4;content:\"\";position:absolute;width:100%}.ck-content .page-break__label[data-v-5d53c7e8]{background:#fff;border:1px solid #c4c4c4;border-radius:2px;box-shadow:2px 2px 1px rgba(0,0,0,.15);color:#333;display:block;font-family:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;font-size:.75em;font-weight:700;padding:.3em .6em;position:relative;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1}.ck-content .table[data-v-5d53c7e8]{display:table;margin:.9em auto}.ck-content .table table[data-v-5d53c7e8]{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td[data-v-5d53c7e8],.ck-content .table table th[data-v-5d53c7e8]{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th[data-v-5d53c7e8]{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th[data-v-5d53c7e8]{text-align:right}.ck-content[dir=ltr] .table th[data-v-5d53c7e8]{text-align:left}.ck-content .table>figcaption[data-v-5d53c7e8]{background-color:#f7f7f7;background-color:var(--ck-color-table-caption-background);caption-side:top;color:#333;color:var(--ck-color-table-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck-content .table .ck-table-resized[data-v-5d53c7e8]{table-layout:fixed}.ck-content .table table[data-v-5d53c7e8]{overflow:hidden}.ck-content .table td[data-v-5d53c7e8],.ck-content .table th[data-v-5d53c7e8]{position:relative}.ck-content hr[data-v-5d53c7e8]{background:#dedede;border:0;height:4px;margin:15px 0}.ck-content pre[data-v-5d53c7e8]{background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;color:#353535;direction:ltr;font-style:normal;min-width:200px;padding:1em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;text-align:left;white-space:pre-wrap}.ck-content pre code[data-v-5d53c7e8]{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;border-radius:0;padding:0}.ck-content .mention[data-v-5d53c7e8]{background:rgba(153,0,48,.1);background:var(--ck-color-mention-background);color:#990030;color:var(--ck-color-mention-text)}@media print{.ck-content .page-break[data-v-5d53c7e8]{padding:0}.ck-content .page-break[data-v-5d53c7e8]:after{display:none}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=5d53c7e8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h2 data-v-5d53c7e8>dvsdsdvdsv</h2> "), _c('client-only', {
    attrs: {
      "placeholder": "loading..."
    }
  }, [_c('ckeditor-nuxt', {
    attrs: {
      "config": _vm.editorConfig
    },
    model: {
      value: _vm.contentHolder,
      callback: function ($$v) {
        _vm.contentHolder = $$v;
      },
      expression: "contentHolder"
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=5d53c7e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
/* harmony default export */ var testvue_type_script_lang_js_ = ({
  components: {
    'ckeditor-nuxt': () => {
      if (false) {}
    }
  },
  data() {
    return {
      editorConfig: {
        simpleUpload: {
          uploadUrl: 'path_to_image_controller',
          headers: {
            'Authorization': 'optional_token'
          }
        },
        font_style: {
          styles: {
            'font-family': 'Averta, sans-serif'
          }
        }
      },
      contentHolder: ""
    };
  }
});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/test.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5d53c7e8",
  "01dcff11"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=test.js.map