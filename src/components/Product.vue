<template>
  <section class="container product">
    <div class="product__title-wrapper">
      <h1 class="product__title">Каталог продукции</h1>
    </div>

    <div class="product-cards">
      <article class="product-card" v-for="item in items" :key="item.id">
        <div class="product-card__body">
          <picture>
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
        <button class="product-card__button">заказать</button>
      </article>
      <div class="card-foot">
        <img src="../assets/images/plus.svg" alt="plus" />
        <h3 class="card-foot__title">Показать еще 100500 товаров</h3>
        <p class="card-foot__text">На самом деле вкусов гораздо больше!</p>
        <button class="card-foot__button" type="button">Показать все</button>
      </div>
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
  @media screen and (min-width: 0) {
  }

  @media screen and (min-width: $tablet) {
  }

  @media screen and (min-width: $laptop-big) {
  }
}
</style>
