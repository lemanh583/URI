exports.ids = [1];
exports.modules = {

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactCourse.vue?vue&type=template&id=3dc6f042&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dki ss-pd rocket-lazyload",
    staticStyle: {
      "background-image": "url('/images/new-image/18.jpg')"
    },
    attrs: {
      "data-bg": "/images/new-image/18.jpg",
      "id": "register"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"dki-width\">", "</div>", [_vm._ssrNode("<div id=\"wpcf7-f5-p208-o1\" lang=\"vi\" dir=\"ltr\" class=\"wpcf7 no-js\">", "</div>", [_vm._ssrNode("<div class=\"screen-reader-response\"><p role=\"status\" aria-live=\"polite\" aria-atomic=\"true\"></p> <ul></ul></div> "), _vm._ssrNode("<form action=\"#\" method=\"post\" aria-label=\"Contact form\" data-status=\"init\" class=\"wpcf7-form init\">", "</form>", [_vm._ssrNode("<div class=\"head dki-head t-center mb-56\"><h2 data-aos=\"flip-right\" class=\"t-title white mb-24\">Đăng ký tư vấn</h2></div> "), _vm._ssrNode("<div data-aos=\"fade-up-cus\" class=\"dki-form\">", "</div>", [_vm._ssrNode("<div class=\"f-gr mb-24\">", "</div>", [_vm._ssrNode("<div class=\"f-list\">", "</div>", [_vm._ssrNode("<div class=\"f-item f-item-2\"><span data-name=\"your-name\" class=\"wpcf7-form-control-wrap\"><input size=\"40\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Họ Tên\" type=\"text\" name=\"your-name\" required=\"required\"" + _vm._ssrAttr("value", _vm.name) + " class=\"wpcf7-form-control wpcf7-text wpcf7-validates-as-required re-input\"></span></div> <div class=\"f-item f-item-2\"><span data-name=\"your-email\" class=\"wpcf7-form-control-wrap\"><input size=\"40\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Email\" value type=\"email\" name=\"your-email\" required=\"required\" class=\"wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email re-input\"></span></div> <div class=\"f-item f-item-2\"><span data-name=\"your-tel\" class=\"wpcf7-form-control-wrap\"><input size=\"40\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Số điện thoại\" type=\"tel\" name=\"your-tel\" required=\"required\"" + _vm._ssrAttr("value", _vm.phone) + " class=\"wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel re-input\"></span></div> "), _vm._ssrNode("<div class=\"f-item f-item-2 f-item-select\">", "</div>", [_vm._ssrNode("<span class=\"wpcf7-form-control-wrap your-system\">", "</span>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.base,
      expression: "base"
    }],
    staticClass: "wpcf7-form-control wpcf7-system wpcf7-validates-as-required",
    attrs: {
      "aria-required": "true",
      "aria-invalid": "false",
      "name": "your-system"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.base = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("Quan tâm đến cơ sở nào")]), _vm._v(" "), _vm._l(_vm.bases, function (item) {
    return _c('option', {
      key: item.id,
      attrs: {
        "data-system_id": item.id
      },
      domProps: {
        "value": item.name
      }
    }, [_vm._v("\n                        " + _vm._s(item.name) + "\n                      ")]);
  })], 2)])])], 2)]), _vm._ssrNode(" <span data-name=\"recaptcha\" class=\"wpcf7-form-control-wrap recaptcha\"><span data-sitekey=\"6LfBfngkAAAAAOtn9TaUClF4gN11Pvu9nWC0MnDV\" class=\"wpcf7-form-control g-recaptcha wpcf7-recaptcha\"></span></span> <div class=\"f-gr grp-btn-mona\"><button class=\"btn m-mid\"><p class=\"text\">Đăng ký ngay</p></button></div>")], 2), _vm._ssrNode(" <div aria-hidden=\"true\" class=\"wpcf7-response-output\"></div>")], 2)], 2)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactCourse.vue?vue&type=template&id=3dc6f042&

// EXTERNAL MODULE: ./api/data.json
var api_data = __webpack_require__(98);

// EXTERNAL MODULE: external "ant-design-vue"
var external_ant_design_vue_ = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactCourse.vue?vue&type=script&lang=js&


/* harmony default export */ var ContactCoursevue_type_script_lang_js_ = ({
  data() {
    return {
      bases: api_data.base,
      base: "",
      email: "",
      phone: "",
      name: "",
      course: "",
      courses: api_data.course,
      description: "",
      loading: false
    };
  },
  methods: {
    async sendContact(e) {
      e.preventDefault();
      let validate = this.validateField();
      if (!validate.success) {
        external_ant_design_vue_["message"].error(validate.message);
        return;
      }
      if (this.loading) return;
      let data = {
        base: this.base,
        email: this.email,
        phone: this.phone,
        name: this.name,
        course: this.getCourse()
        // description: this.description,
      };

      this.loading = true;
      await this.$axios.post(this.$config.baseURL + "/contact/create", data).then(response => {
        external_ant_design_vue_["message"].success("Yêu cầu đăng ký đã được gửi đi!");
      }).catch(error => {
        external_ant_design_vue_["message"].error("Gửi yêu cầu thất bại!");
        console.error(error);
      });
      this.loading = false;
    },
    getCourse() {
      let path = window.location.pathname.replace(/\//g, "");
      let routes = {
        "lop-hanh-trang-vao-lop-1": "Lớp hành trang vào lớp 1",
        "co-ban": "Lớp cơ bản",
        "chuyen-sau": "Lớp chuyên sâu",
        "luyen-thi-quoc-te": "Lớp luyện thi quốc tế"
      };
      return routes[path] || "";
    },
    validateField() {
      if (!this.name || !this.name.trim()) {
        return {
          success: false,
          message: "Tên không được bỏ trống"
        };
      }
      if (!this.email || !this.email.trim()) {
        return {
          success: false,
          message: "Email không được bỏ trống"
        };
      }
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regexEmail.test(this.email)) {
        return {
          success: false,
          message: "Email chưa đúng định dạng"
        };
      }
      if (!this.phone || !this.phone.trim()) {
        return {
          success: false,
          message: "Số điện thoại không được bỏ trống"
        };
      }
      const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      if (!regexPhoneNumber.test(this.phone)) {
        return {
          success: false,
          message: "Số điện thoại chưa đúng định dạng"
        };
      }
      if (!this.base) {
        return {
          success: false,
          message: "Chưa chọn cơ sở"
        };
      }
      return {
        success: true
      };
    }
  },
  mounted() {
    console.log("data", api_data.base);
  }
});
// CONCATENATED MODULE: ./components/ContactCourse.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactCoursevue_type_script_lang_js_ = (ContactCoursevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/ContactCourse.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactCoursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "289be597"
  
)

/* harmony default export */ var ContactCourse = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module) {

module.exports = JSON.parse("{\"base\":[{\"id\":1,\"name\":\"Cơ sở Vinh\"}],\"course\":[{\"id\":1,\"name\":\"Lớp hành trang vào lớp 1\"},{\"id\":2,\"name\":\"Lớp cơ bản\"},{\"id\":3,\"name\":\"Lớp tư duy chuyên sâu\"},{\"id\":4,\"name\":\"Lớp luyện thi quốc tế\"}]}");

/***/ })

};;
//# sourceMappingURL=contact-course.js.map