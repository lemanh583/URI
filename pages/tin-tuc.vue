<template>
  <div>
    <main class="main">
      <div class="news">
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

        <section class="ss-news">
          <div class="news-main ss-pd">
            <div class="container">
              <h2 class="t-title mb-32" data-aos="fade-down-cus">Tin tức URI</h2>
              <div class="dsmall side">
                <div class="dsmall-item side-nine">
                  <div class="dsmall pro-list">
                    <div v-for="item in list" :key="item.link" class="dsmall-item pro-item pro-item-3" data-aos="fade" data-aos-delay="400">
                      <div class="pro-wrap">
                        <a :href="item.link" class="pro-img">
                          <img
                            width="207"
                            height="180"
                            :src="item.img"
                            class="img wp-post-image"
                            alt="Khen thưởng giáo viên tổ Tiếng Anh"
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-207x180.jpg 207w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-300x261.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-1024x891.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-768x668.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-1536x1337.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-643x560.jpg 643w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-50x44.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748.jpg 1920w"
                            data-lazy-sizes="(max-width: 207px) 100vw, 207px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-207x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a :href="item.link"> {{ item.title }} </a>
                          </h3>
                          <div class="pro-des">
                            {{ item.des }}
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
                <div class="dsmall-item side-three">
                  <div class="sidebar none-news" data-aos="fade-up-cus">
                    <div class="side-fixed">
                      <div class="side-fixed-wrap">
                        <div id="m_category_list-3" class="widget blog-sidebar widget_m_category_list">
                          <div class="sidebar-block">
                            <div class="sidebar-head">
                              <img
                                width="15"
                                height="15"
                                src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2015%2015'%3E%3C/svg%3E"
                                alt=""
                                class="icon"
                                data-lazy-src="https://ischool.vn/template/assets/images/icon-dm.svg"
                              />
                              <p class="sidebar-title">Danh mục</p>
                            </div>
                            <div class="sidebar-body">
                              <div class="sidebar-menu">
                                <div class="sidebar-menu-list">
                                  <!-- <a v-for="i in 10" :key="i" href="#" class="sidebar-menu-link">
                                    <i class="fal fa-long-arrow-right"></i>
                                    <p class="text">Danh mục + {{ i }}</p>
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
                        <img
                          width="15"
                          height="15"
                          src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2015%2015'%3E%3C/svg%3E"
                          class="icon"
                          alt=""
                          data-lazy-src="https://ischool.vn/template/assets/images/icon-dm.svg"
                        />
                      </div>
                    </div>
                    <div class="side-overlay"></div>

                    <div class="sidebar-block">
                      <div class="sidebar-head">
                        <img
                          width="15"
                          height="15"
                          src="https://ischool.vn/template/assets/images/icon-dm.svg"
                          alt=""
                          class="icon"
                          data-lazy-src="https://ischool.vn/template/assets/images/icon-dm.svg"
                        />
                        <p class="sidebar-title">Bài viết nổi bật</p>
                      </div>
                      <div class="sidebar-body">
                        <div class="dsmall news-list">
                          <div v-for="(item, i) in list" :key="i" class="dsmall-item news-item">
                            <div class="news-wrap">
                              <a href="#" class="news-img">
                                <img
                                  width="800"
                                  height="500"
                                  :src="item.img"
                                  class="attachment-full size-full wp-post-image"
                                  alt="cập nhật lịch nghỉ Tết Nguyên đán 2023 của học sinh"
                                  data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg 800w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-300x188.jpeg 300w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-768x480.jpeg 768w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-50x31.jpeg 50w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-280x175.jpeg 280w"
                                  data-lazy-sizes="(max-width: 800px) 100vw, 800px"
                                  data-lazy-src="https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg"
                                />
                              </a>
                              <div class="news-content">
                                <a :href="item.link" class="news-name">
                                  {{ item.title }}
                                </a>
                              </div>
                            </div>
                          </div>
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
export default {
  layout: "Main",
  data(){
    return {
      list: [
        {
          title: "CHIẾN BINH URI KẾT THÚC CHẶNG ĐUA CHUNG KẾT QUỐC TẾ TIMO 2023 VỚI KẾT QUẢ ẤN TƯỢNG",
          des: "Với tinh thần quyết tâm cao và sau những cố gắng rèn luyện, các chiến binh URI đã kết thúc hành trình chinh phục cuộc thi CHUNG KẾT QUỐC TẾ TIMO 2023 với kết quả ấn tượng",
          link: "/chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te",
          img: "/images/post1/1.jpg"
        },
        {
          title: "CÓ GÌ KHÁC BIỆT TRONG CHƯƠNG TRÌNH 'HÀNH TRANG VÀO LỚP 1' CỦA URI",
          des: "Chương trình chuẩn bị hành trang cho con vào lớp 1 tại URI mang tới cơ hội học hỏi kiến thức và thực hành kỹ năng cho trẻ mầm non để sẵn sàng chinh phục bậc tiểu học",
          link: "/co-gi-khac-biet-trong-chuong-trinh-hanh-trang-vao-lop-1",
          img: "/images/tt1.jpg"
        },
        {
          title: "DANH SÁCH CÁC “CHIẾN BINH NHÍ” URI LỌT VÀO VÒNG CHUNG KẾT CUỘC GIA KÌ THI TOÁN HỌC QUỐC TẾ HKIMO",
          des: "Kỳ thi Olympic Toán học quốc tế HKIMO (Hongkong International Mathematical Olympiad) là kỳ thi được tổ chức hàng năm nhằm mục đích tạo ra một sân chơi bổ ích dành cho tất cả học sinh yêu thích bộ môn Toán học",
          link: "/danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo",
          img: "/images/post2/1.jpg"
        },
      ]
    }
  }
};
</script>
