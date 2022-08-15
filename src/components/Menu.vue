<template>
  <nav>
    <ul class="menu">
      <li class="menu__item">
        <router-link class="menu__link" to="/" @click="menuClose">
          главная
        </router-link>
      </li>
      <li class="menu__item">
        <router-link class="menu__link" to="/catalog" @click="menuClose">
          каталог продукции
        </router-link>
      </li>
      <li class="menu__item">
        <router-link class="menu__link" to="/form" @click="menuClose">
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
};
</script>

<style lang="scss">
.menu {
  @media screen and (min-width: $tablet) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: $laptop-big) {
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

    @media screen and (min-width: $laptop-big) {
    }

    &:last-child {
      border-bottom: 1px solid #e6e6e6;
      @media screen and (min-width: $tablet) {
        border: none;
      }
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
}

.router-link-active,
.router-link-exact-active {
  border-bottom: 2px solid $color-green;
}
</style>
