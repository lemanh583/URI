<template>
  <div>
    <main class="main">
      <div class="program">
        <section class="banner">
          <div class="banner-slider">
            <div class="swiper loop-none">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="banner-wrap right">
                    <div class="banner-img">
                      <img
                        width="750"
                        height="563"
                        src="/images/post1/1.jpg"
                        class="img wp-post-image"
                        alt=""
                        data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0.jpg 750w, https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0-300x225.jpg 300w, https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0-746x560.jpg 746w, https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0-50x38.jpg 50w, https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0-240x180.jpg 240w"
                        data-lazy-sizes="(max-width: 750px) 100vw, 750px"
                        data-lazy-src="https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0.jpg"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <div class="t-title-primary">
                            <a
                              href="https://ischool.vn/chi-tiet-su-kien/livestream-chuong-trinh-qua-tang-giang-sinh-2022/"
                              class="banner-title banner-title-second small"
                            >
                              CHIẾN BINH URI KẾT THÚC CHẶNG ĐUA CHUNG KẾT QUỐC TẾ TIMO 2023 VỚI KẾT QUẢ ẤN TƯỢNG
                            </a>
                          </div>
                          <!-- <div class="banner-time">
                            <div class="banner-time-list">
                              <div class="banner-time-item">
                                <img
                                  width="25"
                                  height="24"
                                  src="https://ischool.vn/template/assets/images/icon-callenda.svg"
                                  alt=""
                                  class="icon"
                                  data-lazy-src="https://ischool.vn/template/assets/images/icon-callenda.svg"
                                /><noscript
                                  ><img width="25" height="24" src="https://ischool.vn/template/assets/images/icon-callenda.svg" alt="" class="icon"
                                /></noscript>
                                <p class="text">17/12/2022</p>
                              </div>

                              <div class="banner-time-item">
                                <img
                                  width="25"
                                  height="24"
                                  src="https://ischool.vn/template/assets/images/icon-time.svg"
                                  alt=""
                                  class="icon"
                                  data-lazy-src="https://ischool.vn/template/assets/images/icon-time.svg"
                                />
                                <p class="text">18:30</p>
                              </div>

                              <div class="banner-time-item">
                                <img
                                  width="25"
                                  height="24"
                                  src="https://ischool.vn/template/assets/images/icon-location.svg"
                                  alt=""
                                  class="icon"
                                  data-lazy-src="https://ischool.vn/template/assets/images/icon-location.svg"
                                />
                                <p class="text">Fanpage Tập Đoàn Nguyễn Hoàng</p>
                              </div>
                            </div>
                          </div> -->
                          <div class="banner-des">
                            Với tinh thần quyết tâm cao và sau những cố gắng rèn luyện, các chiến binh URI đã kết thúc hành trình chinh phục cuộc thi
                            CHUNG KẾT QUỐC TẾ TIMO 2023 với kết quả ấn tượng
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

        <section class="ss-gv">
          <div class="gv">
            <div class="container">
              <div class="gv-wrapper ss-pd">
                <h2 class="t-title t-center mb-32">SỰ KIỆN NỔI BẬT</h2>

                <div class="gv-slider">
                  <div class="swiper loop">
                    <div class="swiper-wrapper">
                      <div v-for="i in list" :key="i.link" class="swiper-slide">
                        <div class="pro-wrap gv-wrap">
                          <a :href="i.link" class="pro-img">
                            <img
                              width="274"
                              height="180"
                              :src="i.img"
                              class="img wp-post-image"
                              alt=""
                              data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-274x180.jpg 274w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-300x197.jpg 300w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600.jpg 522w"
                              data-lazy-sizes="(max-width: 274px) 100vw, 274px"
                              data-lazy-src="https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-274x180.jpg"
                            />
                          </a>
                          <div class="pro-content t-center">
                            <h3 class="pro-name second">
                              <a :href="i.link"> {{ i.title }} </a>
                            </h3>
                            <div class="pro-level">
                              <!-- <div class="pro-level-item">17/12/2022</div> -->
                            </div>
                            <div class="pro-des">{{ i.des }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="gv-slider-btn swiper-prev">
                    <i class="ti-angle-left"></i>
                  </div>
                  <div class="gv-slider-btn swiper-next">
                    <i class="ti-angle-right"></i>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="ss-news">
          <div class="news-main ss-pd">
            <div class="container">
              <h2 class="t-title t-center mb-32">TẤT CẢ SỰ KIỆN</h2>
              <div class="dsmall side">
                <div class="dsmall-item side-nine">
                  <div class="dsmall pro-list">
                    <div v-for="i in list" :key="i.link" class="dsmall-item pro-item pro-item-3" data-aos="fade" data-aos-delay="400">
                      <div class="pro-wrap">
                        <a :href="i.link" class="pro-img">
                          <img
                            width="207"
                            height="180"
                            :src="i.img"
                            class="img wp-post-image"
                            alt="Khen thưởng giáo viên tổ Tiếng Anh"
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-207x180.jpg 207w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-300x261.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-1024x891.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-768x668.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-1536x1337.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-643x560.jpg 643w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-50x44.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748.jpg 1920w"
                            data-lazy-sizes="(max-width: 207px) 100vw, 207px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-207x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a :href="i.link">{{ i.title }} </a>
                          </h3>
                          <div class="pro-des">
                            {{ i.des }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="page-numbers m-top">
                    <ul class="page-numbers">
                      <li><span aria-current="page" class="page-numbers current">1</span></li>
                      <!-- <li><a class="page-numbers" href="#">2</a></li>
                      <li><a class="page-numbers" href="#">3</a></li>
                      <li><a class="page-numbers" href="#">4</a></li>
                      <li><span class="page-numbers dots">&hellip;</span></li>
                      <li><a class="page-numbers" href="#">52</a></li>
                      <li><a class="page-numbers" href="#">53</a></li>
                      <li><a class="page-numbers" href="#">54</a></li>
                      <li>
                        <a class="next page-numbers" href="#"><i class="fas fa-chevron-right"></i></a>
                      </li> -->
                    </ul>
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
import SwiperModule from "../static/template/js/module/SwiperModule";
export default {
  layout: "Main",
  data() {
    return {
      list: [
        {
          title: "CHIẾN BINH URI KẾT THÚC CHẶNG ĐUA CHUNG KẾT QUỐC TẾ TIMO 2023 VỚI KẾT QUẢ ẤN TƯỢNG",
          des: "Với tinh thần quyết tâm cao và sau những cố gắng rèn luyện, các chiến binh URI đã kết thúc hành trình chinh phục cuộc thi CHUNG KẾT QUỐC TẾ TIMO 2023 với kết quả ấn tượng",
          link: "/chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te",
          img: "/images/post1/1.jpg",
        },
        {
          title: "DANH SÁCH CÁC “CHIẾN BINH NHÍ” URI LỌT VÀO VÒNG CHUNG KẾT CUỘC GIA KÌ THI TOÁN HỌC QUỐC TẾ HKIMO",
          des: "Kỳ thi Olympic Toán học quốc tế HKIMO (Hongkong International Mathematical Olympiad) là kỳ thi được tổ chức hàng năm nhằm mục đích tạo ra một sân chơi bổ ích dành cho tất cả học sinh yêu thích bộ môn Toán học",
          link: "/danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo",
          img: "/images/post2/1.jpg",
        },
        {
          title: "🎉🎉 'CƠN MƯA HUY CHƯƠNG' TẠI #VÒNG_CHUNG_KẾT_QUỐC_GIA KỲ THI TOÁN QUỐC TẾ BIG BAY BEI 2022",
          des: "Trải qua vòng Chung kết Quốc gia,10 Chiến binh nhí nhà URI đã vượt qua hàng nghìn thí sinh xuất sắc khác, tự tin bản lĩnh giành chiến thắng tại Vòng Chung Kết Quốc Gia kỳ thi Toán Quốc Tế Big Bay Bei, mang về các thành tích đáng tự hào",
          link: "#",
          img: "/images/post1/1.jpg",
        },
      ],
    };
  },
  mounted() {
    SwiperModule();
  },
};
</script>

<style scoped>
.side-nine {
  width: calc(100% * (12 / 12));
}
</style>
