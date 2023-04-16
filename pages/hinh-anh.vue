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
              <div class="lib-list gallery" data-aos="fade-up-cus">
                <div class="col-image">
                  <img
                    v-for="i in 8"
                    width="384"
                    height="384"
                    :src="`/images/new-image/ha-${i}.jpg`"
                    class="attachment-full size-full"
                    alt=""
                    data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png 384w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-300x300.png 300w, https://ischool.vn/wp-content/uploads/2022/08/gallery_3-150x150.png 150w"
                    data-lazy-sizes="(max-width: 384px) 100vw, 384px"
                    data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/gallery_3.png"
                  />
                </div>

                <div class="col-image">
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
                </div>

                <div class="col-image">
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
                </div>

                <div class="col-image">
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
import SwiperModule from "../static/template/js/module/SwiperModule";
export default {
  layout: "Main",
  mounted() {
    SwiperModule();
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
