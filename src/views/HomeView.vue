<template>
  <div class="home">
    <Banner />
    <Cards />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Cards from "@/components/Cards.vue";
export default {
  name: "HomeView",
  components: { Banner, Cards },
};
</script>
