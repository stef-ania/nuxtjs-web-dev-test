<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import type { Yacht } from "~/types/yacht";
import PrimaryButton from "~/components/ui/PrimaryButton.vue";
import SecondaryButton from "~/components/ui/SecondaryButton.vue";
import BookmarkBtn from "@/components/ui/BookmarkBtn.vue";

const yachts = ref<Yacht[]>([]);
const loading = ref(true);
const errorMessage = ref("");
const currentPage = ref(1);
const totalPages = ref(1);

const fetchYachts = async (page: number) => {
  try {
    const response = await fetch(`/api/yachts?page=${page}`);
    const data = await response.json();
    console.log("Data received:", data);

    if (data.error) {
      errorMessage.value = `Error: ${data.error} - ${data.details || "No additional details"}`;
    } else {
      if (page === 1) {
        yachts.value = data.data;
      } else {
        yachts.value = [...yachts.value, ...data.data];
      }

      totalPages.value = data.meta.totalPages;
      loading.value = false;
    }
  } catch (error) {
    errorMessage.value = `Failed to fetch yachts data: ${error.message}`;
    console.error(error);
  }
};

onMounted(() => {
  fetchYachts(currentPage.value);

  // Animation
  AOS.init({
    duration: 1500,
    once: false,
  });
});

const loadMore = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchYachts(currentPage.value);
  }
};

defineProps({
  yacht: {
    type: Object,
    required: true,
  },
  gridClass: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <!-- Loading spinner -->
    <div v-if="loading" class="loading">
      <p>Loading...</p>
    </div>
    <!-- Ehd loading spinner -->

    <div :class="[gridClass, 'yacht-grid']" v-else>
      <div v-for="yacht in yachts" :key="yacht.id" class="yacht-card" data-aos="fade-up">
        <!-- Yacht Image -->
        <a href="#" target="_blank">
          <picture class="yacht-picture">
            <!-- Bookmark Button -->
            <BookmarkBtn class="bookmark-btn" />
            <img loading="lazy" :src="yacht.coverImage.url" :alt="yacht.name" class="yacht-image" />
          </picture>
        </a>

        <!-- Yacht Price -->
        <div class="yacht-price">Price: €{{ yacht.buyPrice?.EUR ? yacht.buyPrice.EUR.toLocaleString() : "N/A" }}</div>

        <!-- Yacht Details -->
        <div class="yacht-details">
          Length: {{ yacht.length.meters }}m | Guests: {{ yacht.guestsNumber }} | Cabins: {{ yacht.cabinsNumber }}
        </div>

        <div class="yatch-card-footer">
          <!-- Yacht Name -->
          <h4 class="yacht-name">
            {{ yacht.name }}
          </h4>

          <!-- Primary Button -->
          <PrimaryButton text="Enquiry" class="yacht-btn" />
        </div>
      </div>
    </div>

    <!-- Secondary Button Wrapper -->
    <div class="load-more-btn-wrapper">
      <SecondaryButton text="Load more" @click="loadMore" :disabled="currentPage.value >= totalPages.value" />
    </div>
    <!-- End secondary Button Wrapper -->
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
}

.yacht-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns-1, 1), 1fr);
  gap: 0px 0.2rem;
  transition: grid-template-columns 0.4s ease-in-out;
}

.columns-2 {
  --columns: 2;
}

.columns-4 {
  --columns: 4;
}

.yacht-card {
  background-color: var(--light-color);
  text-align: left;
  margin-bottom: 3.75rem;
}

.yacht-picture {
  display: block;
  aspect-ratio: 351 / 220;
  position: relative;
}

.bookmark-btn {
  position: absolute;
  z-index: 1;
  top: 0.625rem;
  right: 0.625rem;
  opacity: 1;
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

.yacht-btn {
  transition: opacity 0.3s ease;
  opacity: 1;
}

.load-more-btn-wrapper {
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .yacht-grid {
    grid-template-columns: repeat(var(--columns, 4), 1fr);
    gap: 0px 0.2rem;
  }

  .yatch-card-footer {
    margin-right: 1rem;
  }

  .load-more-btn-wrapper {
    margin: 5rem auto;
  }
}

@media (min-width: 1024px) {
  .bookmark-btn {
    opacity: 0;
  }

  .yacht-card:hover .bookmark-btn {
    opacity: 1;
  }

  .yacht-btn {
    opacity: 0;
  }

  .yacht-card:hover .yacht-btn {
    opacity: 1;
  }
}
</style>
