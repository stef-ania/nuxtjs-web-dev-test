<script setup lang="ts">
import { ref, onMounted } from "vue";
import ViewMoreGrid from "@/components/ui/ViewMoreGrid.vue";
import ViewLessGrid from "@/components/ui/ViewLessGrid.vue";

const totalYachts = ref<number | null>(null);
const errorMessage = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await fetch("/api/yachts");
    const data = await response.json();
    if (data.meta?.total) {
      totalYachts.value = data.meta.total;
    } else {
      errorMessage.value = "Unable to retrieve yacht count.";
    }
  } catch (error) {
    errorMessage.value = `Error fetching yachts: ${error.message}`;
  }
});
</script>

<template>
  <h3 v-if="!errorMessage && totalYachts !== null" class="hidden-in-desktop">BUY · {{ totalYachts }} Yachts</h3>
  <div class="grid-header-list">
    <h3 v-if="!errorMessage && totalYachts !== null" class="hidden-in-mobile">Yachts for sale · {{ totalYachts }}</h3>
    <nav>
      <div class="grid-options">
        View
        <ViewLessGrid />
        <ViewMoreGrid />
      </div>
    </nav>
  </div>
  <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
</template>

<style scoped>
.grid-header-list {
  display: flex;
  justify-content: center;
  margin-bottom: 1.875rem;
}

.hidden-in-desktop {
  text-align: center;
  display: block;
  margin: 0 auto;
}

.hidden-in-mobile,
.grid-options {
  display: none;
}

@media (min-width: 1024px) {
  .hidden-in-desktop {
    display: none;
  }
  .grid-header-list {
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .hidden-in-mobile {
    display: initial;
    font-size: var(--font-size-md);
    line-height: 150%;
    color: var(--ocean-lux-800);
    text-transform: uppercase;
  }

  .grid-options {
    display: initial;
    border-left: 1px solid var(--black-scale-200);
    padding: 0 1.25rem;
    color: var(--ocean-lux-600);
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}
</style>
