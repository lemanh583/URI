<template>
  <div>
    <main class="main">
      <div class="about">
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
                        src="/images/new-image/10.jpg"
                        class="attachment-full size-full"
                        alt=""
                        data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/HI_09718-scaled.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/HI_09718-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/HI_09718-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/HI_09718-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/HI_09718-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/HI_09718-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/HI_09718-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/HI_09718-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HI_09718-270x180.jpg 270w"
                        data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                        data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/HI_09718-scaled.jpg"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 class="banner-title second">
                            Đội ngũ giáo viên<br />
                            tại <span class="c-third fw-7">URI</span>
                          </h2>
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

        <div class="menu-static">
          <div class="menu-page">
            <div class="container">
              <ul id="menu-theme-about-menu" class="menu-list">
                <li id="menu-item-2427" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2427">
                  <a href="/gioi-thieu">Giới thiệu</a>
                </li>
                <li
                  id="menu-item-2428"
                  class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-915 current_page_item menu-item-2428"
                >
                  <a href="/doi-ngu-giao-vien" aria-current="page">Đội ngũ giáo viên</a>
                </li>
                <!-- <li id="menu-item-2429" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2429"><a
                    href="https://ischool.vn/tap-doan-giao-duc-nguyen-hoang/">Tập đoàn Giáo dục Nguyễn
                    Hoàng</a></li> -->
              </ul>
            </div>
          </div>
        </div>

        <section class="ss-gv">
          <div class="gv">
            <div class="container">
              <div class="gv-wrapper ss-pd">
                <h2 class="t-title t-center mb-32">GIÁO VIÊN NỔI BẬT</h2>

                <div class="gv-slider">
                  <div class="swiper loop">
                    <div class="swiper-wrapper">
                      <div v-for="(teacher, index) in listTeacher" :key="index" class="swiper-slide">
                        <div class="pro-wrap gv-wrap">
                          <a href="#" class="pro-img">
                            <img
                              width="274"
                              height="180"
                              :src="teacher.img"
                              class="img wp-post-image"
                              alt=""
                              data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-274x180.jpg 274w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-300x197.jpg 300w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600.jpg 522w"
                              data-lazy-sizes="(max-width: 274px) 100vw, 274px"
                              data-lazy-src="https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-274x180.jpg"
                          /></a>
                          <div class="pro-content t-center">
                            <h3 class="pro-name second">
                              <a href="#"> {{ teacher.name }} </a>
                            </h3>
                            <div class="pro-level">
                              <div class="pro-level-item">{{ teacher.role }}</div>
                            </div>
                            <div class="pro-des">
                              {{ teacher.text }}
                            </div>
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

        <section class="banner mona-banner">
          <div class="banner-slider">
            <div class="swiper loop">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="banner-wrap right">
                    <div class="banner-img">
                      <img
                        width="1238"
                        height="766"
                        src="/images/gv4.jpg"
                        class="attachment-full size-full"
                        alt=""
                        data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Tran-Duc-Quan-GV-Toan-e1668417103974.jpg 1238w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Tran-Duc-Quan-GV-Toan-e1668417103974-300x186.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Tran-Duc-Quan-GV-Toan-e1668417103974-1024x634.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Tran-Duc-Quan-GV-Toan-e1668417103974-768x475.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Tran-Duc-Quan-GV-Toan-e1668417103974-905x560.jpg 905w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Tran-Duc-Quan-GV-Toan-e1668417103974-50x31.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Tran-Duc-Quan-GV-Toan-e1668417103974-280x173.jpg 280w"
                        data-lazy-sizes="(max-width: 1238px) 100vw, 1238px"
                        data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Tran-Duc-Quan-GV-Toan-e1668417103974.jpg"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 class="banner-title banner-title-second small">Cô Bùi Thu Thuỷ - Nơi thoả sức áp dụng dạy học tích cực đổi mới</h2>
                          <div class="banner-des second"></div>
                          <div class="banner-des">
                            <p>
                              Sau khi tốt nghiệp đại học, bản thân thi tuyển và được nhận vào công tác giảng dạy tại URI. Bản thân cô luôn luôn quan
                              niệm trong quá trình giảng dạy với mục đích cao nhất là truyền cảm hứng, là những người bạn đồng hành cùng các cô, cậu
                              học trò nhỏ; xây dựng từ sự yêu thích môn học đến thái độ sống, cách ứng xử.
                            </p>
                          </div>

                          <div class="banner-btn">
                            <a href="#" class="btn">
                              <p class="text">Xem thêm</p>
                              <i class="ti-angle-right icon-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="banner-wrap right">
                    <div class="banner-img">
                      <img
                        width="1920"
                        height="1280"
                        src="/images/gv5.jpg"
                        class="attachment-full size-full"
                        alt=""
                        data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh-270x180.jpg 270w"
                        data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                        data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/iSchool-Ha-Tinh-Vo-Thi-Huong-GV-Tieng-Anh.jpg"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 class="banner-title banner-title-second small">Cô Đặng Quỳnh Trang - URI là ngôi nhà thứ 2</h2>
                          <div class="banner-des second"></div>
                          <div class="banner-des">
                            <p>
                              Trí tuệ &#8211; Tận tâm &#8211; Trách nhiệm – Tình yêu là những phẩm chất, hành trang mà cô Đặng Quỳnh Trang luôn trau
                              dồi và hướng đến với tư cách là một giáo viên; không ngừng học hỏi, trau dồi kiến thức để đổi mới bản thân giúp cho học
                              sinh thân yêu của mình tiếp cận được những phương pháp học phù hợp nhất.
                            </p>
                          </div>

                          <div class="banner-btn">
                            <a href="#" class="btn">
                              <p class="text">Xem thêm</p>
                              <i class="ti-angle-right icon-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="banner-wrap right">
                    <div class="banner-img">
                      <img
                        width="1920"
                        height="1280"
                        src="/images/gv8.jpg"
                        class="attachment-full size-full"
                        alt=""
                        data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan-270x180.jpg 270w"
                        data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                        data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/iSchool-Quy-Nhon-Nguyen-Thi-Phan.jpg"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 class="banner-title banner-title-second small">Cô Hoàng Thanh Tâm - Giáo viên phải là người truyền lửa</h2>
                          <div class="banner-des second"></div>
                          <div class="banner-des">
                            <p>
                              Là một giáo viên với tuổi đời không còn trẻ nhưng tôi luôn tìm tòi học hỏi, trau dồi kiến thức để có nhiều ý tưởng sáng
                              tạo và đột phá trong phương pháp dạy học, và đặc biệt luôn tạo sự hứng thú và động lực học tập cho học sinh khi tiếp cận
                              bài học vì &#8220;Một người Thầy mà không dạy cho học trò được việc ham muốn học tập thì chỉ là đập búa trên sắt nguội
                              mà thôi”
                            </p>
                          </div>

                          <div class="banner-btn">
                            <a href="#" class="btn">
                              <p class="text">Xem thêm</p>
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

        <section class="pro">
          <div data-bg="https://ischool.vn/template/assets/images/br-blur.png" class="pro ss-pd pro-br rocket-lazyload" style="">
            <div class="container">
              <h2 class="t-title mb-32" data-aos="fade-down-cus">GÓC CẢM NHẬN</h2>
              <div class="pro-slider" data-aos="fade-up-cus">
                <div class="swiper loop">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="pro-wrap">
                        <a href="" class="pro-img">
                          <img
                            width="225"
                            height="180"
                            src="/images/gv1.jpg"
                            class="img wp-post-image"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/11/GV-MAI-LINH-2-225x180.jpg 225w, https://ischool.vn/wp-content/uploads/2022/11/GV-MAI-LINH-2-300x240.jpg 300w, https://ischool.vn/wp-content/uploads/2022/11/GV-MAI-LINH-2-50x40.jpg 50w, https://ischool.vn/wp-content/uploads/2022/11/GV-MAI-LINH-2.jpg 650w"
                            data-lazy-sizes="(max-width: 225px) 100vw, 225px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2022/11/GV-MAI-LINH-2-225x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a href=""> Cô Hồ Thị Như Quỳnh &#8211; Tôi đã tìm đến và may mắn trở thành 1 thành viên của URI</a>
                          </h3>
                          <div class="pro-des">
                            Trước khi đến với URI tôi đã tìm hiểu trên 1 số Website về hoạt động của hệ thống trường URI, cảm nhận đầu tiên khi thấy
                            những hoạt động của các trường trong hệ thống đây là một môi trường hoạt động rất chuyên nghiệp, có sự kết hợp hài hòa
                            giữa chương trình [&hellip;]
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="pro-wrap">
                        <a href="#" class="pro-img">
                          <img
                            width="251"
                            height="180"
                            src="/images/gv2.jpg"
                            class="img wp-post-image"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/11/co-tien-LX-251x180.jpg 251w, https://ischool.vn/wp-content/uploads/2022/11/co-tien-LX-300x216.jpg 300w, https://ischool.vn/wp-content/uploads/2022/11/co-tien-LX-50x36.jpg 50w, https://ischool.vn/wp-content/uploads/2022/11/co-tien-LX.jpg 650w"
                            data-lazy-sizes="(max-width: 251px) 100vw, 251px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2022/11/co-tien-LX-251x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a href="#"> Cô Lê Thị Lý - giáo viên bộ môn Toán, cống hiến nhiều phương pháp giảng dạy mới hiệu quả </a>
                          </h3>
                          <div class="pro-des">
                            Cô luôn cố gắng hết mình để trong suốt quá trình giảng dạy và được Ban chuyên môn của tập đoàn đánh giá cao về phương pháp
                            giảng dạy hiện đại của mình. Cô rất thích môi trường làm việc nhiều thử thách như tại URI để bản thân có nhiều cơ hội
                            [&hellip;]
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="pro-wrap">
                        <a href="#" class="pro-img">
                          <img
                            width="270"
                            height="180"
                            src="/images/gv3.jpg"
                            class="img wp-post-image"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/11/ZXZC-270x180.jpg 270w, https://ischool.vn/wp-content/uploads/2022/11/ZXZC-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/11/ZXZC-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/11/ZXZC.jpg 452w"
                            data-lazy-sizes="(max-width: 270px) 100vw, 270px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2022/11/ZXZC-270x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a href="#">
                              Cô Nguyễn Kim Cúc - Tôi cảm thấy may mắn khi được dạy trong môi trường năng động với những đồng nghiệp chan hoà, dễ mến
                            </a>
                          </h3>
                          <div class="pro-des">
                            Khi tôi bắt đầu công tác tại trường URI tôi cảm thấy đây là mội trường giáo dục đầy năng động và sáng tạo không những dạy
                            theo chương trình giáo dục do Bộ Giáo dục- Đào tạo ban hành mà còn áp dụng nhiều phương pháp dạy học mới như: [&hellip;]
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="pro-wrap">
                        <a href="#" class="pro-img">
                          <img
                            width="270"
                            height="180"
                            src="/images/gv4.jpg"
                            class="img wp-post-image"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/11/xvdb-270x180.jpg 270w, https://ischool.vn/wp-content/uploads/2022/11/xvdb-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/11/xvdb-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/11/xvdb.jpg 650w"
                            data-lazy-sizes="(max-width: 270px) 100vw, 270px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2022/11/xvdb-270x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a href="#"> Cô Bùi Thu Thuỷ – Giáo viên trẻ đầy nhiệt huyết </a>
                          </h3>
                          <div class="pro-des">
                            Cô Bùi Thu Thuỷ là nhân vật xuất sắc nhất tháng 10 của URI, được Ban chuyên môn của tập đoàn đánh giá rất cao trong công
                            tác giảng dạy. Là giáo viên trẻ, mới về trường công tác [&hellip;]
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="pro-wrap">
                        <a href="#" class="pro-img">
                          <img
                            width="256"
                            height="180"
                            src="/images/gv5.jpg"
                            class="img wp-post-image"
                            alt="cô Lê Thị Minh Châu"
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/11/bvjfbv-256x180.jpg 256w, https://ischool.vn/wp-content/uploads/2022/11/bvjfbv-300x211.jpg 300w, https://ischool.vn/wp-content/uploads/2022/11/bvjfbv-50x35.jpg 50w, https://ischool.vn/wp-content/uploads/2022/11/bvjfbv.jpg 616w"
                            data-lazy-sizes="(max-width: 256px) 100vw, 256px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2022/11/bvjfbv-256x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <!-- <div class="pro-note">
            <div class="pro-note-item">
                <img width="16" height="16" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3C/svg%3E" alt="" class="icon" data-lazy-src="/template/assets/images/pro-callenda.svg"><noscript><img width="16" height="16" src="/template/assets/images/pro-callenda.svg" alt="" class="icon"></noscript>
                <p class="text">
                                    </p>
            </div>
            <div class="pro-note-item">
                <img width="16" height="16" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%3E%3C/svg%3E" alt="" class="icon" data-lazy-src="/template/assets/images/pro-user.svg"><noscript><img width="16" height="16" src="/template/assets/images/pro-user.svg" alt="" class="icon"></noscript>
                <p class="text">
                                    </p>
            </div>
        </div> -->
                          <h3 class="pro-name">
                            <a href="#"> Cô Đặng Quỳnh Trang – Giáo viên kinh nghiệm lâu năm, tâm huyết với nghề </a>
                          </h3>
                          <div class="pro-des">
                            Dạy ở URI – môi trường hội nhập quốc tế năng động – cô Trang luôn ý thức tự học tự rèn bản thân để phù hợp với phương pháp
                            giảng dạy của hệ thống URI
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="gv-slider-btn swiper-prev">
                        <i class="ti-angle-left"></i>
                    </div>
                    <div class="gv-slider-btn swiper-next">
                        <i class="ti-angle-right"></i>
                    </div> -->
                <div class="swiper-pagination"></div>
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
      listTeacher: [
        {
          img: "/images/gv1.jpg",
          name: "Cô Hồ Thị Như Quỳnh",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv2.jpg",
          name: "Cô Lê Thị Lý",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv3.jpg",
          name: "Cô Nguyễn Kim Cúc",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv4.jpg",
          name: "Cô Bùi Thu Thuỷ",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv5.jpg",
          name: "Cô Đặng Quỳnh Trang",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv6.jpg",
          name: "Cô Bùi Trung Nguyên",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv7.jpg",
          name: "Cô Võ Thị Nhung",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv8.jpg",
          name: "Cô Hoàng Thanh Tâm",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv9.jpg",
          name: "Cô Tô Thị Hằng",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
        {
          img: "/images/gv10.jpg",
          name: "Cô Nguyễn Phương Thuý",
          role: "Giáo viên",
          text: "Giàu tâm huyết với nghề, hoàn thành tốt công tác dạy học; Tạo hứng thú và làm mới không khí lớp học với các tiết học đa dạng; Tích cực, nhiệt tình và hỗ trợ hiệu quả các hoạt động của Nhà trường; Được cha mẹ học sinh tin yêu và tín nhiệm",
        },
      ],
    };
  },
  mounted() {
    SwiperModule();
  },
};
</script>
