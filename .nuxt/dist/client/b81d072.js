(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1333:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(56),n(130),n(168),n(35),n(57);function r(e){var t=document.location.pathname.replace(/\//g,""),n=["su-kien","tin-tuc","hinh-anh","","co-so-vat-chat","hinh-anh-hoat-dong"];if(console.log("____a____",n.includes(t)),!n.includes(t)||e){var r=document.querySelectorAll(".banner-slider");r&&r.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev"),o=!0;t.classList.contains("loop-none")&&(o=!1,e.querySelector(".swiper-next").style="display: none",e.querySelector(".swiper-prev").style="display: none");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:r,prevEl:l},loop:o,spaceBetween:0,effect:"fade",slidesPerView:1,fadeEffect:{crossFade:!0}})}));var l=document.querySelectorAll(".hds-slider");l&&l.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev");new Swiper(t,{watchSlidesProgress:!0,speed:1200,pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:r,prevEl:l},loop:!1,spaceBetween:0,effect:"slide",slidesPerView:1,fadeEffect:{crossFade:!0}})}));var o=document.querySelectorAll(".gv-slider");console.log("gvSlider",o),o&&o.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev"),o=!0;t.classList.contains("loop-none")&&(o=!1,e.querySelector(".swiper-next").style="display: none",e.querySelector(".swiper-prev").style="display: none");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:r,prevEl:l},loop:o,spaceBetween:24,effect:"slide",slidesPerView:3,fadeEffect:{crossFade:!0},breakpoints:{0:{slidesPerView:1.2,spaceBetween:10,centeredSlides:!1},500:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.5},1200:{slidesPerView:3}}})}));var c=document.querySelectorAll(".prog-slider");c&&c.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev"),o=!0;t.classList.contains("loop-none")&&(o=!1,e.querySelector(".swiper-next").style="display: none",e.querySelector(".swiper-prev").style="display: none");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:r,prevEl:l},loop:o,spaceBetween:0,effect:"fade",slidesPerView:1,fadeEffect:{crossFade:!0}})}));var d=document.querySelectorAll(".add-slider");d&&d.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev"),o=!0;t.classList.contains("loop-none")&&(o=!1,e.querySelector(".swiper-next").style="display: none",e.querySelector(".swiper-prev").style="display: none");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:r,prevEl:l},loop:o,spaceBetween:0,effect:"slide",slidesPerView:1,fadeEffect:{crossFade:!0}})}));var w=document.querySelectorAll(".pro-slider");w&&w.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:r,prevEl:l},loop:!1,spaceBetween:24,effect:"slide",slidesPerView:4,fadeEffect:{crossFade:!0},breakpoints:{0:{slidesPerView:1.2,spaceBetween:10,centeredSlides:!1},500:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.8},1200:{slidesPerView:4}}})}));var v=document.querySelectorAll(".hb-slider");v&&v.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:r,prevEl:l},loop:!1,spaceBetween:24,effect:"slide",slidesPerView:3,fadeEffect:{crossFade:!0},breakpoints:{0:{slidesPerView:1.2,spaceBetween:10,centeredSlides:!1},500:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.8},1200:{slidesPerView:3}}})}));var h=document.querySelectorAll(".value-slider");h&&h.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),r=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:r,prevEl:l},loop:!1,spaceBetween:24,effect:"slide",slidesPerView:6,fadeEffect:{crossFade:!0},breakpoints:{0:{slidesPerView:1.2,spaceBetween:10,centeredSlides:!1},500:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.8},1200:{slidesPerView:6}}})}))}}},1422:function(e,t,n){"use strict";n.r(t);n(84);var r=n(32),l=(n(694),n(35),n(132),n(131),n(1333)),o={layout:"Main",data:function(){return{page:1,limit:12,total:0,list:[],loading:!0,newPost:{url_image:"",title:"",slug:"",descriptions:""},countNewPost:!0,category:[],loadingCategory:!0,viewPost:[]}},methods:{getViewPost:function(){var e=this;this.$axios.post(this.$config.baseURL+"/post/list",{page:1,limit:5,sort:{view:-1},filter:{slug_category:"tin-tuc"}}).then((function(t){e.viewPost=t.data.list})).catch((function(e){return console.error(e)}))},getOnePost:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.post(e.$config.baseURL+"/post/list",{page:1,limit:1,filter:{slug_category:"tin-tuc"}}).then((function(t){var n;e.newPost=null===(n=t.data)||void 0===n?void 0:n.list[0]})).catch((function(e){return console.error(e)}));case 2:case"end":return t.stop()}}),t)})))()},getPost:function(){var e=this;this.loading=!0,this.$route.query.page&&(this.page=Number(this.$route.query.page)||1),window.innerWidth<=768&&(this.limit=8),this.$axios.post(this.$config.baseURL+"/post/list",{page:this.page,limit:this.limit,filter:{slug_category:"tin-tuc"}}).then((function(t){e.list=t.data.list,e.total=t.data.total})).catch((function(e){return console.error(e)})).finally((function(){return e.loading=!1}))},getCategory:function(){var e=this;this.loadingCategory=!0,this.$axios.get(this.$config.baseURL+"/category/list").then((function(t){e.category=t.data.list})).catch((function(e){return console.error(e)})).finally((function(){return e.loadingCategory=!1}))},changePagination:function(){var e=this;this.$router.push({path:"/tin-tuc",query:{page:this.page}}),setTimeout((function(){e.getPost()}),100)}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getOnePost();case 2:e.getPost(),e.getCategory(),e.getViewPost(),Object(l.a)(!0);case 6:case"end":return t.stop()}}),t)})))()}},c=n(33),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",[t("main",{staticClass:"main"},[t("div",{staticClass:"news"},[t("section",{staticClass:"banner"},[t("div",{staticClass:"banner-slider"},[t("div",{staticClass:"swiper loop-none"},[t("div",{staticClass:"swiper-wrapper"},[t("div",{staticClass:"swiper-slide"},[t("div",{staticClass:"banner-wrap right"},[t("div",{staticClass:"banner-img"},[t("img",{staticClass:"img wp-post-image",attrs:{width:"750",height:"563",src:e.newPost.url_image,alt:""}})]),e._v(" "),t("div",{staticClass:"banner-posi"},[t("div",{staticClass:"container"},[t("div",{staticClass:"banner-content"},[t("div",{staticClass:"t-title-primary"},[t("a",{staticClass:"banner-title banner-title-second small",attrs:{href:"/"+e.newPost.slug}},[e._v("\n                            "+e._s(e.newPost.title)+"\n                          ")])]),e._v(" "),t("div",{staticClass:"banner-des"},[e._v("\n                          "+e._s(e.newPost.descriptions)+"\n                        ")])])])])])])])]),e._v(" "),e._m(0)])]),e._v(" "),t("section",{staticClass:"ss-news"},[t("div",{staticClass:"news-main ss-pd"},[t("div",{staticClass:"container"},[t("h2",{staticClass:"t-title mb-32",attrs:{"data-aos":"fade-down-cus"}},[e._v("Tin tức URI")]),e._v(" "),e.loading?t("div",{staticClass:"loading-container"},[t("a-spin",{staticClass:"loading",attrs:{indicator:e.loading}})],1):t("div",{staticClass:"dsmall side"},[t("div",{staticClass:"dsmall-item side-nine"},[e.list.length?t("div",{staticClass:"dsmall pro-list"},e._l(e.list,(function(n){return t("div",{key:n._id,staticClass:"dsmall-item pro-item pro-item-3",attrs:{"data-aos":"fade","data-aos-delay":"400"}},[t("div",{staticClass:"pro-wrap"},[t("a",{staticClass:"pro-img",attrs:{href:"/"+n.slug}},[t("img",{staticClass:"img wp-post-image",attrs:{width:"207",height:"180",src:n.url_image,alt:"Khen thưởng giáo viên tổ Tiếng Anh"}})]),e._v(" "),t("div",{staticClass:"pro-content"},[t("h3",{staticClass:"pro-name"},[t("a",{attrs:{href:"/"+n.slug}},[e._v(" "+e._s(n.title)+" ")])]),e._v(" "),t("div",{staticClass:"pro-des"},[e._v("\n                          "+e._s(n.descriptions)+"\n                        ")])])])])})),0):t("div",[e._v("Không có kết quả")]),e._v(" "),e.list.length?t("div",{staticClass:"page-numbers m-top"},[t("a-pagination",{attrs:{pageSize:e.limit,total:e.total,"show-less-items":""},on:{change:e.changePagination},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e()]),e._v(" "),t("div",{staticClass:"dsmall-item side-three"},[t("div",{staticClass:"sidebar none-news",attrs:{"data-aos":"fade-up-cus"}},[t("div",{staticClass:"side-fixed"},[t("div",{staticClass:"side-fixed-wrap"},[t("div",{staticClass:"widget blog-sidebar widget_m_category_list",attrs:{id:"m_category_list-3"}},[t("div",{staticClass:"sidebar-block"},[e._m(1),e._v(" "),t("div",{staticClass:"sidebar-body"},[t("div",{staticClass:"sidebar-menu"},[t("div",{staticClass:"sidebar-menu-list"},e._l(e.category,(function(i){return t("a",{key:i._id,staticClass:"sidebar-menu-link",attrs:{href:"/"+i.slug}},[t("i",{staticClass:"fal fa-long-arrow-right"}),e._v(" "),t("p",{staticClass:"text"},[e._v(e._s(i.name))])])})),0)])])])])]),e._v(" "),e._m(2)]),e._v(" "),e._m(3),e._v(" "),t("div",{staticClass:"side-overlay"}),e._v(" "),t("div",{staticClass:"sidebar-block"},[e._m(4),e._v(" "),t("div",{staticClass:"sidebar-body"},[t("div",{staticClass:"dsmall news-list"},e._l(e.viewPost,(function(n,i){return t("div",{key:i,staticClass:"dsmall-item news-item"},[t("div",{staticClass:"news-wrap"},[t("a",{staticClass:"news-img",attrs:{href:"/"+n.slug}},[t("img",{staticClass:"attachment-full size-full wp-post-image",attrs:{width:"800",height:"500",src:n.url_image,alt:"","data-lazy-srcset":"https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg 800w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-300x188.jpeg 300w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-768x480.jpeg 768w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-50x31.jpeg 50w, https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb-280x175.jpeg 280w","data-lazy-sizes":"(max-width: 800px) 100vw, 800px","data-lazy-src":"https://ischool.vn/wp-content/uploads/2023/01/lich-nghi-tet-nguyen-dan-2023-cua-hoc-sinh-thumb.jpeg"}})]),e._v(" "),t("div",{staticClass:"news-content"},[t("a",{staticClass:"news-name",attrs:{href:"/"+n.slug}},[e._v("\n                                "+e._s(n.title)+"\n                              ")])])])])})),0)])])])])])])])])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"banner-control swiper-control"},[e("div",{staticClass:"swiper-prev"},[e("i",{staticClass:"ti-angle-left"})]),this._v(" "),e("div",{staticClass:"swiper-next"},[e("i",{staticClass:"ti-angle-right"})])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-head"},[t("img",{staticClass:"icon",attrs:{width:"15",height:"15",src:"https://ischool.vn/template/assets/images/icon-dm.svg",alt:"","data-lazy-src":"https://ischool.vn/template/assets/images/icon-dm.svg"}}),e._v(" "),t("p",{staticClass:"sidebar-title"},[e._v("Danh mục")])])},function(){var e=this._self._c;return e("div",{staticClass:"side-close"},[e("i",{staticClass:"fas fa-times close icon"})])},function(){var e=this._self._c;return e("div",{staticClass:"side-open"},[e("div",{staticClass:"side-open-wrap"},[e("img",{staticClass:"icon",attrs:{width:"15",height:"15",src:"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2015%2015'%3E%3C/svg%3E",alt:"","data-lazy-src":"https://ischool.vn/template/assets/images/icon-dm.svg"}})])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-head"},[t("img",{staticClass:"icon",attrs:{width:"15",height:"15",src:"https://ischool.vn/template/assets/images/icon-dm.svg",alt:"","data-lazy-src":"https://ischool.vn/template/assets/images/icon-dm.svg"}}),e._v(" "),t("p",{staticClass:"sidebar-title"},[e._v("Bài viết nổi bật")])])}],!1,null,null,null);t.default=component.exports}}]);