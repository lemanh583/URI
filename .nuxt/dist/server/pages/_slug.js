exports.ids = [6];
exports.modules = {

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_slug.vue?vue&type=template&id=5ee7cb3a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.loading && _vm.loadingPostCategory ? _vm._ssrNode("<div class=\"loading-container\">", "</div>", [_c('a-spin', {
    staticClass: "loading",
    attrs: {
      "indicator": _vm.loading
    }
  })], 1) : _vm._ssrNode("<div>", "</div>", [_vm.loading && !_vm.loadingPostCategory && !_vm.loadingCategory ? _vm._ssrNode("<main class=\"main\">", "</main>", [_vm._ssrNode("<div class=\"news\">", "</div>", [_vm._ssrNode("<section class=\"ss-news\">", "</section>", [_vm._ssrNode("<div class=\"news-main ss-pd\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h2 data-aos=\"fade-down-cus\" class=\"t-title mb-32\">" + _vm._ssrEscape(" " + _vm._s(_vm.category.find(i => i.slug == _vm.$route.path.replace(/\//g, '')).name)) + "</h2> "), _vm._ssrNode("<div class=\"dsmall side\">", "</div>", [_vm._ssrNode("<div class=\"dsmall-item side-nine\">", "</div>", [_vm._ssrNode((_vm.list.length ? "<div class=\"dsmall pro-list\">" + _vm._ssrList(_vm.list, function (item) {
    return "<div data-aos=\"fade\" data-aos-delay=\"400\" class=\"dsmall-item pro-item pro-item-3\"><div class=\"pro-wrap\"><a" + _vm._ssrAttr("href", '/' + item.slug) + " class=\"pro-img\"><img width=\"207\" height=\"180\"" + _vm._ssrAttr("src", item.url_image) + " alt=\"URI Hình ảnh\" class=\"img wp-post-image\"></a> <div class=\"pro-content\"><h3 class=\"pro-name\"><a" + _vm._ssrAttr("href", '/' + item.slug) + ">" + _vm._ssrEscape(" " + _vm._s(item.title) + " ") + "</a></h3> <div class=\"pro-des\">" + _vm._ssrEscape("\n                            " + _vm._s(item.descriptions) + "\n                          ") + "</div></div></div></div>";
  }) + "</div>" : "<div>Không có kết quả</div>") + " "), _vm.list.length ? _vm._ssrNode("<div class=\"page-numbers m-top\">", "</div>", [_c('a-pagination', {
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
  })], 1) : _vm._e()], 2), _vm._ssrNode(" <div class=\"dsmall-item side-three\"><div data-aos=\"fade-up-cus\" class=\"sidebar none-news\"><div class=\"side-fixed\"><div class=\"side-fixed-wrap\"><div id=\"m_category_list-3\" class=\"widget blog-sidebar widget_m_category_list\"><div class=\"sidebar-block\"><div class=\"sidebar-head\"><img width=\"15\" height=\"15\" src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" class=\"icon\"> <p class=\"sidebar-title\">Danh mục</p></div> <div class=\"sidebar-body\"><div class=\"sidebar-menu\"><div class=\"sidebar-menu-list\">" + _vm._ssrList(_vm.category, function (i) {
    return "<a" + _vm._ssrAttr("href", '/' + i.slug) + " class=\"sidebar-menu-link\"><i class=\"fal fa-long-arrow-right\"></i> <p class=\"text\">" + _vm._ssrEscape(_vm._s(i.name)) + "</p></a>";
  }) + "</div></div></div></div></div></div> <div class=\"side-close\"><i class=\"fas fa-times close icon\"></i></div></div> <div class=\"side-open\"><div class=\"side-open-wrap\"><img width=\"15\" height=\"15\" src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2015%2015'%3E%3C/svg%3E\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" class=\"icon\"></div></div> <div class=\"side-overlay\"></div> <div class=\"sidebar-block\"><div class=\"sidebar-head\"><img width=\"15\" height=\"15\" src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" class=\"icon\"> <p class=\"sidebar-title\">Bài viết nổi bật</p></div> <div class=\"sidebar-body\"><div class=\"dsmall news-list\">" + _vm._ssrList(_vm.viewPost, function (item, i) {
    return "<div class=\"dsmall-item news-item\"><div class=\"news-wrap\"><a" + _vm._ssrAttr("href", '/' + item.slug) + " class=\"news-img\"><img width=\"800\" height=\"500\"" + _vm._ssrAttr("src", item.url_image) + " alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg 800w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-300x188.jpeg 300w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-768x480.jpeg 768w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-50x31.jpeg 50w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-280x175.jpeg 280w\" data-lazy-sizes=\"(max-width: 800px) 100vw, 800px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg\" class=\"attachment-full size-full wp-post-image\"></a> <div class=\"news-content\"><a" + _vm._ssrAttr("href", '/' + item.slug) + " class=\"news-name\">" + _vm._ssrEscape("\n                                  " + _vm._s(item.title) + "\n                                ") + "</a></div></div></div>";
  }) + "</div></div></div></div></div>")], 2)], 2)])])])]) : _vm._ssrNode("<main class=\"main\"><div class=\"detail\"><section class=\"ss-detail\"><div class=\"detail-main ss-pd\"><div class=\"container\"><div class=\"dsmall side\"><div class=\"dsmall-item side-nine\"><div class=\"detail-wrapper\"><div data-aos=\"fade-up-cus\" class=\"detail-block\"><div class=\"pro-wrap\"><div class=\"pro-content\"><h1 class=\"detail-pro-name pro-name\">" + _vm._ssrEscape("\n                            " + _vm._s(_vm.post.title) + "\n                          ") + "</h1></div></div></div> <div>" + _vm._ssrEscape("\n                      " + _vm._s(_vm.post.descriptions) + "\n                    ") + "</div> <div data-aos=\"fade-up-cus\" class=\"detail-block mona-content post-content content-db\">" + _vm._s(_vm.post.content) + "</div></div></div> <div class=\"dsmall-item side-three\"><div data-aos=\"fade-up-cus\" class=\"sidebar\"><div class=\"side-fixed\"><div class=\"side-fixed-wrap\"><div id=\"m_category_list-2\" class=\"widget news-sidebar widget_m_category_list\"><div class=\"sidebar-block\"><div class=\"sidebar-head\"><img width=\"15\" height=\"15\" src=\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2015%2015'%3E%3C/svg%3E\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" class=\"icon\"> <p class=\"sidebar-title\">Danh mục</p></div> <div class=\"sidebar-body\"><div class=\"sidebar-menu\"><div class=\"sidebar-menu-list\">" + _vm._ssrList(_vm.category, function (i) {
    return "<a" + _vm._ssrAttr("href", '/' + i.slug) + " class=\"sidebar-menu-link\"><i class=\"fal fa-long-arrow-right\"></i> <p class=\"text\">" + _vm._ssrEscape(_vm._s(i.name)) + "</p></a>";
  }) + "</div></div></div></div></div></div> <div class=\"side-close\"><i class=\"fas fa-times close icon\"></i></div></div> <div class=\"side-open\"><div class=\"side-open-wrap\"><img width=\"15\" height=\"15\" src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" class=\"icon\"></div></div> <div class=\"side-overlay\"></div> <div class=\"sidebar-block\"><div class=\"sidebar-head\"><img width=\"15\" height=\"15\" src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" alt data-lazy-src=\"https://ischool.vn/template/assets/images/icon-dm.svg\" class=\"icon\"> <p class=\"sidebar-title\">Bài viết nổi bật</p></div> <div class=\"sidebar-body\"><div class=\"dsmall news-list\">" + _vm._ssrList(_vm.viewPost, function (i) {
    return "<div class=\"dsmall-item news-item\"><div class=\"news-wrap\"><a" + _vm._ssrAttr("href", '/' + i.slug) + " class=\"news-img\"><img width=\"800\" height=\"500\"" + _vm._ssrAttr("src", i.url_image) + " alt=\"cập nhật lịch nghỉ Tết Nguyên đán 2023 của học sinh\" data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg 800w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-300x188.jpeg 300w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-768x480.jpeg 768w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-50x31.jpeg 50w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-280x175.jpeg 280w\" data-lazy-sizes=\"(max-width: 800px) 100vw, 800px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg\" class=\"attachment-full size-full wp-post-image\"></a> <div class=\"news-content\"><a" + _vm._ssrAttr("href", '/' + i.slug) + " class=\"news-name\">" + _vm._ssrEscape(" " + _vm._s(i.title) + " ") + "</a></div></div></div>";
  }) + "</div></div></div></div></div></div></div></div></section></div></main>")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/_slug.vue?vue&type=template&id=5ee7cb3a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_slug.vue?vue&type=script&lang=js&
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  layout: "Main",
  data() {
    return {
      post: {},
      loading: true,
      category: [],
      loadingCategory: true,
      loadingPostCategory: true,
      viewPost: [],
      list: [],
      page: 1,
      limit: 1,
      total: 0
    };
  },
  methods: {
    getViewPost() {
      this.$axios.post(this.$config.baseURL + "/post/list", {
        page: 1,
        limit: 5,
        sort: {
          view: -1
        },
        filter: {
          slug_category: "tin-tuc"
        }
      }).then(response => {
        this.viewPost = response.data.list;
      }).catch(error => console.error(error));
    },
    getPost() {
      let regex = /[0-9]/g;
      let slug = this.$route.params.slug.replace(/\//g, "");
      if (!regex.test(slug)) return;
      this.loading = true;
      this.$axios.get(this.$config.baseURL + "/post/get/" + slug).then(response => {
        this.post = response.data.data;
      }).catch(error => {
        this.$router.push({
          path: "/404"
        });
        console.error(error);
      }).finally(() => this.loading = false);
    },
    async getCategory() {
      this.loadingCategory = true;
      await this.$axios.get(this.$config.baseURL + "/category/list").then(response => {
        this.category = response.data.list;
      }).catch(error => console.error(error)).finally(() => this.loadingCategory = false);
    },
    getListFromCategory() {
      let regex = /[0-9]/g;
      let slug = this.$route.params.slug.replace(/\//g, "");
      if (regex.test(slug)) return;
      this.loadingPostCategory = true;
      this.$axios.post(this.$config.baseURL + "/post/list", {
        page: this.page,
        limit: this.limit,
        sort: {
          view: -1
        },
        filter: {
          slug_category: slug
        }
      }).then(response => {
        this.list = response.data.list;
        this.total = response.data.total;
      }).catch(error => {
        this.$router.push({
          path: "/404"
        });
        console.error(error);
      }).finally(() => this.loadingPostCategory = false);
    },
    changePagination() {
      this.$router.push({
        path: this.$route.params.slug,
        query: {
          page: this.page
        }
      });
      setTimeout(() => {
        this.getListFromCategory();
      }, 100);
    }
  },
  async mounted() {
    this.getPost();
    this.getListFromCategory();
    this.getCategory();
    this.getViewPost();
  }
});
// CONCATENATED MODULE: ./pages/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f2333180"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map