<template>
  <div class="catalog">
    <Product />
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
export default {
  name: "CatalogView",
  components: { Product },
};
</script>
