<template>
  <div>
    <main class="main">
      <div class="program">
        <section class="banner mona-banner">
          <div class="banner-slider">
            <div class="swiper loop-none">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="banner-wrap left">
                    <div class="banner-img">
                      <img
                        width="894"
                        height="500"
                        src="/images/new-image/15.jpg"
                        class="attachment-full size-full"
                        alt="CHƯƠNG TRÌNH GIÁO DỤC HÀNH TRANG VÀO LỚP 1"
                        data-lazy-sizes="(max-width: 894px) 100vw, 894px"
                        data-lazy-src="/images/new-image/15.jpg"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 class="banner-title">
                            CHƯƠNG TRÌNH GIÁO DỤC<br />
                            Hành Trang vào lớp 1
                          </h2>
                          <div class="banner-des">
                            <p>
                              URI áp dụng chương trình học của Bộ Giáo dục và Đào tạo Việt Nam theo hướng tối ưu hóa, giúp học sinh nắm vững kiến thức
                              căn bản và nâng cao của tất cả các môn học qua từng cấp lớp.
                            </p>
                          </div>

                          <!-- 
                            <div class="banner-btn">
                              <a href="https://ischool.vn/wp-content/uploads/2022/08/sample.pdf" class="btn"
                                target="_blank">
                                <p class="text">Tải Brochure</p>
                                <i class="ti-angle-right icon-right"></i>
                              </a>
                            </div> -->
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

        <section class="program-main">
          <MenuCourse :key-active="1" />

          <div class="prog">
            <div class="container">
              <div class="prog-list">
                <div class="prog-item full-item">
                  <div class="prog-row">
                    <div class="prog-col">
                      <div class="prog-img">
                        <div class="prog-img-pd">
                          <img
                            width="840"
                            height="560"
                            src="/images/new-image/2.jpg"
                            class="attachment-960x560 size-960x560"
                            alt="Ảnh cô trò URI"
                            data-lazy-sizes="(max-width: 840px) 100vw, 840px"
                            data-lazy-src="/images/new-image/2.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="prog-col">
                      <div class="prog-content">
                        <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">KHÁI QUÁT CHƯƠNG TRÌNH</h3>
                        <div class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                          Để chuẩn bị tốt nhất về mặt tâm lý cũng như kiến thức cho trẻ sẵn sàng vào môi trường mới không bị bỡ ngỡ và lạ lẫm, Chương
                          trình Hành trang vào lớp 1 giúp trẻ tiếp cận với các hình thức, phương pháp học tập trong nhà trường, là bước chuyển giao
                          nhẹ nhàng cho Trẻ từ mầm non lên tiểu học.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="prog-item full-item">
                  <div class="prog-row">
                    <div class="prog-col">
                      <div class="prog-img">
                        <div class="prog-img-pd">
                          <img
                            width="840"
                            height="560"
                            src="/images/new-image/3.jpg"
                            class="attachment-960x560 size-960x560"
                            alt="Ảnh cô trò URI"
                            data-lazy-sizes="(max-width: 840px) 100vw, 840px"
                            data-lazy-src="/images/new-image/3.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="prog-col">
                      <div class="prog-content">
                        <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">ĐẶC ĐIỂM CHƯƠNG TRÌNH</h3>
                        <div class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                          Những kỹ năng quan trọng giúp Trẻ bỏ túi thần kì để Trẻ tự tin vững vàng cắp sách tới trường, để mỗi ngày đi học là mỗi ngày
                          hữu ích <br />
                          <strong class="ds-title">Luyện viết chuẩn</strong>: Hướng dẫn tư thế ngồi, cách để vở, tay cầm bút đúng chuẩn; Trình bày,
                          luyện viết trên vở và bảng con. <br />
                          <strong class="ds-title">Đọc thông thạo</strong>: Dạy đọc thành thạo 29 chữ cái theo cách thực hành, phát âm đúng chuẩn SGK
                          mới. <br />
                          <strong class="ds-title">Ghép nhóm chữ</strong> : Biết đọc và ghép vần đơn giản. <br />
                          <strong class="ds-title">Học toán cơ bản</strong>: Nhân biết các số, cộng trừ trong phạm vi 10, nhận biết dấu lớn, dấu bé,
                          dấu bằng, so sánh các số trong phạm vi 10.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="prog-item full-item">
                  <div class="prog-row">
                    <div class="prog-col">
                      <div class="prog-img">
                        <div class="prog-img-pd">
                          <img
                            width="839"
                            height="560"
                            src="/images/co-ban-2.jpg"
                            class="attachment-960x560 size-960x560"
                            alt="Ảnh cô trò URI"
                            data-lazy-sizes="(max-width: 839px) 100vw, 839px"
                            data-lazy-src="/images/co-ban-2.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="prog-col">
                      <div class="prog-content">
                        <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">MÔI TRƯỜNG HỌC TẬP</h3>
                        <div class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                          <ul class="ul-custom">
                            <li>Chương trình Hành trang được thiết kế dựa trên nền tảng của Bộ Giáo dục và Đào tạo.</li>
                            <li>Quy mô lớp học tinh gọn chỉ từ 6-10 học viên /lớp đảm bảo sự tương tác cao giữa thầy cô và trò.</li>
                            <li>Cơ sở vật chất đạt chuẩn, phòng được trang bị đầy đủ điều hoà, bảng bút viết, các thiết bị hỗ trợ dạy học.</li>
                            <li>Giáo viên trẻ nhiệt huyết, hiểu tâm lý của trẻ và có nhiều năm kinh nghiệm trong việc dạy và học.</li>
                          </ul>
                          Kết thúc lớp học Trẻ sẽ rất háo hức - vui vẻ và mong đợi ngày được vào lớp 1!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <ContactCourse />

          <div class="lib ss-pd">
            <div class="container">
              <div class="head t-center mb-32">
                <h2 class="t-title" data-aos="fade-down-cus">HÌNH ẢNH HOẠT ĐỘNG</h2>
              </div>
              <div class="lib-list gallery" data-aos="fade-up-cus">
                <div class="lib-item lib-width-single">
                  <div class="lib-img gItem" data-src="/uploads/2022/08/gallery_3.png">
                    <img
                      width="384"
                      height="384"
                      src="/images/new-image/2.jpg"
                      class="attachment-full size-full"
                      alt="Ảnh hoạt động URI"
                      data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                      data-lazy-src="/images/new-image/2.jpg"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-single">
                  <div class="lib-img gItem" data-src="kk.jpg">
                    <img
                      width="384"
                      height="384"
                      src="/images/new-image/3.jpg"
                      class="attachment-full size-full"
                      alt="Cô trò học bài URI"
                      data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                      data-lazy-src="/images/new-image/3.jpg"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-single">
                  <div class="lib-img gItem" data-src="/uploads/2022/11/TDH_4105-scaled-1.jpg">
                    <img
                      width="969"
                      height="1454"
                      src="/images/new-image/4.jpg"
                      class="attachment-full size-full"
                      alt="Cô trò vui chơi URI"
                      data-lazy-sizes="(max-width: 969px) 100vw, 969px"
                      data-lazy-src="/images/new-image/4.jpg"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-single">
                  <div class="lib-img gItem" data-src="/uploads/2022/08/gallery_6.png">
                    <img
                      width="384"
                      height="384"
                      src="/images/new-image/8.jpg"
                      class="attachment-full size-full"
                      alt="Cô trò vui chơi URI"
                      data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                      data-lazy-src="/images/new-image/8.jpg"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-double">
                  <div
                    class="lib-img gItem"
                    data-src="2022/08/97745576_938515926583603_3925911502262894592_n.jpg"
                  >
                    <img
                      width="1920"
                      height="1280"
                      src="/images/new-image/ha-29.jpg"
                      class="attachment-full size-full"
                      alt="Cô trò vui chơi URI"
                      data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                      data-lazy-src="/images/new-image/ha-29.jpg"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-full">
                  <div class="lib-img gItem" data-src="/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2.jpg">
                    <img
                      width="1728"
                      height="800"
                      src="/images/new-image/ha-30.jpg"
                      class="attachment-full size-full"
                      alt=""
                      data-lazy-sizes="(max-width: 1728px) 100vw, 1728px"
                      data-lazy-src="/images/new-image/ha-30.jpg"
                    />
                  </div>
                </div>
              </div>
              <!-- <div id="pagination-container" class="page-numbers m-top"></div> -->
            </div>
          </div>
        </section>
      </div>
    </main>
 
  </div>
</template>

<script>
import ContactCourse from "../components/ContactCourse.vue";
import MenuCourse from "../components/MenuCourse.vue";
export default {
  components: {
    MenuCourse,
    ContactCourse,
  },
  layout: "Main",
};
</script>

<style scoped>
.banner-title {
  text-align: left;
}

.banner-des p{
  text-align: left;
}

.ul-custom li {
  list-style: disc !important;
}
.ds-title {
  font-weight: 700;
}
</style>
