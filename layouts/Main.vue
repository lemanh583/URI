<template>
  <div>
    <Header />
    <MenuMobile />
    <Nuxt />
    <Footer />
    <ButtonScroll />

    <!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MenuMobile from "../components/MenuMobile.vue";
import Footer from "../components/Footer.vue";
import ButtonScroll from "../components/ButtonScroll.vue";

// import SwiperModule from "../static/template/js/module/SwiperModule";

export default {
  components: {
    Header,
    Footer,
    ButtonScroll,
    MenuMobile,
  },
  mounted() {
    // SwiperModule();
    let script = document.createElement("script");
    script.text = `
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "486958681644666");
        chatbox.setAttribute("attribution", "biz_inbox");



        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v16.0'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    `;
    document.body.appendChild(script);
  },
};
</script>
