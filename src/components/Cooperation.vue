<template>
  <section class="cooperation">
    <div class="cooperation__inner">
      <h2 class="cooperation__title">приглашаем к сотрудничеству дилеров!</h2>
      <p class="cooperation__address">
        ул. Большая Конюшенная, д. 19/8 Санкт-Петербург
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
  data: function () {
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
};
</script>

<style lang="scss">
.cooperation {
  @media screen and (min-width: $mobile-small) {
    //width: 900px;
  }

  @media screen and (min-width: $tablet) {
    //width: 900px;
  }

  @media screen and (min-width: $laptop-big) {
    //width: 900px;
  }

  .ymap-container {
    width: 100%;
    height: 362px;
  }
}
</style>
