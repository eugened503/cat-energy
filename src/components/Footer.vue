<template>
  <footer class="footer">
    <a class="footer__link" href="#">
      <img class="footer__logo" src="../assets/images/footer-logo.svg" alt="" />
    </a>

    <ul class="footer__social">
      <li class="footer__social-item" v-for="item in items" :key="item.id">
        <a class="footer__social-link" href="#">
          <img class="footer__social-logo" :src="item.image" alt="" />
        </a>
      </li>
    </ul>

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
