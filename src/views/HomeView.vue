<template>
  <div class="home">
    <Banner />
    <Cards />
    <Instruction />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Cards from "@/components/Cards.vue";
import Instruction from "@/components/Instruction.vue";
export default {
  name: "HomeView",
  components: { Banner, Cards, Instruction },
};
</script>
