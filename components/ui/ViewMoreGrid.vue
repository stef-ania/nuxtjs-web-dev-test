<script setup lang="ts">
import selectedIcon from "@/assets/img/icons/View_more_grid_selected.svg";
import unselectedIcon from "@/assets/img/icons/View_more_grid_unselected.svg";

const activeGridView = inject("activeGridView");
const setActiveGridView = inject("setActiveGridView");

if (!activeGridView || !setActiveGridView) {
  console.error("Context from this active grid view is not available");
}

function handleClick() {
  setActiveGridView("more");
}
</script>

<template>
  <button class="view-more-grid" @click="handleClick">
    <img :src="activeGridView === 'more' ? selectedIcon : unselectedIcon" alt="View more grid" />
  </button>
</template>

<style scoped>
.view-more-grid {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.view-more-grid img {
  width: 24px;
  height: 24px;
  display: flex;
}
</style>
