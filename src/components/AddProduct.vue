<template>
  <section class="container add-product">
    <div class="add-product__wrapper-title">
      <h2 class="add-product__title">Дополнительные товары</h2>
      <div class="add-product__line" />
    </div>
    <div class="add-product__body">
      <div class="goods">
        <div class="good" v-for="item in items" :key="item.id">
          <div class="good__info">
            <h3 class="good__title">{{ item.name }}</h3>
            <div class="good__options">
              <p>{{ item.quantity }}</p>
              <p>{{ item.price }}Р.</p>
            </div>
          </div>
          <button class="button">заказать</button>
        </div>
      </div>
      <div class="promo">
        <img class="promo__image" src="../assets/images/icon_gift.svg" alt="" />
        <p class="promo__text">
          Закажите все и получите чехол для кота в подарок!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddProductBlock",
  data() {
    return {
      items: [
        {
          id: "1",
          name: "Сахарозаменитель",
          quantity: "1 упаковка (100 г)",
          price: "200",
        },
        {
          id: "2",
          name: "питьевая вода",
          quantity: "5 литров",
          price: "50",
        },
        {
          id: "3",
          name: "молоко",
          quantity: "1 литр",
          price: "100",
        },
        {
          id: "4",
          name: "витамины",
          quantity: "1 упаковка (30 г)",
          price: "300",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.add-product {
  @media screen and (min-width: 0) {
    padding: 0 0 35px;
  }

  @media screen and (min-width: $tablet) {
    padding: 0 0 76px;
  }

  @media screen and (min-width: $laptop-big) {
    padding: 0 0 86px;
  }

  &__wrapper-title {
    position: relative;

    @media screen and (min-width: 0) {
      padding: 28px 0 35px;
      border-bottom: 1px solid #cdcdcd;
    }

    @media screen and (min-width: $tablet) {
      margin: 0 -30px;
      padding: 68px 0 80px;
      border: none;
    }

    @media screen and (min-width: $laptop-big) {
      margin: 0 -110px;
      padding: 75px 0 81px;
    }
  }

  &__title {
    @media screen and (min-width: 0) {
      font-size: 24px;
      line-height: 24px;
    }

    @media screen and (min-width: $tablet) {
      display: inline-block;
      margin: 0 30px;
      padding: 0 37px;
      text-align: center;
      background: $color-white;
    }

    @media screen and (min-width: $laptop-big) {
      margin: 0 110px;
    }
  }

  &__line {
    position: absolute;
    background: $color-green;

    @media screen and (min-width: 0) {
      top: 50%;
      right: -20px;
      width: 53px;
      height: 2px;
    }

    @media screen and (min-width: $tablet) {
      right: 0;
      left: 0;
      width: 100%;
      height: 2px;
      transform: translateY(-50%);
      z-index: -1;
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__body {
    @media screen and (min-width: $laptop-big) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
}
.add-product .goods {
  @media screen and (min-width: $tablet) {
    border: 1px solid #cdcdcd;
  }

  @media screen and (min-width: $laptop-big) {
    width: percentage(895/1220);
    border-right: none;
    border-left: none;
  }
}
.add-product .good {
  @media screen and (min-width: 0) {
    padding: 13px 0 19px;
    border-bottom: 1px solid #cdcdcd;
  }

  @media screen and (min-width: $tablet) {
    padding: 26px 38px 28px;
  }

  @media screen and (min-width: $laptop-big) {
    display: flex;
    align-items: center;
    padding: 18px 0;
  }

  &:last-child {
    @media screen and (min-width: $tablet) {
      border: none;
    }
  }

  &__info {
    @media screen and (min-width: $tablet) {
      display: flex;
      justify-content: space-between;
    }

    @media screen and (min-width: $laptop-big) {
      width: percentage(610/895);
    }
  }

  &__title {
    @media screen and (min-width: 0) {
      font-size: 16px;
      line-height: 16px;
      text-transform: uppercase;
      color: #222222;
    }

    @media screen and (min-width: $tablet) {
      font-size: 20px;
      line-height: 20px;
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__options {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    color: #444444;

    @media screen and (min-width: 0) {
      display: flex;
      justify-content: space-between;
      margin: 13px 0 0;
      font-size: 14px;
      line-height: 14px;
    }

    @media screen and (min-width: $tablet) {
      margin: 0;
      font-size: 16px;
      line-height: 20px;
    }

    @media screen and (min-width: $laptop-big) {
      width: percentage(286/610);
    }

    p:first-child {
      @media screen and (min-width: $tablet) {
        margin: 0 51px 0 0;
      }

      @media screen and (min-width: $laptop-big) {
        margin: 0;
      }
    }
  }

  .button {
    @media screen and (min-width: 0) {
      margin: 15px 0 0;
    }

    @media screen and (min-width: $tablet) {
      margin: 27px 0 0;
    }

    @media screen and (min-width: $laptop-big) {
      margin: 0 0 0 auto;
      width: percentage(244/895);
    }
  }
}

.add-product .promo {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;

  @media screen and (min-width: 0) {
    background-image: url(../assets/images/gift-photo-mobile.jpg);
    margin: 39px 0 0;
    padding: 65px 0 44px;
  }

  @media screen and (min-width: $tablet) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 69px 0 0;
    padding: 57px 124px 60px 78px;
    background-image: url(../assets/images/gift-photo-tablet.jpg);
  }

  @media screen and (min-width: $laptop-big) {
    display: block;
    flex: 1;
    margin: 0 0 0 80px;
    padding: 65px 0 44px;
    background-image: url(../assets/images/gift-photo-desktop.jpg);
  }

  &__text {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    color: $color-white;

    @media screen and (min-width: 0) {
      width: 161px;
      margin: 48px auto 0;
      font-size: 16px;
      line-height: 20px;
    }

    @media screen and (min-width: $tablet) {
      margin: 0;
      text-align: left;
    }

    @media screen and (min-width: $laptop-big) {
      margin: 48px auto 0;
      text-align: center;
    }
  }
}
</style>
