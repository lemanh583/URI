<template>
  <div>
    <main class="main">
      <div class="recruit">
        <section class="recruit-main">
          <section class="banner mona-banner">
            <div class="banner-slider">
              <div class="swiper loop-none">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="banner-wrap left">
                      <div class="banner-img">
                        <img
                          width="1920"
                          height="1280"
                          src="/images/new-image/3.jpg"
                          class="attachment-full size-full"
                          alt="banner URI"
                          data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                          data-lazy-src="/images/new-image/3.jpg"
                        />
                      </div>
                      <div class="banner-posi">
                        <div class="container">
                          <div class="banner-content">
                            <h2 class="banner-title">
                              ĐĂNG KÝ<br />
                              NHẬP HỌC<br />
                            </h2>
                            <div class="banner-des">
                              <p style="text-align: justify">Hướng dẫn hoàn thiện hồ sơ nhập học sẽ kéo dài từ thứ 2 đến thứ 7 hằng tuần.</p>
                            </div>

                            <div class="banner-btn">
                              <a href="#register" class="btn">
                                <p class="text">Nhận ngay tư vấn</p>
                                <i class="ti-angle-right icon-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="banner-control swiper-control">
                <div class="swiper-prev">
                  <i class="ti-angle-left"></i>
                </div>
                <div class="swiper-next">
                  <i class="ti-angle-right"></i>
                </div>
              </div>
            </div>
          </section>

          <!-- <div class="menu-static">
            <div class="menu-page">
              <div class="container">

                <ul id="menu-theme-admissions-menu" class="menu-list">
                  <li id="menu-item-494"
                    class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-429 current_page_item menu-item-494">
                    <a href="/dang-ky-nhap-hoc/" aria-current="page">Đăng ký<br>tuyển
                      sinh</a>
                  </li>
                 
                  <li id="menu-item-729" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-729"><a
                      href="/cau-hoi-thuong-gap/">Câu hỏi<br>thường gặp</a></li>
                </ul>
              </div>
            </div>
          </div> -->

          <section class="recruit-main-introduction ss-pd-t">
            <div class="recruit-head">
              <div class="container">
                <h2 class="t-title mb-32 black" data-aos="fade-down-cus">CHI TIẾT VỀ CÁCH ĐĂNG KÝ TUYỂN SINH</h2>

                <div class="dsmall recruit-head-list mona-content" data-aos="fade-up-cus">
                  <p style="text-align: justify">
                    Xin hân hoan chào đón các em Học sinh gia nhập mái nhà chung URI. Quý Phụ huynh và Học sinh sẽ luôn nhận được sự hỗ trợ của Ban tuyển sinh nhà trường để hoàn thành thủ tục nhập học
                    bao gồm 3 bước:
                  </p>
                  <ol>
                    <li>Đăng ký dự tuyển</li>
                    <li>Kiểm tra năng lực đầu vào</li>
                    <li>Hoàn tất hồ sơ nhập học</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <div data-bg="" id="register" class="dki ss-pd rocket-lazyload" style="">
            <div class="container">
              <div class="dki-width">
                <div class="wpcf7 no-js" id="wpcf7-f335-p429-o1" lang="vi" dir="ltr">
                  <div class="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                    <ul></ul>
                  </div>
                  <form action="/dang-ky-nhap-hoc/" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
                    <div style="display: none">
                      <input type="hidden" name="_wpcf7" value="335" />
                      <input type="hidden" name="_wpcf7_version" value="5.7.3" />
                      <input type="hidden" name="_wpcf7_locale" value="vi" />
                      <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f335-p429-o1" />
                      <input type="hidden" name="_wpcf7_container_post" value="429" />
                      <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                      <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
                    </div>
                    <span class="wpcf7-form-control-wrap your-source"
                      ><input size="40" class="wpcf7-form-control wpcf7dtx-dynamictext wpcf7-dynamichidden" aria-invalid="false" value="Đăng ký nhập học" type="hidden" name="your-source"
                    /></span>
                    <div class="head dki-head t-center mb-56">
                      <h2 class="t-title white mb-24" data-aos="flip-right">Đăng ký tư vấn</h2>
                      <p class="text c-white" data-aos="fade-up-cus">Để nhận được hỗ trợ chi tiết nhất, Quý Phụ huynh vui lòng để lại thông tin bên dưới</p>
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
                                placeholder="Họ tên"
                                value=""
                                type="text"
                                name="your-name"
                                v-model="name"
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
                                value=""
                                type="tel"
                                name="your-tel"
                                v-model="phone"
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

                          <div class="f-item f-item-2 f-item-select">
                            <span class="wpcf7-form-control-wrap your-system"
                              ><select v-model="base" class="wpcf7-form-control wpcf7-system wpcf7-validates-as-required" aria-required="true" aria-invalid="false" name="your-system">
                                <option disabled value="" selected="selected">Quan tâm đến cơ sở nào</option>
                                <option v-for="item in bases" :key="item.id" :value="item.name" :data-system_id="item.id">
                                  {{ item.name }}
                                </option>
                              </select></span
                            >
                          </div>
                          <div class="f-item f-item-2 f-item-select">
                            <select
                              v-model="course"
                              class="wpcf7-form-control wpcf7-categories_system wpcf7-validates-as-required"
                              aria-required="true"
                              aria-invalid="false"
                              name="your-categories-system"
                            >
                              <option disabled value="" selected="selected">Chương trình học quan tâm</option>
                              <option v-for="item in courses" :key="item.id" :value="item.name" :data-system_id="item.id">
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
                          <div class="f-item f-item-2">
                            <span class="wpcf7-form-control-wrap" data-name="your-message">
                              <textarea
                                v-model="description"
                                cols="40"
                                rows="10"
                                class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required re-input"
                                aria-required="true"
                                aria-invalid="false"
                                placeholder="Câu hỏi cho URI"
                                name="your-message"
                              ></textarea>
                            </span>
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
                      </div>
                    </div>
                    <div class="wpcf7-response-output" aria-hidden="true"></div>
                  </form>
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
        course: this.course,
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
      if (!this.course) {
        return { success: false, message: "Chưa chọn khoá học" };
      }
      return { success: true };
    },
  },
};
</script>
