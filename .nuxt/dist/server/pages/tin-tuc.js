exports.ids = [30];
exports.modules = {

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tin-tuc.vue?vue&type=template&id=0685931e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<main class=\"main\">", "</main>", [_vm._ssrNode("<div class=\"news\">", "</div>", [_vm._ssrNode("<section class=\"banner\"><div class=\"banner-slider\"><div class=\"swiper loop-none\"><div class=\"swiper-wrapper\"><div class=\"swiper-slide\"><div class=\"banner-wrap right\"><div class=\"banner-img\"><img width=\"750\" height=\"563\"" + _vm._ssrAttr("src", _vm.newPost.url_image) + " alt class=\"img wp-post-image\"></div> <div class=\"banner-posi\"><div class=\"container\"><div class=\"banner-content\"><div class=\"t-title-primary\"><a" + _vm._ssrAttr("href", '/' + _vm.newPost.slug) + " class=\"banner-title banner-title-second small\">" + _vm._ssrEscape("\n                            " + _vm._s(_vm.newPost.title) + "\n                          ") + "</a></div> <div class=\"banner-des\">" + _vm._ssrEscape("\n                          " + _vm._s(_vm.newPost.descriptions) + "\n                        ") + "</div></div></div></div></div></div></div></div> <div class=\"banner-control swiper-control\"><div class=\"swiper-prev\"><i class=\"ti-angle-left\"></i></div> <div class=\"swiper-next\"><i class=\"ti-angle-right\"></i></div></div></div></section> "), _vm._ssrNode("<section class=\"ss-news\">", "</section>", [_vm._ssrNode("<div class=\"news-main ss-pd\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h2 data-aos=\"fade-down-cus\" class=\"t-title mb-32\">Tin tức URI</h2> "), _vm.loading ? _vm._ssrNode("<div class=\"loading-container\">", "</div>", [_c('a-spin', {
    staticClass: "loading",
    attrs: {
      "indicator": _vm.loading
    }
  })], 1) : _vm._ssrNode("<div class=\"dsmall side\">", "</div>", [_vm._ssrNode("<div class=\"dsmall-item side-nine\">", "</div>", [_vm._ssrNode((_vm.list.length ? "<div class=\"dsmall pro-list\">" + _vm._ssrList(_vm.list, function (item) {
    return "<div data-aos=\"fade\" data-aos-delay=\"400\" class=\"dsmall-item pro-item pro-item-3\"><div class=\"pro-wrap\"><a" + _vm._ssrAttr("href", '/' + item.slug) + " class=\"pro-img\"><img width=\"207\" height=\"180\"" + _vm._ssrAttr("src", item.url_image) + " alt=\"Khen thưởng giáo viên tổ Tiếng Anh\" class=\"img wp-post-image\"></a> <div class=\"pro-content\"><h3 class=\"pro-name\"><a" + _vm._ssrAttr("href", '/' + item.slug) + ">" + _vm._ssrEscape(" " + _vm._s(item.title) + " ") + "</a></h3> <div class=\"pro-des\">" + _vm._ssrEscape("\n                          " + _vm._s(item.descriptions) + "\n                        ") + "</div></div></div></div>";
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
    return "<div class=\"dsmall-item news-item\"><div class=\"news-wrap\"><a" + _vm._ssrAttr("href", '/' + item.slug) + " class=\"news-img\"><img width=\"800\" height=\"500\"" + _vm._ssrAttr("src", item.url_image) + " alt data-lazy-srcset=\"https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg 800w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-300x188.jpeg 300w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-768x480.jpeg 768w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-50x31.jpeg 50w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-280x175.jpeg 280w\" data-lazy-sizes=\"(max-width: 800px) 100vw, 800px\" data-lazy-src=\"https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg\" class=\"attachment-full size-full wp-post-image\"></a> <div class=\"news-content\"><a" + _vm._ssrAttr("href", '/' + item.slug) + " class=\"news-name\">" + _vm._ssrEscape("\n                                " + _vm._s(item.title) + "\n                              ") + "</a></div></div></div>";
  }) + "</div></div></div></div></div>")], 2)], 2)])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/tin-tuc.vue?vue&type=template&id=0685931e&

// EXTERNAL MODULE: ./static/template/js/module/SwiperModule.js
var SwiperModule = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/tin-tuc.vue?vue&type=script&lang=js&

/* harmony default export */ var tin_tucvue_type_script_lang_js_ = ({
  layout: "Main",
  data() {
    return {
      page: 1,
      limit: 12,
      total: 0,
      list: [],
      loading: true,
      newPost: {
        url_image: "",
        title: "",
        slug: "",
        descriptions: ""
      },
      countNewPost: true,
      category: [],
      loadingCategory: true,
      viewPost: []
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
    async getOnePost() {
      await this.$axios.post(this.$config.baseURL + "/post/list", {
        page: 1,
        limit: 1,
        filter: {
          slug_category: "tin-tuc"
        }
      }).then(response => {
        var _response$data;
        this.newPost = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.list[0];
      }).catch(error => console.error(error));
    },
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
          slug_category: "tin-tuc"
        }
      }).then(response => {
        this.list = response.data.list;
        this.total = response.data.total;
      }).catch(error => console.error(error)).finally(() => this.loading = false);
    },
    getCategory() {
      this.loadingCategory = true;
      this.$axios.get(this.$config.baseURL + "/category/list").then(response => {
        this.category = response.data.list;
      }).catch(error => console.error(error)).finally(() => this.loadingCategory = false);
    },
    changePagination() {
      this.$router.push({
        path: "/tin-tuc",
        query: {
          page: this.page
        }
      });
      setTimeout(() => {
        this.getPost();
      }, 100);
    }
  },
  async mounted() {
    await this.getOnePost();
    this.getPost();
    this.getCategory();
    this.getViewPost();
    Object(SwiperModule["a" /* default */])(true);
  }
});
// CONCATENATED MODULE: ./pages/tin-tuc.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_tin_tucvue_type_script_lang_js_ = (tin_tucvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/tin-tuc.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_tin_tucvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2baf7504"
  
)

/* harmony default export */ var tin_tuc = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=tin-tuc.js.map