export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'uri-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      // }
    ],
    script: [
      // {
      //   src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      //   type: "text/javascript"
      // },
      {
        src: "https://code.jquery.com/jquery-3.1.1.js",
        type: "text/javascript"
      },
      {
        src: "https://code.jquery.com/jquery-3.1.1.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/js/jquery/jquery.min.js",
        type: "text/javascript"
      },
      {
        src:
          "/js/jquery/jquery-migrate.min.js",
        type: "text/javascript"
      },
  
      {
        src: "/plugins/contact-form-7/includes/swv/js/index.js",
        type: "text/javascript"
      },

      {
        src: "/plugins/contact-form-7/includes/js/index.js",
        type: "text/javascript"
      },
      {
        src: "/plugins/ewww-image-optimizer/includes/lazysizes.min.js",
        type: "text/javascript"
      },
      {
        src: "/plugins/sitepress-multilingual-cms/res/js/cookies/language-cookie.js",
        type: "text/javascript"
      },
      {
        src: "/plugins/wp-rocket/assets/js/lazyload/17.5/lazyload.min.js",
        type: "text/javascript"
      },
      {
        src: "/plugins/wp-rocket/assets/js/heartbeat.js",
        type: "text/javascript"
      },
      {
        src: "/plugins/wpcf7-recaptcha/assets/js/wpcf7-recaptcha-controls.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/modules/default.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/mona-frontend.js",
        type: "text/javascript"
      },
      {
        src: "/js/inline-script.js",
        type: "module"
      },
      {
        src: "/template/js/main.js",
        type: "module"
      },

      // {
      //   src: "/template/js/module/AosModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/BtnToTopModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/CheckModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/CountUpModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/FaqsModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/GalleryModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/HeaderModule.js",
      //   type: "module"
      // },
      // {
      //   src: "/template/js/module/IsotopeModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/LetterModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/LoadModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/MapLoadModule.js",
      //   type: "text/javascript"
      // }, {
      //   src: "/template/js/module/MobileModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/PlusMinusModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/PopupModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/SearchModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/Select2Module.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/SelectCusModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/ShowHideModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/SideModule.js",
      //   type: "text/javascript"
      // },{
      //   src: "/template/js/module/SwiperModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/TabModule.js",
      //   type: "text/javascript"
      // },
      // {
      //   src: "/template/js/module/WowModule.js",
      //   type: "text/javascript"
      // },
      
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/simplePagination.js/1.6/jquery.simplePagination.min.js?a',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/anime/anime.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/aos/aos.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/countup/jquery.counterup.min.js',
        type: "text/javascript"
      },

      {
        src: '/template/js/library/countup/jquery.waypoints.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/datetime/daterangepicker.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/datetime/moment.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/gallery/lightgallery-all.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/isotope/isotope.pkgd.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/magnific/jquery.magnific-popup.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/popper/popper.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/select2/select2.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/slick/slick.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/smoothscroll/SmoothScroll.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/swiper/swiper-bundle.min.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/vanilla/vanilla.js',
        type: "text/javascript"
      },
      {
        src: '/template/js/library/wow/wow.min.js',
        type: "text/javascript"
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/static/style.css',
    '@/static/monaCustom.css',
    '@/static/style.min.css',
    '@/static/css/404.css',
    '@/static/css/loading-btn.css',
    '@/static/css/loading-group.css',
    '@/static/css/mona-custom.css',
    '@/static/plugins/contact-form-7/includes/css/styles.css',
    '@/static/template/assets/font/Averta/stylesheet.css',
    '@/static/template/assets/font/Playfair-display/stylesheet.css',
    '@/static/template/assets/font/SVN-Aleo/stylesheet.css',
    '@/static/template/assets/font/Themify/stylesheet.css',
    '@/static/template/css/backdoor.css',
    '@/static/template/css/style.css',
    '@/static/template/js/library/aos/aos.css',
    '@/static/template/js/library/fontawesome/css/all.css',
    '@/static/template/js/library/gallery/lightgallery.min.css',
    '@/static/template/js/library/magnific/magnific-popup.css',
    '@/static/template/js/library/select2/select2.min.css',
    '@/static/template/js/library/slick/slick.css',
    '@/static/template/js/library/swiper/swiper-bundle.min.css',
    '@/static/template/js/library/themifi/themify-icons.css',
    '@/static/template/js/library/wow/animate.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    {src :'@/plugins/vue-agile', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
