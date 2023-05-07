<template>
  <div>
    <main class="main">
      <section class="ss-syschool">
        <div class="syschool ss-pd">
          <div class="container">
            <div class="head mb-32 t-center">
              <h2 class="t-title mb-32" data-aos="flip-right">Blog</h2>
            </div>

            <div class="dsmall syschool-list ss-pd-b">
              <div v-for="i in list" :key="i._id" class="dsmall-item syschool-item syschool-item-3">
                <div class="syschool-wrap">
                  <a :href="'/' + i.slug" class="syschool-img">
                    <img width="1344" height="574" :src="i.url_image" class="attachment-full size-full wp-post-image" :alt="i.title" />
                  </a>
                  <div class="syschool-content">
                    <h3 class="syschool-name">
                      <a :href="'/' + i.slug"> {{ i.title }} </a>
                    </h3>
                    <div class="syschool-info">
                      <div class="syschool-info-item">
                        <div class="info-detail-mona">
                          <p class="text">
                            {{ i.descriptions }}
                          </p>
                        </div>
                      </div>
                      <!-- <div class="syschool-info-item">
                        <div class="info-detail-mona">
                          <a class="text link" href="tel:0855413689">0855 413 689</a>
                        </div>
                      </div> -->
                      <!-- <div class="syschool-info-item">
                        <div class="info-detail-mona">
                          <p class="text">Trần Văn An</p>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="list.length" class="page-numbers m-top">
              <a-pagination v-model="page" :pageSize="limit" :total="total" @change="changePagination" show-less-items />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  layout: "Main",
  data() {
    return {
      loading: true,
      page: 1,
      limit: 12,
      total: 0,
      list: [],
    };
  },
  methods: {
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
            slug_category: "blog",
          },
        })
        .then((response) => {
          this.list = response.data.list;
          this.total = response.data.total;
        })
        .catch((error) => console.error(error))
        .finally(() => (this.loading = false));
    },
    changePagination() {
      this.$router.push({ path: "/blog", query: { page: this.page } });
      setTimeout(() => {
        this.getPost();
      }, 100);
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>
