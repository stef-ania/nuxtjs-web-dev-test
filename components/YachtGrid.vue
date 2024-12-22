<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Yacht } from "~/types/yacht";
import Button from "~/components/ui/Button.vue";

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

defineProps({
  yacht: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <div class="yacht-grid" v-else>
      <div v-for="yacht in yachts" :key="yacht.id" class="yacht-card">
        <!-- Yacht Image -->
        <picture class="yacht-picture">
          <img loading="lazy" :src="yacht.coverImage.url" :alt="yacht.name" class="yacht-image" />
        </picture>

        <!-- Yacht Price -->
        <div class="yacht-price">Price: €{{ yacht.buyPrice.EUR.toLocaleString() }}</div>

        <!-- Yacht Details -->
        <div class="yacht-details">
          Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber }} | Cabins: {{ yacht.cabinsNumber }}
        </div>

        <div class="yatch-card-footer">
          <!-- Yacht Name -->
          <h4 class="yacht-name">
            {{ yacht.name }}
          </h4>

          <!-- Button -->
          <Button text="Enquiry" />
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
  background-color: var(--light-color);
  text-align: left;
  margin-bottom: 3.75rem;
}

.yacht-picture {
  display: block;
  aspect-ratio: 351 / 220;
}

.yacht-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.yacht-price {
  line-height: var(--line-height-sm);
  color: var(--black-scale-500);
  margin-top: 0.2rem;
}

.yacht-details {
  color: var(--black-scale-700);
  margin-bottom: 1.5rem;
  line-height: var(--line-height-sm);
}

.yatch-card-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.yacht-name {
  font-size: var(--font-size-md);
  line-height: 150%;
}

@media (min-width: 768px) {
  .yacht-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .yatch-card-footer {
    margin-right: 1rem;
  }
}
@media (min-width: 1024px) {
  .yacht-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 0px 0.2rem;
  }
}
</style>
