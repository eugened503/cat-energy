<template>
  <section class="container demo">
    <div class="demo__info-block">
      <h2 class="demo__title">Живой пример</h2>
      <p class="demo__desc">
        Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat
        Energy Slim. Отличный результат без изнуряющих тренировок! При этом он
        не менял своих привычек и по-прежнему спит по 16 часов в день.
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
        <p class="stats-wrapper__caption">
          <span> Затраты на питание:</span>
          <span>15 000 РУБ.</span>
        </p>
      </div>
    </div>
    <div class="demo__list-tab-wrapper">
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
      <div class="demo__range-wrapper">
        <span class="progress-title">было</span>
        <input
          class="demo__range"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="value"
        />
        <span class="progress-title">стало</span>
      </div>
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
      <span class="progress-title">было</span>
      <label class="switch">
        <input type="checkbox" v-model="checked" />
        <span class="slider round"></span>
      </label>
      <span class="progress-title">стало</span>
    </div>
    <div class="demo__inner" />
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
  position: relative;
  @media screen and (min-width: 0) {
    padding-top: 27px;
    padding-bottom: 31px;
    background: #eaeaea;
  }

  @media screen and (min-width: $tablet) {
    padding-top: 43px;
    padding-bottom: 68px;
    background: inherit;
  }

  @media screen and (min-width: $laptop-big) {
    display: flex;
    justify-content: space-between;
    padding-top: 67px;
  }

  &__info-block {
    @media screen and (min-width: $laptop-big) {
      width: percentage(435/1220);
    }
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
      margin: 146px 0 0;
    }
  }

  &__list-tab-wrapper {
    @media screen and (min-width: 0) {
      display: none;
    }

    @media screen and (min-width: $tablet) {
      display: block;
      width: 610px;
      margin: 51px auto 0;
    }

    @media screen and (min-width: $laptop-big) {
      width: 590px;
      margin: 0 -80px 0 auto;
      padding: 0;
    }
  }

  &__list-tab {
    @media screen and (min-width: 0) {
      display: none;
    }

    @media screen and (min-width: $tablet) {
      position: relative;
      display: block;
      width: 100%;
      height: 465px;
      margin: 0 auto;
    }
  }

  &__image-tab {
    position: absolute;

    &:first-child {
      height: 100%;
      background: url(../assets/images/before-tablet@2x.png);
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 2;
    }

    &:last-child {
      height: 100%;
      background: url(../assets/images/after-tablet@2x.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position-x: -11px;
      transform: scaleX(-1);
      left: auto;
      right: 0;
      z-index: 1;
    }
  }

  &__range-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 13px 0 0;
  }

  &__range {
    display: block;
    appearance: none;
    width: 100%;
    height: 6px;
    margin: 0 20px 0 24px;
    background-color: #dcdcdc;
    cursor: pointer;

    &::-webkit-slider-thumb {
      width: 34px;
      height: 34px;
      -webkit-appearance: none;
      background: $color-white;
      border: 1px solid #cdcdcd;
      border-radius: 50%;
      cursor: pointer;
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
    height: 100%;
    margin: 0 auto;
  }

  &__inner {
    @media screen and (min-width: 0) {
      display: none;
    }

    @media screen and (min-width: $tablet) {
      display: block;
      position: absolute;
      z-index: -1;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 462px;
      background-image: linear-gradient(
        to right,
        #f2f2f2 0,
        #f2f2f2 50%,
        #e9e9e9 50%,
        #e9e9e9 100%
      );
    }

    @media screen and (min-width: $laptop-big) {
      height: 462px;
      background-image: linear-gradient(
        to right,
        #f2f2f2 0,
        #f2f2f2 calc(100% - 325px),
        #e9e9e9 calc(100% - 325px),
        #e9e9e9 100%
      );
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
      display: block;
      margin: 69px 0 0;
    }

    &__caption {
      text-transform: uppercase;

      @media screen and (min-width: 0) {
        margin: 34px 0 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
      }

      @media screen and (min-width: $tablet) {
        display: flex;
        flex-direction: column;
        margin: 0;
        font-size: 20px;
        line-height: 20px;
        max-width: 174px;
        text-align: right;
      }

      @media screen and (min-width: $laptop-big) {
        flex-direction: row;
        justify-content: space-between;
        margin: 60px 0 0;
        max-width: none;
      }
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

    @media screen and (min-width: $laptop-big) {
      width: 100%;
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
        width: calc(50% - 21px);
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
    }

    &__subtitle {
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      color: #444444;

      @media screen and (min-width: 0) {
        bottom: -14px;
        font-size: 12px;
        line-height: 12px;
        max-width: 87px;
        padding: 0 3px;
        background: #eaeaea;
      }

      @media screen and (min-width: $tablet) {
        bottom: -6px;
        max-width: 114px;
        padding: 0;
        background: $color-white;
      }

      @media screen and (min-width: $laptop-big) {
        background: #f2f2f2;
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

  .progress-title {
    text-transform: uppercase;

    @media screen and (min-width: 0) {
      font-size: 16px;
      line-height: 20px;
    }

    @media screen and (min-width: $tablet) {
      font-size: 20px;
      line-height: 30px;
      border-bottom: 1px dotted #bebebe;
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
}
</style>
