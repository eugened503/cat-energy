<template>
  <section class="cooperation">
    <div
      class="container-desk container cooperation__inner"
      :class="{ catalogLink: styleLink }"
    >
      <h2 class="cooperation__title">приглашаем к сотрудничеству дилеров!</h2>
      <p class="cooperation__address">
        <span class="cooperation__address-text"
          >ул. Большая Конюшенная, д. 19/8</span
        >
        <span class="cooperation__address-text">Санкт-Петербург</span>
      </p>
    </div>
    <yandex-map :zoom="11" :coords="coords" :behaviors="behaviors">
      <ymap-marker :icon="markerIcon" :coords="coords" marker-id="1" />
    </yandex-map>
  </section>
</template>

<script>
export default {
  name: "CooperationBlock",
  data() {
    return {
      coords: [59.938635, 30.323118],
      behaviors: [
        "drag",
        "dblClickZoom",
        "rightMouseButtonMagnifier",
        "multiTouch",
      ],
      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: require("../assets/images/map.png"),
        imageSize: [57, 53],
        imageOffset: [0, 0],
      },
    };
  },

  computed: {
    styleLink() {
      return this.$route.name != "home";
    },
  },
};
</script>

<style lang="scss">
.cooperation {
  position: relative;

  .catalogLink {
    @media screen and (min-width: 0) {
      background: #f2f2f2;
    }

    @media screen and (min-width: $laptop-big) {
      background: $color-white;
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 0) {
      padding-top: 28px;
      padding-bottom: 22px;
    }

    @media screen and (min-width: $tablet) {
      padding-top: 66px;
      padding-bottom: 51px;
    }

    @media screen and (min-width: $laptop-big) {
      position: absolute;
      top: 95px;
      left: 105px;
      width: 570px;
      background: $color-white;
      z-index: 1;
    }
  }

  &__title {
    text-transform: uppercase;

    @media screen and (min-width: 0) {
      font-size: 16px;
      line-height: 18px;
      width: 40%;
    }

    @media screen and (min-width: $tablet) {
      font-size: 20px;
      line-height: 21px;
      width: 30%;
    }

    @media screen and (min-width: $laptop-big) {
      width: 40%;
    }
  }

  &__address {
    @media screen and (min-width: 0) {
      width: 50%;
    }

    @media screen and (min-width: $laptop-big) {
      width: percentage(155/405);
    }
  }

  &__address-text {
    display: block;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    color: #444444;

    &:last-child {
      @media screen and (min-width: $tablet) {
        margin: 16px 0 0;
      }
    }

    @media screen and (min-width: 0) {
      font-size: 14px;
      line-height: 20px;
    }

    @media screen and (min-width: $tablet) {
      text-align: right;
      font-size: 16px;
    }

    @media screen and (min-width: $laptop-big) {
      text-align: left;
    }
  }

  .ymap-container {
    width: 100%;

    @media screen and (min-width: 0) {
      height: 362px;
    }

    @media screen and (min-width: $tablet) {
      height: 400px;
    }
  }

  .container-desk {
    @media screen and (min-width: $tablet) {
      padding: 63px 41px 59px;
    }

    @media screen and (min-width: $laptop-big) {
      padding: 66px 89px 51px 76px;
    }
  }
}
</style>
