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
              <div v-for="i in 9" :key="i" class="dsmall-item syschool-item syschool-item-3">
                <div class="syschool-wrap">
                  <a href="#" class="syschool-img">
                    <img
                      width="1344"
                      height="574"
                      src="https://giasutienphong.com.vn/wp-content/uploads/2021/07/luyen_noi_tieng_anh.jpg"
                      class="attachment-full size-full wp-post-image"
                      alt="ischool cẩm phả"
                      data-lazy-srcset="https://ischool.vn/wp-content/uploads/2022/08/ischool-cam-pha-e1668507105991.jpg 1344w, https://ischool.vn/wp-content/uploads/2022/08/ischool-cam-pha-e1668507105991-300x128.jpg 300w, https://ischool.vn/wp-content/uploads/2022/08/ischool-cam-pha-e1668507105991-1024x437.jpg 1024w, https://ischool.vn/wp-content/uploads/2022/08/ischool-cam-pha-e1668507105991-768x328.jpg 768w, https://ischool.vn/wp-content/uploads/2022/08/ischool-cam-pha-e1668507105991-960x410.jpg 960w, https://ischool.vn/wp-content/uploads/2022/08/ischool-cam-pha-e1668507105991-50x21.jpg 50w, https://ischool.vn/wp-content/uploads/2022/08/ischool-cam-pha-e1668507105991-280x120.jpg 280w"
                      data-lazy-sizes="(max-width: 1344px) 100vw, 1344px"
                      data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/ischool-cam-pha-e1668507105991.jpg"
                    />
                  </a>
                  <div class="syschool-content">
                    <h3 class="syschool-name">
                      <a href="#"> Bí quyết luyện nói tiếng Anh của tôi </a>
                    </h3>
                    <div class="syschool-info">
                      <div class="syschool-info-item">
                        <div class="info-detail-mona">
                          <p class="text">
                            Có rất nhiều bài chia sẻ về kỹ năng này. Nhưng tôi vẫn muốn viết. Thứ nhất, tôi nghĩ những bài đó chưa đủ. Thứ hai, tôi tin mình có thể gửi tới bạn góc nhìn mới hơn về việc học. Học luyện nói tiếng Anh không khó. Vì khó thì đã không phải ngôn...
                          </p>
                        </div>
                      </div>
                      <!-- <div class="syschool-info-item">
                        <div class="info-detail-mona">
                          <a class="text link" href="tel:0855413689">0855 413 689</a>
                        </div>
                      </div> -->
                      <div class="syschool-info-item">
                        <div class="info-detail-mona">
                          <p class="text">Trần Văn An</p>
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
    </main>
  </div>
</template>

<script>
export default {
  layout: "Main",
};
</script>
