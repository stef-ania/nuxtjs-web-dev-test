<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  buttonClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button class="secondary-button">{{ text }}</button>
</template>

<style scoped>
.secondary-button {
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm);
  cursor: pointer;
  border: 1px solid var(--ocean-lux-400);
  background-color: var(--light-color);
  color: var(--color-primary-600);
  transition: background-color ease 0.3s;
  line-height: var(--line-height-sm);

  &:hover {
    border: 1px solid var(--ocean-lux-600);
    color: var(--color-primary-800);
  }
}
</style>
