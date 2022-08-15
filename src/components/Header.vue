<template>
  <header class="header">
    <div class="container header__wrapper">
      <a class="header__link" href="#">
        <img
          class="header__logo-mb"
          src="../assets/images/logo-mobile.svg"
          alt=""
        />
        <img
          class="header__logo-tab"
          src="../assets/images/logo-tablet.svg"
          alt=""
        />
        <img
          class="header__logo-desktop"
          src="../assets/images/logo-desktop.svg"
          alt=""
        />
      </a>

      <img class="header__logo" src="../assets/images/logo-2.svg" alt="" />

      <Menu class="menu-desktop" />
      <button class="header__button" @click="toggleMenu">
        <img
          class="header__button-image"
          src="../assets/images/btn-image.svg"
          alt=""
        />
      </button>
    </div>
    <Menu
      class="dropdown"
      :class="{ 'dropdown-after': menuOpen }"
      @menu-close="toggleMenu"
    />
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  name: "HeaderBlock",
  components: { Menu },
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
  //overflow: hidden;

  @media screen and (min-width: $mobile-small) {
  }

  @media screen and (min-width: $tablet) {
  }

  @media screen and (min-width: $laptop-big) {
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 0) {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    @media screen and (min-width: $tablet) {
      padding-top: 25px;
      padding-bottom: 0;
    }

    @media screen and (min-width: $laptop-big) {
      padding-top: 51px;
    }

    .menu-desktop {
      @media screen and (min-width: 0) {
        display: none;
      }

      @media screen and (min-width: $tablet) {
        display: block;
        width: percentage(440/708);
      }

      @media screen and (min-width: $laptop-big) {
        width: percentage(478/1220);
      }
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo-mb,
  &__logo {
    @media screen and (min-width: $tablet) {
      display: none;
    }
  }

  &__logo-tab {
    @media screen and (min-width: 0) {
      display: none;
    }
    @media screen and (min-width: $tablet) {
      display: block;
    }

    @media screen and (min-width: $laptop-big) {
      display: none;
    }
  }

  &__logo-desktop {
    @media screen and (min-width: 0) {
      display: none;
    }

    @media screen and (min-width: $laptop-big) {
      display: block;
    }
  }

  &__button {
    @media screen and (min-width: $tablet) {
      display: none;
    }
  }
}

.dropdown {
  @media screen and (min-width: 0) {
    height: 0;
    opacity: 0;
    transition: height 0.5s, opacity 0.2s;
  }

  @media screen and (min-width: $tablet) {
    display: none;
  }
}

.dropdown-after {
  @media screen and (min-width: 0) {
    height: 196px;
    opacity: 1;
    transition: height 0.5s, opacity 1s;
  }
}
</style>
