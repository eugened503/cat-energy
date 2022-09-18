<template>
  <section class="container instruction">
    <h2 class="instruction__title">Как это работает</h2>
    <ul class="instruction-list">
      <li class="instruction-list__item" v-for="item in items" :key="item.id">
        <img class="instruction-list__image" :src="item.image" alt="" />
        <p class="instruction-list__text">
          {{ item.text }}
        </p>
        <img class="instruction-list__image-bg" :src="item.imageBg" alt="" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "InstructionBlock",
  data() {
    return {
      items: [
        {
          id: "1",
          text: "Функциональное питание содержит только полезные питательные вещества.",
          image: require("../assets/images/leaf.svg"),
          imageBg: require("../assets/images/1@2x.png"),
        },
        {
          id: "2",
          text: "Выпускается в виде порошка, который нужно лишь залить кипятком и готово.",
          image: require("../assets/images/tub.svg"),
          imageBg: require("../assets/images/2@2x.png"),
        },
        {
          id: "3",
          text: "Замените один-два приема обычной еды на наше функциональное питание.",
          image: require("../assets/images/eat.svg"),
          imageBg: require("../assets/images/3@2x.png"),
        },
        {
          id: "4",
          text: "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!",
          image: require("../assets/images/alarm.svg"),
          imageBg: require("../assets/images/4@2x.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.instruction {
  @media screen and (min-width: 0) {
    margin: 27px 0 0;
    padding-bottom: 42px;
  }

  @media screen and (min-width: $tablet) {
    margin: 45px 0 0;
    padding-bottom: 47px;
    border-bottom: 1px solid #e6e6e6;
  }

  @media screen and (min-width: $laptop-big) {
    margin: 71px 0 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  &__title {
    color: $color-black;

    @media screen and (min-width: 0) {
      font-size: 36px;
      line-height: 40px;
    }

    @media screen and (min-width: $tablet) {
      font-size: 60px;
      line-height: 60px;
    }
  }

  .instruction-list {
    @media screen and (min-width: 0) {
      margin: 38px 0 0;
    }

    @media screen and (min-width: $tablet) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 72px 0 0;
    }

    @media screen and (min-width: $laptop-big) {
      flex-wrap: nowrap;
    }

    &__item {
      position: relative;

      @media screen and (min-width: 0) {
        display: flex;
        align-items: center;
        margin: 20px 0 0;
      }

      @media screen and (min-width: $tablet) {
        display: block;
        margin: 0;
        width: percentage(256/708);
        min-height: 208px;
      }

      @media screen and (min-width: $laptop-big) {
        width: percentage(245/1220);
        min-height: 236px;
      }

      &:first-child {
        margin: 0;

        img {
          &:last-child {
            @media screen and (min-width: $tablet) {
              right: 36px;
            }
          }
        }
      }

      &:nth-child(3),
      &:nth-child(4) {
        @media screen and (min-width: $tablet) {
          margin-top: 77px;
        }

        @media screen and (min-width: $laptop-big) {
          margin-top: 0;
        }
      }
    }

    &__image {
      @media screen and (min-width: 0) {
        margin: 0 20px 0 0;
      }

      @media screen and (min-width: $tablet) {
        width: 80px;
        height: 80px;
      }
    }

    &__text {
      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      color: #444444;

      @media screen and (min-width: 0) {
        font-size: 14px;
        line-height: 18px;
      }

      @media screen and (min-width: $tablet) {
        margin: 31px 0 0;
        font-size: 16px;
        line-height: 24px;
      }
    }

    &__image-bg {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      height: 100%;

      @media screen and (min-width: 0) {
        display: none;
      }

      @media screen and (min-width: $tablet) {
        display: block;
      }
    }
  }
}
</style>
