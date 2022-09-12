<template>
  <form class="fields">
    <div class="field">
      <field-block title="Имя:*" placeholder="Барсик" />
      <field-block title="Вес (кг):*" placeholder="7" />
      <field-block title="Возраст (лет):" placeholder="7" />
    </div>
    <div class="field">
      <ul class="type-list">
        <type-input
          type="radio"
          value="slim"
          title="Похудение"
          :checked="true"
        />
        <type-input
          type="radio"
          value="mass"
          title="Набор массы"
          :checked="false"
        />
        <type-input
          type="radio"
          value="advice"
          title="Не знаю (нужен ваш совет)"
          :checked="false"
        />
      </ul>
    </div>
    <div class="field">
      <div class="field__head">
        <h2 class="field__title">Контактные данные (владельца кота)</h2>
      </div>
      <div class="field__inner">
        <field-block title="email" placeholder="kuklachev@gmail.com">
          <svg class="field__contact-icon" width="17" height="13">
            <use xlink:href="#icon-mail"></use>
          </svg>
        </field-block>
        <field-block title="Телефон:*" placeholder="8 (960) 900-60-90">
          <svg class="field__contact-icon" width="21" height="20">
            <use xlink:href="#icon-phone"></use>
          </svg>
        </field-block>
      </div>
    </div>
    <div class="field">
      <div class="field__head">
        <h2 class="field__title">Комментарий</h2>
      </div>
      <textarea
        class="field__textarea"
        name="additional"
        placeholder="Расскажите обо всех повадках кота"
      ></textarea>
    </div>
    <div class="field">
      <div class="field__head">
        <h2 class="field__title">Дополнительно</h2>
      </div>
      <ul class="type-list">
        <type-input
          type="checkbox"
          value="sweetener"
          title="Сахарозаменитель"
          :checked="true"
        />
        <type-input
          type="checkbox"
          value="water"
          title="Питьевая вода"
          :checked="false"
        />
        <type-input
          type="checkbox"
          value="milk"
          title="Молоко"
          :checked="false"
        />
        <type-input
          type="checkbox"
          value="vitamins"
          title="Витамины"
          :checked="false"
        />
      </ul>
    </div>
    <div class="fields__button-block">
      <button class="fields__button" type="submit">Отправить заявку</button>
      <span class="fields__note">* — Обязательные поля</span>
    </div>
  </form>
</template>

<script>
import FieldBlock from "../components/FieldBlock.vue";
import TypeInput from "../components/TypeInput.vue";
export default {
  name: "FormBlock",
  components: { FieldBlock, TypeInput },
};
</script>
