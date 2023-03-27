<template>
  <div>
    <main class="main">
      <div class="news">

        <section class="ss-news">
          <div class="news-main ss-pd">
            <div class="container">
              <h2 class="t-title mb-32" data-aos="fade-down-cus">
                Cảm nhận và Niềm tin </h2>
              <div class="dsmall side">
                <div class="dsmall-item side-nine">

                  <div class="dsmall pro-list">

                    <div v-for="item in reviews" :key="i" class="dsmall-item pro-item pro-item-3" data-aos="fade" data-aos-delay="200">
                      <div class="pro-wrap">
                        <a href="#" class="pro-img">
                          <img width="204" height="180"
                            :src="item.img"
                            class="img wp-post-image" alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/03/yu-204x180.jpg 204w, https://ischool.vn/wp-content/uploads/2023/03/yu-300x265.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/yu-1024x905.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/yu-768x678.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/yu-1536x1357.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/yu-634x560.jpg 634w, https://ischool.vn/wp-content/uploads/2023/03/yu-50x44.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/yu.jpg 1920w"
                            data-lazy-sizes="(max-width: 204px) 100vw, 204px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/03/yu-204x180.jpg" /><noscript><img
                              width="204" height="180" src="https://ischool.vn/wp-content/uploads/2023/03/yu-204x180.jpg"
                              class="img wp-post-image" alt="" loading="lazy"
                              srcset="https://ischool.vn/wp-content/uploads/2023/03/yu-204x180.jpg 204w, https://ischool.vn/wp-content/uploads/2023/03/yu-300x265.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/yu-1024x905.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/yu-768x678.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/yu-1536x1357.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/yu-634x560.jpg 634w, https://ischool.vn/wp-content/uploads/2023/03/yu-50x44.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/yu.jpg 1920w"
                              sizes="(max-width: 204px) 100vw, 204px" /></noscript> </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a href="#">
                             {{ item.title }} </a>
                          </h3>
                          <div class="pro-des">
                           {{ item.description }} 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="page-numbers m-top">
                    <ul class='page-numbers'>
                      <li><span aria-current="page" class="page-numbers current">1</span></li>
                      <li><a class="page-numbers" href="#">2</a></li>
                      <li><a class="page-numbers" href="#">3</a></li>
                      <li><a class="page-numbers" href="#">4</a></li>
                      <li><a class="next page-numbers" href=""><i
                            class="fas fa-chevron-right"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="dsmall-item side-three">
                  <div class="sidebar" data-aos="fade-up-cus">
                    <div class="side-fixed">
                      <div class="side-fixed-wrap">
                        <div id="m_category_list-2" class="widget news-sidebar widget_m_category_list">
                          <div class="sidebar-block">
                            <div class="sidebar-head">
                              <img width="15" height="15"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2015%2015'%3E%3C/svg%3E"
                                alt="" class="icon"
                                data-lazy-src="https://ischool.vn/template/assets/images/icon-dm.svg"><noscript><img
                                  width="15" height="15" src="https://ischool.vn/template/assets/images/icon-dm.svg"
                                  alt="" class="icon"></noscript>
                              <p class="sidebar-title">
                                Danh mục </p>
                            </div>
                            <div class="sidebar-body">
                              <div class="sidebar-menu">
                                <div class="sidebar-menu-list">

                                  <!-- <a href="https://ischool.vn/tin-tuc/tin-tuc-cac-truong/tin-tuc-ischool/ischool-viet-nam/"
                                    class="sidebar-menu-link ">
                                    <i class="fal fa-long-arrow-right"></i>
                                    <p class="text">
                                      iSchool Việt Nam </p>
                                  </a> -->

                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div class="side-close">
                        <i class="fas fa-times close icon"></i>
                      </div>
                    </div>
                    <div class="side-open">
                      <div class="side-open-wrap">
                        <img width="15" height="15"
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2015%2015'%3E%3C/svg%3E"
                          class="icon" alt=""
                          data-lazy-src="https://ischool.vn/template/assets/images/icon-dm.svg"><noscript><img width="15"
                            height="15" src="https://ischool.vn/template/assets/images/icon-dm.svg" class="icon"
                            alt=""></noscript>
                      </div>
                    </div>
                    <div class="side-overlay"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <div class="popup brochure" id="brochure">
      <div class="popup-overlay">
      </div>
      <div class="popup-main">
        <div class="popup-over">
          <div class="popup-wrapper">

            <div class="wpcf7 no-js" id="wpcf7-f2757-o1" lang="vi" dir="ltr">
              <div class="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
              <form action="/cam-nhan-va-niem-tin/#wpcf7-f2757-o1" method="post" class="wpcf7-form init"
                aria-label="Contact form" novalidate="novalidate" data-status="init">
                <div style="display: none;">
                  <input type="hidden" name="_wpcf7" value="2757" />
                  <input type="hidden" name="_wpcf7_version" value="5.7.3" />
                  <input type="hidden" name="_wpcf7_locale" value="vi" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f2757-o1" />
                  <input type="hidden" name="_wpcf7_container_post" value="0" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                  <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
                </div>
                <span class="wpcf7-form-control-wrap your-source"><input size="40"
                    class="wpcf7-form-control wpcf7dtx-dynamictext wpcf7-dynamichidden" aria-invalid="false"
                    value="CÂU LẠC BỘ TIẾNG ANH - ESC TẠI iSCHOOL TRÀ VINH" type="hidden" name="your-source" /></span>
                <input class="wpcf7-form-control wpcf7-hidden" value="" type="hidden" name="your-file" />
                <h2 class="t-title mb-32">
                  LIÊN HỆ VỚI <span class="c-pri">URI</span>
                </h2>
                <div class="contact-form">
                  <div class="f-gr">
                    <div class="f-list">
                      <div class="f-item f-item-2">
                        <span class="wpcf7-form-control-wrap" data-name="your-name"><input size="40"
                            class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required re-input"
                            aria-required="true" aria-invalid="false" placeholder="HỌ TÊN" value="" type="text"
                            name="your-name" /></span>
                        <span id="last-name-id" class="wpcf7-form-control-wrap last-name-wrap"><label for="last-name"
                            class="hp-message">Please leave this field empty.</label><input id="last-name"
                            class="wpcf7-form-control wpcf7-text last-name" type="text" name="last-name" value=""
                            size="40" tabindex="-1" autocomplete="new-password" /></span>
                      </div>
                      <div class="f-item f-item-2">
                        <span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40"
                            class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email re-input"
                            aria-required="true" aria-invalid="false" placeholder="EMAIL" value="" type="email"
                            name="your-email" /></span>
                      </div>
                    </div>
                  </div>
                  <div class="f-gr">
                    <span class="wpcf7-form-control-wrap" data-name="your-tel"><input size="40"
                        class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel re-input"
                        aria-required="true" aria-invalid="false" placeholder="SỐ ĐIỆN THOẠI" value="" type="tel"
                        name="your-tel" /></span>
                  </div>
                  <div class="f-gr">
                    <span class="wpcf7-form-control-wrap" data-name="your-message"><textarea cols="40" rows="10"
                        class="wpcf7-form-control wpcf7-textarea re-input area" aria-invalid="false"
                        placeholder="iSchool CÓ THỂ HỖ TRỢ GÌ CHO GIA ĐÌNH?" name="your-message"></textarea></span>
                  </div>
                  <span class="wpcf7-form-control-wrap recaptcha" data-name="recaptcha"><span
                      data-sitekey="6LfBfngkAAAAAOtn9TaUClF4gN11Pvu9nWC0MnDV"
                      class="wpcf7-form-control g-recaptcha wpcf7-recaptcha"></span>
                    <noscript>
                      <div class="grecaptcha-noscript">
                        <iframe
                          src="https://www.google.com/recaptcha/api/fallback?k=6LfBfngkAAAAAOtn9TaUClF4gN11Pvu9nWC0MnDV"
                          frameborder="0" scrolling="no" width="310" height="430">
                        </iframe>
                        <textarea name="g-recaptcha-response" rows="3" cols="40" placeholder="reCaptcha Response Here">
        		</textarea>
                      </div>
                    </noscript>
                  </span>
                  <div class="f-gr grp-btn-mona">
                    <button type="submit" class="btn btn-line">
                      Đăng ký ngay
                    </button>
                    <input class="wpcf7-form-control has-spinner wpcf7-submit btn-hidden-submit" type="submit"
                      value="Send" />
                  </div>
                </div>
                <div class="wpcf7-response-output" aria-hidden="true"></div>
              </form>
            </div>
          </div>
        </div>
        <div class="popup-close">
          <i class="fas fa-times icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Main',
  data() {
    return {
      reviews: [
        {
          img: "/images/rv-1.jpg",
          title: "MẸ hiên - mẹ con ngọc lâm",
          description: "Từ khi học URI mẹ thấy con rất hào hứng về môn học, có sự tiến bộ rệt, mẹ sẽ gửi gắm 2 con theo học lâu dài"
        },
        {
          img: "/images/rv-2.jpg",
          title: "MẸ bình - mẹ con Gia Hưng - Phương Thảo",
          description: "Hai con rất thích đi học ở URI, thích học toán. Các con theo học cũng đã lâu, mẹ thấy con học tiếng bộ, URI cũng có nhiều hoạt động bổ ích cho các con."
        },
        {
          img: "/images/rv-3.jpg",
          title: "MẸ Minh - mẹ con Đức Toàn",
          description: "Con học URI cũng gần 1 năm rồi, mẹ thấy con học tiến bộ, con rất tự giác trong việc học và làm các bài tập cô ra"
        },
        {
          img: "/images/rv-4.jpg",
          title: "MẸ Thoa - mẹ con Nguyên Trung",
          description: "Nguyên Trung học tới nay cũng đã 2 năm tại URI rồi, con vẫn rất hào hứng và thích đi học URI như những ngày đầu, mẹ thấy con học tự giác và tiến bộ nhiều...."
        },
        {
          img: "/images/rv-5.jpg",
          title: "MẸ Phương - mẹ con Như Đạt",
          description: "Từ khi học URI mẹ thấy con tự giác, có ý thức học và cũng có tiến bộ hơn. Cháu rất thích đi học và về nhà tự giác làm bài tập."
        },
        {
          img: "/images/rv-6.jpg",
          title: "MẸ trang - mẹ con Đăng Sang - Trâm Anh",
          description: "Mẹ rất thích cho con đi học ở URI, bởi tại đây các con không chỉ được nuôi dưỡng tình yêu toán học, mà URI còn góp phần tạo nên những chàng trai, cô gái của mẹ..."
        },
        {
          img: "/images/rv-7.jpg",
          title: "MẸ Quỳnh Mây - mẹ con Hoàng Bách",
          description: "Quan điểm của mẹ là con thích học đâu mẹ sẽ cho con học đó, vì có thích con mới tự giác và có hứng thú trong việc học..."
        },
        {
          img: "/images/rv-8.jpg",
          title: "MẸ Nga - mẹ con Khánh Linh",
          description: "Mẹ thấy con rất thích đi học ở URI, ở nhà nghỉ Tết mẹ hướng dẫn nhưng con không hiểu, sau tết..."
        },
        {
          img: "/images/rv-3.jpg",
          title: "MẸ Minh - mẹ con Đức Toàn",
          description: "Con học URI cũng gần 1 năm rồi, mẹ thấy con học tiến bộ, con rất tự giác trong việc học và làm các bài tập cô ra"
        },
      ]
    }
  }
}
</script>