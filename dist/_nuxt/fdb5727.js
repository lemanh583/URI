(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1301:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(39),n(68);function c(){var e=document.querySelectorAll(".banner-slider");e&&e.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),c=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev"),r=!0;t.classList.contains("loop-none")&&(r=!1,e.querySelector(".swiper-next").style="display: none",e.querySelector(".swiper-prev").style="display: none");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:c,prevEl:l},loop:r,spaceBetween:0,effect:"fade",slidesPerView:1,fadeEffect:{crossFade:!0}})}));var t=document.querySelectorAll(".hds-slider");t&&t.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),c=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev");new Swiper(t,{watchSlidesProgress:!0,speed:1200,pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:c,prevEl:l},loop:!1,spaceBetween:0,effect:"slide",slidesPerView:1,fadeEffect:{crossFade:!0}})}));var n=document.querySelectorAll(".gv-slider");console.log("gvSlider",n),n&&n.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),c=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev"),r=!0;t.classList.contains("loop-none")&&(r=!1,e.querySelector(".swiper-next").style="display: none",e.querySelector(".swiper-prev").style="display: none");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:c,prevEl:l},loop:r,spaceBetween:24,effect:"slide",slidesPerView:3,fadeEffect:{crossFade:!0},breakpoints:{0:{slidesPerView:1.2,spaceBetween:10,centeredSlides:!1},500:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.5},1200:{slidesPerView:3}}})}));var c=document.querySelectorAll(".prog-slider");c&&c.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),c=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev"),r=!0;t.classList.contains("loop-none")&&(r=!1,e.querySelector(".swiper-next").style="display: none",e.querySelector(".swiper-prev").style="display: none");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:c,prevEl:l},loop:r,spaceBetween:0,effect:"fade",slidesPerView:1,fadeEffect:{crossFade:!0}})}));var l=document.querySelectorAll(".add-slider");l&&l.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),c=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev"),r=!0;t.classList.contains("loop-none")&&(r=!1,e.querySelector(".swiper-next").style="display: none",e.querySelector(".swiper-prev").style="display: none");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:c,prevEl:l},loop:r,spaceBetween:0,effect:"slide",slidesPerView:1,fadeEffect:{crossFade:!0}})}));var r=document.querySelectorAll(".pro-slider");r&&r.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),c=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:c,prevEl:l},loop:!1,spaceBetween:24,effect:"slide",slidesPerView:4,fadeEffect:{crossFade:!0},breakpoints:{0:{slidesPerView:1.2,spaceBetween:10,centeredSlides:!1},500:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.8},1200:{slidesPerView:4}}})}));var o=document.querySelectorAll(".hb-slider");o&&o.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),c=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:c,prevEl:l},loop:!1,spaceBetween:24,effect:"slide",slidesPerView:3,fadeEffect:{crossFade:!0},breakpoints:{0:{slidesPerView:1.2,spaceBetween:10,centeredSlides:!1},500:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.8},1200:{slidesPerView:3}}})}));var d=document.querySelectorAll(".value-slider");d&&d.forEach((function(e){var t=e.querySelector(".swiper"),n=e.querySelector(".swiper-pagination"),c=e.querySelector(".swiper-next"),l=e.querySelector(".swiper-prev");new Swiper(t,{watchSlidesProgress:!0,speed:1200,autoplay:{delay:5e3},pagination:{el:n,type:"bullets",clickable:!0},navigation:{nextEl:c,prevEl:l},loop:!1,spaceBetween:24,effect:"slide",slidesPerView:6,fadeEffect:{crossFade:!0},breakpoints:{0:{slidesPerView:1.2,spaceBetween:10,centeredSlides:!1},500:{slidesPerView:2,spaceBetween:10},768:{slidesPerView:2.8},1200:{slidesPerView:6}}})}))}},1302:function(e,t,n){"use strict";var c=n(15),l=n(1303);c({target:"String",proto:!0,forced:n(1304)("link")},{link:function(e){return l(this,"a","href",e)}})},1303:function(e,t,n){var c=n(21),l=n(49),r=n(34),o=/"/g,d=c("".replace);e.exports=function(e,t,n,c){var h=r(l(e)),w="<"+t;return""!==n&&(w+=" "+n+'="'+d(r(c),o,"&quot;")+'"'),w+">"+h+"</"+t+">"}},1304:function(e,t,n){var c=n(20);e.exports=function(e){return c((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},1314:function(e,t,n){var content=n(1337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("4297ebfa",content,!0,{sourceMap:!1})},1336:function(e,t,n){"use strict";n(1314)},1337:function(e,t,n){var c=n(18)((function(i){return i[1]}));c.push([e.i,".side-nine[data-v-104981d4]{width:100%}",""]),c.locals={},e.exports=c},1369:function(e,t,n){"use strict";n.r(t);n(1302);var c=n(1301),l={layout:"Main",data:function(){return{list:[{title:"CHIẾN BINH URI KẾT THÚC CHẶNG ĐUA CHUNG KẾT QUỐC TẾ TIMO 2023 VỚI KẾT QUẢ ẤN TƯỢNG",des:"Với tinh thần quyết tâm cao và sau những cố gắng rèn luyện, các chiến binh URI đã kết thúc hành trình chinh phục cuộc thi CHUNG KẾT QUỐC TẾ TIMO 2023 với kết quả ấn tượng",link:"/chien-binh-uri-ket-thuc-chang-dua-chung-ket-quoc-te",img:"https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/341161805_766349888424437_9213074952146074807_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=QZ4JQVbkAY0AX9jSQpf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfD74czxnavcDDi1K3MQbw2rw2tDSx_6aPh8ZoEWYPc2Pg&oe=6440234D"},{title:"DANH SÁCH CÁC “CHIẾN BINH NHÍ” URI LỌT VÀO VÒNG CHUNG KẾT CUỘC GIA KÌ THI TOÁN HỌC QUỐC TẾ HKIMO",des:"Kỳ thi Olympic Toán học quốc tế HKIMO (Hongkong International Mathematical Olympiad) là kỳ thi được tổ chức hàng năm nhằm mục đích tạo ra một sân chơi bổ ích dành cho tất cả học sinh yêu thích bộ môn Toán học",link:"/danh-sach-cac-chien-binh-nhi-lot-vao-chung-ket-hkimo",img:"https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/336173625_236705368806080_1232643124292024209_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=dk8VNrROnFgAX9CwuPv&_nc_ht=scontent.fhan5-2.fna&oh=00_AfAy2VRdkbUud_e3zb1jn0wcaaF7c4XM-w_jXDdJ9o7Yfw&oe=64415699"},{title:"🎉🎉 'CƠN MƯA HUY CHƯƠNG' TẠI #VÒNG_CHUNG_KẾT_QUỐC_GIA KỲ THI TOÁN QUỐC TẾ BIG BAY BEI 2022",des:"Trải qua vòng Chung kết Quốc gia,10 Chiến binh nhí nhà URI đã vượt qua hàng nghìn thí sinh xuất sắc khác, tự tin bản lĩnh giành chiến thắng tại Vòng Chung Kết Quốc Gia kỳ thi Toán Quốc Tế Big Bay Bei, mang về các thành tích đáng tự hào",link:"/#",img:"https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/341161805_766349888424437_9213074952146074807_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=QZ4JQVbkAY0AX9jSQpf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfD74czxnavcDDi1K3MQbw2rw2tDSx_6aPh8ZoEWYPc2Pg&oe=6440234D"}]}},mounted:function(){Object(c.a)()}},r=(n(1336),n(33)),component=Object(r.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("main",{staticClass:"main"},[t("div",{staticClass:"program"},[e._m(0),e._v(" "),t("section",{staticClass:"ss-gv"},[t("div",{staticClass:"gv"},[t("div",{staticClass:"container"},[t("div",{staticClass:"gv-wrapper ss-pd"},[t("h2",{staticClass:"t-title t-center mb-32"},[e._v("SỰ KIỆN NỔI BẬT")]),e._v(" "),t("div",{staticClass:"gv-slider"},[t("div",{staticClass:"swiper loop"},[t("div",{staticClass:"swiper-wrapper"},e._l(e.list,(function(i){return t("div",{key:i.link,staticClass:"swiper-slide"},[t("div",{staticClass:"pro-wrap gv-wrap"},[t("a",{staticClass:"pro-img",attrs:{href:i.link}},[t("img",{staticClass:"img wp-post-image",attrs:{width:"274",height:"180",src:i.img,alt:"","data-lazy-srcset":"https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-274x180.jpg 274w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-300x197.jpg 300w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-50x33.jpg 50w, https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600.jpg 522w","data-lazy-sizes":"(max-width: 274px) 100vw, 274px","data-lazy-src":"https://ischool.vn/wp-content/uploads/2022/09/308672414_1534805303621326_8340140526628602098_n-e1668417158600-274x180.jpg"}})]),e._v(" "),t("div",{staticClass:"pro-content t-center"},[t("h3",{staticClass:"pro-name second"},[t("a",{attrs:{href:i.link}},[e._v(" "+e._s(i.title)+" ")])]),e._v(" "),t("div",{staticClass:"pro-level"}),e._v(" "),t("div",{staticClass:"pro-des"},[e._v(e._s(i.des))])])])])})),0)]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("div",{staticClass:"swiper-pagination"})])])])])]),e._v(" "),t("section",{staticClass:"ss-news"},[t("div",{staticClass:"news-main ss-pd"},[t("div",{staticClass:"container"},[t("h2",{staticClass:"t-title t-center mb-32"},[e._v("TẤT CẢ SỰ KIỆN")]),e._v(" "),t("div",{staticClass:"dsmall side"},[t("div",{staticClass:"dsmall-item side-nine"},[t("div",{staticClass:"dsmall pro-list"},e._l(e.list,(function(i){return t("div",{key:i.link,staticClass:"dsmall-item pro-item pro-item-3",attrs:{"data-aos":"fade","data-aos-delay":"400"}},[t("div",{staticClass:"pro-wrap"},[t("a",{staticClass:"pro-img",attrs:{href:i.link}},[t("img",{staticClass:"img wp-post-image",attrs:{width:"207",height:"180",src:i.img,alt:"Khen thưởng giáo viên tổ Tiếng Anh","data-lazy-srcset":"https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-207x180.jpg 207w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-300x261.jpg 300w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-1024x891.jpg 1024w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-768x668.jpg 768w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-1536x1337.jpg 1536w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-643x560.jpg 643w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-50x44.jpg 50w, https://ischool.vn/wp-content/uploads/2023/03/IMG_3748.jpg 1920w","data-lazy-sizes":"(max-width: 207px) 100vw, 207px","data-lazy-src":"https://ischool.vn/wp-content/uploads/2023/03/IMG_3748-207x180.jpg"}})]),e._v(" "),t("div",{staticClass:"pro-content"},[t("h3",{staticClass:"pro-name"},[t("a",{attrs:{href:i.link}},[e._v(e._s(i.title)+" ")])]),e._v(" "),t("div",{staticClass:"pro-des"},[e._v("\n                          "+e._s(i.des)+"\n                        ")])])])])})),0),e._v(" "),e._m(3)])])])])])])])])}),[function(){var e=this,t=e._self._c;return t("section",{staticClass:"banner"},[t("div",{staticClass:"banner-slider"},[t("div",{staticClass:"swiper loop-none"},[t("div",{staticClass:"swiper-wrapper"},[t("div",{staticClass:"swiper-slide"},[t("div",{staticClass:"banner-wrap right"},[t("div",{staticClass:"banner-img"},[t("img",{staticClass:"img wp-post-image",attrs:{width:"750",height:"563",src:"https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/341161805_766349888424437_9213074952146074807_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=QZ4JQVbkAY0AX9jSQpf&_nc_ht=scontent.fhan5-11.fna&oh=00_AfD74czxnavcDDi1K3MQbw2rw2tDSx_6aPh8ZoEWYPc2Pg&oe=6440234D",alt:"","data-lazy-srcset":"https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0.jpg 750w, https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0-300x225.jpg 300w, https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0-746x560.jpg 746w, https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0-50x38.jpg 50w, https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0-240x180.jpg 240w","data-lazy-sizes":"(max-width: 750px) 100vw, 750px","data-lazy-src":"https://ischool.vn/wp-content/uploads/2022/12/dln05820-1607763489_750x0.jpg"}})]),e._v(" "),t("div",{staticClass:"banner-posi"},[t("div",{staticClass:"container"},[t("div",{staticClass:"banner-content"},[t("div",{staticClass:"t-title-primary"},[t("a",{staticClass:"banner-title banner-title-second small",attrs:{href:"https://ischool.vn/chi-tiet-su-kien/livestream-chuong-trinh-qua-tang-giang-sinh-2022/"}},[e._v("\n                            CHIẾN BINH URI KẾT THÚC CHẶNG ĐUA CHUNG KẾT QUỐC TẾ TIMO 2023 VỚI KẾT QUẢ ẤN TƯỢNG\n                          ")])]),e._v(" "),t("div",{staticClass:"banner-des"},[e._v("\n                          Với tinh thần quyết tâm cao và sau những cố gắng rèn luyện, các chiến binh URI đã kết thúc hành trình chinh phục cuộc thi\n                          CHUNG KẾT QUỐC TẾ TIMO 2023 với kết quả ấn tượng\n                        ")])])])])])])])]),e._v(" "),t("div",{staticClass:"banner-control swiper-control"},[t("div",{staticClass:"swiper-prev"},[t("i",{staticClass:"ti-angle-left"})]),e._v(" "),t("div",{staticClass:"swiper-next"},[t("i",{staticClass:"ti-angle-right"})])])])])},function(){var e=this._self._c;return e("div",{staticClass:"gv-slider-btn swiper-prev"},[e("i",{staticClass:"ti-angle-left"})])},function(){var e=this._self._c;return e("div",{staticClass:"gv-slider-btn swiper-next"},[e("i",{staticClass:"ti-angle-right"})])},function(){var e=this._self._c;return e("div",{staticClass:"page-numbers m-top"},[e("ul",{staticClass:"page-numbers"},[e("li",[e("span",{staticClass:"page-numbers current",attrs:{"aria-current":"page"}},[this._v("1")])])])])}],!1,null,"104981d4",null);t.default=component.exports}}]);