<template>
  <div class="container selection">
    <h1 class="selection__title">Подбор программы</h1>
    <p class="selection__text">
      Заполните анкету и мы подберем программу питания для вашего кота
    </p>
    <Form />
  </div>
</template>

<script>
import Form from "../components/Form.vue";
export default {
  name: "CatalogView",
  components: { Form },
};
</script>
<style lang="scss">
.selection {
  &__title {
    margin: 27px 0 0;
    font-size: 36px;
    line-height: 36px;
  }

  &__text {
    margin: 37px 0 0;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
  }
}
</style>
