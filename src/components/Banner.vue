<template>
  <section class="container banner">
    <img class="banner__bg-desc" src="../assets/images/bg-desktop.jpg" alt="" />
    <img
      class="banner__bg-mobile"
      src="../assets/images/bg-mobile.jpg"
      alt=""
    />
    <div class="banner__wrapper">
      <h1 class="banner__title">
        Функциональное <br />
        питание для котов
      </h1>
      <p class="banner__subtitle">Занялся собой? Займись котом!</p>
      <img
        class="banner__image-mb"
        src="../assets/images/cat-mobile.png"
        alt=""
      />
      <button class="button-tab banner__button">подобрать программу</button>
    </div>
    <button class="button-mb banner__button">подобрать программу</button>
    <img
      class="banner__image-desc"
      src="../assets/images/index-can.png"
      alt=""
    />
  </section>
</template>

<script>
export default {
  name: "BannerBlock",
};
</script>

<style lang="scss">
.banner {
  position: relative;

  @media screen and (min-width: 0) {
    padding-top: 27px;
  }

  @media screen and (min-width: $tablet) {
    padding-top: 38px;
    background: url(../assets/images/can-tablet.png);
    background-position: center bottom;
    background-repeat: no-repeat;
    min-height: 833px;
  }

  @media screen and (min-width: $laptop-big) {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin: -110px 0 0;
    padding-top: 141px;
    background: none;
    min-height: 696px;
  }

  &__wrapper {
    @media screen and (min-width: $tablet) {
      padding: 0 82px;
    }
  }

  &__bg-desc {
    position: absolute;

    @media screen and (min-width: 0) {
      display: none;
    }

    @media screen and (min-width: $laptop-big) {
      display: block;
      top: 0;
      right: 0;
    }
  }

  &__bg-mobile {
    @media screen and (min-width: 0) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0 auto;
      display: block;
      width: 100%;
      height: 305px;
      object-fit: cover;
      z-index: -1;
    }
    @media screen and (min-width: $tablet) {
      display: none;
    }
  }

  &__title {
    @media screen and (min-width: 0) {
      margin: 0;
      font-size: 36px;
      line-height: 36px;
      text-align: center;
      color: $color-white;
    }

    @media screen and (min-width: $tablet) {
      font-size: 60px;
      line-height: 60px;
      text-align: left;
      color: $color-black;
    }

    @media screen and (min-width: $laptop-big) {
      margin: 81px 0 0;
    }
  }

  &__subtitle {
    @media screen and (min-width: 0) {
      margin: 25px 0 0;
      font-size: 14px;
      line-height: 14px;
      text-align: center;
      color: $color-white;
    }

    @media screen and (min-width: $tablet) {
      margin: 25px 0 0;
      font-size: 20px;
      line-height: 20px;
      text-align: left;
      color: $color-black;
    }
  }

  &__image-mb {
    @media screen and (min-width: 0) {
      display: block;
      margin: 29px auto 0;
    }

    @media screen and (min-width: $tablet) {
      display: none;
    }
  }

  &__image-desc {
    z-index: 1;
    @media screen and (min-width: 0) {
      display: none;
    }

    @media screen and (min-width: $laptop-big) {
      display: block;
      margin: 0 0 0 -130px;
    }
  }

  &__button {
    display: block;
    background-color: $color-green;
    text-align: center;
    text-transform: uppercase;
    color: $color-white;

    @media screen and (min-width: 0) {
      width: 100%;
      padding: 11px 0;
      margin: 4px 0 0;
      font-size: 14px;
      line-height: 18px;
    }

    @media screen and (min-width: $tablet) {
      margin: 49px auto 0 0;
      top: 294px;
      left: 82px;
      padding: 14px 0;
      width: 244px;
      font-size: 20px;
      line-height: 26px;
    }
  }

  .button-mb {
    @media screen and (min-width: $tablet) {
      display: none;
    }
  }

  .button-tab {
    @media screen and (min-width: 0) {
      display: none;
    }

    @media screen and (min-width: $tablet) {
      display: block;
    }
  }
}
</style>
