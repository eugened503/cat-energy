<template>
  <form class="fields">
    <div class="field fields-padding">
      <field-block title="Имя:*" placeholder="Барсик" />
      <field-block title="Вес (кг):*" placeholder="7" />
      <field-block title="Возраст (лет):" placeholder="7" />
    </div>

    <div class="field fields-padding">
      <ul class="type-list">
        <li class="list-item">
          <input
            class="list-item__radio-input"
            type="radio"
            value="slim"
            v-model="program"
            checked
          />
          <label class="list-item__radio-label">Похудение</label>
        </li>
        <li class="list-item">
          <input
            class="list-item__radio-input"
            type="radio"
            value="mass"
            v-model="program"
          />
          <label class="list-item__radio-label">Набор массы</label>
        </li>
        <li class="list-item">
          <input
            class="list-item__radio-input"
            type="radio"
            value="advice"
            v-model="program"
          />
          <label class="list-item__radio-label">
            Не знаю (нужен ваш совет)
          </label>
        </li>
      </ul>
    </div>
    <div class="field">
      <div class="field__head">
        <h2 class="field__title">Контактные данные (владельца кота)</h2>
        <div class="field__line"></div>
      </div>
      <field-block title="email" placeholder="kuklachev@gmail.com">
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.65"
            y1="5.71997"
            x2="0.65"
            y2="13.72"
            stroke="#222222"
            stroke-width="1.3"
          />
          <line
            x1="17.65"
            y1="5.71997"
            x2="17.65"
            y2="13.72"
            stroke="#222222"
            stroke-width="1.3"
          />
          <line
            y1="13.07"
            x2="18"
            y2="13.07"
            stroke="#222222"
            stroke-width="1.3"
          />
          <line
            y1="1.06997"
            x2="18"
            y2="1.06997"
            stroke="#222222"
            stroke-width="1.3"
          />
          <path
            d="M17.35 2.90207L9.00002 9.39651L0.65 2.90206V1.36997H3.5L9.00002 1.36997H14H17.35V2.90207Z"
            stroke="#222222"
            stroke-width="1.3"
          />
        </svg>
      </field-block>
      <field-block title="Телефон:*" placeholder="8 (960) 900-60-90">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_153_253)">
            <path
              d="M17.9 9.4H9.39999V10.6H17.9L15.8 12.7L16.7 13.6L19.8 10.5C19.8974 10.3702 19.95 10.2123 19.95 10.05C19.95 9.88772 19.8974 9.72982 19.8 9.6L16.7 6.5L15.8 7.4L17.9 9.4Z"
              fill="black"
            />
            <path
              d="M8.10001 19.4V13.2C8.08846 13.0447 8.02154 12.8987 7.91142 12.7886C7.80131 12.6785 7.65531 12.6116 7.50001 12.6H3.10001C3.10516 12.9167 3.23325 13.2189 3.45718 13.4428C3.68112 13.6668 3.98336 13.7949 4.30001 13.8H6.80001V18.8H3.10001C2.86326 18.8149 2.62591 18.7825 2.40176 18.7048C2.17762 18.6271 1.97115 18.5057 1.79436 18.3475C1.61757 18.1893 1.47399 17.9976 1.37196 17.7834C1.26992 17.5693 1.21148 17.337 1.20001 17.1V3.10001C1.19181 2.6373 1.36516 2.18977 1.68292 1.85331C2.00069 1.51686 2.43758 1.31824 2.90001 1.30001H6.80001V6.30001H4.40001C4.08336 6.30516 3.78112 6.43324 3.55718 6.65718C3.33325 6.88112 3.20516 7.18336 3.20001 7.50001H7.60001C7.75531 7.48846 7.90131 7.42154 8.01142 7.31142C8.12154 7.2013 8.18846 7.05531 8.20001 6.90001V0.600012C8.15232 0.443872 8.06117 0.304534 7.93721 0.198285C7.81325 0.0920352 7.66161 0.0232649 7.50001 1.23734e-05H3.10001C2.70599 -0.0133408 2.31321 0.0511002 1.94411 0.189651C1.57501 0.328202 1.23684 0.538145 0.948933 0.807477C0.661026 1.07681 0.42903 1.40025 0.266207 1.7593C0.103385 2.11835 0.01293 2.50598 1.46306e-05 2.90001V16.8C-0.0289644 17.1977 0.0246504 17.597 0.157487 17.9729C0.290324 18.3489 0.499509 18.6932 0.771886 18.9844C1.04426 19.2756 1.37394 19.5072 1.74019 19.6648C2.10643 19.8224 2.50132 19.9024 2.90001 19.9H7.50001C7.5735 19.915 7.64943 19.9133 7.72216 19.895C7.7949 19.8767 7.86259 19.8423 7.92021 19.7942C7.97783 19.7462 8.02391 19.6859 8.05504 19.6176C8.08616 19.5494 8.10153 19.475 8.10001 19.4Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_153_253">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </field-block>
    </div>
    <div class="field">
      <div class="field__head">
        <h2 class="field__title">Комментарий</h2>
        <div class="field__line"></div>
      </div>
      <textarea
        class="field__textarea field__inner"
        name="additional"
        placeholder="Расскажите обо всех повадках кота"
      ></textarea>
    </div>
    <div class="field">
      <div class="field__head">
        <h2 class="field__title">Дополнительно</h2>
        <div class="field__line"></div>
      </div>
      <div class="field__inner">
        <ul class="type-list">
          <li class="list-item">
            <input
              class="list-item__checkbox-input"
              type="checkbox"
              value="sweetener"
              v-model="products"
            />
            <label class="list-item__checkbox-label">Сахарозаменитель</label>
          </li>
          <li class="list-item">
            <input
              class="list-item__checkbox-input"
              type="checkbox"
              value="water"
              v-model="products"
            />
            <label class="list-item__checkbox-label">Питьевая вода</label>
          </li>
          <li class="list-item">
            <input
              class="list-item__checkbox-input"
              type="checkbox"
              value="milk"
              v-model="products"
            />
            <label class="list-item__checkbox-label">Молоко</label>
          </li>
          <li class="list-item">
            <input
              class="list-item__checkbox-input"
              type="checkbox"
              value="vitamins"
              v-model="products"
            />
            <label class="list-item__checkbox-label">Витамины</label>
          </li>
        </ul>
      </div>
    </div>
    <button class="button" type="submit">Отправить заявку</button>
    <p class="fields__note">* — Обязательные поля</p>
  </form>
