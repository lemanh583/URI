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
                            <a :href="'/' + newPost.slug" class="banner-title small">
                              {{ newPost.title }}
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
        </section>

        <section class="ss-gv">
          <div class="gv">
            <div class="container">
              <div class="gv-wrapper ss-pd">
                <h2 class="t-title t-center mb-32">SỰ KIỆN NỔI BẬT</h2>

                <div class="gv-slider">
                  <div class="swiper loop">
                    <div class="swiper-wrapper">
                      <div v-for="i in viewPost" :key="i._id" class="swiper-slide">
                        <div class="pro-wrap gv-wrap">
                          <a :href="'/' + i.slug" class="pro-img">
                            <img
                              width="274"
                              height="180"
                              :src="i.url_image"
                              class="img wp-post-image"
                              alt=""
                              data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-274x180.jpg 274w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-300x197.jpg 300w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600.jpg 522w"
                              data-lazy-sizes="(max-width: 274px) 100vw, 274px"
                              data-lazy-src="https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-274x180.jpg"
                            />
                          </a>
                          <div class="pro-content t-center">
                            <h3 class="pro-name second">
                              <a :href="'/' + i.slug"> {{ i.title }} </a>
                            </h3>
                            <div class="pro-level">
                              <!-- <div class="pro-level-item">17/12/2022</div> -->
                            </div>
                            <div class="pro-des">{{ i.descriptions }}</div>
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
                  <!-- <div v-if="loading" class="loading-container">
                    <a-spin :indicator="loading" class="loading" />
                  </div> -->

                  <div class="dsmall pro-list">
                    <div v-for="i in list" :key="i._id" class="dsmall-item pro-item pro-item-3" data-aos="fade" data-aos-delay="400">
                      <div class="pro-wrap">
                        <a :href="'/' + i.slug" class="pro-img">
                          <img
                            width="207"
                            height="180"
                            :src="i.url_image"
                            class="img wp-post-image"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-207x180.jpg 207w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-300x261.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-1024x891.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-768x668.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-1536x1337.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-643x560.jpg 643w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-50x44.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748.jpg 1920w"
                            data-lazy-sizes="(max-width: 207px) 100vw, 207px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-207x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a :href="'/' + i.slug">{{ i.title }} </a>
                          </h3>
                          <div class="pro-des">
                            {{ i.descriptions }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="page-numbers m-top">
                    <a-pagination v-model="page" :pageSize="limit" :total="total" @change="changePagination" show-less-items />
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
import UAParser from "ua-parser-js";
export default {
  layout: "Main",
  // async asyncData({ params, query, redirect, $axios, $config, req }) {
  //   let newPost = {};
  //   let viewPost = [];
  //   let page = 1;
  //   let limit = 12;
  //   let total = 0;
  //   let list = [];

  //   // const header = req.headers["user-agent"];
  //   // const userAgent = header.toLowerCase();
  //   // const isMobile = userAgent.includes("mobile");

  //   // if (isMobile) {
  //   //   limit = 8;
  //   // }

  //   // console.log("screenWidth", screenWidth);

  //   await $axios
  //     .post($config.baseURL + "/post/list", {
  //       page: 1,
  //       limit: 1,
  //       filter: {
  //         slug_category: "su-kien",
  //       },
  //     })
  //     .then((response) => {
  //       newPost = response.data?.list[0];
  //     })
  //     .catch((error) => console.error(error));

  //   await $axios
  //     .post($config.baseURL + "/post/list", {
  //       page: 1,
  //       limit: 5,
  //       sort: { view: -1 },
  //       filter: {
  //         slug_category: "su-kien",
  //       },
  //     })
  //     .then((response) => {
  //       viewPost = response.data.list;
  //     })
  //     .catch((error) => console.error(error));

  //   // let loading = true;

  //   // loading = true;

  //   // if (params.query.page) {
  //   //   page = Number(params.query.page) || 1;
  //   // }
  //   // let width = window.innerWidth;
  //   // if (width <= 768) {
  //   //   limit = 8;
  //   // }
  //   // await $axios
  //   //   .post($config.baseURL + "/post/list", {
  //   //     page: page,
  //   //     limit: limit,
  //   //     filter: {
  //   //       slug_category: "su-kien",
  //   //     },
  //   //   })
  //   //   .then((response) => {
  //   //     console.log("params1231231232", params);
  //   //     list = response.data.list;
  //   //     total = response.data.total;
  //   //   })
  //   //   .catch((error) => console.error(error));
  //   // .finally(() => (loading = false));

  //   return { newPost, viewPost, page, limit, total, list, params, query };
  // },
  // layout: "Main",
  data() {
    return {
      list: [],
      page: 1,
      limit: 12,
      total: 0,
      viewPost: [],
      loading: true,
      newPost: {
        url_image: "",
        title: "",
        slug: "",
        descriptions: "",
      },
    };
  },
  methods: {
    async getViewPost() {
      await this.$axios
        .post(this.$config.baseURL + "/post/list", {
          page: 1,
          limit: 5,
          sort: { view: -1 },
          filter: {
            slug_category: "su-kien",
          },
        })
        .then((response) => {
          this.viewPost = response.data.list;
          console.log('1');
        })
        .catch((error) => console.error(error));
    },
    async getOnePost() {
      await this.$axios
        .post(this.$config.baseURL + "/post/list", {
          page: 1,
          limit: 1,
          filter: {
            slug_category: "su-kien",
          },
        })
        .then((response) => {
          this.newPost = response.data?.list[0];
          console.log('2');
        })
        .catch((error) => console.error(error));
    },
    getPost() {
      this.loading = true;
      if (this.$route.query.page) {
        this.page = Number(this.$route.query.page) || 1;
      }
      let width = window.innerWidth;
      if (width <= 768) {
        this.limit = 8;
      }
      this.$axios
        .post(this.$config.baseURL + "/post/list", {
          page: this.page,
          limit: this.limit,
          filter: {
            slug_category: "su-kien",
          },
        })
        .then((response) => {
          this.list = response.data.list;
          this.total = response.data.total;
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
    // getCategory() {
    //   this.loadingCategory = true;
    //   this.$axios
    //     .get(this.$config.baseURL + "/category/list")
    //     .then((response) => {
    //       this.category = response.data.list;
    //     })
    //     .catch((error) => console.error(error))
    //     .finally(() => (this.loadingCategory = false));
    // },
    changePagination() {
      this.$router.push({ path: "/su-kien", query: { page: this.page } });
      setTimeout(() => {
        this.getPost();
      }, 100);
    },
  },
  async created() {
    console.log('___a____');
    
    // await this.getOnePost()
    // await this.getViewPost()
    console.log('___b____');
  },
  // computed: {
  //   loadCall() {
  //     return 
  //   }
  // },  
  async mounted() {
    console.log("___c____");
    await Promise.all([this.getViewPost(), this.getOnePost()]);
    SwiperModule(true)
    this.getPost();
  },
};
</script>

<style scoped>
.side-nine {
  width: calc(100% * (12 / 12));
}
</style>
