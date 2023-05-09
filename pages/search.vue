<template>
  <div>
    <div v-if="loadingPostCategory" class="loading-container">
      <a-spin :indicator="loadingPostCategory" class="loading" />
    </div>
    <main v-else class="main">
      <div class="news">
        <section class="ss-news">
          <div class="news-main ss-pd">
            <div class="container">
              <h2 class="t-title mb-32" data-aos="fade-down-cus">Tìm kiếm cho: {{ $route.query.s }}</h2>
              <!-- <div v-if="loading" class="loading-container">
                  <a-spin :indicator="loading" class="loading" />
                </div> -->

              <div class="dsmall side">
                <div class="dsmall-item side-nine">
                  <div v-if="list.length" class="dsmall pro-list">
                    <div v-for="item in list" :key="item._id" class="dsmall-item pro-item pro-item-3" data-aos="fade" data-aos-delay="400">
                      <div class="pro-wrap">
                        <a :href="'/' + item.slug" class="pro-img">
                          <img width="207" height="180" :src="item.url_image" class="img wp-post-image" :alt="item.title" />
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
                              <img width="15" height="15" src="/template/assets/images/icon-dm.svg" alt="" class="icon" data-lazy-src="/template/assets/images/icon-dm.svg" />
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
                        <img width="15" height="15" src="/template/assets/images/icon-dm.svg" class="icon" alt="" data-lazy-src="/template/assets/images/icon-dm.svg" />
                      </div>
                    </div>
                    <div class="side-overlay"></div>

                    <div class="sidebar-block">
                      <div class="sidebar-head">
                        <img width="15" height="15" src="/template/assets/images/icon-dm.svg" alt="" class="icon" data-lazy-src="/template/assets/images/icon-dm.svg" />
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
                                  data-lazy-sizes="(max-width: 800px) 100vw, 800px"
                                  :data-lazy-src="item.url_image"
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
  </div>
</template>

<script>

import BtnToTopModule from "../static/template/js/module/BtnToTopModule";
import HeaderModule from "../static/template/js/module/HeaderModule";
import SearchModule from "../static/template/js/module/SearchModule";
import SideModule from "../static/template/js/module/SideModule";

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
      limit: 12,
      total: 0,
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
            slug_category: "tin-tuc",
          },
        })
        .then((response) => {
          this.viewPost = response.data.list;
        })
        .catch((error) => console.error(error));
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
    async getList() {
      let search = this.$route.query.s;
      if (this.$route.query.page) {
        this.page = Number(this.$route.query.page) || 1;
      }
      let width = window.innerWidth;
      if (width <= 768) {
        this.limit = 8;
      }
      this.loadingPostCategory = true;
      await this.$axios
        .post(this.$config.baseURL + "/post/list", {
          page: this.page,
          limit: this.limit,
          search
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
      this.$router.push({ path: '/search', query: { search: this.$route.query.s, page: this.page } });
      setTimeout(() => {
        this.getListFromCategory();
      }, 100);
    },
  },
  async mounted() {
    await Promise.all([
      this.getList(),
      this.getCategory(),
      this.getViewPost()
    ])
    SearchModule()
    HeaderModule()
    BtnToTopModule()
    SideModule()
  },
};
</script>
