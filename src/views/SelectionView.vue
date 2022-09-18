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
  @media screen and (min-width: 0) {
    border-top: 1px solid #d9d9d9;
  }

  @media screen and (min-width: $tablet) {
    border: none;
  }

  &__title {
    @media screen and (min-width: 0) {
      margin: 27px 0 0;
      font-size: 36px;
      line-height: 36px;
    }

    @media screen and (min-width: $tablet) {
      margin: 64px 0 0;
      font-size: 60px;
      line-height: 60px;
    }

    @media screen and (min-width: $laptop-big) {
      margin: 73px 0 0;
    }
  }

  &__text {
    text-transform: uppercase;
    @media screen and (min-width: 0) {
      margin: 37px 0 0;
      font-size: 14px;
      line-height: 18px;
    }

    @media screen and (min-width: $tablet) {
      max-width: 332px;
      margin: 54px 0 0 40px;
      font-size: 20px;
      line-height: 30px;
    }

    @media screen and (min-width: $laptop-big) {
      margin: 54px 0 0;
    }
  }
}
</style>
