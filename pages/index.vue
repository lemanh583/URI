<template>
  <div>
    <main class="main">
      <div class="home">
        <section class="banner mona-banner">
          <div class="banner-slider">
            <div class="swiper loop">
              <div class="swiper-wrapper">
                <div v-for="slide in listSlide" :key="slide._id" class="swiper-slide">
                  <div class="banner-wrap left">
                    <div class="banner-img">
                      <img width="1920" height="1280" :src="slide.url_image" class="attachment-full size-full" :alt="slide.descriptions" data-lazy-sizes="(max-width: 1920px) 100vw, 1920px" />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 v-if="slide.title.length <= 1" class="banner-title second">{{ slide.title }}</h2>
                          <h2 v-else class="banner-title second">
                            {{ getTitle(slide.title).first }} <span class="c-third fw-7"> {{ getTitle(slide.title).end }} </span>
                          </h2>

                          <div class="banner-title-second">{{ slide.descriptions }}</div>

                          <div v-if="slide.link" class="banner-btn">
                            <a :href="slide.link" class="btn">
                              <p class="text">Tìm hiểu thêm</p>
                              <i class="ti-angle-right icon-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="swiper-slide">
                  <div class="banner-wrap left">
                    <div class="banner-img">
                      <img
                        width="1920"
                        height="1280"
                        src="/images/new-image/2.jpg"
                        class="attachment-full size-full"
                        alt=""
                        data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                        data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/TDH_3988-scaled.jpg"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 class="banner-title second">IGNITE YOUR <span class="c-third fw-7">PASSION</span></h2>
                          <div class="banner-title-second">Khơi dậy đam mê</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="banner-wrap left">
                    <div class="banner-img">
                      <img
                        width="1728"
                        height="800"
                        src="/images/new-image/22.jpg"
                        class="attachment-full size-full"
                        alt=""
                        data-lazy-sizes="(max-width: 1728px) 100vw, 1728px"
                        data-lazy-src="https://ischool.vn/wp-content/uploads/2023/02/MicrosoftTeams-image-12.jpg"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 class="banner-title"></h2>
                          <div class="banner-des"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->
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

        <!-- <section class="monaMenuTabHome tabJS">
          <div class="menu-page">
            <div class="container">
              <ul class="menu-list">

                <li class="menu-item tabBtn">
                  <a href="javascript:;">
                    MẦM NON </a>
                </li>
                <li class="menu-item tabBtn">
                  <a href="javascript:;">
                    TIỂU HỌC </a>
                </li>
                <li class="menu-item tabBtn">
                  <a href="javascript:;">
                    TRUNG HỌC </a>
                </li>

              </ul>
            </div>
          </div>

          <div class="ss-prog">
            <div class="prog">
              <div class="container">
                <div class="prog-list">

                  <div class="prog-item first tabPanel" data-aos="fade-up-cus">
                    <div class="prog-row">
                      <div class="prog-col">
                        <div class="prog-img">
                          <div class="prog-img-pd">
                            <img width="1920" height="1280"
                              src="https://ischool.vn/wp-content/uploads/2022/10/HI_09982-scaled.jpg"
                              class="img" alt="giáo viên và học sinh mầm non tại iSchool"
                              data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/HI_09982-scaled.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-270x180.jpg 270w"
                              data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                              data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/HI_09982-scaled.jpg" /><noscript><img
                                width="1920" height="1280"
                                src="https://ischool.vn/wp-content/uploads/2022/10/HI_09982-scaled.jpg" class="img"
                                alt="giáo viên và học sinh mầm non tại iSchool"
                                srcset="https://ischool.vn/wp-content/uploads/2022/10/HI_09982-scaled.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HI_09982-270x180.jpg 270w"
                                sizes="(max-width: 1920px) 100vw, 1920px" /></noscript>
                          </div>
                        </div>
                      </div>
                      <div class="prog-col">
                        <div class="prog-content">
                          <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">
                            CHƯƠNG TRÌNH GIÁO DỤC<br />
                            MẦM NON </h3>
                          <p class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                            Chương trình giáo dục mầm non iSchool được xây dựng trên cơ sở triết lý về giáo dục sớm, với
                            hệ thống các chủ đề, dự án thiết thực, có ý nghĩa với môi trường học tập, sinh hoạt của trẻ,
                            phù hợp với năng lực phát triển của từng độ tuổi. </p>
                          <div class="prog-btn" data-aos="fade-up-cus" data-aos-delay="300">
                            <a href="https://ischool.vn/mam-non/" class="btn btn-line">
                              <p class="text"> Xem thêm </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="prog-item first tabPanel" data-aos="fade-up-cus">
                    <div class="prog-row">
                      <div class="prog-col">
                        <div class="prog-img">
                          <div class="prog-img-pd">
                            <img width="1920" height="1280"
                              src="https://ischool.vn/wp-content/uploads/2022/10/HI_08997-scaled.jpg"
                              class="img" alt="học sinh tiểu học iSchool đọc sách tại thư viện"
                              data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/HI_08997-scaled.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-270x180.jpg 270w"
                              data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                              data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/HI_08997-scaled.jpg" /><noscript><img
                                width="1920" height="1280"
                                src="https://ischool.vn/wp-content/uploads/2022/10/HI_08997-scaled.jpg" class="img"
                                alt="học sinh tiểu học iSchool đọc sách tại thư viện"
                                srcset="https://ischool.vn/wp-content/uploads/2022/10/HI_08997-scaled.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HI_08997-270x180.jpg 270w"
                                sizes="(max-width: 1920px) 100vw, 1920px" /></noscript>
                          </div>
                        </div>
                      </div>
                      <div class="prog-col">
                        <div class="prog-content">
                          <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">
                            CHƯƠNG TRÌNH TIỂU HỌC </h3>
                          <p class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                            Chương trình giáo dục tiểu học ở iSchool thực hiện theo chương trình của Bộ Giáo dục và Đào
                            tạo, theo định hướng Hội nhập quốc tế – sẵn sàng cho các thử thách ở những bậc học cao hơn và
                            tự tin với các định hướng du học, học sinh được trang bị nền tảng vững chắc về tư duy, kỹ
                            năng, kiến thức với mục tiêu đào tạo học sinh iSchool trở thành những công dân toàn cầu có khả
                            năng hội nhập cao. </p>
                          <div class="prog-btn" data-aos="fade-up-cus" data-aos-delay="300">
                            <a href="https://ischool.vn/tieu-hoc/" class="btn btn-line">
                              <p class="text"> Xem thêm </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="prog-item first tabPanel" data-aos="fade-up-cus">
                    <div class="prog-row">
                      <div class="prog-col">
                        <div class="prog-img">
                          <div class="prog-img-pd">
                            <img width="1920" height="1280"
                              src="https://ischool.vn/wp-content/uploads/2022/10/HI_08811-scaled.jpg"
                              class="img" alt="học sinh phổ thông iSchool phấn khởi trong ngày lễ tốt nghiệp"
                              data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/HI_08811-scaled.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-270x180.jpg 270w"
                              data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                              data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/HI_08811-scaled.jpg" /><noscript><img
                                width="1920" height="1280"
                                src="https://ischool.vn/wp-content/uploads/2022/10/HI_08811-scaled.jpg" class="img"
                                alt="học sinh phổ thông iSchool phấn khởi trong ngày lễ tốt nghiệp"
                                srcset="https://ischool.vn/wp-content/uploads/2022/10/HI_08811-scaled.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HI_08811-270x180.jpg 270w"
                                sizes="(max-width: 1920px) 100vw, 1920px" /></noscript>
                          </div>
                        </div>
                      </div>
                      <div class="prog-col">
                        <div class="prog-content">
                          <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">
                            CHƯƠNG TRÌNH<br />
                            TRUNG HỌC </h3>
                          <p class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                            Chương trình Giáo dục THCS & THPT iSchool áp dụng khung chương trình của Bộ Giáo dục & Đào tạo
                            theo hướng Tối ưu hóa. Thời gian biểu một ngày của học sinh THCS - THPT iSchool được thiết kế
                            khoa học, phù hợp với sự phát triển lứa tuổi và tâm lý. </p>
                          <div class="prog-btn" data-aos="fade-up-cus" data-aos-delay="300">
                            <a href="https://ischool.vn/trung-hoc/" class="btn btn-line">
                              <p class="text"> Xem thêm </p>
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
        </section> -->

        <section class="ss-num">
          <div class="num ss-pd" data-aos="fade-up-cus">
            <div class="container">
              <div class="num-list">
                <div class="num-item">
                  <div class="num-wrap">
                    <div class="num-img">
                      <img width="1920" height="1280" src="/images/b4.jpg" class="img" alt="Cô và trò URI" data-lazy-sizes="(max-width: 1920px) 100vw, 1920px" data-lazy-src="/images/b4.jpg" />
                    </div>
                    <h2 class="num-title t-title">
                      <span style="font-size: 2vmax; color: black"
                        >NHỮNG CON SỐ<br />
                        ẤN TƯỢNG</span
                      >
                    </h2>
                  </div>
                </div>

                <div class="num-item">
                  <div class="num-wrap">
                    <div class="num-content">
                      <p class="number">500</p>
                      <p class="des">Học viên đồng hành</p>
                    </div>
                  </div>
                </div>

                <div class="num-item">
                  <div class="num-wrap">
                    <div class="num-img">
                      <img
                        width="1920"
                        height="1280"
                        src="/images/b1.jpg"
                        class="img"
                        alt="Cô và trò URI cùng học bài"
                        data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                        data-lazy-src="/images/b1.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div class="num-item">
                  <div class="num-wrap">
                    <div class="num-img">
                      <img
                        width="1920"
                        height="1280"
                        src="/images/b2.jpg"
                        class="img"
                        alt="Học sinh URI đạt giải thưởng cao"
                        data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                        data-lazy-src="/images/b2.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div class="num-item">
                  <div class="num-wrap">
                    <div class="num-content">
                      <p class="number">97%</p>
                      <p class="des">Học viên đạt điểm khá, giỏi tại lớp</p>
                    </div>
                  </div>
                </div>

                <div class="num-item">
                  <div class="num-wrap">
                    <div class="num-img">
                      <img
                        width="384"
                        height="384"
                        src="/images/b3.jpg"
                        class="img"
                        alt="Cô và trò URI giành nhiều giải thưởng"
                        data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                        data-lazy-src="/images/b3.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div class="num-item">
                  <div class="num-wrap">
                    <div class="num-content">
                      <p class="number">200</p>
                      <p class="des">Học viên đạt giải và huy chương tại các kỳ thi Toán quốc tế</p>
                    </div>
                  </div>
                </div>

                <div class="num-item">
                  <div class="num-wrap">
                    <div class="num-content">
                      <p class="number">1.000</p>
                      <p class="des">Lượt học viên tham gia các kỳ thi Toán quốc tế như TIMO, KANGAROO, VTMO, SASMO, HKIMO, BIG BAY BIE, FMO, ASMO.....</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="discover ss-pd">
          <div class="container">
            <h2 class="t-title white mb-24" data-aos="fade-down-cus">
              6 LÝ DO<br />
              CHỌN URI
            </h2>
            <div class="discover-con">
              <div class="discover-con-wrapper">
                <div class="discover-main">
                  <div class="discover-list" data-aos="zoom-in" data-aos-duration="1400">
                    <div class="discover-item">
                      <div class="discover-col">
                        <div class="discover-wrap">
                          <div class="discover-border">
                            <img width="1394" height="1394" src="/template/assets/images/svnNguoc.png" alt="" data-lazy-src="/template/assets/images/svnNguoc.png" />
                            <span class="discover-br"></span>
                          </div>

                          <img width="49" height="48" src="/template/assets/images/graduation-cap-4-1.svg" class="icon" alt="" data-lazy-src="/template/assets/images/graduation-cap-4-1.svg" />
                          <h3 class="discover-name">
                            CHƯƠNG TRÌNH<br />
                            GIÁO DỤC
                          </h3>
                          <p class="discover-des">Chương trình học cá nhân hóa phù hợp với năng lực của từng học sinh trong độ tuổi Tiểu học và Tiền tiểu học</p>
                        </div>
                      </div>
                      <div class="discover-col">
                        <div class="discover-wrap">
                          <div class="discover-border">
                            <img width="1394" height="1394" src="/template/assets/images/svnNguoc.png" alt="" data-lazy-src="/template/assets/images/svnNguoc.png" />
                            <span class="discover-br"></span>
                          </div>

                          <img width="48" height="48" src="/template/assets/images/icon-world.svg" class="icon" alt="" data-lazy-src="/template/assets/images/icon-world.svg" />
                          <h3 class="discover-name">
                            CHUYÊN MÔN<br />
                            CHUYÊN SÂU
                          </h3>
                          <p class="discover-des">Tại URI Giáo viên được tuyển chọn khắt khe, với quy trình đào tạo bài bản, chuyên nghiệp.</p>
                        </div>
                      </div>
                    </div>
                    <div class="discover-item">
                      <div class="discover-col">
                        <div class="discover-wrap">
                          <div class="discover-border">
                            <img width="1394" height="1394" src="/template/assets/images/svnNguoc.png" alt="" data-lazy-src="/template/assets/images/svnNguoc.png" />
                            <span class="discover-br"></span>
                          </div>

                          <img width="48" height="48" src="/template/assets/images/computer-2-1.svg" class="icon" alt="" data-lazy-src="/template/assets/images/computer-2-1.svg" />
                          <h3 class="discover-name">TÀI LIỆU</h3>
                          <p class="discover-des">Giáo trình độc quyền URI, được nghiên cứu bởi các chuyên gia hàng đầu, phù hợp với tâm sinh lý trẻ</p>
                        </div>
                      </div>
                      <div class="discover-col">
                        <div class="discover-wrap">
                          <div class="discover-border">
                            <img width="1394" height="1394" src="/template/assets/images/svnNguoc.png" alt="" data-lazy-src="/template/assets/images/svnNguoc.png" />
                            <span class="discover-br"></span>
                          </div>

                          <img width="49" height="48" src="/template/assets/images/chart-histogram-1.svg" class="icon" alt="" data-lazy-src="/template/assets/images/chart-histogram-1.svg" />
                          <h3 class="discover-name">KHÔNG GIAN</h3>
                          <p class="discover-des">Quy mô lớp học tinh gọn chỉ từ 6-8 học viên/lớp giúp cho việc trao đổi bài học cũng như tương tác tốt hơn</p>
                        </div>
                      </div>
                    </div>
                    <div class="discover-item">
                      <div class="discover-col">
                        <div class="discover-wrap">
                          <div class="discover-border">
                            <img width="1394" height="1394" src="/template/assets/images/svnNguoc.png" alt="" data-lazy-src="/template/assets/images/svnNguoc.png" />
                            <span class="discover-br"></span>
                          </div>

                          <img width="50" height="47" src="/template/assets/images/icon-swim.svg" class="icon" alt="" data-lazy-src="/template/assets/images/icon-swim.svg" />
                          <h3 class="discover-name">
                            HOẠT ĐỘNG<br />
                            NGOẠI KHÓA
                          </h3>
                          <p class="discover-des">Chương trình ngoại khóa của nhà trường được xây dựng phong phú và linh hoạt</p>
                        </div>
                      </div>
                      <div class="discover-col">
                        <div class="discover-wrap">
                          <div class="discover-border">
                            <img width="1394" height="1394" src="/template/assets/images/svnNguoc.png" alt="" data-lazy-src="/template/assets/images/svnNguoc.png" />
                            <span class="discover-br"></span>
                          </div>

                          <img width="48" height="50" src="template/assets/images/Vector.svg" class="icon" alt="" data-lazy-src="template/assets/images/Vector.svg" />
                          <h3 class="discover-name">MÔI TRƯỜNG<br /></h3>
                          <p class="discover-des">Giáo trình độc quyền URI, được nghiên cứu bởi các chuyên gia hàng đầu, phù hợp với tâm sinh lý trẻ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="ss-add ss-feedbacks-full">
          <div class="add">
            <div class="add-list">
              <div class="add-full">
                <div class="add-slider">
                  <div class="swiper loop">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="add-wrap">
                          <div class="add-content">
                            <img width="40" height="40" src="/template/assets/images/icon-quote.svg" alt="" class="icon" data-lazy-src="/template/assets/images/icon-quote.svg" />
                            <div class="add-text">
                              Nguyên Trung học tới nay cũng đã 2 năm tại URI rồi, con vẫn rất hào hứng và thích đi học URI như những ngày đầu, mẹ thấy con học tự giác và tiến bộ nhiều. Thích đi học
                              tới nỗi đi học chậm còn bứt rứt và trách mẹ
                            </div>
                            <div class="add-user">
                              <div class="add-user-ava">
                                <img
                                  width="227"
                                  height="250"
                                  src="/images/rv-main-1.png"
                                  class="img"
                                  alt="Chị Thoa đánh giá URI"
                                  data-lazy-sizes="(max-width: 227px) 100vw, 227px"
                                  data-lazy-src="/images/rv-main-1.png"
                                />
                              </div>
                              <div class="add-user-info">
                                <p class="add-user-name">Chị Thoa</p>
                                <!-- <p class="add-user-des">
                                  Phụ huynh trường iSchool Long Xuyên </p> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="add-wrap">
                          <div class="add-content">
                            <img width="40" height="40" src="/template/assets/images/icon-quote.svg" alt="" class="icon" data-lazy-src="/template/assets/images/icon-quote.svg" />
                            <div class="add-text">
                              Hai con rất thích đi học ở URI, thích học toán. Các con theo học cũng đã lâu, mẹ thấy con học tiếng bộ, URI cũng có nhiều hoạt động bổ ích cho các con.
                            </div>
                            <div class="add-user">
                              <div class="add-user-ava">
                                <img
                                  width="600"
                                  height="600"
                                  src="/images/rv-main-2.png"
                                  class="img"
                                  alt="Chị Bình đánh giá URI"
                                  data-lazy-sizes="(max-width: 600px) 100vw, 600px"
                                  data-lazy-src="/images/rv-main-2.png"
                                />
                              </div>
                              <div class="add-user-info">
                                <p class="add-user-name">Chị Bình</p>
                                <!-- <p class="add-user-des">
                                  Phụ huynh trường iSchool Trà Vinh </p> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="add-wrap">
                          <div class="add-content">
                            <img width="40" height="40" src="/template/assets/images/icon-quote.svg" alt="" class="icon" data-lazy-src="/template/assets/images/icon-quote.svg" />
                            <div class="add-text">
                              Mẹ rất thích cho con đi học ở URI, bởi tại đây các con không chỉ được nuôi dưỡng tình yêu toán học, mà URI còn góp phần tạo nên những chàng trai, cô gái của mẹ vô cùng ấm
                              áp và ngọt ngào
                            </div>
                            <div class="add-user">
                              <div class="add-user-ava">
                                <img
                                  width="380"
                                  height="390"
                                  src="/images/rv-main-3.png"
                                  class="img"
                                  alt="Chị Trang đánh giá URI"
                                  data-lazy-sizes="(max-width: 380px) 100vw, 380px"
                                  data-lazy-src="/images/rv-main-3.png"
                                />
                              </div>
                              <div class="add-user-info">
                                <p class="add-user-name">Chị Trang</p>
                                <!-- <p class="add-user-des">
                                  Cựu học sinh iSchool </p> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- <div class="swiper-slide">
                        <div class="add-wrap">
                          <div class="add-content">
                            <img
                              width="40"
                              height="40"
                              src="https://ischool.vn/template/assets/images/icon-quote.svg"
                              alt=""
                              class="icon"
                              data-lazy-src="https://ischool.vn/template/assets/images/icon-quote.svg"
                            /><noscript
                              ><img width="40" height="40" src="https://ischool.vn/template/assets/images/icon-quote.svg" alt="" class="icon"
                            /></noscript>
                            <div class="add-text">
                              Tôi cũng là một người mẹ như bao người khác, đều mong muốn các con lớn lên có một tương lai rộng mở, nên tôi chọn trường
                              cho con cũng rất thận trọng. Bởi vì, tôi biết một ngôi trường tốt có ảnh hưởng rất lớn đến tính cách, học vấn và tương
                              lai sau này của con. Tại URI, tôi thấy môi trường học tập không gò bó, giúp các con tự tư duy phát triển trí tuệ, các
                              thầy cô tại trường cũng rất thân thiện và gần gũi. Tôi chân thành cảm ơn các thầy cô tại trường đã luôn tạo điều kiện để
                              các em phát huy tối đa khả năng của bản thân.
                            </div>
                            <div class="add-user">
                              <div class="add-user-ava">
                                <img
                                  width="345"
                                  height="365"
                                  src="https://ischool.vn/wp-content/uploads/2022/10/chi-La-Thuy-Tran-phu-huynh-iSchool-e1668409852863.jpg"
                                  class="img"
                                  alt=""
                                  data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/chi-La-Thuy-Tran-phu-huynh-iSchool-e1668409852863.jpg 345w, https://ischool.vn/wp-content/uploads/2022/10/chi-La-Thuy-Tran-phu-huynh-iSchool-e1668409852863-284x300.jpg 284w, https://ischool.vn/wp-content/uploads/2022/10/chi-La-Thuy-Tran-phu-huynh-iSchool-e1668409852863-47x50.jpg 47w, https://ischool.vn/wp-content/uploads/2022/10/chi-La-Thuy-Tran-phu-huynh-iSchool-e1668409852863-170x180.jpg 170w"
                                  data-lazy-sizes="(max-width: 345px) 100vw, 345px"
                                  data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/chi-La-Thuy-Tran-phu-huynh-iSchool-e1668409852863.jpg"
                                />
                              </div>
                              <div class="add-user-info">
                                <p class="add-user-name">Chị La Thúy Trân</p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> -->
                    </div>
                  </div>
                  <div class="add-img">
                    <img
                      style="object-position: bottom"
                      width="2312"
                      height="891"
                      src="/images/new-image/24.jpg"
                      class="attachment-full size-full"
                      alt="Ảnh học sinh URI học bài"
                      data-lazy-sizes="(max-width: 2312px) 100vw, 2312px"
                      data-lazy-src="/images/new-image/24.jpg"
                    />
                  </div>
                  <div class="add-slider-control swiper-control">
                    <div class="swiper-prev">
                      <i class="ti-angle-left"></i>
                    </div>
                    <div class="swiper-next">
                      <i class="ti-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-if="list.length" class="ss-add">
          <div class="add">
            <div class="add-list">
              <div class="add-left" data-aos="fade-right-cus">
                <div class="add-news ss-pd has-contactform">
                  <div class="head mb-32">
                    <h2 class="t-title black">Tin tức</h2>
                    <a href="/tin-tuc" class="btn btn-more">
                      <p class="text">Xem tất cả tin tức</p>
                    </a>
                  </div>
                  <div class="dsmall news-side">
                    <div class="dsmall-item news-side-item">
                      <div class="news-pri">
                        <a :href="'/' + list[0].slug" class="news-pri-img">
                          <img
                            width="940"
                            height="788"
                            :src="list[0].url_image"
                            class="img wp-post-image"
                            :alt="list[0].title"
                            data-lazy-sizes="(max-width: 940px) 100vw, 940px"
                            :data-lazy-src="list[0].url_image"
                          />
                        </a>
                        <div class="news-content">
                          <a :href="'/' + list[0].slug" class="news-name">
                            {{ list[0].title }}
                          </a>
                        </div>
                        <div class="news-content">
                          <div class="news-excerpt"></div>
                        </div>
                      </div>
                    </div>

                    <div class="dsmall-item news-side-item">
                      <div class="dsmall news-list">
                        <div class="dsmall-item news-item">
                          <div class="news-wrap">
                            <a :href="'/' + list[1].slug" class="news-img">
                              <img
                                width="270"
                                height="180"
                                :src="list[1].url_image"
                                class="img wp-post-image"
                                :alt="list[1].title"
                                data-lazy-sizes="(max-width: 270px) 100vw, 270px"
                                :data-lazy-src="list[1].url_image"
                              />
                            </a>
                            <div class="news-content">
                              <a :href="'/' + list[1].slug" class="news-name"> {{ list[1].title }} </a>
                            </div>
                          </div>
                          <div class="news-content">
                            <div class="news-excerpt">
                              {{ list[1].descriptions }}
                            </div>
                          </div>
                        </div>
                        <div class="dsmall-item news-item">
                          <div class="news-wrap">
                            <a :href="list[2].slug" class="news-img">
                              <img
                                width="253"
                                height="180"
                                :src="list[2].url_image"
                                class="img wp-post-image"
                                :alt="list[2].title"
                                data-lazy-sizes="(max-width: 253px) 100vw, 253px"
                                :data-lazy-src="list[1].url_image"
                              />
                            </a>
                            <div class="news-content">
                              <a :href="'/' + list[2].slug" class="news-name">{{ list[2].title }} </a>
                            </div>
                          </div>
                          <div class="news-content">
                            <div class="news-excerpt">
                              {{ list[2].descriptions }}
                            </div>
                          </div>
                        </div>
                        <!-- <div class="dsmall-item news-item">
                          <div class="news-wrap">
                            <a href="#"
                              class="news-img">
                              <img width="270" height="180"
                                src="https://ischool.vn/wp-content/uploads/2023/03/2-6-270x180.jpg"
                                class="img wp-post-image" alt=""
                                data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/03/2-6-270x180.jpg 270w, https://ischool.vn/wp-content/uploads/2023/03/2-6-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/2-6-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/2-6-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/2-6-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/2-6-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2023/03/2-6-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/2-6.jpg 1920w"
                                data-lazy-sizes="(max-width: 270px) 100vw, 270px"
                                data-lazy-src="https://ischool.vn/wp-content/uploads/2023/03/2-6-270x180.jpg" /><noscript><img
                                  width="270" height="180"
                                  src="https://ischool.vn/wp-content/uploads/2023/03/2-6-270x180.jpg"
                                  class="img wp-post-image" alt="" loading="lazy"
                                  srcset="https://ischool.vn/wp-content/uploads/2023/03/2-6-270x180.jpg 270w, https://ischool.vn/wp-content/uploads/2023/03/2-6-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/2-6-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/2-6-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/2-6-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/2-6-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2023/03/2-6-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/2-6.jpg 1920w"
                                  sizes="(max-width: 270px) 100vw, 270px" /></noscript> </a>
                            <div class="news-content">
                              <a href="#"
                                class="news-name">
                                Giáo viên iSchool Hà Tĩnh tham dự Ngày hội trường học sáng tạo &#8211; E2 Việt Nam tại
                                Đồng Nai </a>
                            </div>
                          </div>
                          <div class="news-content">
                            <div class="news-excerpt">
                              Ngày 18/3 vừa qua, những giáo viên là Chuyên gia giáo dục sáng tạo Microsoft của trường HNQT
                              iSchool Hà Tĩnh đã vinh dự được tham gia Ngày hội trường học sáng tạo &#8211; E2 Việt Nam
                              tại Trường THPT Lê Quý Đôn &#8211; TP Biên Hoà &#8211; Đồng Nai. [&hellip;] </div>
                          </div>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="add-right">
                <div data-bg="/10/HI_08811-scaled.jpg" id="register" class="dki ss-pd rocket-lazyload" style="">
                  <div class="container">
                    <div class="dki-width">
                      <div class="wpcf7 no-js" id="wpcf7-f335-p19-o1" lang="vi" dir="ltr">
                        <div class="screen-reader-response">
                          <p role="status" aria-live="polite" aria-atomic="true"></p>
                          <ul></ul>
                        </div>
                        <form action="" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
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
                                      v-model="name"
                                      size="40"
                                      class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required re-input"
                                      aria-required="true"
                                      aria-invalid="false"
                                      placeholder="Họ tên"
                                      value=""
                                      type="text"
                                      name="your-name"
                                  /></span>
                                </div>
                                <div class="f-item f-item-2">
                                  <span class="wpcf7-form-control-wrap" data-name="your-tel"
                                    ><input
                                      v-model="phone"
                                      size="40"
                                      class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel re-input"
                                      aria-required="true"
                                      aria-invalid="false"
                                      placeholder="Số điện thoại"
                                      value=""
                                      type="tel"
                                      name="your-tel"
                                  /></span>
                                </div>

                                <div class="f-item f-item-2">
                                  <span class="wpcf7-form-control-wrap" data-name="your-email"
                                    ><input
                                      v-model="email"
                                      size="40"
                                      class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email re-input"
                                      aria-required="true"
                                      aria-invalid="false"
                                      placeholder="Email"
                                      value=""
                                      type="email"
                                      name="your-email"
                                  /></span>
                                </div>

                                <div class="f-item f-item-2 f-item-select">
                                  <span class="wpcf7-form-control-wrap your-system"
                                    ><select
                                      v-model="base"
                                      class="wpcf7-form-control wpcf7-system wpcf7-validates-as-required"
                                      aria-required="true"
                                      aria-invalid="false"
                                      name="your-system"
                                      placeholder="Cơ sở quan tâm"
                                    >
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
                                    placeholder="Chương trình học quan tâm"
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
                                      placeholder="Câu hỏi"
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
import BtnToTopModule from "../static/template/js/module/BtnToTopModule";
import HeaderModule from "../static/template/js/module/HeaderModule";
import SearchModule from "../static/template/js/module/SearchModule";
import SideModule from "../static/template/js/module/SideModule";
import PopupModule from "../static/template/js/module/PopupModule";

