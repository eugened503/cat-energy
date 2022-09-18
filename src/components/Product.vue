<template>
  <section class="container product">
    <div class="product__title-wrapper">
      <h1 class="product__title">Каталог продукции</h1>
    </div>
    <div class="product-cards">
      <article class="product-card" v-for="item in items" :key="item.id">
        <div class="product-card__body">
          <picture class="product-card__picture">
            <source
              media="(min-width: 768px)"
              :srcset="require(`../assets/images/catalog-tab-${item.id}.png`)"
            />
            <img
              class="product-card__image"
              :src="require(`../assets/images/catalog-mob-${item.id}.png`)"
              alt="chicken-small"
            />
          </picture>
          <div class="product-card__desc">
            <h2 class="product-card__title">{{ item.name }} г</h2>
            <div class="product-card__options">
              <p class="product-card__options-row">
                <span>Масса</span>
                <span>{{ item.weight }} г</span>
              </p>
              <p class="product-card__options-row">
                <span>Вкус</span>
                <span>{{ item.taste }}</span>
              </p>
              <p class="product-card__options-row">
                <span>Цена</span>
                <span>{{ item.price }} Р.</span>
              </p>
            </div>
          </div>
        </div>
        <button class="button">заказать</button>
      </article>
      <article class="product-card card-foot">
        <img
          class="card-foot__image"
          src="../assets/images/plus.svg"
          alt="plus"
        />
        <h3 class="card-foot__title">Показать еще 100500 товаров</h3>
        <p class="card-foot__text">На самом деле вкусов гораздо больше!</p>
        <button class="button foot-button" type="button">Показать все</button>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductBlock",
  data() {
    return {
      items: [
        {
          id: "1",
          name: "Cat Energy PRO 500",
          weight: "500",
          taste: "Курица",
          price: "700",
        },
        {
          id: "2",
          name: "Cat Energy PRO 1000",
          weight: "1000",
          taste: "Курица",
          price: "1000",
        },
        {
          id: "3",
          name: "Cat Energy PRO 500",
          weight: "500",
          taste: "Рыба",
          price: "700",
        },
        {
          id: "4",
          name: "Cat Energy PRO 1000",
          weight: "1000",
          taste: "Рыба",
          price: "1000",
        },
        {
          id: "5",
          name: "Cat Energy slim 500",
          weight: "500",
          taste: "Гречка",
          price: "400",
        },
        {
          id: "6",
          name: "Cat Energy slim 1000",
          weight: "1000",
          taste: "Гречка",
          price: "700",
        },
        {
          id: "7",
          name: "Cat Energy slim 500",
          weight: "500",
          taste: "Рис",
          price: "500",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.product {
  &__title-wrapper {
    @media screen and (min-width: 0) {
      margin: 0 -20px;
      padding: 27px 0 41px 20px;
      border-top: 1px solid #d9d9d9;
      border-bottom: 1px solid #ebebeb;
    }

    @media screen and (min-width: $tablet) {
      margin: 0;
      padding: 64px 0 164px 0;
      border: none;
    }

    @media screen and (min-width: $laptop-big) {
      padding: 74px 0 165px 0;
    }
  }

  &__title {
    @media screen and (min-width: 0) {
      margin: 0;
      font-size: 36px;
      line-height: 36px;
    }

    @media screen and (min-width: $tablet) {
      font-size: 60px;
      line-height: 60px;
    }
  }
}

.product .product-cards {
  @media screen and (min-width: 0) {
    margin: 0 -20px;
  }

  @media screen and (min-width: $tablet) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
  }
}

.product .product-card {
  @media screen and (min-width: 0) {
    padding: 19px 20px 25px;
    border-bottom: 1px solid #ebebeb;
  }

  @media screen and (min-width: $tablet) {
    width: percentage(324/708);
    padding: 161px 37px 40px;
    margin: 0 0 141px;
    border: none;
    background: #f2f2f2;
  }

  @media screen and (min-width: $laptop-big) {
    width: percentage(245/1220);
    margin: 0 0 143px;
  }

  &:nth-last-child(-n + 2) {
    margin: 0;
  }

  &:nth-last-child(-n + 4) {
    @media screen and (min-width: $laptop-big) {
      margin: 0;
    }
  }

  &__body {
    @media screen and (min-width: 0) {
      display: flex;
      justify-content: space-between;
    }

    @media screen and (min-width: $tablet) {
      display: block;
      position: relative;
    }
  }

  &__picture {
    @media screen and (min-width: $tablet) {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -232px;
      right: 0;
      left: 0;
    }
  }

  &__desc {
    @media screen and (min-width: 0) {
      width: 141px;
    }

    @media screen and (min-width: $tablet) {
      width: 100%;
    }
  }

  &__title {
    font-weight: 600;
    text-transform: uppercase;
    @media screen and (min-width: 0) {
      width: 76px;
      font-size: 16px;
      line-height: 20px;
    }

    @media screen and (min-width: $tablet) {
      width: 159px;
      margin: 0 auto;
      text-align: center;
      font-size: 20px;
      line-height: 24px;
    }
  }

  &__options {
    @media screen and (min-width: 0) {
      margin: 14px 0 0;
    }

    @media screen and (min-width: $tablet) {
      margin: 21px 0 0;
    }
  }

  &__options-row {
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: $tablet) {
      padding: 7px 0 9px;
      border-bottom: 1px solid #cdcdcd;
    }

    span {
      font-family: "Arial";
      font-style: normal;
      font-weight: 400;

      @media screen and (min-width: 0) {
        font-size: 12px;
        line-height: 16px;
      }
      @media screen and (min-width: $tablet) {
        font-size: 16px;
      }
    }
  }

  .button {
    @media screen and (min-width: 0) {
      margin: 22px 0 0;
    }

    @media screen and (min-width: $tablet) {
      margin: 33px 0 0;
    }
  }
}

.product .card-foot {
  @media screen and (min-width: $tablet) {
    padding-top: 52px;
    background: inherit;
    border: 1px solid #ebebeb;
  }

  &__image {
    display: block;
    @media screen and (min-width: 0) {
      margin: 0 auto;
    }

    @media screen and (min-width: $tablet) {
      width: 60px;
      height: 60px;
    }
  }

  &__title {
    text-align: center;
    text-transform: uppercase;
    @media screen and (min-width: 0) {
      margin: 23px 0 0;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
    }

    @media screen and (min-width: $tablet) {
      width: 134px;
      margin: 49px auto 0;
      font-size: 20px;
      line-height: 22px;
    }
  }

  &__text {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: #444444;

    @media screen and (min-width: 0) {
      margin: 8px 0 0;
      font-size: 12px;
      line-height: 16px;
    }

    @media screen and (min-width: $tablet) {
      width: 167px;
      margin: 23px auto 0;
      font-size: 16px;
      line-height: 18px;
    }
  }

  .foot-button {
    color: $color-black;
    background: #f2f2f2;
    transition: background 0.3s ease;

    &:hover {
      background: #ebebeb;
    }

    &:active {
      background: #ebebeb;
      color: #b9b9b9;
    }

    @media screen and (min-width: $tablet) {
      margin: 96px 0 0;
    }
  }
}
</style>
