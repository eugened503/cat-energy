<template>
  <section class="container cards">
    <article class="card">
      <div class="card__wrapper">
        <div class="card__header">
          <img
            class="card__header-image"
            src="../assets/images/cat-back.svg"
            alt=""
          />
          <h2 class="card__title">похудение</h2>
        </div>
        <p class="card__desc">
          Ваш кот весит больше собаки и почти утратил способность лазить по
          деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу
          сбросить лишний вес.
        </p>
        <a href="#" class="card__link">
          <span class="card__link-title">каталог slim</span>
          <img
            class="card__link-image"
            src="../assets/images/icon.svg"
            alt=""
          />
        </a>
      </div>
      <img
        class="card__image-tab"
        src="../assets/images/cat-back-tab.svg"
        alt=""
      />
    </article>
    <article class="card">
      <div class="card__wrapper">
        <div class="card__header">
          <img
            class="image-size card__header-image"
            src="../assets/images/cat-back2.svg"
            alt=""
          />
          <h2 class="card__title">Набор массы</h2>
        </div>
        <p class="card__desc">
          Заработать авторитет среди дворовых котов и даже собак? Серия Cat
          Energy Pro поможет вашему коту нарастить необходимые мышцы!
        </p>
        <a href="#" class="card__link">
          <span class="card__link-title">каталог pro</span>
          <img
            class="card__link-image"
            src="../assets/images/icon.svg"
            alt=""
          />
        </a>
      </div>
      <img
        class="card__image-tab"
        src="../assets/images/cat-back-tab2.svg"
        alt=""
      />
    </article>
  </section>
</template>

<script>
export default {
  name: "CardsBlock",
};
</script>

<style lang="scss">
.cards {
  @media screen and (min-width: 0) {
    margin: 22px 0 0;
  }

  @media screen and (min-width: $tablet) {
    margin: 0;
  }

  @media screen and (min-width: $laptop-big) {
    display: flex;
    justify-content: space-between;
    margin: 82px 0 0;
  }

  .card {
    background: #f2f2f2;
    @media screen and (min-width: 0) {
      padding: 22px;
    }

    @media screen and (min-width: $tablet) {
      display: flex;
      align-items: center;
      padding: 77px 0 57px 52px;
    }

    @media screen and (min-width: $laptop-big) {
      display: block;
      width: percentage(570/1220);
      padding: 41px 0 59px 52px;
    }

    &__wrapper {
      @media screen and (min-width: $tablet) {
        margin: 0 17px 0 0;
      }
    }

    &__header {
      display: flex;
      align-items: center;

      .image-size {
        @media screen and (min-width: $laptop-big) {
          width: 134px;
          height: 100px;
        }
      }
    }

    &__header-image {
      @media screen and (min-width: $tablet) {
        display: none;
      }

      @media screen and (min-width: $laptop-big) {
        display: block;
        width: 100px;
        height: 106px;
      }
    }

    &__title {
      text-transform: uppercase;
      @media screen and (min-width: 0) {
        margin: 0 0 0 19px;
        font-size: 24px;
        line-height: 37px;
      }

      @media screen and (min-width: $tablet) {
        margin: 0;
        font-size: 36px;
        line-height: 36px;
      }

      @media screen and (min-width: $laptop-big) {
        margin: 0 0 0 62px;
      }
    }

    &__desc {
      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      @media screen and (min-width: 0) {
        margin: 22px 0 0;
        padding: 0 0 23px;
        font-size: 14px;
        line-height: 18px;
        color: #444444;
        border-bottom: 1px solid #d9d9d9;
      }

      @media screen and (min-width: $tablet) {
        margin: 24px 0 0;
        padding: 0;
        font-size: 16px;
        line-height: 24px;
        color: $color-black;
        border-bottom: none;
      }

      @media screen and (min-width: $laptop-big) {
        margin: 39px 0 0;
      }
    }

    &__link {
      display: inline-block;

      @media screen and (min-width: 0) {
        margin: 19px 0 0;
      }

      @media screen and (min-width: $tablet) {
        margin: 52px 0 0;
      }

      @media screen and (min-width: $laptop-big) {
        margin: 27px 0 0;
      }
    }

    &__link-title {
      text-transform: uppercase;
      color: $color-black;
      @media screen and (min-width: 0) {
        font-size: 16px;
        line-height: 16px;
      }

      @media screen and (min-width: $tablet) {
        font-size: 20px;
        line-height: 30px;
      }
    }

    &__link-image {
      @media screen and (min-width: 0) {
        margin: 0 0 0 15px;
      }

      @media screen and (min-width: $tablet) {
        margin: 0 0 0 25px;
      }

      @media screen and (min-width: $laptop-big) {
        margin: 0 0 0 28px;
      }
    }

    &__image-tab {
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

    &:first-child {
      @media screen and (min-width: $tablet) {
        padding-right: 62px;
      }

      @media screen and (min-width: $laptop-big) {
        padding-right: 51px;
      }
    }

    &:last-child {
      @media screen and (min-width: 0) {
        margin: 20px 0 0;
      }

      @media screen and (min-width: $tablet) {
        margin: 30px 0 0;
        padding-right: 27px;
      }

      @media screen and (min-width: $laptop-big) {
        margin: 0;
        padding-right: 61px;
      }
    }
  }
}
</style>
