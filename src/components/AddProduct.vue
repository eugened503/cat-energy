<template>
  <section class="container add-product">
    <h2 class="add-product__title">Дополнительные товары</h2>
    <div class="add-product__line" />
    <div class="goods">
      <div class="goods__item" v-for="item in items" :key="item.id">
        <h3 class="goods__title">{{ item.name }}</h3>
        <div class="goods__options">
          <p>{{ item.quantity }}</p>
          <p>{{ item.price }}Р.</p>
        </div>
        <button class="goods__button">заказать</button>
      </div>
    </div>
    <div class="promo">
      <img class="promo__image" src="../assets/images/icon_gift.svg" alt="" />
      <p class="promo__text">
        Закажите все и получите чехол для кота в подарок!
      </p>
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
  }

  @media screen and (min-width: $tablet) {
  }

  @media screen and (min-width: $laptop-big) {
  }

  .promo {
    text-align: center;
    padding-top: 65px;
    padding-bottom: 44px;
    margin-top: 39px;
    background-image: url(../assets/images/gift-photo-mobile.jpg);
    //background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
</style>
