<template>
  <li class="type-list__item">
    <input
      :type="type"
      class="type-list__input"
      :value="value"
      :checked="checked"
    />
    <label :for="value" class="type-list__label">{{ title }}</label>
  </li>
</template>

<script>
export default {
  name: "TypeInputBlock",
  props: {
    title: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: String, required: true },
    checked: { type: Boolean, required: false },
  },
};
</script>
