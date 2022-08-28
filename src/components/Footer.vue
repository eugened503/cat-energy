<template>
  <footer class="container footer">
    <div class="footer__link-wrapper">
      <a class="footer__link" href="#">
        <img
          class="footer__logo"
          src="../assets/images/footer-logo.svg"
          alt=""
        />
      </a>
    </div>

    <div class="footer__social-wrapper">
      <ul class="footer__social">
        <li class="footer__social-item" v-for="item in items" :key="item.id">
          <a class="footer__social-link" href="#">
            <img class="footer__social-logo" :src="item.image" alt="" />
          </a>
        </li>
      </ul>
    </div>

    <div class="footer__copyright">
      <h3 class="footer__copyright-title">HTML Academy</h3>
      <img
        class="footer__copyright-logo"
        src="../assets/images/html-academy.svg"
        alt=""
      />
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBlock",
  data() {
    return {
      items: [
        {
          id: "1",
          image: require("../assets/images/vk.svg"),
        },
        {
          id: "2",
          image: require("../assets/images/inst.svg"),
        },
        {
          id: "3",
          image: require("../assets/images/fb.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.footer {
  @media screen and (min-width: $tablet) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 55px;
    padding-bottom: 61px;
  }

  &__link-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 0) {
      border-bottom: 1px solid #d9d9d9;
    }

    @media screen and (min-width: $tablet) {
      display: flex;
      border: none;
    }
  }

  &__link {
    @media screen and (min-width: 0) {
      margin: 39px 0 0;
      padding: 0 0 32px;
    }

    @media screen and (min-width: $tablet) {
      margin: 0;
      padding: 0;
      border: none;
    }
  }

  &__logo {
    vertical-align: middle;
  }

  &__social-wrapper {
    @media screen and (min-width: 0) {
      margin: 20px 0 0;
      padding: 0 0 20px;
      border-bottom: 1px solid #d9d9d9;
    }

    @media screen and (min-width: $tablet) {
      border: none;
      margin: 0;
      padding: 0;
      width: 130px;
    }
  }

  &__social {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 0) {
      margin: 0 auto;
      width: 130px;
    }

    @media screen and (min-width: $tablet) {
      margin: 0;
      width: 100%;
    }
  }

  &__social-item {
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(1) {
      @media screen and (min-width: $tablet) {
        width: 29px;
        height: 17px;
      }
    }

    &:nth-child(2) {
      @media screen and (min-width: $tablet) {
        width: 23px;
        height: 23px;
      }
    }

    &:nth-child(3) {
      @media screen and (min-width: 0) {
        width: 10px;
        height: 18px;
      }

      @media screen and (min-width: $tablet) {
        width: 13px;
        height: 27px;
      }
    }
  }

  &__social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &__social-logo {
    width: 100%;
    height: 100%;
  }

  &__copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 0) {
      margin: 22px 0 0;
      padding: 0 0 22px;
    }

    @media screen and (min-width: $tablet) {
      margin: 0;
      padding: 0;
      width: 163px;
    }
  }

  &__copyright-title {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #444444;
  }
}
</style>
