<template>
  <div>
    <main class="main">
      <section class="ss-syschool">
        <div class="syschool ss-pd">
          <div class="container">
            <div class="head mb-32 t-center">
              <h2 class="t-title mb-32" data-aos="flip-right">Hệ thống nhượng quyền</h2>
            </div>

            <div class="dsmall syschool-list ss-pd-b">
              <div v-for="i in bases" :key="i.id" class="dsmall-item syschool-item syschool-item-3">
                <div class="syschool-wrap">
                  <a href="#" class="syschool-img">
                    <img
                      width="1344"
                      height="574"
                      src="/images/uri-vinh.jpg"
                      class="attachment-full size-full wp-post-image"
                      alt="URI Vinh"
                      data-lazy-sizes="(max-width: 1344px) 100vw, 1344px"
                      data-lazy-src="/images/uri-vinh.jpg"
                    />
                  </a>
                  <div class="syschool-content">
                    <h3 class="syschool-name">
                      <a href="#"> {{ i.name }} </a>
                    </h3>
                    <div class="syschool-info">
                      <div class="syschool-info-item">
                        <img
                          width="16"
                          height="15"
                          src="/template/assets/images/syschool-icon-1.svg"
                          class="icon"
                          alt=""
                          data-lazy-src="/template/assets/images/syschool-icon-1.svg"
                        />
                        <div class="info-detail-mona">
                          <p class="text">{{ i.address }}</p>
                        </div>
                      </div>
                      <div class="syschool-info-item">
                        <img
                          width="16"
                          height="15"
                          src="/template/assets/images/syschool-icon-2.svg"
                          class="icon"
                          alt=""
                          data-lazy-src="/template/assets/images/syschool-icon-2.svg"
                        />
                        <div class="info-detail-mona">
                          <a class="text link" href="tel:0886230888">{{ i.phone }}</a>
                        </div>
                      </div>
                      <div class="syschool-info-item">
                        <img
                          width="16"
                          height="15"
                          src="/template/assets/images/syschool-icon-3.svg"
                          class="icon"
                          alt=""
                          data-lazy-src="/template/assets/images/syschool-icon-3.svg"
                        />
                        <div class="info-detail-mona">
                          <p class="text">7:00 - 17:30</p>
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
import data from "../api/data.json"
export default {
  layout: "Main",
  data() {
      return {
        bases: data.base
      };
    }
};
</script>
