<template>
  <div class="banner">
    <h1 class="banner__title">Функциональное питание для котов</h1>
    <p class="banner__subtitle">Занялся собой? Займись котом!</p>
    <img class="banner__image" src="../assets/images/cat-mobile.png" alt="" />
    <button class="banner__button">подобрать программу</button>
  </div>
</template>

<script>
export default {
  name: "BannerBlock",
};
</script>

<style lang="scss">
.banner {
  background: url(../assets/images/bg-mobile.jpg);
  background-position: center top;
  background-repeat: no-repeat;
  //min-height: 480px;

  @media screen and (min-width: $mobile-small) {
    //width: 900px;
  }

  @media screen and (min-width: $tablet) {
    //width: 900px;
  }

  @media screen and (min-width: $laptop-big) {
    //width: 900px;
  }
}
</style>
