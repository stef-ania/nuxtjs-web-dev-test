<script setup lang="ts">
import selectedIcon from "@/assets/img/icons/View_less_grid_selected.svg";
import unselectedIcon from "@/assets/img/icons/View_less_grid_unselected.svg";

const activeGridView = inject("activeGridView");
const setActiveGridView = inject("setActiveGridView");

if (!activeGridView || !setActiveGridView) {
  console.error("Context from this active grid view is not available");
}

function handleClick() {
  setActiveGridView("less");
}
</script>

<template>
  <button class="view-less-grid" @click="handleClick">
    <img :src="activeGridView === 'less' ? selectedIcon : unselectedIcon" alt="View less grid" />
  </button>
</template>

<style scoped>
.view-less-grid {
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.view-less-grid img {
  width: 24px;
  height: 24px;
  display: flex;
}
</style>
