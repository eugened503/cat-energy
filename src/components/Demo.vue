<template>
  <section class="container demo">
    <h2 class="demo__title">Живой пример</h2>
    <p class="demo__desc">
      Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat
      Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не
      менял своих привычек и по-прежнему спит по 16 часов в день.
    </p>
    <div class="stats-wrapper">
      <div class="stats">
        <div class="stats__item">
          <h3 class="stats__title">5 КГ</h3>
          <p class="stats__subtitle">снижение веса</p>
        </div>
        <div class="stats__item">
          <h3 class="stats__title">60 ДНЕЙ</h3>
          <p class="stats__subtitle">затрачено времени</p>
        </div>
      </div>
      <p class="demo__caption">Затраты на питание: 15 000 РУБ.</p>
    </div>
    <div class="wrapper">
      <input type="range" min="0" max="100" step="1" v-model="value" />
    </div>
    <div class="demo__list-tab">
      <div
        class="demo__image-tab"
        :style="{
          width: total + '%',
        }"
      />
      <div
        class="demo__image-tab"
        :style="{
          width: value + '%',
        }"
      />
    </div>
    <div name="list" class="demo__list">
      <img
        v-if="!checked"
        class="demo__image"
        src="../assets/images/before-mobile.png"
        alt=""
      />
      <img
        v-else
        class="demo__image"
        src="../assets/images/after-mobile@2x.png"
        alt=""
      />
    </div>
    <div class="progress">
      <span>было</span>
      <label class="switch">
        <input type="checkbox" v-model="checked" />
        <span class="slider round"></span>
      </label>
      <span>стало</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "DemoBlock",
  data() {
    return {
      checked: false,
      value: 50,
    };
  },

  computed: {
    total() {
      return 100 - this.value;
    },
  },
};
</script>

<style lang="scss">
.demo {
  @media screen and (min-width: 0) {
    padding-top: 27px;
    padding-bottom: 31px;
    background: #eaeaea;
  }

  @media screen and (min-width: $tablet) {
    padding-top: 43px;
    padding-bottom: 70px;
    background: inherit;
  }

  @media screen and (min-width: $laptop-big) {
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

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__desc {
    color: #444444;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;

    @media screen and (min-width: 0) {
      margin: 33px 0 0;
      font-size: 14px;
      line-height: 18px;
    }

    @media screen and (min-width: $tablet) {
      margin: 63px 0 0;
      font-size: 16px;
      line-height: 24px;
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__caption {
    text-transform: uppercase;
    text-align: center;
    @media screen and (min-width: 0) {
      margin: 34px 0 0;
      font-size: 14px;
      line-height: 20px;
    }

    @media screen and (min-width: $tablet) {
      margin: 0;
      font-size: 20px;
      line-height: 20px;
      max-width: 174px;
      text-align: right;
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__list-tab {
    position: relative;
    width: 610px;
    height: 465px;
    margin: 0 auto;
    @media screen and (min-width: 0) {
      display: none;
    }

    @media screen and (min-width: $tablet) {
      display: block;
    }
  }

  &__image-tab {
    //min-height: 620px;
    position: absolute;

    &:first-child {
      height: 100%;
      background: url(../assets/images/before-tablet@2x.png);
      //background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      //background-size: 311px 323px;
      z-index: 2;
    }
    &:last-child {
      //display: none;
      height: 100%;
      background: url(../assets/images/after-tablet@2x.png);
      //background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: -11px;
      //direction: rtl;
      transform: scaleX(-1);
      left: auto;
      right: 0;
      //background-size: 311px 323px;
      z-index: 1;
    }
  }

  &__list {
    @media screen and (min-width: 0) {
      margin: 42px -20px 0;
      height: 232px;
    }

    @media screen and (min-width: $tablet) {
      display: none;
    }
  }

  &__image {
    display: block;

    @media screen and (min-width: 0) {
      height: 100%;
      margin: 0 auto;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  .stats-wrapper {
    @media screen and (min-width: $tablet) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 54px 0 0;
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  .stats {
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 0) {
      margin: 25px 0 0;
    }

    @media screen and (min-width: $tablet) {
      margin: 0;
      width: percentage(366/708);
    }

    &__item {
      position: relative;
      border: 1px solid #cdcdcd;
      border-radius: 3px;
      text-align: center;

      @media screen and (min-width: 0) {
        width: percentage(124/280);
        padding: 14px 0 17px;
      }

      @media screen and (min-width: $tablet) {
        width: percentage(162/366);
        padding: 15px 0 20px;
      }

      @media screen and (min-width: $laptop-big) {
      }

      &:last-child {
        .stats__subtitle {
          @media screen and (min-width: $tablet) {
            max-width: 142px;
          }
        }
      }
    }

    &__title {
      @media screen and (min-width: 0) {
        font-size: 24px;
        line-height: 24px;
      }

      @media screen and (min-width: $tablet) {
        font-size: 30px;
        line-height: 37px;
      }

      @media screen and (min-width: $laptop-big) {
      }
    }

    &__subtitle {
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      bottom: -14px;
      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      color: #444444;

      @media screen and (min-width: 0) {
        font-size: 12px;
        line-height: 12px;
        max-width: 87px;
        padding: 0 3px;
        background: #eaeaea;
      }

      @media screen and (min-width: $tablet) {
        bottom: -6px;
        max-width: 114px;
        white-space: nowrap;
        padding: 0;
        background: $color-white;
      }

      @media screen and (min-width: $laptop-big) {
      }
    }
  }

  .progress {
    @media screen and (min-width: 0) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 27px 0 0;
    }

    @media screen and (min-width: $tablet) {
      display: none;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 84px;
    height: 14px;
    margin: 0 12px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $color-white;
    border: 1px solid #cdcdcd;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 6px;
    width: 35px;
    left: 4px;
    bottom: 3px;
    background-color: $color-green;
    transition: 0.4s;
  }

  input:checked + .slider:before {
    transform: translateX(39px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 6px;
  }

  .wrapper {
    margin: 30px 0 0;
    p {
      height: 30px;
      border: 1px solid red;
    }
  }
}
</style>
