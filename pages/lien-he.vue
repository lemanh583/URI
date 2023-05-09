<template>
  <div>
    <main class="main">
      <div class="contact tabJS contact-ver2-mona">
        <section class="ss-contact-main">
          <div class="contact-main ss-pd">
            <div class="container">
              <div class="dsmall contact-main-list">
                <div class="dsmall-item contact-main-item">
                  <div class="wpcf7 no-js" id="wpcf7-f823-p36-o1" lang="vi" dir="ltr">
                    <div class="screen-reader-response">
                      <p role="status" aria-live="polite" aria-atomic="true"></p>
                      <ul></ul>
                    </div>
                    <form method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
                      <h2 class="t-title mb-32">LIÊN HỆ VỚI <span class="c-pri">URI</span></h2>
                      <div class="contact-form">
                        <div class="f-gr">
                          <div class="f-list">
                            <div class="f-item f-item-2">
                              <span class="wpcf7-form-control-wrap" data-name="your-name"
                                ><input
                                  size="40"
                                  class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required re-input"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Họ tên"
                                  value=""
                                  type="text"
                                  name="your-name"
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
                                  v-model="email"
                              /></span>
                            </div>
                          </div>
                        </div>
                        <div class="f-gr">
                          <div class="f-list">
                            <div class="f-item f-item-2">
                              <span class="wpcf7-form-control-wrap" data-name="your-tel"
                                ><input
                                  size="40"
                                  class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel re-input"
                                  aria-required="true"
                                  aria-invalid="false"
                                  placeholder="Số điện thoại"
                                  value=""
                                  type="tel"
                                  name="your-tel"
                                  v-model="phone"
                              /></span>
                            </div>
                            <div class="f-item f-item-2">
                              <span class="wpcf7-form-control-wrap your-system"
                                ><select class="wpcf7-form-control wpcf7-system wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="your-system" v-model="base">
                                  <option disabled value="" selected="selected">Quan tâm đến cơ sở nào</option>
                                  <option v-for="item in bases" :key="item.id" :value="item.name" :data-system_id="item.id">
                                    {{ item.name }}
                                  </option>
                                </select></span
                              >
                            </div>
                          </div>
                        </div>
                        <div class="f-gr">
                          <span class="wpcf7-form-control-wrap" data-name="your-message">
                            <textarea
                              v-model="description"
                              cols="40"
                              rows="10"
                              class="wpcf7-form-control wpcf7-textarea re-input area"
                              aria-invalid="false"
                              placeholder="URI có thể hỗ trợ gì cho gia đình?"
                              name="your-message"
                            ></textarea>
                          </span>
                        </div>

                        <div class="f-gr grp-btn-mona">
                          <button @click="sendContact" type="submit" class="btn">Gửi thông tin</button>
                        </div>
                      </div>
                      <div class="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                  </div>
                </div>
                <div class="dsmall-item contact-main-item">
                  <div class="contact-main-thumbnail">
                    <img
                      width="1176"
                      height="956"
                      src="/images/vinh-danh.jpg"
                      class="attachment-full size-full"
                      alt="Vinh danh URI"
                      data-lazy-sizes="(max-width: 1176px) 100vw, 1176px"
                      data-lazy-src="/images/vinh-danh.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="ss-location">
          <div class="location">
            <div class="container">
              <div class="location-head mb-32" data-aos="fade-down-cus">
                <div class="dsmall contact-main-list">
                  <div class="dsmall-item contact-main-item">
                    <h2 class="t-title black mb-16">Bản đồ</h2>
                  </div>
                  <div class="dsmall-item contact-main-item"></div>
                </div>
              </div>
            </div>
            <div class="dsmall contact-main-list">
              <div class="dsmall-item contact-main-item">
                <div class="location-main">
                  <div class="location-map tabPanel open">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.6864021813626!2d105.6867047153958!3d18.678063287317485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139cdd8ae2b93f5%3A0xce7980510b67a312!2zVG_DoW4gVMawIER1eSBVcmk!5e0!3m2!1svi!2s!4v1680184045254!5m2!1svi!2s"
                      width="310"
                      height="430"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div class="loader-wrapper" style="display: none">
                      <span class="loader"><span class="loader-inner"></span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dsmall-item contact-main-item">
                <div class="contact-content tabPanel-one active">
                  <h2 class="t-title mb-48 t-trans-normal">Trung tâm toán URI</h2>
                  <div class="contact-content-wrapper">
                    <div class="contact-content-fl">
                      <img width="25" height="24" src="/template/assets/images/icon-location.svg" class="icon" alt="" data-lazy-src="/template/assets/images/icon-location.svg" />
                      <div class="contact-content-content">
                        <p class="title">Địa chỉ</p>
                        <p class="des">Số 3, ngõ A2, đường Héc-man, Vinh, Vietnam</p>
                      </div>
                    </div>
                    <div class="contact-content-fl">
                      <img width="24" height="24" src="/template/assets/images/icon-mail-pri.svg" class="icon" alt="" data-lazy-src="/template/assets/images/icon-mail-pri.svg" />
                      <div class="contact-content-content">
                        <p class="title">Email</p>
                        <div class="contact-content-array">
                          <a href="mailto:urivietnam.edu@gmail.com" class="des contact-link"> urivietnam.edu@gmail.com </a>
                        </div>
                      </div>
                    </div>
                    <div class="contact-content-fl">
                      <img width="24" height="24" src="/template/assets/images/icon-phone.svg" class="icon" alt="" data-lazy-src="/template/assets/images/icon-phone.svg" />
                      <div class="contact-content-content">
                        <p class="title">Hotline</p>
                        <div class="contact-content-array">
                          <a href="tel:84886230888" class="des contact-link"> +84 88 623 08 88 </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script>
