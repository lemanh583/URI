<template>
  <div class="menu-static">
    <div class="menu-page">
      <div class="container">
        <ul id="menu-theme-curriculum-menu" class="menu-list">
          <li
            v-for="item in list"
            :key="item.key"
            :class="{ current_page_item: keyActive == item.key }"
            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-371"
          >
            <a :href="item.menu">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- current_page_item -->
</template>

<script>
export default {
  props: {
    keyActive: Number,
  },
  data() {
    return {
      list: [
        {
          title: "Hành trang vào lớp 1",
          menu: "/lop-hanh-trang-vao-lop-1/",
          key: 1,
        },
        {
          title: "Lớp cơ bản",
          menu: "/co-ban/",
          key: 2,
        },
        {
          title: "Tư duy chuyên sâu",
          menu: "/chuyen-sau/",
          key: 3,
        },
        {
          title: "Luyện thi quốc tế",
          menu: "/luyen-thi-quoc-te/",
          key: 4,
        },
      ],
    };
  },
};
</script>
