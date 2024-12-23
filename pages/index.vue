<script setup lang="ts">
import { provide, ref } from "vue";
import Logo from "@/components/ui/Logo.vue";
import YachtGrid from "~/components/YachtGrid.vue";
import GridHeaderList from "@/components/GridHeaderList.vue";

const activeGridView = ref("more");

const setActiveGridView = (view: string) => {
  activeGridView.value = view;
};

provide("activeGridView", activeGridView);
provide("setActiveGridView", setActiveGridView);

const gridClass = ref("columns-1");

function setColumns(columns: number) {
  gridClass.value = columns === 2 ? "columns-2" : "columns-4";
}

provide("setColumns", setColumns);
</script>

<template>
  <header>
    <Logo class="logo" />
  </header>
  <main class="main">
    <GridHeaderList class="grid-header-list" />
    <YachtGrid :class="gridClass" />
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
