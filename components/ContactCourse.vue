<template>
  <div data-bg="/images/new-image/18.jpg" style="background-image: url('/images/new-image/18.jpg')" id="register" class="dki ss-pd rocket-lazyload">
    <div class="container">
      <div class="dki-width">
        <div class="wpcf7 no-js" id="wpcf7-f5-p208-o1" lang="vi" dir="ltr">
          <div class="screen-reader-response">
            <p role="status" aria-live="polite" aria-atomic="true"></p>
            <ul></ul>
          </div>
          <form action="#" method="post" class="wpcf7-form init" aria-label="Contact form" data-status="init">
            <!-- <div style="display: none">
              <input type="hidden" name="_wpcf7" value="5" />
              <input type="hidden" name="_wpcf7_version" value="5.7.3" />
              <input type="hidden" name="_wpcf7_locale" value="vi" />
              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f5-p208-o1" />
              <input type="hidden" name="_wpcf7_container_post" value="208" />
              <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
              <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
            </div> -->
            <div class="head dki-head t-center mb-56">
              <h2 class="t-title white mb-24" data-aos="flip-right">Đăng ký tư vấn</h2>
            </div>
            <div class="dki-form" data-aos="fade-up-cus">
              <div class="f-gr mb-24">
                <div class="f-list">
                  <div class="f-item f-item-2">
                    <span class="wpcf7-form-control-wrap" data-name="your-name"
                      ><input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required re-input"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Họ Tên"
                        type="text"
                        name="your-name"
                        required
                        v-model="name"
                    /></span>
                  </div>
                  <div class="f-item f-item-2">
                    <span class="wpcf7-form-control-wrap" data-name="your-email"
                      ><input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email re-input"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Email"
                        value=""
                        type="email"
                        name="your-email"
                        required
                        v-model="email"
                    /></span>
                  </div>
                  <div class="f-item f-item-2">
                    <span class="wpcf7-form-control-wrap" data-name="your-tel"
                      ><input
                        size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel re-input"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Số điện thoại"
                        type="tel"
                        name="your-tel"
                        required
                        v-model="phone"
                    /></span>
                  </div>

                  <div class="f-item f-item-2 f-item-select">
                    <span class="wpcf7-form-control-wrap your-system"
                      ><select
                        class="wpcf7-form-control wpcf7-system wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        name="your-system"
                        v-model="base"
                      >
                        <option disabled>Quan tâm đến cơ sở nào</option>
                        <option v-for="item in bases" :key="item.id" :value="item.name" :data-system_id="item.id">
                          {{ item.name }}
                        </option>
                      </select></span
                    >
                  </div>
                </div>
              </div>
              <span class="wpcf7-form-control-wrap recaptcha" data-name="recaptcha"
                ><span data-sitekey="6LfBfngkAAAAAOtn9TaUClF4gN11Pvu9nWC0MnDV" class="wpcf7-form-control g-recaptcha wpcf7-recaptcha"></span>
              </span>
              <div class="f-gr grp-btn-mona">
                <button @click="sendContact" class="btn m-mid">
                  <p class="text">Đăng ký ngay</p>
                </button>
                <!-- <input class="wpcf7-form-control has-spinner wpcf7-submit btn-hidden-submit" type="submit" value="Send" /> -->
              </div>
            </div>
            <div class="wpcf7-response-output" aria-hidden="true"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../api/data.json";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      bases: data.base,
      base: "",
      email: "",
      phone: "",
      name: "",
      course: "",
      courses: data.course,
      description: "",
      loading: false
    };
  },
  methods: {
    async sendContact(e) {
      e.preventDefault()
      let validate = this.validateField()
      if(!validate.success) {
        message.error(validate.message);
        return
      }
      if(this.loading) return
      let data = {
        base: this.base,
        email: this.email,
        phone: this.phone,
        name: this.name,
        course: this.getCourse(),
        // description: this.description,
      };
      this.loading = true
      await this.$axios
        .post(this.$config.baseURL + "/contact/create", data)
        .then((response) => {
          message.success("Yêu cầu đăng ký đã được gửi đi!");
        })
        .catch((error) => {
          message.error("Gửi yêu cầu thất bại!");
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
        "luyen-thi-quoc-te": "Lớp luyện thi quốc tế",
      };
      return routes[path] || "";
    },
    validateField() {
      if(!this.name || !this.name.trim()) {
        return { success: false, message: "Tên không được bỏ trống" }
      }
      if(!this.email || !this.email.trim()) {
        return { success: false, message: "Email không được bỏ trống" }
      }
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      if(!regexEmail.test(this.email)) {
        return { success: false, message: "Email chưa đúng định dạng" }
      }
      if(!this.phone || !this.phone.trim()) {
        return { success: false, message: "Số điện thoại không được bỏ trống" }
      }
      const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      if(!regexPhoneNumber.test(this.phone)) {
        return { success: false, message: "Số điện thoại chưa đúng định dạng" }
      }
      if(!this.base) {
        return { success: false, message: "Chưa chọn cơ sở" }
      }
      return { success: true }
    }
  },
  mounted() {
    console.log("data", data.base);
  },
};
</script>
