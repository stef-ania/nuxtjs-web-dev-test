<script setup lang="ts">
import YachtGrid from "~/components/YachtGrid.vue";
import Logo from "@/components/ui/Logo.vue";
import GridHeaderList from "@/components/GridHeaderList.vue";
</script>

<template>
  <header>
    <Logo class="logo" />
  </header>
  <main class="main">
    <GridHeaderList class="grid-header-list" />
    <YachtGrid />
  </main>
</template>

<style scoped>
.main {
  margin: 2.5rem 0.75rem 3.5rem;
}

@media (min-width: 1024px) {
  .main {
    margin: 2.5rem 1rem 7.5rem;
  }
}
</style>
