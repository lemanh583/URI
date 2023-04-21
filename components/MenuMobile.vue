<template>
  <div>
    <div class="mobile-overlay"></div>
    <div class="mobile">
      <div class="mobile-con">
        <div class="mobile-wr">
          <nav class="menu-nav mobile-nav">
            <ul id="menu-theme-mobile-menu" class="menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                <a class="menu-link" href="/">TRANG CHỦ</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
                <a class="menu-link" href="#">VỀ URI <i class="fas fa-angle-down"> </i></a>
                <ul class="menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/gioi-thieu">Tổng quan về URI</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/doi-ngu-giao-vien">Đội ngũ giáo viên</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/danh-gia">Review</a>
                  </li>
                </ul>
              </li>
              <!-- <li class=' menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown'>
                <a class="menu-link" href="https://ischool.vn/he-thong-truong/">HỆ THỐNG TRƯỜNG</a>
                <ul class='menu-list'>
                  <li class=' menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown'>
                    <a class="menu-link" href="javascript:;">iSchool</a>
                    <ul class='menu-list'>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-cam-pha/">iSchool Cẩm
                          Phả</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-ha-tinh/">iSchool Hà
                          Tĩnh</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-quang-tri/">iSchool
                          Quảng Trị</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-quy-nhon/">iSchool
                          Quy Nhơn</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-nha-trang/">iSchool
                          Nha Trang</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-ninh-thuan/">iSchool
                          Ninh Thuận</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-long-an/">iSchool
                          Long An</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-tra-vinh/">iSchool
                          Trà Vinh</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-soc-trang/">iSchool
                          Sóc Trăng</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-bac-lieu/">iSchool
                          Bạc Liêu</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-rach-gia/">iSchool
                          Rạch Giá</a></li>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/ischool-long-xuyen/">iSchool
                          Long Xuyên</a></li>
                    </ul>
                  </li>
                  <li class=' menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown'>
                    <a class="menu-link" href="javascript:;">iSchool bảo trợ</a>
                    <ul class='menu-list'>
                      <li class=' menu-item menu-item-type-post_type menu-item-object-mona_system'><a class="menu-link"
                          href="https://ischool.vn/thpt-nguyen-hue/">THPT Nguyễn
                          Huệ</a></li>
                    </ul>
                  </li>
                </ul>
              </li> -->
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
                <a class="menu-link" href="#">KHÓA HỌC <i class="fas fa-angle-down"> </i></a>
                <ul class="menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/lop-hanh-trang-vao-lop-1">Lớp hành trang vào lớp 1</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/co-ban">Lớp cơ bản</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/chuyen-sau">Lớp tư duy chuyên sâu</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/luyen-thi-quoc-te">Lớp luyện thi quốc tế</a>
                  </li>
                </ul>
              </li>


              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
                <a class="menu-link" href="#">SỰ KIỆN, HÌNH ẢNH <i class="fas fa-angle-down"> </i></a>
                <ul class="menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/su-kien">Sự kiện</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/hinh-anh">Hình ảnh</a>
                  </li>
                </ul>
              </li>

              <!-- <li
                class=' menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children dropdown'>
                <a class="menu-link" href="https://ischool.vn/dang-ky-nhap-hoc/">TUYỂN SINH</a>
                <ul class='menu-list'>
                  <li class=' menu-item menu-item-type-post_type menu-item-object-page'><a class="menu-link"
                      href="https://ischool.vn/dang-ky-nhap-hoc/">Đăng ký nhập
                      học</a></li>
                  <li class=' menu-item menu-item-type-post_type menu-item-object-page'><a class="menu-link"
                      href="https://ischool.vn/uu-dai-va-hoc-bong/">Ưu đãi và học
                      bổng</a></li>
                  <li
                    class=' menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-722 current_page_item'>
                    <a class="menu-link" href="https://ischool.vn/cau-hoi-thuong-gap/">Câu hỏi thường
                      gặp</a>
                  </li>
                </ul>
              </li> -->

              <li
                class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-has-children dropdown"
              >
                <a class="menu-link" href="/tin-tuc">THÔNG TIN <i class="fas fa-angle-down"> </i></a>
                <ul class="menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/tin-tuc">Tin tức</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/blog">Blog</a>
                  </li>
                </ul>
              </li>

              <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                <a class="menu-link" href="/he-thong-nhuong-quyen">HỆ THỐNG NHƯỢNG QUYỀN</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page">
                <a class="menu-link" href="/app">APP</a>
              </li>

              <li
                class="menu-item menu-item-type-post_type menu-item-object-page  menu-item-has-children dropdown"
              >
                <a class="menu-link" href="/lien-he">LIÊN HỆ <i class="fas fa-angle-down"> </i></a>
                <ul class="menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/tuyen-dung">Tuyển dụng</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a class="menu-link" href="/lien-he">Tư vấn</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div class="mobile-content">
            <p class="mobile-title">THÔNG TIN LIÊN HỆ</p>

            <div class="mobile-fl mb-16s">
              <span class="fw-6">Phone:</span><a href="tel:84789166588" class="mobile-text mobile-link">+84 88 623 08 88 </a>
            </div>
            <div class="mobile-fl mb-16s">
              <span class="fw-6">Email:</span><a href="mailto:urivietnam.edu@gmail.com" class="mobile-text mobile-link">urivietnam.edu@gmail.com </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="mobile-mxh">
        <a href="#" target="_blank" class="mobile-mxh-link">
          <img src="" alt="" />
        </a>
        <a href="#" target="_blank" class="mobile-mxh-link">
          <img
            width="24"
            height="24"
            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E"
            alt=""
            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/01/icon-youtube.svg"
          />
        </a>
        <a href="#" target="_blank" class="mobile-mxh-link">
          <img
            width="24"
            height="24"
            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E"
            alt=""
            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/01/icon-linkedin.svg"
          />
        </a>
        <a href="#" target="_blank" class="mobile-mxh-link">
          <img
            width="24"
            height="24"
            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3C/svg%3E"
            alt=""
            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/01/icon-zalo.svg"
          />
        </a>
      </div> -->

      <div class="mobile-close">
        <i class="fas fa-times icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import MobileModule from "../static/template/js/module/MobileModule";

export default {
  mounted() {
    MobileModule()
  }
}

</script>
