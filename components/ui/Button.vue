<template>
  <button class="button" :class="buttonClass">{{ text }}</button>
</template>

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

<style scoped>
.button {
  padding: 0.5rem 1rem;
  font-size: var(--font-size-sm);
  cursor: pointer;
  border: none;
  background-color: var(--color-primary-500);
  color: var(--light-color);
  transition: background-color ease 0.3s;
  line-height: var(--line-height-sm);

  &:hover {
    background-color: var(--color-primary-800);
  }
}
</style>
