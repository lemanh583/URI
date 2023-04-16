<template>
  <div>
    <main class="main">
      <div class="news">
        <section class="ss-news">
          <div class="news-main ss-pd">
            <div class="container">
              <h2 class="t-title mb-32" data-aos="fade-down-cus">Cảm nhận và Niềm tin</h2>
              <div class="dsmall side">
                <div class="dsmall-item side-nine">
                  <div class="dsmall pro-list">
                    <div v-for="item in reviews" :key="i" class="dsmall-item pro-item pro-item-3" data-aos="fade" data-aos-delay="200">
                      <div class="pro-wrap">
                        <a href="#" class="pro-img">
                          <img
                            width="204"
                            height="180"
                            :src="item.img"
                            class="img wp-post-image"
                            alt=""
                            data-lazy-srcset="https://ischool.vn/wp-content/uploads/2023/03/yu-204x180.jpg 204w, https://ischool.vn/wp-content/uploads/2023/03/yu-300x265.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/yu-1024x905.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/yu-768x678.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/yu-1536x1357.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/yu-634x560.jpg 634w, https://ischool.vn/wp-content/uploads/2023/03/yu-50x44.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/yu.jpg 1920w"
                            data-lazy-sizes="(max-width: 204px) 100vw, 204px"
                            data-lazy-src="https://ischool.vn/wp-content/uploads/2023/03/yu-204x180.jpg"
                          />
                        </a>
                        <div class="pro-content">
                          <h3 class="pro-name">
                            <a href="#"> {{ item.title }} </a>
                          </h3>
                          <div class="pro-des">
                            {{ item.description }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="page-numbers m-top">
                    <ul class="page-numbers">
                      <li><span aria-current="page" class="page-numbers current">1</span></li>
                      <!-- <li><a class="page-numbers" href="#">2</a></li>
                      <li><a class="page-numbers" href="#">3</a></li>
                      <li><a class="page-numbers" href="#">4</a></li>
                      <li>
                        <a class="next page-numbers" href=""><i class="fas fa-chevron-right"></i></a>
                      </li> -->
                    </ul>
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
export default {
  layout: "Main",
  data() {
    return {
      reviews: [
        {
          img: "/images/rv-1.jpg",
          title: "MẸ hiên - mẹ con ngọc lâm",
          description: "Từ khi học URI mẹ thấy con rất hào hứng về môn học, có sự tiến bộ rệt, mẹ sẽ gửi gắm 2 con theo học lâu dài",
        },
        {
          img: "/images/rv-2.jpg",
          title: "MẸ bình - mẹ con Gia Hưng - Phương Thảo",
          description:
            "Hai con rất thích đi học ở URI, thích học toán. Các con theo học cũng đã lâu, mẹ thấy con học tiếng bộ, URI cũng có nhiều hoạt động bổ ích cho các con.",
        },
        {
          img: "/images/rv-3.jpg",
          title: "MẸ Minh - mẹ con Đức Toàn",
          description: "Con học URI cũng gần 1 năm rồi, mẹ thấy con học tiến bộ, con rất tự giác trong việc học và làm các bài tập cô ra",
        },
        {
          img: "/images/rv-4.jpg",
          title: "MẸ Thoa - mẹ con Nguyên Trung",
          description:
            "Nguyên Trung học tới nay cũng đã 2 năm tại URI rồi, con vẫn rất hào hứng và thích đi học URI như những ngày đầu, mẹ thấy con học tự giác và tiến bộ nhiều....",
        },
        {
          img: "/images/rv-5.jpg",
          title: "MẸ Phương - mẹ con Như Đạt",
          description:
            "Từ khi học URI mẹ thấy con tự giác, có ý thức học và cũng có tiến bộ hơn. Cháu rất thích đi học và về nhà tự giác làm bài tập.",
        },
        {
          img: "/images/rv-6.jpg",
          title: "MẸ trang - mẹ con Đăng Sang - Trâm Anh",
          description:
            "Mẹ rất thích cho con đi học ở URI, bởi tại đây các con không chỉ được nuôi dưỡng tình yêu toán học, mà URI còn góp phần tạo nên những chàng trai, cô gái của mẹ...",
        },
        {
          img: "/images/rv-7.jpg",
          title: "MẸ Quỳnh Mây - mẹ con Hoàng Bách",
          description: "Quan điểm của mẹ là con thích học đâu mẹ sẽ cho con học đó, vì có thích con mới tự giác và có hứng thú trong việc học...",
        },
        {
          img: "/images/rv-8.jpg",
          title: "MẸ Nga - mẹ con Khánh Linh",
          description: "Mẹ thấy con rất thích đi học ở URI, ở nhà nghỉ Tết mẹ hướng dẫn nhưng con không hiểu, sau tết...",
        },
        {
          img: "/images/rv-3.jpg",
          title: "MẸ Minh - mẹ con Đức Toàn",
          description: "Con học URI cũng gần 1 năm rồi, mẹ thấy con học tiến bộ, con rất tự giác trong việc học và làm các bài tập cô ra",
        },
      ],
    };
  },
};
</script>

<style scoped>
.side-nine {
  width: calc(100% * (12 / 12));
}

</style>