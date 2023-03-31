<template>
  <div>
    <main class="main">
      <section class="ss-syschool">
        <div class="syschool ss-pd">
          <div class="container">
            <div class="head mb-32 t-center">
              <h2 class="t-title mb-32" data-aos="flip-right">Tuyển dụng nổi bật</h2>
            </div>

            <div class="dsmall syschool-list ss-pd-b">
              <div v-for="i in 3" :key="i" class="dsmall-item syschool-item syschool-item-3">
                <div class="syschool-wrap">
                  <!-- <a href="#" class="syschool-img">
                
                  </a> -->
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
            </div>

            <div>
              <div class="header-table-title">THÔNG TIN TUYỂN DỤNG THÁNG 3/2023 <span style="color: red;">TỔNG CỘNG 2 VỊ TRÍ</span> </div>
              <div>
                <table>
                  <tr>
                    <th>#</th>
                    <th>Vị trí</th>
                    <th>Nơi làm việc</th>
                    <th>Ngày hết hạn</th>
                  </tr>
                  <tr class="odd">
                    <td>
                      <div>1</div>
                    </td>
                    <td> <a href="/tuyen-dung/1" class="name">Giáo viên dạy toán</a></td>
                    <td>
                      <div>Trung tâm URI</div>
                    </td>
                    <td><div>31/3/2023</div></td>
                  </tr>

                  <tr class="even">
                    <td>
                      <div>2</div>
                    </td>
                    <td><a href="/tuyen-dung/1" class="name">Kế toán</a></td>
                    <td>
                      <div>Trung tâm URI</div>
                    </td>
                    <td><div>31/3/2023</div></td>
                  </tr>
                </table>
                <div class="footer-table">
                    <div>
                        Đang xem 1 đến 2 trong tổng số 2
                    </div>
                    <div class="list-button">
                       <button class="btn" style="margin-right: 20px;">
                            Trước 
                       </button>
                       <button class="btn">
                            Sau
                       </button>
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

.footer-table .list-button button{
    width: 75px;
    display: flex;
    justify-content: center;
}

.syschool-wrap {
    /* background-color: #664411; */
    border: 1px solid #664411;
}

.syschool-name a{
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
