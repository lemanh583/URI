<template>
  <div>

    <div v-if="loading" class="loading-container">
      <a-spin :indicator="loading" class="loading" />
    </div>

    <main v-else class="main">
      <section class="ss-syschool">
        <div class="syschool ss-pd">
          <div class="container">
            <div class="head mb-32 t-center">
              <h2 class="t-title mb-32" data-aos="flip-right">Thông tin tuyển dụng</h2>
            </div>

            <!-- <div class="dsmall syschool-list ss-pd-b">
              <div v-for="i in 3" :key="i" class="dsmall-item syschool-item syschool-item-3">
                <div class="syschool-wrap">
                  
                  <div class="syschool-content">
                    <h3 class="syschool-name">
                      <a href="#"> Giáo viên toán</a>
                    </h3>
                    <div class="syschool-info">
                      <div class="syschool-info-item">
                        <img
                          width="16"
                          height="15"
                          src="https://ischool.vn/wp-content/uploads/2022/08/syschool-icon-1.svg"
                          class="icon"
                          alt=""
                          data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/syschool-icon-1.svg"
                        />
                        <div class="info-detail-mona">
                          <p class="text">
                            Trung tâm URI Vinh
                          </p>
                        </div>
                      </div>
                      
                      <div class="syschool-info-item">
                        <img
                          width="16"
                          height="15"
                          src="https://ischool.vn/wp-content/uploads/2022/08/syschool-icon-3.svg"
                          class="icon"
                          alt=""
                          data-lazy-src="https://ischool.vn/wp-content/uploads/2022/08/syschool-icon-3.svg"
                        />
                        <div class="info-detail-mona">
                          <p class="text">31/2/2023</p>
                        </div>
                      </div>
                    </div>
                    <a href="/tuyen-dung/1" class="btn" style="margin-top: 10px;">
                        Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            </div> -->

            <div>
              <div class="header-table-title">
                <span style="color: red">TỔNG CỘNG {{ total }} VỊ TRÍ</span>
              </div>
              <div>
                <table>
                  <tr>
                    <th>#</th>
                    <th>Vị trí</th>
                    <th>Nơi làm việc</th>
                    <th>Ngày hết hạn</th>
                  </tr>
                  <tr v-for="(item, index) in list" :key="index" :class="[index % 2 == 0 ? 'odd' : 'even']">
                    <td>
                      <div>{{ (page - 1) * limit + index + 1 }}</div>
                    </td>
                    <td>
                      <a :href="'/' + item.slug" class="name">{{ item.hiring.name }}</a>
                    </td>
                    <td>
                      <div>{{ item.hiring.address }}</div>
                    </td>
                    <td>
                      <div>{{ item.hiring.date ? new Date(item.hiring.date).toDateString() : '' }}</div>
                    </td>
                  </tr>

                  <!-- <tr class="even">
                    <td>
                      <div>2</div>
                    </td>
                    <td><a href="/tuyen-dung/1" class="name">Kế toán</a></td>
                    <td>
                      <div>Trung tâm URI</div>
                    </td>
                    <td><div>31/3/2023</div></td>
                  </tr> -->
                </table>
                <div class="footer-table">
                  <div>Đang xem {{ ((page - 1) * limit) + (total?1:0) }} đến {{ list.length }} trong tổng số {{ total }}</div>
                  <div class="list-button">
                    <!-- <button class="btn" style="margin-right: 20px;">
                            Trước 
                       </button>
                       <button class="btn">
                            Sau
                       </button> -->
                    <a-pagination v-model="page" :pageSize="limit" :total="total" @change="changePagination" show-less-items />
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
  data() {
    return {
      loading: true,
      page: 1,
      limit: 10,
      list: [],
      total: 0,
    };
  },
  methods: {
    async getPost() {
      this.loading = true;
      if (this.$route.query.page) {
        this.page = Number(this.$route.query.page) || 1;
      }
      await this.$axios
        .post(this.$config.baseURL + "/post/list", {
          page: this.page,
          limit: this.limit,
          sort: {
            created_time: -1
          },
          filter: {
            slug_category: "tuyen-dung",
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
      this.$router.push({ path: "/tuyen-dung", query: { page: this.page } });
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

<style scoped>
table {
  width: 100%;
}

table tr {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

table th {
  padding: 8px 16px;
  background-color: #664411;
  color: #fff;
  font-weight: 700;
}

table td div {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  height: 80px;
}

table td {
  display: flex;
  align-items: center;
}

.odd div {
  background-color: #f3f4f6;
}

.odd td {
  background-color: #f3f4f6;
}

.even td {
  background-color: #d1d5db;
}

.even div {
  background-color: #d1d5db;
}
.name {
  font-weight: 700;
  color: #000;
}

.footer-table {
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
}

.footer-table .list-button {
  display: flex;
}

.footer-table .list-button button {
  width: 75px;
  display: flex;
  justify-content: center;
}

.syschool-wrap {
  /* background-color: #664411; */
  border: 1px solid #664411;
}

.syschool-name a {
  /* color: #fff; */
}
.text {
  /* color: #fff; */
}
.header-table-title {
  padding: 16px;
  background-color: #d1d5db;
}

@media screen and (max-width: 550px) {
  table tr {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .footer-table {
    padding: 12px 0px;
    gap: 10px;
  }
}

@media screen and (max-width: 768px) {
  .syschool-item-3 {
    width: calc(100% / 1);
  }
  .syschool-content {
    margin: auto;
  }
}
</style>
