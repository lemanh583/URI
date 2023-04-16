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
                        src="/images/new-image/4.jpg"
                        class="attachment-full size-full"
                        alt=""
                        data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/09/Rectangle-524.png 894w, https://ischool.vn/wp-content/uploads/2022/09/Rectangle-524-300x168.png 300w, https://ischool.vn/wp-content/uploads/2022/09/Rectangle-524-768x430.png 768w, https://ischool.vn/wp-content/uploads/2022/09/Rectangle-524-50x28.png 50w, https://ischool.vn/wp-content/uploads/2022/09/Rectangle-524-280x157.png 280w"
                        data-lazy-sizes="(max-width: 894px) 100vw, 894px"
                        data-lazy-src="https://ischool.vn/wp-content/uploads/2022/09/Rectangle-524.png"
                      />
                    </div>
                    <div class="banner-posi">
                      <div class="container">
                        <div class="banner-content">
                          <h2 class="banner-title">
                            CHƯƠNG TRÌNH GIÁO DỤC<br />
                            Cơ bản
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
          <MenuCourse :key-active="2" />

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
                            src="/images/co-ban-3.jpg"
                            class="attachment-960x560 size-960x560"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/HI_08190-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/HI_08190-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/HI_08190-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/HI_08190-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/HI_08190-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/HI_08190-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/HI_08190-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/HI_08190-270x180.jpg 270w, https://ischool.vn/wp-content/uploads/2022/10/HI_08190-scaled.jpg 1920w"
                            data-lazy-sizes="(max-width: 840px) 100vw, 840px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/HI_08190-840x560.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="prog-col">
                      <div class="prog-content">
                        <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">KHÁI QUÁT CHƯƠNG TRÌNH</h3>
                        <div class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                          Chương trình học tập giáo dục môn toán cơ bản là một phần quan trọng trong giáo dục tại các trường học trên toàn thế giới.
                          Chương trình này cung cấp cho học sinh kiến ​​thức và kỹ năng cơ bản để giúp họ hiểu và giải quyết các vấn đề toán học trong
                          cuộc sống hàng ngày.
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
                            src="/images/co-ban-1.jpg"
                            class="attachment-960x560 size-960x560"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-2048x1365.jpg 2048w, https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-270x180.jpg 270w, https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-scaled.jpg 1920w"
                            data-lazy-sizes="(max-width: 840px) 100vw, 840px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2022/10/TDH_3478-840x560.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="prog-col">
                      <div class="prog-content">
                        <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">ĐẶC ĐIỂM CHƯƠNG TRÌNH</h3>
                        <div class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                          Chương trình học tập giáo dục môn toán cơ bản bao gồm các chủ đề cơ bản như số học, hình học. Học sinh được giới thiệu với
                          các khái niệm toán học cơ bản như các số, phép tính cộng, trừ, nhân và chia, học cách sử dụng các công thức và phương pháp
                          để giải quyết các bài toán liên quan đến các chủ đề này. Ngoài ra, chương trình này còn giúp học sinh phát triển các kỹ năng
                          tư duy logic và khả năng giải quyết vấn đề. Học cách tìm ra các cách tiếp cận khác nhau để giải quyết các vấn đề toán học,
                          tìm ra lời giải chính xác và phân tích và đánh giá các kết quả.
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
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n-839x560.jpg 839w, https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n-1024x684.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n-768x513.jpg 768w, https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n-1536x1026.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n-270x180.jpg 270w, https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n.jpg 1920w"
                            data-lazy-sizes="(max-width: 839px) 100vw, 839px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/96372450_938517509916778_8547025420581601280_n-839x560.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="prog-col">
                      <div class="prog-content">
                        <h3 class="t-title prog-name mb-32" data-aos="fade-up-cus">MÔI TRƯỜNG HỌC TẬP</h3>
                        <div class="text mb-32" data-aos="fade-up-cus" data-aos-delay="300">
                          Với niềm tin “Con người làm nên tất cả, giáo dục tạo nên con người”, đội ngũ giáo viên thực hiện linh hoạt phương pháp, hình
                          thức tổ chức dạy học theo hướng phát triển phẩm chất, năng lực của học sinh; vận dụng phù hợp những thành tố tích cực của
                          các mô hình, phương thức giáo dục tiên tiến nhằm nâng cao chất lượng, hiệu quả giáo dục, đặc biệt là đổi mới tổ chức hoạt
                          động giáo dục trên lớp học; tăng cường tổ chức thực hành trải nghiệm, vận dụng kiến thức vào thực tế cuộc sống, giúp học
                          sinh tự khám phá làm chủ tri thức bằng tư duy độc lập, sáng tạo. <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <section class="ss-road road-empty">
            <div class="road ss-pd">
              <div class="container">
                <h2 class="t-title  mb-32" data-aos="fade-down-cus">
                  CHƯƠNG TRÌNH TIỂU HỌC<br />
                  TẠI iSCHOOL </h2>
                <div class="dnor road-side road-bottom" data-aos="fade-up-cus">
                  <div class="dnor-item road-side-left">
                    <div class="road-target-box">
                      <p class="text">
                        MỤC TIÊU<br />
                        HỌC TẬP </p>
                    </div>
                  </div>
                  <div class="dnor-item road-side-right">
                    <div class="road-target-content mona-content">

                      
                      <table style="border-collapse: collapse; width: 100%;">
                        <tbody>
                          <tr>
                            <td style="width: 30%; text-align: center; background: #af2c2c; color: white;">
                              <strong>Tiếng Anh chuẩn Cambridge</strong>
                            </td>
                            <td style="width: 70%;"><strong>Lớp 1 &#8211; Lớp 2:</strong></p>
                              <ul>
                                <li>Có khả năng giao tiếp tiếng Anh cơ bản và hát một số bài
                                  hát đơn giản.</li>
                                <li>Nghe và nói được một số câu ngắn và viết được một số từ
                                  vựng theo chủ đề.</li>
                              </ul>
                              <p><strong>Lớp 3 &#8211; Lớp 5:</strong></p>
                              <ul>
                                <li>Có vốn ngôn ngữ cơ bản để xử lý các tình huống hằng ngày
                                  với nội dung có thể đoán trước.</li>
                                <li>Giao tiếp phù hợp với vai và hoàn cảnh giao tiếp đơn
                                  giản trong gia đình, lớp học, công việc thông thường.
                                </li>
                                <li>Có thể đọc viết thư cá nhân đơn giản (ví dụ thư cảm ơn,
                                  xin lỗi).</li>
                                <li><strong>Chứng chỉ:</strong>
                                  <ul>
                                    <li><em>Lớp 3:</em> Cambridge Starters (Pre-A1)</li>
                                    <li><em>Lớp 4:</em> Cambridge Movers (A1)</li>
                                    <li><em>Lớp 5:</em> Cambridge Flyers (A2)</li>
                                  </ul>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td style="width: 30%; text-align: center; background: #af2c2c; color: white;">
                              <strong>Kỹ năng sống &#8211; Giá trị sống</strong>
                            </td>
                            <td style="width: 70%;">
                              <ul>
                                <li><strong>Self Protection</strong> (Kỹ năng tự bảo vệ bản
                                  thân)</li>
                                <li><strong>Social and Emotional Intelligence</strong>
                                  (Thông minh xã hội và Thông minh cảm xúc)</li>
                                <li><strong>Self-respect and Respect others</strong> (Tôn
                                  trọng bản thân và Tôn trọng người khác)</li>
                                <li><strong>Exploring self-potential</strong> (Khám phá tiềm
                                  năng bản thân)</li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td style="width: 30%; text-align: center; background: #af2c2c; color: white;">
                              <strong>Kiến tạo Doanh nhân trẻ<br />
                                (Junior Archievement)</strong>
                            </td>
                            <td style="width: 70%;">
                              <ul>
                                <li>Có các kỹ năng căn bản về quản lý tài chính cá nhân</li>
                                <li>Hiểu về sự đa dạng của ngành nghề và cách vận hành của
                                  dòng tiền từ mối tương quan giữa cá nhân, gia đình và
                                  cộng đồng</li>
                                <li>Hiểu các khái niệm căn bản về kinh doanh</li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> -->

          <ContactCourse />

          <div class="lib ss-pd">
            <div class="container">
              <div class="head t-center mb-32">
                <h2 class="t-title" data-aos="fade-down-cus">HÌNH ẢNH HOẠT ĐỘNG</h2>
              </div>
              <div class="lib-list gallery" data-aos="fade-up-cus">
                <div class="lib-item lib-width-single">
                  <div class="lib-img gItem" data-src=" https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png">
                    <img
                      width="384"
                      height="384"
                      src="/images/new-image/2.jpg"
                      class="attachment-full size-full"
                      alt=""
                      data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png 384w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-300x300.png 300w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-150x150.png 150w"
                      data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                      data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-single">
                  <div class="lib-img gItem" data-src=" https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-3.jpg">
                    <img
                      width="384"
                      height="384"
                      src="/images/new-image/3.jpg"
                      class="attachment-full size-full"
                      alt=""
                      data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-3.jpg 384w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-3-300x300.jpg 300w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-3-150x150.jpg 150w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-3-50x50.jpg 50w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-3-180x180.jpg 180w"
                      data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                      data-lazy-src="https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-3.jpg"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-single">
                  <div class="lib-img gItem" data-src=" https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1.jpg">
                    <img
                      width="969"
                      height="1454"
                      src="/images/new-image/4.jpg"
                      class="attachment-full size-full"
                      alt=""
                      data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1.jpg 969w, https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1-200x300.jpg 200w, https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1-682x1024.jpg 682w, https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1-768x1152.jpg 768w, https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1-373x560.jpg 373w, https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1-33x50.jpg 33w, https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1-120x180.jpg 120w"
                      data-lazy-sizes="(max-width: 969px) 100vw, 969px"
                      data-lazy-src="https://ischool.vn/wp-content/uploads/2022/11/TDH_4105-scaled-1.jpg"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-single">
                  <div class="lib-img gItem" data-src=" https://ischool.vn/wp-content/uploads/2022/08/gallery_6.png">
                    <img
                      width="384"
                      height="384"
                      src="/images/new-image/8.jpg"
                      class="attachment-full size-full"
                      alt=""
                      data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/gallery_6.png 384w, https://ischool.vn/wp-content/uploads/2022/08/gallery_6-300x300.png 300w, https://ischool.vn/wp-content/uploads/2022/08/gallery_6-150x150.png 150w"
                      data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                      data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/gallery_6.png"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-double">
                  <div
                    class="lib-img gItem"
                    data-src=" https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n.jpg"
                  >
                    <img
                      width="1920"
                      height="1280"
                      src="/images/new-image/ha-29.jpg"
                      class="attachment-full size-full"
                      alt=""
                      data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n.jpg 1920w, https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n-300x200.jpg 300w, https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n-1024x683.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n-768x512.jpg 768w, https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n-1536x1024.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n-840x560.jpg 840w, https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n-270x180.jpg 270w"
                      data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                      data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/97745576_938515926583603_3925911502262894592_n.jpg"
                    />
                  </div>
                </div>
                <div class="lib-item lib-width-full">
                  <div class="lib-img gItem" data-src=" https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2.jpg">
                    <img
                      width="1728"
                      height="800"
                      src="/images/new-image/ha-30.jpg"
                      class="attachment-full size-full"
                      alt=""
                      data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2.jpg 1728w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2-300x139.jpg 300w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2-1024x474.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2-768x356.jpg 768w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2-1536x711.jpg 1536w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2-960x444.jpg 960w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2-50x23.jpg 50w, https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2-280x130.jpg 280w"
                      data-lazy-sizes="(max-width: 1728px) 100vw, 1728px"
                      data-lazy-src="https://ischool.vn/wp-content/uploads/2022/11/chuong-trinh-giao-duc-tieu-hoc-ischool-2.jpg"
                    />
                  </div>
                </div>
              </div>
              <div id="pagination-container" class="page-numbers m-top"></div>
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
    ContactCourse
},
  layout: "Main",
};
</script>
