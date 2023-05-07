<template>
  <div>
    <div v-if="loading && loadingPostCategory" class="loading-container">
      <a-spin :indicator="loading" class="loading" />
    </div>

    <div v-else>
      <main v-if="loading && !loadingPostCategory && !loadingCategory" class="main">
        <div class="news">
          <!-- <section class="banner">
            <div class="banner-slider">
              <div class="swiper loop-none">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="banner-wrap right">
                      <div class="banner-img">
                        <img
                          width="750"
                          height="563"
                          :src="newPost.url_image"
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
                              <a :href="'/' + newPost.slug" class="banner-title banner-title-second small">
                                {{ newPost.title }}
                              </a>
                            </div>
                  
                            <div class="banner-des">
                              {{ newPost.descriptions }}
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
          </section> -->

          <section class="ss-news">
            <div class="news-main ss-pd">
              <div class="container">
                <h2 class="t-title mb-32" data-aos="fade-down-cus"> {{ category.find(i => i.slug == $route.path.replace(/\//g,'')).name }}</h2>
                <!-- <div v-if="loading" class="loading-container">
                  <a-spin :indicator="loading" class="loading" />
                </div> -->
                
                <div class="dsmall side">
                  <div class="dsmall-item side-nine">
                    <div v-if="list.length" class="dsmall pro-list">
                      <div v-for="item in list" :key="item._id" class="dsmall-item pro-item pro-item-3" data-aos="fade" data-aos-delay="400">
                        <div class="pro-wrap">
                          <a :href="'/' + item.slug" class="pro-img">
                            <img
                              width="207"
                              height="180"
                              :src="item.url_image"
                              class="img wp-post-image"
                              alt="URI Hình ảnh"
                            />
                          </a>
                          <div class="pro-content">
                            <h3 class="pro-name">
                              <a :href="'/' + item.slug"> {{ item.title }} </a>
                            </h3>
                            <div class="pro-des">
                              {{ item.descriptions }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div v-else>Không có kết quả</div>

                    <div v-if="list.length" class="page-numbers m-top">
                      <a-pagination v-model="page" :pageSize="limit" :total="total" @change="changePagination" show-less-items />
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
                                  src="https://ischool.vn/template/assets/images/icon-dm.svg"
                                  alt=""
                                  class="icon"
                                  data-lazy-src="https://ischool.vn/template/assets/images/icon-dm.svg"
                                />
                                <p class="sidebar-title">Danh mục</p>
                              </div>
                              <div class="sidebar-body">
                                <div class="sidebar-menu">
                                  <div class="sidebar-menu-list">
                                    <a v-for="i in category" :key="i._id" :href="'/' + i.slug" class="sidebar-menu-link">
                                      <i class="fal fa-long-arrow-right"></i>
                                      <p class="text">{{ i.name }}</p>
                                    </a>
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
                            <div v-for="(item, i) in viewPost" :key="i" class="dsmall-item news-item">
                              <div class="news-wrap">
                                <a :href="'/' + item.slug" class="news-img">
                                  <img
                                    width="800"
                                    height="500"
                                    :src="item.url_image"
                                    class="attachment-full size-full wp-post-image"
                                    alt=""
                                    data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg 800w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-300x188.jpeg 300w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-768x480.jpeg 768w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-50x31.jpeg 50w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-280x175.jpeg 280w"
                                    data-lazy-sizes="(max-width: 800px) 100vw, 800px"
                                    data-lazy-src="https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg"
                                  />
                                </a>
                                <div class="news-content">
                                  <a :href="'/' + item.slug" class="news-name">
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

      <main v-else class="main">
        <div class="detail">
          <section class="ss-detail">
            <div class="detail-main ss-pd">
              <div class="container">
                <div class="dsmall side">
                  <div class="dsmall-item side-nine">
                    <div class="detail-wrapper">
                      <div class="detail-block" data-aos="fade-up-cus">
                        <div class="pro-wrap">
                          <div class="pro-content">
                            <h1 class="detail-pro-name pro-name">
                              {{ post.title }}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div>
                        {{ post.descriptions }}
                      </div>
                      <div class="detail-block mona-content post-content content-db" data-aos="fade-up-cus" v-html="post.content"></div>
                    </div>
                  </div>
                  <div class="dsmall-item side-three">
                    <div class="sidebar" data-aos="fade-up-cus">
                      <div class="side-fixed">
                        <div class="side-fixed-wrap">
                          <div id="m_category_list-2" class="widget news-sidebar widget_m_category_list">
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
                                    <a v-for="i in category" :href="'/' + i.slug" class="sidebar-menu-link">
                                      <i class="fal fa-long-arrow-right"></i>
                                      <p class="text">{{ i.name }}</p>
                                    </a>
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
                            src="https://ischool.vn/template/assets/images/icon-dm.svg"
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
                            <div v-for="i in viewPost" class="dsmall-item news-item">
                              <div class="news-wrap">
                                <a :href="'/' + i.slug" class="news-img">
                                  <img
                                    width="800"
                                    height="500"
                                    :src="i.url_image"
                                    class="attachment-full size-full wp-post-image"
                                    alt="cập nhật lịch nghỉ Tết Nguyên đán 2023 của học sinh"
                                    data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg 800w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-300x188.jpeg 300w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-768x480.jpeg 768w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-50x31.jpeg 50w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-280x175.jpeg 280w"
                                    data-lazy-sizes="(max-width: 800px) 100vw, 800px"
                                    data-lazy-src="https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg"
                                  />
                                </a>
                                <div class="news-content">
                                  <a :href="'/' + i.slug" class="news-name"> {{ i.title }} </a>
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

          <!-- <section class="pro">
          <div data-bg="https://ischool.vn/template/assets/images/br-blur.png" class="pro ss-pd pro-br rocket-lazyload" style="">
            <div class="container">
              <h2 class="t-title mb-32" data-aos="fade-down-cus">Tin tức từ URI</h2>
              <div class="pro-slider" data-aos="fade-up-cus">
                <div class="swiper loop">
                  <div class="swiper-wrapper">
                    <div v-for="i in 10" class="swiper-slide">
                      <div class="pro-wrap">
                        <a href="https://ischool.vn/isers-tranh-tai-tai-vong-chung-ket-vioedu-cap-thanh-pho/" class="pro-img">
                          <img
                            width="258"
                            height="180"
                            src="https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-258x180.jpg"
                            class="img wp-post-image"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-258x180.jpg 258w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-300x210.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-1024x715.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-768x536.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-1536x1073.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-802x560.jpg 802w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-50x35.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3881.jpg 1920w"
                            data-lazy-sizes="(max-width: 258px) 100vw, 258px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/03/IMG_3881-258x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a href="#"> iSERS TRANH TÀI TẠI VÒNG CHUNG KẾT VIOEDU CẤP THÀNH PHỐ </a>
                          </h3>
                          <div class="pro-des">
                            Vượt qua vòng thi cấp trường, các bạn iSers Sóc Trăng có thành tích xuất sắc tiếp tục tranh tài tại vòng thi chung kết cấp
                            thành phố vào chiều ngày 29/3/2023. Ở vòng chung kết này, các thí sinh tập trung thi tại trường dưới sự giám sát trực tiếp
                            của giáo viên và [&hellip;]
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </section> -->
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  layout: "Main",
  data() {
    return {
      post: {},
      loading: true,
      category: [],
      loadingCategory: true,
      loadingPostCategory: true,
      viewPost: [],
      list: [],
      page: 1,
      limit: 1,
      total: 0,
    };
  },
  methods: {
    getViewPost() {
      this.$axios
        .post(this.$config.baseURL + "/post/list", {
          page: 1,
          limit: 5,
          sort: { view: -1 },
          filter: {
            slug_category: "tin-tuc",
          },
        })
        .then((response) => {
          this.viewPost = response.data.list;
        })
        .catch((error) => console.error(error));
    },
    getPost() {
      let regex = /[0-9]/g;
      let slug = this.$route.params.slug.replace(/\//g, "");
      if (!regex.test(slug)) return;
      this.loading = true;
      this.$axios
        .get(this.$config.baseURL + "/post/get/" + slug)
        .then((response) => {
          this.post = response.data.data;
        })
        .catch((error) => {
          this.$router.push({ path: "/404" });
          console.error(error);
        })
        .finally(() => (this.loading = false));
    },
    async getCategory() {
      this.loadingCategory = true;
      await this.$axios
        .get(this.$config.baseURL + "/category/list")
        .then((response) => {
          this.category = response.data.list;
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loadingCategory = false));
    },
    getListFromCategory() {
      let regex = /[0-9]/g;
      let slug = this.$route.params.slug.replace(/\//g, "");
      if (regex.test(slug)) return;
      this.loadingPostCategory = true;
      this.$axios
        .post(this.$config.baseURL + "/post/list", {
          page: this.page,
          limit: this.limit,
          sort: { view: -1 },
          filter: {
            slug_category: slug,
          },
        })
        .then((response) => {
          this.list = response.data.list;
          this.total = response.data.total;
        })
        .catch((error) => {
          this.$router.push({ path: "/404" });
          console.error(error);
        })
        .finally(() => (this.loadingPostCategory = false));
    },
    changePagination() {
      this.$router.push({ path: this.$route.params.slug, query: { page: this.page } });
      setTimeout(() => {
        this.getListFromCategory();
      }, 100);
    },
  },
  async mounted() {
    this.getPost();
    this.getListFromCategory();
    this.getCategory();
    this.getViewPost();
  },
};
</script>

<!-- <style>
img {
  width: 70%;
  margin: auto;
}

</style> -->
