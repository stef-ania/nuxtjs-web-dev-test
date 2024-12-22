<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Yacht } from "~/types/yacht";

const yachts = ref<Yacht[]>([]);
const errorMessage = ref("");

onMounted(async () => {
  try {
    const response = await fetch("/api/yachts");
    const data = await response.json();
    console.log("Data received:", data);

    if (data.error) {
      errorMessage.value = `Error: ${data.error} - ${data.details || "No additional details"}`;
    } else {
      yachts.value = data.data;
    }
  } catch (error) {
    errorMessage.value = `Failed to fetch yachts data: ${error.message}`;
    console.error(error);
  }
});
</script>

<template>
  <div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <div class="yacht-grid" v-else>
      <div v-for="yacht in yachts" :key="yacht.id" class="yacht-card">
        <!-- Yacht Image -->
        <img :src="yacht.coverImage.url" :alt="yacht.name" class="yacht-image" />

        <!-- Yacht Price -->
        <div class="yacht-price">Price: €{{ yacht.buyPrice.EUR.toLocaleString() }}</div>

        <!-- Yacht Details -->
        <div class="yacht-details">
          Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber }} | Cabins: {{ yacht.cabinsNumber }}
        </div>

        <!-- Yacht Name -->
        <div class="yacht-name">
          {{ yacht.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.yacht-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0px 0.2rem;
}

.yacht-card {
  border: 1px solid #ddd;
  padding: 16px;
  background-color: white;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.yacht-image {
  width: 100%;
  height: auto;
}

.yacht-price {
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
}

.yacht-details {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}

.yacht-name {
  font-size: 16px;
  font-weight: 500;
  margin-top: 12px;
}

@media (min-width: 768px) {
  .yacht-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .yacht-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 0px 0.2rem;
  }
}
</style>
