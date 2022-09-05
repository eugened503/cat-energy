<template>
  <div class="container selection">
    <h1 class="selection__title">Подбор программы</h1>
    <p class="selection__text">
      Заполните анкету и мы подберем программу питания для вашего кота
    </p>
    <form class="fields">
      <div class="field">
        <div class="field__block">
          <label for="catname" class="field__label">Имя:*</label>
          <input
            type="text"
            class="field__text-field"
            name="catname"
            placeholder="Барсик"
          />
        </div>
        <div class="field__block">
          <label for="weight" class="field__label">Вес (кг):*</label>
          <input
            type="text"
            class="field__text-field"
            name="weight"
            placeholder="7"
          />
        </div>
        <div class="field__block">
          <label for="age" class="field__label">Возраст (лет):</label>
          <input
            type="text"
            class="field__text-field"
            name="age"
            placeholder="7"
          />
        </div>
      </div>
      <div class="field">
        <ul class="type-list">
          <li class="type-list__item">
            <input
              type="radio"
              class="type-list__input"
              name="program"
              value="slim"
              checked
            />
            <label for="slim" class="type-list__label">Похудение</label>
          </li>
          <li class="type-list__item">
            <input
              type="radio"
              class="type-list__input"
              name="program"
              value="mass"
            />
            <label for="mass" class="type-list__label">Набор массы</label>
          </li>
          <li class="type-list__item">
            <input
              type="radio"
              class="type-list__input"
              name="program"
              value="advice"
            />
            <label for="advice" class="type-list__label"
              >Не знаю (нужен ваш совет)</label
            >
          </li>
        </ul>
      </div>
      <div class="field">
        <div class="field__head">
          <h2 class="field__title">Контактные данные (владельца кота)</h2>
        </div>
        <div class="field__inner">
          <div class="field__block">
            <label for="email" class="field__label">E-mail:*</label>
            <input
              type="email"
              class="field__text-field"
              name="email"
              placeholder="kuklachev@gmail.com"
            />
            <svg class="field__contact-icon" width="17" height="13">
              <use xlink:href="#icon-mail"></use>
            </svg>
          </div>
          <div class="field__block">
            <label for="phone" class="field__label">Телефон:*</label>
            <input
              type="tel"
              class="field__text-field"
              name="phone"
              placeholder="8 (960) 900-60-90"
            />
            <svg class="field__contact-icon" width="21" height="20">
              <use xlink:href="#icon-phone"></use>
            </svg>
          </div>
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
        <ul class="add-list">
          <li class="add-list__item">
            <input
              type="checkbox"
              class="add-list__input"
              name="sweetener"
              checked
            />
            <label for="sweetener" class="add-list__label"
              >Сахарозаменитель</label
            >
          </li>
          <li class="add-list__item">
            <input type="checkbox" class="add-list__input" name="water" />
            <label for="water" class="add-list__label">Питьевая вода</label>
          </li>
          <li class="add-list__item">
            <input type="checkbox" class="add-list__input" name="milk" />
            <label for="milk" class="add-list__label">Молоко</label>
          </li>
          <li class="add-list__item">
            <input type="checkbox" class="add-list__input" name="vitamins" />
            <label for="vitamins" class="add-list__label">Витамины</label>
          </li>
        </ul>
      </div>
      <div class="fields__button-block">
        <button class="fields__button" type="submit">Отправить заявку</button>
        <span class="fields__note">* — Обязательные поля</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CatalogView",
};
</script>
