<template>
  <div class="field-block">
    <label class="field-block__label">{{ title }}</label>
    <input
      type="text"
      class="field-block__text-field"
      :placeholder="placeholder"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CatalogView",
  props: {
    title: { type: String, required: true },
    placeholder: { type: String, required: true },
  },
};
</script>

<style lang="scss">
.field-block {
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (min-width: 0) {
    margin: 14px 0 0;
  }

  @media screen and (min-width: $tablet) {
  }

  @media screen and (min-width: $laptop-big) {
  }

  &:first-child {
    margin: 0;
  }

  &__label {
    text-transform: uppercase;
    color: #444444;
    @media screen and (min-width: 0) {
      margin: 0 10px 0 0;
      font-size: 16px;
      line-height: 18px;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  &__text-field {
    flex: 1;
    text-transform: uppercase;
    color: #444444;
    border: 1px solid #e7e7e7;
    @media screen and (min-width: 0) {
      padding: 13px 31px 13px 13px;
      font-size: 16px;
      line-height: 18px;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @media screen and (min-width: 0) {
      right: 10px;
    }

    @media screen and (min-width: $tablet) {
    }

    @media screen and (min-width: $laptop-big) {
    }
  }
}
</style>
