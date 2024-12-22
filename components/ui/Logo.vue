<template>
  <a href="#" class="logo">
    <img src="/assets/img/logo.svg" alt="Roy logo" />
  </a>
</template>

<style scoped>
a.logo {
  background: none;
  border: none;
  cursor: pointer;
  text-transform: none;
}

.logo {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;
  justify-content: center;
  margin: 1.188rem 0;
}

@media (min-width: 768px) {
  .logo {
    margin: 1.5rem 0;
  }
}
</style>