</template>

<script>
import FieldBlock from "../components/FieldBlock.vue";
export default {
  name: "FormBlock",
  components: { FieldBlock },
  data() {
    return {
      program: "",
      products: [],
    };
  },
};
</script>

<style lang="scss">
.fields {
  @media screen and (min-width: 0) {
    margin: 19px 0 0;
    padding: 0 0 32px;
  }

  @media screen and (min-width: $tablet) {
  }

  @media screen and (min-width: $laptop-big) {
  }

  .button {
    @media screen and (min-width: 0) {
      margin: 34px 0 0;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__note {
    @media screen and (min-width: 0) {
      margin: 21px 0 0;
      text-align: center;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }
}

.fields .field {
  @media screen and (min-width: 0) {
    margin: 0 -20px;
    padding: 0 20px;
  }

  @media screen and (min-width: $tablet) {
  }

  @media screen and (min-width: $laptop-big) {
  }

  &:first-child,
  &:nth-child(2) {
    @media screen and (min-width: 0) {
      border-bottom: 1px solid #d9d9d9;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &.fields-padding {
    padding: 20px;
  }

  &__head {
    position: relative;

    @media screen and (min-width: 0) {
      padding: 26px 0 32px;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__line {
    position: absolute;
    background: $color-green;
    top: 50%;
    width: 100%;
    height: 2px;
    z-index: -1;
    @media screen and (min-width: 0) {
      right: -20px;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__title {
    display: inline-block;
    background: $color-white;
    @media screen and (min-width: 0) {
      max-width: 187px;
      padding: 0 22px 0 0;
      font-size: 24px;
      line-height: 26px;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__textarea {
    width: 100%;
    resize: none;
    outline: none;
    @media screen and (min-width: 0) {
      padding: 13px;
      min-height: 150px;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }
}

.fields .list-item {
  position: relative;
  min-height: 31px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 0) {
    margin: 13px 0 0;
  }

  @media screen and (min-width: $tablet) {
  }

  @media screen and (min-width: $laptop-big) {
  }

  &:first-child {
    margin: 0;
  }

  &__radio-input {
    opacity: 0;
    @media screen and (min-width: 0) {
      margin: 0 0 0 9px;
    }
  }

  &__radio-label {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    pointer-events: none;
    @media screen and (min-width: 0) {
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__radio-label:before {
    content: "";
    background-clip: content-box;
    border: 1px solid #cdcdcd;
    border-radius: 50%;
    @media screen and (min-width: 0) {
      width: 13px;
      height: 13px;
      padding: 8px;
      margin: 0 15px 0 0;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__radio-input:checked + .list-item__radio-label:before {
    background-color: $color-green;
  }

  &__checkbox-input {
    opacity: 0;
    @media screen and (min-width: 0) {
      margin: 0 0 0 9px;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__checkbox-input:checked + .list-item__checkbox-label:before {
    background-image: url("../assets/images/tick.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 70%;
  }

  &__checkbox-label {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    pointer-events: none;
    @media screen and (min-width: 0) {
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__checkbox-label:before {
    content: "";
    background-clip: content-box;
    border: 1px solid #cdcdcd;
    @media screen and (min-width: 0) {
      width: 30px;
      height: 30px;
      margin: 0 19px 0 0;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }
}
</style>
