<template>
  <div>
    <main class="main">
      <div class="program">
        <section class="program-main">
          <div class="lib ss-pd">
            <div class="container">
              <div class="head t-center mb-32">
                <h2 class="t-title" data-aos="fade-down-cus">HÌNH ẢNH HOẠT ĐỘNG</h2>
              </div>
              <div class="lib-list gallery" data-aos="fade-up-cus" style="opacity: 1 !important;">
                <div v-for="col in cols" :key="col.key" class="col-image">
                  <img
                    v-for="(item, index) in col.list"
                    width="384"
                    height="384"
                    :src="item"
                    class="attachment-full size-full"
                    alt=""
                    :key="index"
                    data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png 384w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-300x300.png 300w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-150x150.png 150w"
                    data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                    data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png"
                  />
                </div>

                <!-- <div class="col-image">
                  <img
                    v-for="i in 8"
                    width="384"
                    height="384"
                    :src="`/images/new-image/ha-${i + 8}.jpg`"
                    class="attachment-full size-full"
                    alt=""
                    data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png 384w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-300x300.png 300w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-150x150.png 150w"
                    data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                    data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png"
                  />
                </div> -->

                <!-- <div class="col-image">
                  <img
                    v-for="i in 8"
                    width="384"
                    height="384"
                    :src="`/images/new-image/ha-${i + 16}.jpg`"
                    class="attachment-full size-full"
                    alt=""
                    data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png 384w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-300x300.png 300w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-150x150.png 150w"
                    data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                    data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png"
                  />
                </div> -->

                <!-- <div class="col-image">
                  <img
                    v-for="i in 7"
                    width="384"
                    height="384"
                    :src="`/images/new-image/ha-${i + 24}.jpg`"
                    class="attachment-full size-full"
                    alt=""
                    data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png 384w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-300x300.png 300w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-150x150.png 150w"
                    data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                    data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png"
                  />
                </div> -->
              </div>

              <div v-if="list.length" id="pagination-container" class="page-numbers m-top" style="margin-top: 70px !important;">
                <a-pagination v-model="page" :pageSize="limit" :total="total" @change="changePagination" show-less-items />
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
  async mounted() {
    await this.getImage()
    SwiperModule(true);

    // for(let i = 0 ; i < this.cols.length ; i++) {
    //   for(let j = i ; j < this.total ; j += 4) {
    //     this.cols[i].list.push('ha-' + (j + 1) + ".jpg")
    //   }
    // }
  },
  data() {
    return {
      cols: [
        {
          key: "col-1",
          list: [],
        },
        {
          key: "col-2",
          list: [],
        },
        {
          key: "col-3",
          list: [],
        },
        {
          key: "col-4",
          list: [],
        },
      ],
      total: 31,
      page: 1,
      limit: 30,
      list: []
    };
  },
  methods: {
    async getImage() {
      if (this.$route.query.page) {
        this.page = Number(this.$route.query.page) || 1;
      }
      await this.$axios
        .post(this.$config.baseURL + "/image-topic/list", {
          page: this.page,
          limit: this.limit,
        })
        .then((response) => {
          this.list = response.data?.list;
          this.total = response.data?.total;
          for (let i = 0; i < this.cols.length; i++) {
            for (let j = i; j < this.list.length; j += 4) {
              this.cols[i].list.push(this.list[j]?.image?.src);
            }
          }
        })
        .catch((error) => console.error(error));
    },
    changePagination() {
      this.$router.push({ path: "/hinh-anh-hoat-dong", query: { page: this.page } });
      setTimeout(() => {
        this.getImage();
      }, 100);
    },
  },
};
</script>

<style scoped>
.gallery {
  gap: 20px;
}
.col-image {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: calc((100% / 4) - 15px);
}

.col-image img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

@media screen and (max-width: 900px) {
  .col-image {
    width: calc((100% / 2) - 15px);
  }
}

/* @media screen and (max-width: 450px) {
  .col-image {
    width: calc((100% / 1) - 15px);
  }
} */
</style>
