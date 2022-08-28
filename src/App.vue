<template>
  <Header />
  <main class="main">
    <router-view />
  </main>
  <Cooperation />
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Cooperation from "@/components/Cooperation.vue";
export default {
  name: "App",
  components: { Header, Footer, Cooperation },
};
</script>

<style lang="scss">
#app {
  max-width: 1440px;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  //background: $color-purple;
}

.main {
  //background: $color-purple;
  //color: $color-white;
  //max-width: 1440px;
  //min-width: 320px;
  ///min-height: 100vh;
  //margin: 0 auto;
}
</style>
