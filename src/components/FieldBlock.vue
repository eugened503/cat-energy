<template>
  <div class="field__block">
    <label for="catname" class="field__label">{{ title }}</label>
    <input
      type="text"
      class="field__text-field"
      name="catname"
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
