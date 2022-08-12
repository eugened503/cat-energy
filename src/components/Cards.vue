<template>
  <div class="cards">
    <article class="card">
      <div class="card__header">
        <img src="../assets/images/cat-back.svg" alt="" />
        <h2 class="card__title">похудение</h2>
      </div>
      <p class="card__desc">
        Ваш кот весит больше собаки и почти утратил способность лазить по
        деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить
        лишний вес.
      </p>
      <a href="#" class="card__link">
        <span class="card__link-title">каталог slim</span>
        <img src="../assets/images/icon.svg" alt="" />
      </a>
    </article>
    <article class="card">
      <div class="card__header">
        <img src="../assets/images/cat-back2.svg" alt="" />
        <h2 class="card__title">Набор массы</h2>
      </div>
      <p class="card__desc">
        Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy
        Pro поможет вашему коту нарастить необходимые мышцы!
      </p>
      <a href="#" class="card__link">
        <span class="card__link-title">каталог pro</span>
        <img src="../assets/images/icon.svg" alt="" />
      </a>
    </article>
  </div>
</template>

<script>
export default {
  name: "CardsBlock",
};
</script>

<style lang="scss">
.cards {
  @media screen and (min-width: $mobile-small) {
    //width: 900px;
  }

  @media screen and (min-width: $tablet) {
    //width: 900px;
  }

  @media screen and (min-width: $laptop-big) {
    //width: 900px;
  }
}
</style>
