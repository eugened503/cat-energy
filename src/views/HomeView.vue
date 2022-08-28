<template>
  <div class="home">
    <Banner />
    <Cards />
    <Instruction />
    <Demo />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Cards from "@/components/Cards.vue";
import Instruction from "@/components/Instruction.vue";
import Demo from "@/components/Demo.vue";
export default {
  name: "HomeView",
  components: { Banner, Cards, Instruction, Demo },
};
</script>
