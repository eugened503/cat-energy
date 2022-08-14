<template>
  <section class="demo">
    <h2 class="demo__title">Живой пример</h2>
    <p class="demo__desc">
      Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat
      Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не
      менял своих привычек и по-прежнему спит по 16 часов в день.
    </p>
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
    <img src="../assets/images/before-mobile.png" alt="" />
    <div class="progress">
      <span>было</span>
      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>
      <span>стало</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "DemoBlock",
};
</script>

<style lang="scss">
.demo {
  @media screen and (min-width: $mobile-small) {
    //width: 900px;
  }

  @media screen and (min-width: $tablet) {
    //width: 900px;
  }

  @media screen and (min-width: $laptop-big) {
    //width: 900px;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
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
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
</style>