import data from "../api/data.json";
import { message } from "ant-design-vue";

export default {
  layout: "Main",
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
      loading: false,
    };
  },
  methods: {
    async sendContact(e) {
      e.preventDefault();
      let validate = this.validateField();
      if (!validate.success) {
        message.error(validate.message);
        return;
      }
      if (this.loading) return;
      let data = {
        base: this.base,
        email: this.email,
        phone: this.phone,
        name: this.name,
        // course: this.course,
        description: this.description,
      };
      this.loading = true;
      await this.$axios
        .post(this.$config.baseURL + "/contact/create", data)
        .then((response) => {
          message.success("Yêu cầu đăng ký đã được gửi đi!");
          this.base = "";
          this.email = "";
          this.phone = "";
          this.name = "";
          this.course = "";
          this.description = "";
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
      if (!this.name || !this.name.trim()) {
        return { success: false, message: "Tên không được bỏ trống" };
      }
      if (!this.email || !this.email.trim()) {
        return { success: false, message: "Email không được bỏ trống" };
      }
      const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regexEmail.test(this.email)) {
        return { success: false, message: "Email chưa đúng định dạng" };
      }
      if (!this.phone || !this.phone.trim()) {
        return { success: false, message: "Số điện thoại không được bỏ trống" };
      }
      const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      if (!regexPhoneNumber.test(this.phone)) {
        return { success: false, message: "Số điện thoại chưa đúng định dạng" };
      }
      if (!this.base) {
        return { success: false, message: "Chưa chọn cơ sở" };
      }
      // if (!this.course) {
      //   return { success: false, message: "Chưa chọn khoá học" };
      // }
      return { success: true };
    },
  },
};
</script>

<style scoped>
.location-map iframe {
  width: 85%;
  height: 85%;
  margin-left: 50px;
}

@media only screen and (max-width: 1200px) {
  .location-map iframe {
    margin-left: 0px;
    width: 100%;
    height: 100%;
  }
}
</style>
