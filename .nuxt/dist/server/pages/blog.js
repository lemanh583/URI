exports.ids = [8];
exports.modules = {

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=template&id=5662e57e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<main class=\"main\">", "</main>", [_vm._ssrNode("<section class=\"ss-syschool\">", "</section>", [_vm._ssrNode("<div class=\"syschool ss-pd\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"head mb-32 t-center\"><h2 data-aos=\"flip-right\" class=\"t-title mb-32\">Blog</h2></div> <div class=\"dsmall syschool-list ss-pd-b\">" + _vm._ssrList(_vm.list, function (i) {
    return "<div class=\"dsmall-item syschool-item syschool-item-3\"><div class=\"syschool-wrap\"><a" + _vm._ssrAttr("href", '/' + i.slug) + " class=\"syschool-img\"><img width=\"1344\" height=\"574\"" + _vm._ssrAttr("src", i.url_image) + _vm._ssrAttr("alt", i.title) + " class=\"attachment-full size-full wp-post-image\"></a> <div class=\"syschool-content\"><h3 class=\"syschool-name\"><a" + _vm._ssrAttr("href", '/' + i.slug) + ">" + _vm._ssrEscape(" " + _vm._s(i.title) + " ") + "</a></h3> <div class=\"syschool-info\"><div class=\"syschool-info-item\"><div class=\"info-detail-mona\"><p class=\"text\">" + _vm._ssrEscape("\n                          " + _vm._s(i.descriptions) + "\n                        ") + "</p></div></div></div></div></div></div>";
  }) + "</div> "), _vm.list.length ? _vm._ssrNode("<div class=\"page-numbers m-top\">", "</div>", [_c('a-pagination', {
    attrs: {
      "pageSize": _vm.limit,
      "total": _vm.total,
      "show-less-items": ""
    },
    on: {
      "change": _vm.changePagination
    },
    model: {
      value: _vm.page,
      callback: function ($$v) {
        _vm.page = $$v;
      },
      expression: "page"
    }
  })], 1) : _vm._e()], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog.vue?vue&type=template&id=5662e57e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog.vue?vue&type=script&lang=js&
/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  layout: "Main",
  data() {
    return {
      loading: true,
      page: 1,
      limit: 12,
      total: 0,
      list: []
    };
  },
  methods: {
    getPost() {
      this.loading = true;
      if (this.$route.query.page) {
        this.page = Number(this.$route.query.page) || 1;
      }
      let width = window.innerWidth;
      if (width <= 768) {
        this.limit = 8;
      }
      this.$axios.post(this.$config.baseURL + "/post/list", {
        page: this.page,
        limit: this.limit,
        filter: {
          slug_category: "blog"
        }
      }).then(response => {
        this.list = response.data.list;
        this.total = response.data.total;
      }).catch(error => console.error(error)).finally(() => this.loading = false);
    },
    changePagination() {
      this.$router.push({
        path: "/blog",
        query: {
          page: this.page
        }
      });
      setTimeout(() => {
        this.getPost();
      }, 100);
    }
  },
  mounted() {
    this.getPost();
  }
});
// CONCATENATED MODULE: ./pages/blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/blog.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "95a7c148"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog.js.map