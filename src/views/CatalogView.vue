<template>
  <div class="catalog">
    <Product />
    <!-- <AddProduct /> -->
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
//import AddProduct from "@/components/AddProduct.vue";
export default {
  name: "CatalogView",
  components: { Product },
};
</script>
