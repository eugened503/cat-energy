<template>
  <section class="instruction">
    <h2 class="instruction__title">Как это работает</h2>
    <ul class="instruction-list">
      <li class="instruction-list__item" v-for="item in items" :key="item.id">
        <img class="instruction-list__image" :src="item.image" alt="" />
        <p class="instruction-list__text">
          {{ item.text }}
        </p>
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
        },
        {
          id: "2",
          text: "Выпускается в виде порошка, который нужно лишь залить кипятком и готово.",
          image: require("../assets/images/tub.svg"),
        },
        {
          id: "3",
          text: "Замените один-два приема обычной еды на наше функциональное питание.",
          image: require("../assets/images/eat.svg"),
        },
        {
          id: "4",
          text: "Уже через месяц наслаждайтесь изменениями к лучшему вашего питомца!",
          image: require("../assets/images/alarm.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.instruction {
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
