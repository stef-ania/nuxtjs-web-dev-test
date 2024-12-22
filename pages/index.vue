<script setup lang="ts">
import YachtGrid from "~/components/YachtGrid.vue";
import Logo from "@/components/ui/Logo.vue";
</script>

<template>
  <header>
    <Logo class="logo" />
  </header>
  <div>
    <h1>Product Grid</h1>
    <YachtGrid />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
