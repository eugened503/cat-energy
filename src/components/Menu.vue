<template>
  <nav>
    <ul class="menu">
      <li class="menu__item">
        <router-link
          class="menu__link"
          :class="{ catalogLink: styleLink }"
          to="/"
          @click="menuClose"
        >
          главная
        </router-link>
      </li>
      <li class="menu__item">
        <router-link
          class="menu__link"
          :class="{ catalogLink: styleLink }"
          to="/catalog"
          @click="menuClose"
        >
          каталог продукции
        </router-link>
      </li>
      <li class="menu__item">
        <router-link
          class="menu__link"
          :class="{ catalogLink: styleLink }"
          to="/selection"
          @click="menuClose"
        >
          подбор программы
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuBlock",
  methods: {
    menuClose() {
      this.$emit("menu-close");
    },
  },
  computed: {
    styleLink() {
      return this.$route.name != "home";
    },
  },
};
</script>

<style lang="scss">
.menu {
  @media screen and (min-width: $tablet) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    @media screen and (min-width: 0) {
      padding: 20px 0;
      border-top: 1px solid #e6e6e6;
      text-align: center;
    }

    @media screen and (min-width: $tablet) {
      padding: 0;
      border: none;
    }
  }

  &__link {
    display: inline-block;
    @media screen and (min-width: 0) {
      font-size: 18px;
      line-height: 25px;
      color: $color-black;
    }

    @media screen and (min-width: $tablet) {
      padding: 7px 0 10px;
    }

    @media screen and (min-width: $laptop-big) {
      padding: 0 0 10px;
      font-size: 20px;
      line-height: 30px;
      color: $color-white;
    }
  }

  .catalogLink {
    color: $color-black;
  }
}

.router-link-active,
.router-link-exact-active {
  border-bottom: 2px solid $color-green;

  @media screen and (min-width: 0) {
    border-bottom: 2px solid $color-green;
  }

  @media screen and (min-width: $laptop-big) {
    border-bottom: 2px solid $color-white;
  }

  &.catalogLink {
    border-bottom: 2px solid $color-green;
  }
}
</style>