import data from "../api/data.json";
import { message } from "ant-design-vue";

export default {
  layout: "Main",
  // async asyncData({ $axios, $config }) {
  //   let listSlide = []
  //   await $axios
  //       .get($config.baseURL + "/slide/list")
  //       .then((response) => {
  //         listSlide = response.data.list;
  //       })
  //       .catch((error) => console.error(error));
  //       return {
  //         listSlide
  //       }
  // },
  data() {
    return {
      listV1: [
        {
          title: "CHIẾN BINH URI KẾT THÚC CHẶNG ĐUA CHUNG KẾT QUỐC TẾ TIMO 2023 VỚI KẾT QUẢ ẤN TƯỢNG",
          des: "Với tinh thần quyết tâm cao và sau những cố gắng rèn luyện, các chiến binh URI đã kết thúc hành trình chinh phục cuộc thi CHUNG KẾT QUỐC TẾ TIMO 2023 với kết quả ấn tượng",
          link: "/chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te",
          img: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/341161805_766349888424437_9213074952146074807_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=QZ4JQVbkAY0AX9jSQpf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfD74czxnavcDDi1K3MQbw2rw2tDSx_6aPh8ZoEWYPc2Pg&oe=6440234D",
        },
        {
          title: "DANH SÁCH CÁC “CHIẾN BINH NHÍ” URI LỌT VÀO VÒNG CHUNG KẾT CUỘC GIA KÌ THI TOÁN HỌC QUỐC TẾ HKIMO",
          des: "Kỳ thi Olympic Toán học quốc tế HKIMO (Hongkong International Mathematical Olympiad) là kỳ thi được tổ chức hàng năm nhằm mục đích tạo ra một sân chơi bổ ích dành cho tất cả học sinh yêu thích bộ môn Toán học",
          link: "/danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo",
          img: "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/336173625_236705368806080_1232643124292024209_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=dk8VNrROnFgAX9CwuPv&_nc_ht=scontent.fhan5-2.fna&oh=00_AfAy2VRdkbUud_e3zb1jn0wcaaF7c4XM-w_jXDdJ9o7Yfw&oe=64415699",
        },
        {
          title: "🎉🎉 'CƠN MƯA HUY CHƯƠNG' TẠI #VÒNG_CHUNG_KẾT_QUỐC_GIA KỲ THI TOÁN QUỐC TẾ BIG BAY BEI 2022",
          des: "Trải qua vòng Chung kết Quốc gia,10 Chiến binh nhí nhà URI đã vượt qua hàng nghìn thí sinh xuất sắc khác, tự tin bản lĩnh giành chiến thắng tại Vòng Chung Kết Quốc Gia kỳ thi Toán Quốc Tế Big Bay Bei, mang về các thành tích đáng tự hào",
          link: "/#",
          img: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/341161805_766349888424437_9213074952146074807_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=QZ4JQVbkAY0AX9jSQpf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfD74czxnavcDDi1K3MQbw2rw2tDSx_6aPh8ZoEWYPc2Pg&oe=6440234D",
        },
      ],
      list: [],
      listSlide: [],
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
    getPost() {
      this.$axios
        .post(this.$config.baseURL + "/post/list", {
          page: 1,
          limit: 3,
          filter: {
            slug_category: "tin-tuc",
          },
        })
        .then((response) => {
          this.list = response.data.list;
        })
        .catch((error) => console.error(error));
    },
    async getSlide() {
      await this.$axios
        .get(this.$config.baseURL + "/slide/list")
        .then((response) => {
          this.listSlide = response.data.list;
        })
        .catch((error) => console.error(error));
    },
    getTitle(title) {
      let split = title.split(" ");
      split = split.filter((x) => x);
      let end = split.splice(split.length - 1, split.length - 1);
      return {
        first: split.join(" "),
        end: end[0],
      };
    },
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
          this.base = ""
          this.email = ""
          this.phone = ""
          this.name = ""
          this.course = ""
          this.description = ""
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
  async mounted() {
    await this.getSlide();
    SwiperModule(true);
    HeaderModule();
    BtnToTopModule();
    SearchModule();
    PopupModule();
    this.getPost();
  },
};
</script>

<style scoped>
.num-img img {
  filter: none;
}
.discover {
  background-color: #664411 !important;
}

.num-item:nth-child(8) .num-wrap {
  background-color: #664411 !important;
}
</style>
