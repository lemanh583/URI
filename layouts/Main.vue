<template>
  <div>
    <Header />
    <MenuMobile />
      <Nuxt />
    <Footer />
    <ButtonScroll />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import MenuMobile from '../components/MenuMobile.vue';
import Footer from '../components/Footer.vue';
import ButtonScroll from '../components/ButtonScroll.vue';
export default {
  components: {
    Header,
    Footer,
    ButtonScroll,
    MenuMobile
  }
}

</script>