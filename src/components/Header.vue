<template>
  <header class="header">
    <img class="header__logo" src="../assets/images/logo-mobile.svg" alt="" />
    <img class="header__logo" src="../assets/images/logo-2.svg" alt="" />
    <button class="header__button">
      <img
        class="header__button-image"
        src="../assets/images/btn-image.svg"
        alt=""
      />
    </button>
  </header>
</template>

<script>
export default {
  name: "HeaderBlock",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },

  watch: {
    menuOpen() {
      if (this.menuOpen) {
        document.body.style.overflow = "hidden";
        return;
      }

      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style lang="scss">
.header {
  // position: relative;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // max-width: 1440px;
  // min-width: 320px;
  // margin: 0 auto;

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
